const CreateTodo = ({ title, setTitle, handleOnSubmit }) => {
    return (
        <form
            action=""
            className="bg-white rounded-md px-2 py-4 flex items-center gap-2"
            onSubmit={handleOnSubmit}
        >
            <span className="h-5 w-5 inline-block rounded-full border-1"></span>
            <input
                type="text"
                className="w-full outline-none h-full"
                value={title}
                placeholder="Create a new todo..."
                onChange={(e) => setTitle(e.target.value)}
            />
        </form>
    );
};
export default CreateTodo;
