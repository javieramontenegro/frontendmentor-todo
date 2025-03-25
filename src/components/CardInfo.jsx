const CardInfo = ({ itemLeft, clearCompleted }) => {
    return (
        <div className=" bg-white  dark:bg-gray-800 py-4 px-4 rounded-md flex items-center  justify-between text-gray-400 dark:text-gray-600">
            <p>Item left : {itemLeft()}</p>
            <button
                onClick={() => {
                    clearCompleted();
                }}
                className="cursor-pointer hover:text-blue-500"
            >
                Clear Completed
            </button>
        </div>
    );
};
export default CardInfo;
