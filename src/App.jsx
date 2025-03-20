import { useState } from "react";
import CardTodo from "./components/CardTodo";
import "./App.css";
import CreateTodo from "./components/CreateTodo";

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

    return (
        <>
            <div className="flex flex-col w-full  h-screen px-5 py-9 bg-no-repeat bg-contain bg-[url(./assets/images/bg-mobile-light.jpg)] md:bg-[url(./assets/images/bg-desktop-light.jpg)] bg-gray-200 ">
                <header className="w-full h-auto flex flex-col ">
                    <div className="flex justify-between content-center mb-9">
                        <h1 className="text-4xl uppercase text font-semibold text-white tracking-[0.5rem]">
                            to do
                        </h1>
                        <button className="">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="26"
                                height="26"
                            >
                                <path
                                    fill="#FFF"
                                    fillRule="evenodd"
                                    d="M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z"
                                />
                            </svg>
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
                        />
                    ))}
                </main>
            </div>
        </>
    );
};

export default App;
