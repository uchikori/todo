// import logo from './logo.svg';
// import {useStyles} from 'react'
import './App.css';
import { useState } from 'react';
import {TodoItem} from './components/Todoitem'

function App() {

  //ランダムにIDを生成
  const getKey = () => Math.random().toString(32).substring(2);
  const [items, setItems] = useState([
    { key: getKey(), text: 'Learn JavaScript', done: false },
    { key: getKey(), text: 'Learn React', done: false },
    { key: getKey(), text: 'Get some good sleep', done: false },
  ]);

  const handleChange = (item) => {
    onCheck(item);
  }

  const onCheck = (checkedItem) => {
    const newItems = items.map((item) => {
      if(item.key === checkedItem.key){
        item.done = !item.done;
      }
      return item;
    });
    setItems(newItems);
  }

  return (
    <div className={"container is-fluid"}>
      <div className={"panel"}>

        <div className={"panel-heading"}>
          ⚛️ React ToDo
        </div>

        {items.map((item) => {
          return (
            <TodoItem 
              key={item.key}
              item={item}
              handleChange={handleChange}
            />
          )
        })}

        <div className={"panel-block"}>
          {items.length}items
        </div>

      </div>
    </div>
  );
}

export default App;
