using System.Collections.Generic;
using PolicyService.Model;

namespace PolicyService.Contracts
{
    public interface IPolicyRepo
    {
        List <Policy> GetPolicies();

        void DeletePolicy(int id);

        void AddPolicy(Policy policy);
        Policy GetPolicyById(int id);   
    }
}
