import { Input, Button, List } from "antd";

function TodoListUI(props) {
  return (
    <div style={{marginTop: "10px", marginLeft: "10px"}}>
      <div>
        <Input
          placeholder={props.inputValue}
          style={{width: "300px", marginRight: "10px"}}
          onChange={props.handleInputChange}
          value={props.inputValue}/>

        <Button type="primary" onClick={props.handleButtonClick}>提交</Button>
        <List
          style={{marginTop: "10px", width: "300px"}} 
          bordered
          dataSource={props.list}
          renderItem={(item, index) => <List.Item onClick={() => props.handleItemDelete(index)}>{item}</List.Item>}
        />
      </div>
    </div>
  )
}

export default TodoListUI