using System.ComponentModel.DataAnnotations;

namespace UserPolicySerice.Model
{
    public class UserPolicy
    {
        
        public int UserPolicyId { get; set; }
        public string UserName { get; set; }
        public string PolicyName { get; set; }
       
        public int UserAge { get; set; }
    }
}
