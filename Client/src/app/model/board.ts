export interface IBoardModel {
  id: number;
  title: string;
  description: string;
  lists: IListModel[];
}

export interface IListModel {
  id: number;
  title: string;
  cards: ICardModel[];
}

export interface ICardModel {
  id: number;
  title: string;
  description: string;
  listId: number;
}

export interface NewListModel {
  id: number;
  title: string;
}
