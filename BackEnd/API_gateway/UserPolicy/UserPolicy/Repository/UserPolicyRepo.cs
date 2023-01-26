using System.Collections.Generic;
using System.Linq;
using UserPolicySerice.Model;
using UserPolicyService.Contracts;
using UserPolicyService.Repository;

namespace UserPolicyService.Repository
{
    public class UserPolicyRepo : IUserpolicy
    {

        IUserPolicy _context;
        public UserPolicyRepo(IUserPolicy context)
        {
            _context = context;
        }
        public void AddUserPolicy(UserPolicy userpolicy)
        {
            _context.userspolicy.Add(userpolicy);
            _context.SaveChanges();
        }

        public List<UserPolicy> GetUserPolicy()
        {
            return _context.userspolicy.ToList();
        }

    }
}

