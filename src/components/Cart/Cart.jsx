/* eslint-disable react/prop-types */
const Cart = ({ course, remainingCredit, creditTaken, prices }) => {
    return (
        <div className="bg-white p-5 rounded-xl">
            <h3 className="text-base font-bold text-[#2F80ED] mb-3 mt-1">Credit Hour Remaining {remainingCredit} hr</h3>
            <hr />
            <h3 className="text-[#1C1B1B] text-lg font-bold mt-3 mb-4">Course Name</h3>
            <ol className="text-[#1c1b1b99] text-sm mb-5">
                {course.map((card, index) => (
                    <li className="mb-2" key={index}>{index + 1} {card.title}</li>
                ))}
            </ol>
            <hr />
            <h3 className="py-3 text-[#1c1b1bcc] text-base font-medium">Total Credit Hour : {creditTaken}</h3>
            <hr />
            <h3 className="pt-3 text-[#1c1b1bcc] text-base font-semibold">Total Price : {prices} USD</h3>
        </div>
    );
};

export default Cart;