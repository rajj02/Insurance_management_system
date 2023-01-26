using System;
using Microsoft.EntityFrameworkCore;

namespace UserPolicySerice.Model
{
    public class IUserPolicy :DbContext
    {
        public IUserPolicy(DbContextOptions<IUserPolicy> options) : base(options)
        {

        }
        public DbSet<UserPolicy> userspolicy { get; set; }

       
    }
}
