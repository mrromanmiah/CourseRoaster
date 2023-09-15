

const Cart = ({ course, remainingCredit, creditTaken }) => {
    console.log(course);


    return (
        <div>
            <h3>Credit Hour Remaining {remainingCredit} hr</h3>
            <ol>
                {course.map((card, index) => (
                    <li key={index}>{index + 1}. {card.title}</li>
                ))}
            </ol>
            <h3>Total Credit Hour : {creditTaken}</h3>
        </div>
    );
};

export default Cart;