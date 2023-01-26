using System.Collections.Generic;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using UserPolicySerice.Model;
using System.Linq;
using UserPolicyService.Contracts;

namespace UserPolicySerice.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserPolicyController : ControllerBase
    {

        IUserpolicy _repo;
        public UserPolicyController(IUserpolicy repo)
        {
            _repo = repo ;
        }


        [HttpPost]

        public void Post(UserPolicy userpolicy)
        {
            _repo.AddUserPolicy(userpolicy);
        }

        [HttpGet]
        public List<UserPolicy> Get()
        {
            return _repo.GetUserPolicy().ToList();
        }
    }
}
