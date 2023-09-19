export type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
};

export enum View {
  List = 'list',
  Tiles = 'tiles'
}

export interface TapPanelProps {
  users: User[];
  value: string;
}
