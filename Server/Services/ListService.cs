using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Server.Data;
using Server.DTO;
using Server.Exceptions;
using Server.Models;

namespace Server.Services;

public class ListService(ApplicationDBContext context, IMapper mapper)
{
    
    public async Task<List<ListDTO>> GetListsByBoardId(int boardId)
    {
        var board = await context.Boards.SingleOrDefaultAsync(b => b.Id == boardId);
        if (board is null)
        {
            throw new EntityNotFoundException($"Board with ID {boardId} was not found.");
        }
        
        var lists = await context.Lists
            .Where(l => l.BoardId == boardId)
            .Include(l => l.Cards)
            .ToListAsync();
        

        return mapper.Map<List<ListDTO>>(lists);
    }

    public async Task<ListDTO?> GetList(int id)
    {
        var list = await context.Lists.Include(l => l.Cards).SingleOrDefaultAsync(l => l.Id == id);
        if (list is null)
        {
            throw new EntityNotFoundException($"List with ID {id} was not found.");
        }

        return mapper.Map<ListDTO>(list);
    }

    public async Task<ListDTO> SaveList(AddListDTO list)
    {
        var board = await context.Boards.SingleOrDefaultAsync(b => b.Id == list.BoardId);
        if (board is null)
        {
            throw new EntityNotFoundException($"Board with ID {list.BoardId} was not found.");
        }
        
        var listEntity = mapper.Map<List>(list);
        
            context.Lists.Add(listEntity);
            await context.SaveChangesAsync();
            return mapper.Map<ListDTO>(listEntity);
    }

    public async Task<ListDTO?> UpdateList(int id, UpdateListDTO model)
    {
        var listEntity = await context.Lists.SingleOrDefaultAsync(l => l.Id == id);
        if (listEntity == null)
        {
            throw new EntityNotFoundException($"List with ID {id} was not found.");
        }

        mapper.Map(model, listEntity);

        await context.SaveChangesAsync();

        return mapper.Map<ListDTO>(listEntity);
    }

    public async Task<bool> DeleteList(int id)
    {
        var listEntity = await context.Lists.SingleOrDefaultAsync(l => l.Id == id);
        if (listEntity is null)
        {
            throw new EntityNotFoundException($"List with ID {id} was not found.");
        }

        context.Remove(listEntity);
        await context.SaveChangesAsync();
        return true;
    }
    
}