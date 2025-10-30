import './App.css';
import React, { useEffect } from 'react';
/* Components */
import { useStore } from '@nanostores/react';
import { listItems, setListItems, deleteSelectedItems, undoLastAction, titleList, contentTitleList, setTitleList, setContentTitleList } from './store/listStore';
import ItemsList, { Item } from './components/ItemsList/ItemsList';
import ButtonsList from './components/ButtonsList/ButtonsList';
import TitleList from './components/TitleList/TitleList';
/* Service */
import { Data } from './service/InterfaceService';
import getData from './service/getService';

function App() {
  const items: Item[] = useStore(listItems);
  const title: string = useStore(titleList)
  const content: string = useStore(contentTitleList);

  useEffect(() => {
    const fetchData = async () => {
      const data: Data = await getData();
      setListItems(data?.items as Item[]);
      setTitleList(data?.title as string);
      setContentTitleList(data?.content as string);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <div id="mainContainer">
        <TitleList
          title={title}
          content={content}
        />
        <ItemsList
          list={items}
        />
        <ButtonsList
          onUndo={undoLastAction}
          onDelete={deleteSelectedItems}
        />
      </div>
    </div>
  );
}

export default App;