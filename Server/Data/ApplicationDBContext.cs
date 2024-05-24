using Microsoft.EntityFrameworkCore;
using Server.Models;

namespace Server.Data
{
    public class ApplicationDBContext : DbContext
    {
        public ApplicationDBContext(DbContextOptions<ApplicationDBContext> options) : base(options) { }
        public DbSet<Board> Boards => Set<Board>();
        public DbSet<List> Lists => Set<List>();
        public DbSet<Card> Cards => Set<Card>();


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
