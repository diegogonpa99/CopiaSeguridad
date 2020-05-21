using System.Collections.Generic;
using System.Threading.Tasks;
using DatingApp2.API.Models;

namespace DatingApp2.API.Data
{
    public interface IDatingRepository
    {
         void Add<T>(T entity) where T: class;
         void delete<T>(T entity) where T: class;
         Task<bool> SaveAll();
         Task<IEnumerable<User>> GetUsers();
         Task<User> GetUser(int id);
    }
}