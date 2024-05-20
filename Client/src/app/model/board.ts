export interface ICardModel {
  id: number;
  title: string;
  description: string;
  listId: number;
}

export interface IListModel {
  id: number;
  title: string;
  shortDescription: string;
  boardId: number;
  cards: ICardModel[];
}

export interface IBoardModel {
  id: number;
  title: string;
  description: string;
  link: string;
  lists: IListModel[];
}

//TEST

export interface Item {
  name: string;
}

export interface Group {
  id: string;
  title: string;
  items: Item[];
}
