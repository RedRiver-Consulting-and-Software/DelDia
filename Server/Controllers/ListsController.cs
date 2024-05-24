using Microsoft.AspNetCore.Mvc;
using Server.DTO;
using Server.Exceptions;
using Server.Services;

namespace Server.Controllers;

[Route("api/[controller]")]
[ApiController]
public class ListsController : ControllerBase
{
    private readonly ListService listService;

    public ListsController(ListService listService)
    {
        this.listService = listService;
    }

    // POST /api/lists - Create a list in a Board
    [HttpPost]
    public async Task<ActionResult<ListDTO>> CreateList(AddListDTO model)
    {
        try
        {
            var list = await listService.SaveList(model);
            return Ok(list);
        }
        catch (EntityNotFoundException ex)
        {
            return NotFound(new { Message = ex.Message });
        }
        catch (Exception ex)
        {
            return StatusCode(500, new 
                { Message = "An error occurred while saving the list.", Details = ex.Message }); 
        }
    }
    
    // GET /api/lists{listId} - Get All lists in a Board
    [HttpGet("{listId}")]
    public async Task<ActionResult<ListDTO>> GetList(int listId)
    {
        try
        {
            var list = await listService.GetList(listId);
            return Ok(list);
        }
        catch (EntityNotFoundException ex)
        {
            return NotFound(new { Message = ex.Message });
        }
        catch (Exception ex)
        {
            return StatusCode(500, new 
                { Message = "An error occurred while retrieving the list.", Details = ex.Message }); 
        }
    }
    
    // GET /api/lists/byboard{boardId} - Get All lists in a Board
    [HttpGet("byboard/{boardId}")]
    public async Task<ActionResult<IEnumerable<ListDTO>>> GetListsByBoard(int boardId)
    {
        try
        {
            var lists = await listService.GetListsByBoardId(boardId);
            return Ok(lists);
        }
        catch (EntityNotFoundException ex)
        {
            return NotFound(new { Message = ex.Message });
        }
        catch (Exception ex)
        {
            return StatusCode(500, new 
                { Message = "An error occurred while retrieving the lists.", Details = ex.Message }); 
        }
    }

    // PUT /api/lists/{listId} - Change a list in a Board
    [HttpPut("{listId}")]
    public async Task<ActionResult<ListDTO>> UpdateList(int listId, UpdateListDTO model)
    {
        try
        {
            var list = await listService.UpdateList(listId, model);
            return Ok(list);
        }
        catch (EntityNotFoundException ex)
        {
            return NotFound(new { Message = ex.Message });
        }
        catch (Exception ex)
        {
            return StatusCode(500, new 
                { Message = "An error occurred while updating the list.", Details = ex.Message }); 
        }
    }

    // DELETE /api/lists/{listId} - Delete a list in a Board
    [HttpDelete("{listId}")]
    public async Task<ActionResult> DeleteList(int listId)
    {
        try
        {
            await listService.DeleteList(listId);
            return NoContent();
        }
        catch (EntityNotFoundException ex)
        {
            return NotFound(new { Message = ex.Message });
        }
        catch (Exception ex)
        {
            return StatusCode(500, new 
                { Message = "An error occurred while deleting the list.", Details = ex.Message }); 
        }
    }
}

    

