using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Server.Data;
using Server.DTO;
using Server.Exceptions;
using Server.Models;

namespace Server.Services;

public class CardService(ApplicationDBContext context, IMapper mapper)
{
 
    
    public async Task<List<CardDTO>> GetCardsByList(int listId)
    {
        var list = await context.Lists.SingleOrDefaultAsync(l => l.Id == listId);
        if (list is null)
        {
            throw new EntityNotFoundException($"List with {listId} was not found.");
        }
        var cards = await context.Cards
            .Where(c => c.ListId == listId)
            .ToListAsync();

        return mapper.Map<List<CardDTO>>(cards);
    }

    public async Task<CardDTO?> GetCard(int id)
    {
        var card = await context.Cards.SingleOrDefaultAsync(c => c.Id == id);
        if (card is null)
        {
            throw new EntityNotFoundException($"Card with id {id} was not found.");
        }
        return mapper.Map<CardDTO>(card);
    }

    public async Task<CardDTO> SaveCard(AddCardDTO card)
    {
        var cardEntity = mapper.Map<Card>(card);
        context.Cards.Add(cardEntity);
        await context.SaveChangesAsync();
        return mapper.Map<CardDTO>(cardEntity);
    }

    public async Task<CardDTO?> UpdateCard(int id, UpdateCardDTO model)
    {
        var cardEntity = await context.Cards.SingleOrDefaultAsync(c => c.Id == id);
        if (cardEntity == null)
        {
            throw new EntityNotFoundException($"Card with ID {id} was not found.");
        }

        mapper.Map(model, cardEntity);

        await context.SaveChangesAsync();

        return mapper.Map<CardDTO>(cardEntity);
    }

    public async Task<bool> DeleteCard(int id)
    {
        var cardEntity = await context.Cards.SingleOrDefaultAsync(c => c.Id == id);
        if (cardEntity is null)
        {
            throw new EntityNotFoundException($"Card with ID {id} was not found.");
        }

        context.Remove(cardEntity);
        await context.SaveChangesAsync();
        return true;
    }
    
}