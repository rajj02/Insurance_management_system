using System;

namespace AuthentivationService.Models
{
    public class User
    {
        public int UserId { get; set; }
        public string Name { get; set; }
       
        public string EmailId { get; set; }
        
        public string Password { get; set; }

        public int Role { get; set; }

    }
}
