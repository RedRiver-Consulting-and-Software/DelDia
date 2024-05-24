using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Server.Data;
using Server.DTO;
using Server.Exceptions;
using Server.Models;

namespace Server.Services
{
    public class BoardService(ApplicationDBContext context, IMapper mapper)
    {
        public async Task<List<BoardDTO>> GetBoards()
        {
            var boards = await context.Boards.Include(b => b.Lists)!.ThenInclude(l => l.Cards).ToListAsync();

            return mapper.Map<List<BoardDTO>>(boards);
        }

        public async Task<BoardDTO?> GetBoard(int id)
        {
            var board = await context.Boards.Include(b => b.Lists)!.ThenInclude(l => l.Cards)
                .SingleOrDefaultAsync(b => b.Id == id);


            return mapper.Map<BoardDTO>(board);
        }

        public async Task<BoardDTO> SaveBoard(AddBoardDTO board)
        {
            var boardEntity = mapper.Map<Board>(board);
            context.Boards.Add(boardEntity);
            await context.SaveChangesAsync();
            return mapper.Map<BoardDTO>(boardEntity);
        }

        public async Task<BoardDTO?> UpdateBoard(int id, UpdateBoardDTO model)
        {
            var boardEntity = await context.Boards.SingleOrDefaultAsync(b => b.Id == id);
            if (boardEntity == null)
            {
                throw new EntityNotFoundException($"Board with ID {id} was not found.");
            }

            mapper.Map(model, boardEntity);

            await context.SaveChangesAsync();

            return mapper.Map<BoardDTO>(boardEntity);
        }

        public async Task<bool> DeleteBoard(int id)
        {
            var boardEntity = await context.Boards.SingleOrDefaultAsync(b => b.Id == id);
            if (boardEntity is null)
            {
                throw new EntityNotFoundException($"Board with ID {id} was not found.");
            }

            context.Remove(boardEntity);
            await context.SaveChangesAsync();
            return true;
        }


    }
}