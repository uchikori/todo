// import logo from './logo.svg';
// import {useStyles} from 'react'
import './App.css';
import { useState } from 'react';
import {TodoItem} from './components/Todoitem'
import {TaskInput} from './components/TaskInput'

function App() {
  //ランダムにIDを生成
  const getKey = () => Math.random().toString(32).substring(2);
  const [items, setItems] = useState([
    { key: getKey(), text: 'Learn JavaScript', done: false },
    { key: getKey(), text: 'Learn React', done: false },
    { key: getKey(), text: 'Get some good sleep', done: false },
  ]);


  //入力されたタスクの登録処理(TsakInputコンポーネントに渡す)
  const [text, setText] = useState("");
  const onKeyDown = (event) => {
    if(event.key === "Enter"){
      const newText = event.target.value;
      const newItems = [...items, { key: getKey(), text: newText, done: false }];
      setText('');
      setItems(newItems);
    }
  }
  const onChange = (event) => {
    setText(event.target.value);
    console.log(text);
  }


  //値が変更された場合に変更のあったタスクオブジェクトを引数として渡しonCheck(item)として実行
  const handleChange = (item) => {
    onCheck(item);
  }

  //変更のあったタスクオブジェクトをcheckedItemとして受取り、新たな配列を作成する
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

        <div className={"panel-block"}>
          <TaskInput
          text={text}
          onKeyDown={onKeyDown} 
          onChange={onChange}
          />
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
