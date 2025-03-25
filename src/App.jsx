import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { useState, useEffect } from "react";
import CardTodo from "./components/CardTodo";
import "./App.css";
import CreateTodo from "./components/CreateTodo";

import CardInfo from "./components/CardInfo";
import Filters from "./components/Filters";
import Header from "./components/Header";

/* const initialState = [
    { id: 1, title: "Estudiar", completed: false },
    { id: 2, title: "Comer", completed: true },
    { id: 3, title: "Tomar mesalazina", completed: false },
]; */
const initialState = JSON.parse(localStorage.getItem("todos")) || [];

const reorder = (list, startIndex, endIndex) => {
    const result = [...list];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

const App = () => {
    const [todo, setTodo] = useState(initialState);
    const [title, setTitle] = useState("");
    const [filtered, setFiltered] = useState("All");
    const [filteredTodos, setFilteredTodos] = useState(todo);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todo));
        // se dejan cosas aqui cada vez que haya un cambio y vuelve a hacer la comprobacion
        //variable temporal que almacena los todos
        let result = todo;
        if (filtered === "Active") {
            result = todo.filter((e) => !e.completed);
        } else if (filtered === "Completed") {
            result = todo.filter((e) => e.completed);
        }
        setFilteredTodos(result);
    }, [filtered, todo]); // Se ejecuta cuando cambia `filtered` o `todo`
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
        // para que no vayan espacios en blanco
        if (!title.trim()) {
            return setTitle("");
        }
        //creo el nuevo objeto
        createNewTodo(title);
        // limpiar
        setTitle("");
    };

    const removeTodo = (id) => {
        //recorro el array si "e" el elmento actual recorrido es distinto al id seleccionado se mostrara en el array filtrado
        setTodo(todo.filter((e) => e.id !== id));
    };
    const editTodo = (id) => {
        //seteo el estado , mapeo el array de tareas buscando el id exacto luego al encontrarlo que me haga una copia del objeto y a la propiedad completed me cambie el booleano, si no se cumple me devuelve el objeto
        setTodo(
            todo.map((e) =>
                e.id === id ? { ...e, completed: !e.completed } : e
            )
        );
    };
    const itemLeft = () => {
        //se filtran los no completados y se saca la cantidad de elementos en el array
        const left = todo.filter((e) => !e.completed).length;

        return left;
    };
    const clearCompleted = () => {
        //se filtran los no completados
        const filteredTodos = todo.filter((e) => !e.completed);
        setTodo(filteredTodos);
    };

    const showFilters = (filter) => {
        setFiltered(filter);
    };
    const handleDragEnd = (result) => {
        const { destination, source } = result;
        if (!destination) return;
        if (
            source.index === destination.index &&
            source.droppableId === destination.droppableId
        )
            return;

        setTodo((prevTasks) =>
            reorder(prevTasks, source.index, destination.index)
        );
    };

    return (
        <>
            <div className="flex flex-col items-center w-full h-screen px-5 py-9 bg-no-repeat bg-contain bg-[url(./assets/images/bg-mobile-light.jpg)] dark:bg-[url(./assets/images/bg-mobile-dark.jpg)] md:bg-[url(./assets/images/bg-desktop-light.jpg)] md:dark:bg-[url(./assets/images/bg-desktop-dark.jpg)] bg-gray-200 dark:bg-gray-950 ">
                <Header />
                <main className="w-full md:w-1/2">
                    <CreateTodo
                        title={title}
                        setTitle={setTitle}
                        handleOnSubmit={handleOnSubmit}
                    />
                    <DragDropContext onDragEnd={handleDragEnd}>
                        <Droppable droppableId="todos">
                            {(dropableProvided) => (
                                <div
                                    ref={dropableProvided.innerRef}
                                    {...dropableProvided.droppableProps}
                                    className="rounded-md overflow-hidden"
                                >
                                    {filteredTodos.map((todo, index) => (
                                        <Draggable
                                            key={todo.id}
                                            index={index}
                                            draggableId={`${todo.id}`}
                                        >
                                            {(dragableProvided) => (
                                                <CardTodo
                                                    todo={todo}
                                                    removeTodo={removeTodo}
                                                    editTodo={editTodo}
                                                    ref={
                                                        dragableProvided.innerRef
                                                    }
                                                    {...dragableProvided.dragHandleProps}
                                                    {...dragableProvided.draggableProps}
                                                />
                                            )}
                                        </Draggable>
                                    ))}
                                    {dropableProvided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </DragDropContext>
                    <CardInfo
                        itemLeft={itemLeft}
                        clearCompleted={clearCompleted}
                    />
                    <Filters showFilters={showFilters} filtered={filtered} />
                    <p className="self-center text-center mt-5 text-gray-400">
                        Drag an drop to reorder list
                    </p>
                </main>
            </div>
        </>
    );
};

export default App;
