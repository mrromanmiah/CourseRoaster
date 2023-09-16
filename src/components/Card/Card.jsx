/* eslint-disable react/jsx-key */
import { useEffect, useState } from 'react';
import { FiDollarSign } from 'react-icons/fi';
import { HiOutlineBookOpen } from 'react-icons/hi2';
import Cart from '../Cart/Cart';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Card = () => {
    const [cards, setCards] = useState([]);
    const [course, setCourse] = useState([]);
    const [remainingCredit, setRemainingCredit] = useState(20);
    const [creditTaken, setCreditTaken] = useState(0);
    const [prices, setPrices] = useState(0);

    useEffect(() => {
        fetch('./course.json')
            .then(res => res.json())
            .then((data) => setCards(data));
    }, []);

    const handleSelectCourse = (card) => {
        const isSelected = course.find((selected) => selected.id === card.id);
        let credits = card.credit;
        let totalPrice = card.price;
        if (isSelected) {
            toast.error('This course already selected', {
                position: 'top-right',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
            });
        } else {
            course.forEach((selected) => {
                credits += selected.credit;
            });
            const remainingCredits = 20 - credits;
            if (credits > 20) {
                toast.error('Remaining credit hours will not be less than 0', {
                    position: 'top-right',
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                });
                toast.error('Maximum 20 credit hours allowed', {
                    position: 'top-right',
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                });
            } else {
                totalPrice += prices
                setRemainingCredit(remainingCredits);
                setCreditTaken(credits);
                setPrices(totalPrice);
                setCourse([...course, card]);
            }
        }
    };
    return (
        <div className='lg:flex mb-12 lg:mx-12'>
            <div className='w-3/4 lg:grid md:grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-5 md:gap-5 gap-5 mx-auto mt-8 lg:mr-5'>
                {
                    cards.map((card) => (<div key={card.id} className='bg-white items-center space-y-3 lg:p-3 md:p-3 p-5 rounded-xl hover:shadow-lg lg:mt-0 md:mt-0 mt-5'>
                        <img className='flex justify-center' src={card.cover} alt="" />
                        <h3 className='text-[#1C1B1B] text-base font-semibold'>{card.title}</h3>
                        <p className='text-[#1c1b1b99] text-xs font-normal'>{card.description}</p>
                        <div>
                            <div className='flex items-center gap-4 text-[#1c1b1b99] text-sm font-semibold'>
                                <div className='flex items-center gap-3'>
                                    <p className='text-lg text-[#1C1B1B]'><FiDollarSign></FiDollarSign></p>
                                    <p>Price : {card.price}</p>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <p className='text-lg text-[#1C1B1B]'><HiOutlineBookOpen></HiOutlineBookOpen></p>
                                    <p>Credit : {card.credit}hr</p>
                                </div>
                            </div>
                            <button onClick={() => handleSelectCourse(card)} className='bg-[#2F80ED] text-white rounded-lg w-full py-2 text-sm font-semibold mt-4'>Select</button>
                        </div>
                    </div>))
                }
            </div>
            <div className='lg:w-1/4 md:w-3/4 w-auto lg:mx-auto md:mx-auto mx-14 mt-8'>
                <Cart course={course} remainingCredit={remainingCredit} creditTaken={creditTaken} prices={prices}></Cart>
            </div>
            <ToastContainer
                position='top-right'
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
};

export default Card;