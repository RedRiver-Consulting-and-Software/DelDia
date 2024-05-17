using Microsoft.EntityFrameworkCore;
using Server.Models;

namespace Server.Data
{
    public class ApplicationDBContext : DbContext
    {
        public ApplicationDBContext(DbContextOptions<ApplicationDBContext> options) : base(options) { }
        public DbSet<Board>? Boards { get; set; }
        public DbSet<List>? Lists { get; set; }
        public DbSet<Card>? Cards { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Board>()
                .HasMany(ml => ml.Lists)
                .WithOne(m => m.Board)
                .HasForeignKey(m => m.BoardId)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<List>()
                .HasMany(ml => ml.Cards)
                .WithOne(m => m.List)
                .HasForeignKey(m => m.ListId)
                .OnDelete(DeleteBehavior.Cascade);

            base.OnModelCreating(modelBuilder);
        }
    }
}
