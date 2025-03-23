import { useState } from "react";
import CardTodo from "./components/CardTodo";
import "./App.css";
import CreateTodo from "./components/CreateTodo";
import Moon from "./components/svg/Moon";
import CardInfo from "./components/CardInfo";

const initialState = [
    { id: 1, title: "Estudiar", completed: false },
    { id: 2, title: "Comer", completed: true },
    { id: 3, title: "Tomar mesalazina", completed: false },
];

const App = () => {
    const [todo, setTodo] = useState(initialState);
    const [title, setTitle] = useState("");

    const createNewTodo = (title) => {
        //creo el nuevo objeto
        const newTodo = {
            id: Date.now(),
            title: title,
            completed: false,
        };
        //seteo el nuevo array uso de spread operator para no perder los demas elementos del array, se le agrega el nuevo elemento
        setTodo([...todo, newTodo]);
    };
    const handleOnSubmit = (e) => {
        e.preventDefault();
        if (!title.trim()) {
            return setTitle("");
        }
        createNewTodo(title);

        setTitle("");
    };

    const removeTodo = (id) => {
        //recorro el array si "e" el elmento actual recorrido es distinto al id seleccionado se mostrara en el array filtrado
        setTodo(todo.filter((e) => e.id !== id));
    };
    const editTodo = (id) => {
        //seteo el estado , mapeo el array de tareas buscando el id esacto luego al encontrarlo que me haga una copia del objeto y a la propiedad completed me cambie el booleano, si no se cumple me devuelve el objeto
        setTodo(
            todo.map((e) =>
                e.id === id ? { ...e, completed: !e.completed } : e
            )
        );
    };
    const itemLeft = () => {
        const left = todo.filter((e) => !e.completed).length;

        return left;
    };
    const clearCompleted = () => {
        const filteredTodos = todo.filter((e) => !e.completed);
        setTodo(filteredTodos);
        console.log("click", filteredTodos);
    };

    return (
        <>
            <div className="flex flex-col w-full  h-screen px-5 py-9 bg-no-repeat bg-contain bg-[url(./assets/images/bg-mobile-light.jpg)] md:bg-[url(./assets/images/bg-desktop-light.jpg)] bg-gray-200 ">
                <header className="w-full h-auto flex flex-col ">
                    <div className="flex justify-between content-center mb-9">
                        <h1 className="text-4xl uppercase text font-semibold text-white tracking-[0.5rem]">
                            to do
                        </h1>
                        <button className="">
                            <Moon />
                        </button>
                    </div>
                </header>
                <main>
                    <CreateTodo
                        title={title}
                        setTitle={setTitle}
                        handleOnSubmit={handleOnSubmit}
                    />
                    {todo.map((todo, index) => (
                        <CardTodo
                            todo={todo}
                            key={index}
                            removeTodo={removeTodo}
                            editTodo={editTodo}
                        />
                    ))}
                    <CardInfo
                        itemLeft={itemLeft}
                        clearCompleted={clearCompleted}
                    />
                </main>
            </div>
        </>
    );
};

export default App;
