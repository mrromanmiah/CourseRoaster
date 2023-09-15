/* eslint-disable react/jsx-key */
import { useEffect, useState } from 'react';
import { FiDollarSign } from 'react-icons/fi';
import { HiOutlineBookOpen } from 'react-icons/hi2';
import Cart from '../Cart/Cart';

const Card = () => {
const [cards, setCards] = useState([]);
const [course, setCourse] = useState([]);
const [remainingCredit, setRemainingCredit] = useState(20);
const [creditTaken, setCreditTaken] = useState(0);

    useEffect(() => {
fetch('./course.json')
.then(res=>res.json())
.then((data) => setCards(data));
    },[]);

const handleSelectCourse = (card) => {
    

    const isSelected = course.find((selected) => selected.id === card.id);
    let credits = card.credit;
    if (isSelected) {
       return alert('already selected');
    } else {

        course.forEach((selected) => {
            credits += selected.credit;
        });
        const remainingCredits = 20 - credits;
        if (credits > 20) {
           return alert('all credits taken')
        }else{
            setRemainingCredit(remainingCredits);
            setCreditTaken(credits);
            setCourse([...course, card]);
        }

        
    }

    
};




    return (
      <div className='flex'>

<div className='w-3/4 grid grid-cols-3 gap-5 mx-14 mt-8'>
            {
                cards.map((card) => (<div key={card.id} className='bg-white items-center space-y-3 p-3 rounded-xl'>
                
                <img className='flex justify-center' src={card.cover} alt="" />
                <h3 className='text-[#1C1B1B] text-sm font-semibold'>{card.title}</h3>
                <p className='text-[#1c1b1b99] text-xs font-normal'>{card.description}</p>
                
                <div>
                <div className='flex items-center gap-4 text-[#1c1b1b99] text-xs font-semibold'>
                <div className='flex items-center gap-3'>
                    <p className='text-lg text-[#1C1B1B]'><FiDollarSign></FiDollarSign></p>
                    <p>Price : {card.price}</p>
                </div>
                <div className='flex items-center gap-3'>
                    <p className='text-lg text-[#1C1B1B]'><HiOutlineBookOpen></HiOutlineBookOpen></p>
                    <p>Credit : {card.credit}hr</p>
                </div>
                </div>
                
                    <button onClick={()=>handleSelectCourse(card)} className='bg-[#2F80ED] text-white rounded-lg w-full py-2 text-sm font-semibold mt-4'>Select</button>
                
                </div>
                
            </div>))
            }
        </div>

        <div className='w-1/4 mt-8'>
            <Cart course={course} remainingCredit={remainingCredit} creditTaken={creditTaken}></Cart>
        </div>

      </div>
    );
};

export default Card;