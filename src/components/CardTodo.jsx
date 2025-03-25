import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import Close from "./svg/Close";
import Ticket from "./svg/Ticket";
import React from "react";
const CardTodo = React.forwardRef(
    ({ todo, removeTodo, editTodo, ...props }, ref) => {
        const { title, completed } = todo;
        return (
            <div
                {...props}
                ref={ref}
                className=" bg-white  dark:bg-gray-800 py-4 px-4 flex items-center text-black justify-between border-b border-gray-300 dark:border-gray-600"
            >
                <div className="gap-2 flex items-center">
                    <button
                        className={`h-5 w-5 rounded-full border-1 flex justify-center items-center border-gray-300 cursor-pointer  ${completed ? "bg-linear-65 from-purple-500 to-pink-500 " : ""}`}
                        onClick={() => editTodo(todo.id)}
                    >
                        {completed ? <Ticket /> : ""}
                    </button>
                    <p
                        className={`${completed ? "line-through text-gray-300" : ""} text-gray-900 dark:text-gray-400 cursor-pointer`}
                    >
                        {title}
                    </p>
                </div>
                <button
                    onClick={() => removeTodo(todo.id)}
                    className="cursor-pointer hover:text-blue-500"
                >
                    <Close />
                </button>
            </div>
        );
    }
);
export default CardTodo;
