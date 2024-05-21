using Microsoft.AspNetCore.Mvc;
using Server.DTO;
using Server.Exceptions;
using Server.Services;

namespace Server.Controllers;

[Route("api/[controller]")]
[ApiController]
public class CardsController(CardService cardService) : ControllerBase
{
    /* CARDS */
    //POST /api/lists/{listId}/cards - Create a Card
    //PUT /api/cards/{cardId} - Update Card
    //DELETE /api/cards/{cardId} - Delete Card
    
    
        // GET /api/cards/bylist/{listId} - Get all Cards from a List
        [HttpGet("bylist/{listId}")]
        public async Task<ActionResult<List<CardDTO>>> GetCards(int listId)
        {
            
            try
            {
                var cards = await cardService.GetCardsByList(listId);
                return Ok(cards);
            }
            catch (EntityNotFoundException ex)
            {
                return NotFound(new { Message = ex.Message });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new 
                    { Message = "An error occurred while retrieving the Cards.", Details = ex.Message });
            }
        }


        [HttpGet("{id}")]
        public async Task<ActionResult<CardDTO>> GetCard(int id)
        {
            try
            {
                var card = await cardService.GetCard(id);
                return Ok(card);
            }
            catch (EntityNotFoundException ex)
            {
                return NotFound(new { Message = ex.Message });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new 
                    { Message = "An error occurred while retrieving the Card.", Details = ex.Message });
            }

        }


        [HttpPost] 
        public async Task<ActionResult<CardDTO>> CreateCard(AddCardDTO model)
        {
            try
            {
                var card = await cardService.SaveCard(model);
                return Ok(card);

            }
            catch (Exception ex)
            {
               return StatusCode(500, new { Message = "An error occurred while creating the Card.", Details = ex.Message });
            }
            
        }
        
        
        [HttpPut("{id}")] 
        public async Task<ActionResult<CardDTO>> UpdateCard(int id, UpdateCardDTO model)
        {
            try
            {
                var updatedCard = await cardService.UpdateCard(id, model);
                return Ok(updatedCard);
            }
            catch (EntityNotFoundException ex)
            {
                return NotFound(new { Message = ex.Message });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new 
                    { Message = "An error occurred while updating the Card.", Details = ex.Message });
            }
        }
        
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCard(int id)
        {
            try
            {
                var success = await cardService.DeleteCard(id);
                if (success)
                {
                    return NoContent();
                }
                return StatusCode(500, new { Message = "Failed to delete the Card." });
            }
            catch (EntityNotFoundException ex)
            {
                return NotFound(new { Message = ex.Message });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { Message = "An error occurred while deleting the Card.", Details = ex.Message });
            }
        }
        
        
}