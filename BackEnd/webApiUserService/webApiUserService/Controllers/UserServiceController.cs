using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using webApiUserService.IUserRepository;
using webApiUserService.Model;

namespace webApiUserService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserServiceController : ControllerBase
    {
        IUserRepo _repo;
        public UserServiceController(IUserRepo repo)
        {
            _repo = repo;
        }

        [HttpGet]
        public List<UserService> Get()
        {
            return _repo.GetUser().ToList();
        }

        [Route("{id:int}")]
        public UserService Get(int id)
        {
            return _repo.Search(id);
        }

        [HttpPost]
        public void Post(UserService userService)
        {
            _repo.AddUser(userService);
        }

        [HttpPut]
        [Route("{id:int}")]
        public void edit (int id ,UserService userService)
        {
           _repo.UpdateUser(id,userService);
        }


        [HttpDelete]
        [Route("{id:int}")]
        public void delete(int id)
        {
            _repo.DeleteUser(id);
        }


    }
}
