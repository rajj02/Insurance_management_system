using System.Collections.Generic;
using System.Linq;
using webApiUserService.IUserRepository;
using webApiUserService.Model;


namespace webApiUserService.UserRepository
{
    public class UserRepo : IUserRepo
    {
        private UserDbContext _context;

        public UserRepo(UserDbContext context)
        {
            _context = context;
        }

        public void AddUser(UserService userService)
        {
           _context.UserServices.Add(userService);
            _context.SaveChanges();
        }

        public void DeleteUser(int id)
        {
            UserService userService = _context.UserServices.FirstOrDefault(x => x.Id == id);
            _context.UserServices.Remove(userService);
            _context.SaveChanges();
        }

        public List<UserService> GetUser()
        {
           return _context.UserServices.ToList();
        }

        public UserService Search(int id)
        {
           UserService Obj = _context.UserServices.FirstOrDefault(x => x.Id == id);
            return Obj;
        }

        public void UpdateUser(int id, UserService userService)
        {
            UserService ObjUpdate = _context.UserServices.FirstOrDefault(x => x.Id == id);
            if(ObjUpdate != null)
            {
                foreach(UserService user in _context.UserServices)
                {
                    if(user.Id == id)
                    {
                        user.Name= userService.Name;
                        user.Password = userService.Password;
                        user.Email=  userService.Email;
                    }
                }
                _context.SaveChanges();
            }

        }
    }
}
