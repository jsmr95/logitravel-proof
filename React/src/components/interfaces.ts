import { Item } from "./ItemsList/ItemsList";

export interface UndoAction {
  type: 'add' | 'delete';
  item: Item;
}