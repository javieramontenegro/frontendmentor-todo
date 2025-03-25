const CreateTodo = ({ title, setTitle, handleOnSubmit }) => {
    return (
        <form
            action=""
            className="bg-white dark:bg-gray-800 rounded-md py-4 px-4 flex items-center gap-2 mb-4"
            onSubmit={handleOnSubmit}
        >
            <span className="h-5 w-5 inline-block rounded-full border-1 border-gray-300 "></span>
            <input
                type="text"
                className="w-full outline-none h-full text-gray-950 dark:text-gray-400"
                value={title}
                placeholder="Create a new todo..."
                onChange={(e) => setTitle(e.target.value)}
            />
        </form>
    );
};
export default CreateTodo;
