using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Server.Data;
using Server.Model;

namespace Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BoardsController : ControllerBase
    {
        private readonly ApplicationDBContext _db;

        public BoardsController(ApplicationDBContext db)
        {
            _db = db;
        }

        /* BOARDS */
        //GET  /api/boards - Get All Boards
        [HttpGet]
        public IActionResult GetBoards()
        {
            var boardData = _db.Boards.ToList();

            //Validation - 404
            if (boardData == null || boardData.Count == 0) // Check if boardData is null or empty
            {
                return NotFound();
            }

            return Ok(boardData); // Returns HTTP 200 OK response with boardData
        }

        //POST /api/boards - Create a Board
        //GET /api/boards/{id} - Get Board by ID
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
