namespace Server.Models
{
    public class Card
    {
        public int Id { get; set; }
        public string? Title { get; set; }
        public string? Description { get; set; }
        public int? ListId { get; set; }
        public virtual List? List { get; set; }

    }
}