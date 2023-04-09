import Header from "./components/Header";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import Portal from "./components/Portal";
import { useState } from "react";
const container = {
    width: "400px",
    boxSizing: "borderBox",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: 'center',
    
};
function App() {
    const [todo, setTodo] = useState("");
    const [todoList, setTodoList] = useState([]);
    return (
        <div style={container}>
            <div >
                <Portal />
                <Header />
                <Form
                    todo={todo}
                    setTodo={setTodo}
                    todoList={todoList}
                    setTodoList={setTodoList}
                />
                <TodoList todoList={todoList} setTodoList={setTodoList} />
            </div>
        </div>
    );
}

export default App;
