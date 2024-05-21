using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Server.Data;
using Server.DTO;
using Server.Services;

namespace Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BoardsController : ControllerBase
    {
        private readonly ApplicationDBContext _db;
        private readonly BoardService _boardService;

        public BoardsController(ApplicationDBContext dbContext, BoardService boardService)
        {
            _db = dbContext;
            _boardService = boardService;
        }

        /* BOARDS */
        //GET  /api/boards - Get All Boards
        [HttpGet]
        public async Task<ActionResult<List<BoardDTO>>> GetBoards()
        {
            var boards = await _db.Boards.Include(b => b.Lists).ThenInclude(l => l.Cards).ToListAsync();
            if (boards == null)
            {
                return NotFound();
            }

            var boardDTOs = boards.Select(board => _boardService.MapBoardToDTO(board)).ToList();
            return Ok(boardDTOs);
        }


        //GET /api/boards/{id} - Get Board by ID
        [HttpGet("{id}")]
        public async Task<ActionResult<BoardDTO>> GetBoard(int id)
        {
            var board = await _db.Boards
                                 .Include(b => b.Lists)
                                     .ThenInclude(l => l.Cards)
                                 .SingleOrDefaultAsync(b => b.Id == id);
            if (board != null)
            {
                var boardDTO = _boardService.MapBoardToDTO(board);
                return Ok(boardDTO);
            }
            return NotFound();
        }


        //POST /api/boards - Create a Board
        //PUT /api/boards/{id} - Update a Board
        //DELETE /api/boards/{id} - Deleta a Board

        /* LISTS */
        //POST /api/boards/{boardId}/lists - Create a list in a Board
        //GET /api/boards/{boardId}/lists - Get All lists in a Board
        //PUT /api/boards/{boardId}/lists - Change a list in a Board
        //DELETE /api/boards/{boardId}/lists - Delete a list in a Board

        /* CARDS */
        //POST /api/lists/{listId}/cards - Create a Card
        //GET /api/lists/{listId}/cards - Get all Cards from a List
        //PUT /api/cards/{cardId} - Update Card
        //DELETE /api/cards/{cardId} - Delete Card
    }
}
