using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PolicyService.Contracts;
using PolicyService.Model;
using PolicyService.PolicyRepository;

namespace PolicyService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

   // [Authorize]
    public class PolicyController : ControllerBase
    {

        IPolicyRepo _repo;

        public PolicyController(IPolicyRepo repo)
        {
            _repo = repo;
        }


        [HttpGet]
        public List<Policy> Get()
        {
            return _repo.GetPolicies().ToList();
        }

        [HttpPost]
        public void Post(Policy policy)
        {
            _repo.AddPolicy(policy);
        }

        [HttpDelete]
        [Route("{id:int}")]
        public void delete(int id)
        {
            _repo.DeletePolicy(id);
        }

        [HttpGet("{id}")]
        public ActionResult<Policy> GetPolicy(int id)
        {
            var _policy = _repo.GetPolicyById(id);

            if (_policy == null)
            {
                return NotFound();
            }

            return _policy;
        }

    }
}
