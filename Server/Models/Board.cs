namespace Server.Models
{
    public class Board
    {
        public int Id { get; set; }
        public string? Title { get; set; }
        public string? Description { get; set; }
        public string? Link { get; set; }
        public virtual ICollection<List>? Lists { get; set; }

    }
}
