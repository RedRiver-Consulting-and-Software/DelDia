namespace Server.DTO
{
    public class BoardDTO
    {
        public int Id { get; set; }
        public string? Title { get; set; }
        public string? Description { get; set; }
        public string? Link { get; set; }
        public List<ListDTO>? Lists { get; set; }
    }

    public class AddBoardDTO
    {
        public string? Title { get; set; }
        public string? Description { get; set; }
    }

    public class UpdateBoardDTO
    {
        public string? Title { get; set; }
        public string? Description { get; set; }
        public string? Link { get; set; }
    }

    public class ListDTO
    {
        public int Id { get; set; }
        public string? Title { get; set; }
        public string? ShortDescription { get; set; }
        public int? BoardId { get; set; }
        public List<CardDTO>? Cards { get; set; }
    }

    public class AddListDTO
    {
        public string? Title { get; set; }
        public string? ShortDescription { get; set; }
        public int? BoardId { get; set; }
    }

    public class UpdateListDTO
    {
        public string? Title { get; set; }
        public string? ShortDescription { get; set; }
        public int? BoardId { get; set; }
    }

    public class CardDTO
    {
        public int Id { get; set; }
        public string? Title { get; set; }
        public string? Description { get; set; }
        public int? ListId { get; set; }
    }

    public class AddCardDTO
    {
        public string? Title { get; set; }
        public string? Description { get; set; }
        public int? ListId { get; set; }
    }

    public class UpdateCardDTO
    {
        public string? Title { get; set; }
        public string? Description { get; set; }
        public int? ListId { get; set; }
    }
}