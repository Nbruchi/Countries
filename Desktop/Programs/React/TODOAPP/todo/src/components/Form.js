import styles from "../style.module.css";
import shortid from "shortid";
const Form = ({ todo, setTodo, todoList, setTodoList }) => {
    const handleChange = (event) => {
        setTodo(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        setTodoList([...todoList, { name: todo, id: shortid.generate() }]);
        console.log(todoList);
        setTodo(" ");
    };
    return (
        <div>
            <form>
                <input
                    type="text"
                    onChange={handleChange}
                    className={styles.todoinput}
                    placeholder="Add todo items.."
                    title="What do you want to do?"
                />
                <input
                    type="button"
                    className={styles.todobutton}
                    value="Add"
                    onClick={handleSubmit}
                />
            </form>
        </div>
    );
};
export default Form;
