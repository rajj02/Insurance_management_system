using webApiUserService.Model;
using System.Collections.Generic;


namespace webApiUserService.IUserRepository
{
    public interface IUserRepo
    {
        void AddUser(UserService userService);
        void UpdateUser( int id,UserService userService);

        void DeleteUser(int id);

        UserService Search(int id);
        List<UserService> GetUser();

    }
}
