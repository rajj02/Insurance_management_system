using Microsoft.EntityFrameworkCore;

namespace webApiUserService.Model
{
    public class UserDbContext :DbContext
    {
        public UserDbContext(DbContextOptions<UserDbContext>option) : base(option)
        {

        }

        public DbSet<UserService> UserServices { get; set; }
    }
}
