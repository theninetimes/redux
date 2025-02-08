import { useState, useEffect } from 'react'
import TodoListUI from './TodoListUI';
import store from "../store";
import { getInputChangeAction, getAddItemAction, getDeleteItemAction, getTodoList } from '../store/actionCreators';


export default function TodoList() {
  const [state, setState] = useState(store.getState())
  store.subscribe(handleStoreChange) // 手动订阅，当store变化时调用setState

  function handleStoreChange() {
    setState(store.getState())
  }

  useEffect(() => {
    const action = getTodoList()
    store.dispatch(action)
  }, [])

  return (
    <TodoListUI
      inputValue = {state.inputValue}
      handleInputChange = {handleInputChange}
      handleButtonClick = {handleButtonClick}
      list = {state.list}
      handleItemDelete = {handleItemDelete}
    />
  )
}

function handleInputChange(e) {
  const action = getInputChangeAction(e.target.value)
  store.dispatch(action)
}

function handleButtonClick() {
  const action = getAddItemAction()
  store.dispatch(action)
}

function handleItemDelete(index) {
  const action = getDeleteItemAction(index)
  store.dispatch(action)
}

