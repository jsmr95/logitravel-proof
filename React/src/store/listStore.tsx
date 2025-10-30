// src/stores/listStore.js
import { atom } from 'nanostores';
import { Item } from '../components/ItemsList/ItemsList';
import { UndoAction } from '../components/interfaces';

export const listItems = atom<Item[]>([]);
export const undoList = atom<UndoAction[]>([]);
export const titleList = atom('');
export const contentTitleList = atom('');

export function setListItems(items: Item[]) {
  listItems.set(items);
}

export function setTitleList(title: string) {
  titleList.set(title);
}

export function setContentTitleList(content: string) {
  contentTitleList.set(content);
}

export function selectItem(id: number) {
  const current = listItems.get();
  listItems.set(
    current.map(item =>
      item.id === id ? { ...item, selected: !item.selected } : item
    )
  );
}
export function addItem(text: any) {
  const newItem = { id: listItems.get().length+1, text, selected: false };
  listItems.set([...listItems.get(), newItem]);
  undoList.set([...undoList.get(), { type: 'add', item: newItem }]);
}

export function removeItem(id: number) {
  const itemToRemove = listItems.get().find(item => item.id === id);
  if (itemToRemove) {

    listItems.set([...listItems.get().filter(item => item.id !== id)]);
    undoList.set([...undoList.get(), { type: 'delete', item: itemToRemove }]);
  }
}

export function deleteSelectedItems() {
  const selectedItems = listItems.get().filter(item => item.selected);
  if (selectedItems.length > 0) {
    listItems.set(listItems.get().filter(item => !item.selected));
    undoList.set([
      ...undoList.get(),
      ...selectedItems.map(item => ({ type: 'delete', item } as UndoAction))
    ]);
  }
}

export function undoLastAction() {
  const lastAction = undoList.get().pop();
  if (!lastAction) return;
  undoList.set([...undoList.get()]);
  if (lastAction.type === 'add') {
    listItems.set(listItems.get().filter(item => item.id !== lastAction.item.id));
  } else if (lastAction.type === 'delete') {
    listItems.set([...listItems.get(), { ...lastAction.item, selected: false }]);
  }
}