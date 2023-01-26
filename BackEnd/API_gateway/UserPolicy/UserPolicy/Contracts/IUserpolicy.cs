using System.Collections.Generic;
using UserPolicySerice.Model;

namespace UserPolicyService.Contracts
{
    public interface IUserpolicy
    {
        List<UserPolicy> GetUserPolicy();

       
        void AddUserPolicy(UserPolicy userpolicy);
       
    }
}
