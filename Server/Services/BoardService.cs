using Server.DTO;
using Server.Models;

namespace Server.Services
{
    public class BoardService
    {
        public BoardDTO? MapBoardToDTO(Board board)
        {
            if (board == null)
            {
                return null;
            }

            return new BoardDTO
            {
                Id = board.Id,
                Title = board.Title,
                Description = board.Description,
                Link = board.Link,
                Lists = board.Lists?.Select(list => new ListDTO
                {
                    Id = list.Id,
                    Title = list.Title,
                    ShortDescription = list.ShortDescription,
                    BoardId = list.BoardId,
                    Cards = list.Cards?.Select(card => new CardDTO
                    {
                        Id = card.Id,
                        Title = card.Title,
                        Description = card.Description,
                        ListId = card.ListId
                    }).ToList()
                }).ToList()
            };
        }
    }
}