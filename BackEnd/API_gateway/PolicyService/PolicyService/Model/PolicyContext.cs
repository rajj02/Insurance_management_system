using Microsoft.EntityFrameworkCore;

namespace PolicyService.Model
{
    public class PolicyContext :DbContext 
    {

        public PolicyContext(DbContextOptions<PolicyContext> options) : base(options)
        {

        }
        public DbSet<Policy> policy { get; set; }
    }
}
