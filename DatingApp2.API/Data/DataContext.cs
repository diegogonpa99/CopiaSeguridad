using Microsoft.EntityFrameworkCore;

namespace DatingApp2.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options){}

        public DbSet<Models.Value> Values { get; set; }
        public DbSet<Models.User> Users { get; set; }
    }
}