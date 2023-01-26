using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Text;
using System.Threading;
using AuthentivationService.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace AuthentivationService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        public readonly UserContext _context;
        private readonly IConfiguration _config;
        public UserController(UserContext context, IConfiguration config)
        {
            _context = context;
            _config = config;
        }
        [HttpGet]
        public List<User>Get()
        {
            return _context.Users.ToList();
        }

        [HttpPost("CreateUser")]

        public IActionResult Create(User user)
        {
            var obj = _context.Users.FirstOrDefault(u => u.EmailId == user.EmailId);
            if (obj != null)
            {
                return BadRequest("already exist");
            }

            else
            {
                user.Role=1;
                _context.Users.Add(user);
                _context.SaveChanges();
                return Ok(user);
            }
        }


        //[HttpPost("LoginUser")]
        //public IActionResult login(Login userlogin)
        //{

        //    if (userlogin == null)
        //    {
        //        return BadRequest();
        //    }
        //    else if (_context.Users.FirstOrDefault(x => x.EmailId == userlogin.EmailId && x.Password == userlogin.Password) != null)
        //    {
        //        return Ok(userlogin);
        //    }
        //    else
        //    {
        //        //return Ok("failer");
        //        return NotFound();
        //    }

        //}
        [HttpPost("LoginUser")]
        public IActionResult Login([FromBody] Login user)
        {
            IActionResult response = Unauthorized();
            var userObj = Authenticate(user);
            if (userObj != null)
            {
                var tokenString = GenerateJSONWebToken(user);
                response = Ok(new { token = tokenString ,role =userObj.Role,name=userObj.Name,email =userObj.EmailId,userid=userObj.UserId});
            }
            return response;
        }

        private string GenerateJSONWebToken(Login user)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(_config["Jwt:Issuer"],
              _config["Jwt:Issuer"],

                            null,
              expires: DateTime.Now.AddMinutes(120),
              signingCredentials: credentials);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        public User Authenticate(Login user)
        {
            User obj = _context.Users.FirstOrDefault(x => x.EmailId == user.EmailId && x.Password == user.Password);
            return obj;

        }


    }
}
