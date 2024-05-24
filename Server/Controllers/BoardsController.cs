using Microsoft.AspNetCore.Mvc;
using Server.DTO;
using Server.Exceptions;
using Server.Services;

namespace Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BoardsController(BoardService boardService) : ControllerBase
    {
      
        //GET  /api/boards - Get All Boards
        [HttpGet]
        public async Task<ActionResult<List<BoardDTO>>> GetBoards()
        {
            var boards = await boardService.GetBoards();
            return Ok(boards);

        }


        //GET /api/boards/{id} - Get Board by ID
        [HttpGet("{id}")]
        public async Task<ActionResult<BoardDTO>> GetBoard(int id)
        {

            var board = await boardService.GetBoard(id);
            if (board is null)
            {
                return NotFound();
            }

            return Ok(board);


        }


        //POST /api/boards - Create a Board
        [HttpPost] 
        public async Task<ActionResult<BoardDTO>> CreateBoard(AddBoardDTO model)
        {
            try
            {
                var board = await boardService.SaveBoard(model);
                return Ok(board);

            }
            catch (Exception ex)
            {
               return StatusCode(500, new { Message = "An error occurred while creating the board.", Details = ex.Message });
            }
            
        }
        
        
        //PUT /api/boards/{id} - Update a Board
        [HttpPut("{id}")] 
        public async Task<ActionResult<BoardDTO>> UpdateBoard(int id, UpdateBoardDTO model)
        {
            try
            {
                var updatedBoard = await boardService.UpdateBoard(id, model);
                return Ok(updatedBoard);
            }
            catch (EntityNotFoundException ex)
            {
                return NotFound(new { Message = ex.Message });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new 
                    { Message = "An error occurred while updating the board.", Details = ex.Message });
            }
        }
        
        //DELETE /api/boards/{id} - Delete a Board
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBoard(int id)
        {
            try
            {
                var success = await boardService.DeleteBoard(id);
                if (success)
                {
                    return NoContent();
                }
                return StatusCode(500, new { Message = "Failed to delete the board." });
            }
            catch (EntityNotFoundException ex)
            {
                return NotFound(new { Message = ex.Message });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { Message = "An error occurred while deleting the board.", Details = ex.Message });
            }
        }
        
        
        
        

        
    }
}
