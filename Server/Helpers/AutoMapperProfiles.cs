using AutoMapper;
using Server.DTO;
using Server.Models;

namespace Server.Helpers;

public class AutoMapperProfiles : Profile
{
    public AutoMapperProfiles()
    {
        CreateMap<Board, BoardDTO>();
        CreateMap<AddBoardDTO, Board>();
        CreateMap<UpdateBoardDTO, Board>();
        
        CreateMap<List, ListDTO>();
        CreateMap<AddListDTO, List>();
        CreateMap<UpdateListDTO, List>();
        
        CreateMap<Card, CardDTO>();
        CreateMap<AddCardDTO, Card>();
        CreateMap<UpdateCardDTO, Card>();
    }
}