using System.ComponentModel.DataAnnotations;

namespace Server.Model
{
    public class BoardEntity
    {
        [Key]
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Link { get; set; }
    }
}
