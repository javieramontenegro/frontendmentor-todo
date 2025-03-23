import Close from "./svg/Close";
import Ticket from "./svg/Ticket";
const CardTodo = ({ todo, removeTodo, editTodo }) => {
    const { title, completed } = todo;
    return (
        <div className="mt-4 bg-white py-4 px-4 rounded-md flex items-center text-black justify-between ">
            <div className="gap-2 flex items-center">
                <button
                    className={`h-5 w-5 rounded-full border-1 flex justify-center items-center ${completed ? "bg-linear-65 from-purple-500 to-pink-500 border-gray-300 " : "bg-white"}`}
                    onClick={() => editTodo(todo.id)}
                >
                    {completed ? <Ticket /> : ""}
                </button>
                <p
                    className={`${completed ? "line-through text-gray-300" : ""}`}
                >
                    {" "}
                    {title}
                </p>
            </div>
            <button onClick={() => removeTodo(todo.id)}>
                <Close />
            </button>
        </div>
    );
};
export default CardTodo;
