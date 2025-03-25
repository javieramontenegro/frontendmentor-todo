const Filters = ({ showFilters, filtered }) => {
    return (
        <div className="mt-4 bg-white  dark:bg-gray-800 py-4 px-4 rounded-md flex items-center text-black justify-center gap-5 ">
            <button
                onClick={() => {
                    showFilters("All");
                }}
                className={`${filtered === "All" ? "text-blue-500" : " text-gray-400"} cursor-pointer hover:text-blue-500`}
            >
                All
            </button>
            <button
                onClick={() => {
                    showFilters("Active");
                }}
                className={`${filtered === "Active" ? "text-blue-500" : " text-gray-400"} cursor-pointer hover:text-blue-500`}
            >
                Active
            </button>
            <button
                onClick={() => {
                    showFilters("Completed");
                }}
                className={`${filtered === "Completed" ? "text-blue-500" : " text-gray-400"} cursor-pointer hover:text-blue-500`}
            >
                Completed
            </button>
        </div>
    );
};
export default Filters;
