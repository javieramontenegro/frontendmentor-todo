const CardTodo = ({ todo, removeTodo }) => {
    return (
        <div className="mt-4 bg-white py-4 px-2 rounded-md flex items-center text-black justify-between ">
            <div className="gap-2 flex items-center">
                <span className="h-5 w-5 inline-block rounded-full border-1 "></span>
                <p> {todo.title}</p>
            </div>
            <button onClick={() => removeTodo(todo.id)}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    className=""
                >
                    <path
                        fill="#494C6B"
                        fillRule="evenodd"
                        d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
                    />
                </svg>
            </button>
        </div>
    );
};
export default CardTodo;
