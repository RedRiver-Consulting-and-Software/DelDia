using AutoMapper;
using Server.DTO;
using Server.Models;

namespace Server.Helpers;

public class AutoMapperProfiles : Profile
{
    public AutoMapperProfiles()
    {
        CreateMap<Board, BoardDTO>();
        CreateMap<List, ListDTO>();
        CreateMap<Card, CardDTO>();
    }
}