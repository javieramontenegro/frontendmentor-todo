const CardInfo = ({ itemLeft, clearCompleted }) => {
    return (
        <div className="mt-4 bg-white py-4 px-4 rounded-md flex items-center text-black justify-between ">
            <p>Item left : {itemLeft()}</p>
            <button
                onClick={() => {
                    clearCompleted();
                }}
            >
                Clear Completed
            </button>
        </div>
    );
};
export default CardInfo;
