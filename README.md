<!-- # Question 1 - Add at least 3 Project features -->

<h1 style='color:green'>Answer - 01</h1>

The <b>"Course Registration"</b> simple React JS webpage project has several features that enhance the user experience and functionality of the application:

<h3 style='color:#2F80ED'>1. Course Cards</h3>

* The webpage displays 9 cards.
    * Each card includes:
        -	A cover image
        -	Course title
        -	A short description
        -	Price
        -	Credit hours
        -	A "Select" button

<h3 style='color:#2F80ED'>2. Cart Integration</h3>

*	On the right side of the webpage, there is a cart section.
*	When a user clicks the "Select" button on a course card, the selected course's title is added to the cart.

<h3 style='color:#2F80ED'>3. Toast Notification for Duplicate Selection</h3>

*	If a user clicks the "Select" button on a course card that has already been selected and added to the cart, a toast notification appears.
*	The toast message displays "This Course Already Selected"

<h3 style='color:#2F80ED'>4. Credit Hour Management</h3>

*	When a user selects a course by clicking the "Select" button, the credit hours of that course are added to the "Total Credit Hour."
*	The "Credit Hour Remaining" is initially set to 20.
*	As courses are selected, the same number of credit hours is deducted from the "Credit Hour Remaining"

<h3 style='color:#2F80ED'>5. Credit Hour Validation</h3>

*	The project includes validation to ensure that the "Credit Hour Remaining" value does not go below 0.
*	Additionally, there is a validation check to ensure that the "Total Credit Hour" does not exceed 20.
 *	If a user attempts to add more credit hours that exceed 20, two toast notifications appear:
     -	"Remaining credit hours will not be less than 0"
     -	"Maximum 20 credit hours allowed"

<h3 style='color:#2F80ED'>6. Total Price Calculation</h3>

*	When a user selects a course by clicking the "Select" button, the price of that course is added to the "Total Price" displayed in the cart.

These features collectively enhance the functionality and user-friendliness of the "Course Registration" webpage, allowing users to select courses, manage credit hours, and keep track of the total price effectively. The use of toast notifications provides valuable feedback to the user during the course selection process, making the application more intuitive and user-centric. 



<!-- # Question 2 - Discuss how you managed the state in your assignment project. --> 

<h1 style='color:green'>Answer - 02</h1> 

Here's a breakdown of each `useState` hook and its purpose within the component:

<h3 style='color:#2F80ED'>1. useState for 'cards' array</h3>

    const [cards, setCards] = useState([]);

* This state variable <b>(cards)</b> is used to store an array of course data that is fetched from a JSON file `(course.json)` using the <b>fetch</b> API. It's initialized as an empty array.

<h3 style='color:#2F80ED'>2. useState for 'course' array</h3>

    const [course, setCourse] = useState([]);

* This state variable <b>(course)</b> is used to store the selected courses that the user adds to their cart. It's initialized as an empty array.

<h3 style='color:#2F80ED'>3. useState for 'remainingCredit'</h3>

    const [remainingCredit, setRemainingCredit] = useState(20);

* This state variable <b>(remainingCredit)</b> represents the remaining credit hours that a user has available. It's initialized with a value of 20.

<h3 style='color:#2F80ED'>4. useState for 'creditTaken'</h3>

    const [creditTaken, setCreditTaken] = useState(0);

* This state variable <b>(creditTaken)</b> keeps track of the total credit hours taken by the user by selecting courses. It's initialized with a value of 0.

<h3 style='color:#2F80ED'>5. useState for 'prices'</h3>

    const [prices, setPrices] = useState(0);

* This state variable <b>(prices)</b> is used to keep track of the total price of the selected courses in the user's cart. It's initialized with a value of 0.

These `useState` hooks allow the component to manage and update various pieces of state, such as the course data, selected courses, remaining credit hours, credit hours taken, and total prices. The component uses these state variables to provide dynamic functionality and display information to the user in the <b>"Course Registration"</b> web page.





