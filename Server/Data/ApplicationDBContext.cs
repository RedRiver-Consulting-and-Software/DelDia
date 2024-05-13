using Microsoft.EntityFrameworkCore;
using Server.Model;

namespace Server.Data
{
    public class ApplicationDBContext : DbContext
    {
        public ApplicationDBContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<BoardEntity> Boards { get; set; }
    }
}
