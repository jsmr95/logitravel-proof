import React from 'react';
import styles from './ItemsList.module.css';
import { selectItem, removeItem } from '../../store/listStore';

export interface Item {
  id: number;
  text: string;
  selected: boolean;
}

interface ItemsListProps {
  list: Item[];
}


const ItemsList = ({ list }: ItemsListProps) => {
  return (
    <div id="container">
        <ul className={`${styles.list}`}>
        {list.map(item => (
            <li
            key={item.id}
            className={item.selected ? 'selected' : ''}
            onClick={() => selectItem(item.id)}
            onDoubleClick={() => removeItem(item.id)}
            >
            {item.text}
            </li>
        ))}
        </ul>
    </div>
  );
};

export default ItemsList;