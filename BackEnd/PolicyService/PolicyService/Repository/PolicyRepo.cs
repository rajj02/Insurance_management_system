using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PolicyService.Contracts; 
using PolicyService.Model;

namespace PolicyService.PolicyRepository
{
    public class PolicyRepo : IPolicyRepo
    {

        PolicyContext _policyContext;
        public PolicyRepo(PolicyContext policyContext)
        {
            _policyContext = policyContext;
        }

        public void AddPolicy(Policy policy)
        {
            _policyContext.policy.Add(policy);
            _policyContext.SaveChanges();
        }

        public void DeletePolicy(int id)
        {
            Policy policyObj = _policyContext.policy.FirstOrDefault(x => x.PolicyId == id);
            _policyContext.policy.Remove(policyObj);
            _policyContext.SaveChanges();
        }

        public List<Policy> GetPolicies()
        {
            return _policyContext.policy.ToList();
        }

        public Policy GetPolicyById(int id)
        {
            //throw new System.NotImplementedException();
            var _policy = _policyContext.policy.FirstOrDefault(x => x.PolicyId == id);

            return _policy;
        }
    }
}
