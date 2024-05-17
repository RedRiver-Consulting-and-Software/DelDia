namespace Server.Models
{
    public class List
    {
        public int Id { get; set; }
        public string? Title { get; set; }
        public string? ShortDescription { get; set; }
        public int? BoardId { get; set; }
        public virtual Board? Board { get; set; }
        public virtual ICollection<Card>? Cards { get; set; }

    }
}