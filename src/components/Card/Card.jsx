/* eslint-disable react/jsx-key */
import { useEffect, useState } from 'react';
import { FiDollarSign } from 'react-icons/fi';
import { HiOutlineBookOpen } from 'react-icons/hi2';

const Card = () => {
const [cards, setCards] = useState([])

    useEffect(() => {
fetch('./course.json')
.then(res=>res.json())
.then((data) => setCards(data))
    },[]);
console.log(cards);
    return (
        <div className='w-3/4 grid grid-cols-3 gap-5 mx-14 mt-8'>
            {
                cards.map((card) => (<div key={card.id} className='bg-white items-center space-y-3 p-4 rounded-xl'>
                
                <img className='flex justify-center' src={card.cover} alt="" />
                <h3 className='text-[#1C1B1B] text-base font-semibold'>{card.title}</h3>
                <p className='text-[#1c1b1b99] text-sm font-normal'>{card.description}</p>
                
                <div>
                <div className='flex items-center gap-4 text-[#1c1b1b99] text-sm font-semibold'>
                <div className='flex items-center gap-3'>
                    <p><FiDollarSign></FiDollarSign></p>
                    <p>Price : {card.price}</p>
                </div>
                <div className='flex items-center gap-3'>
                    <p><HiOutlineBookOpen></HiOutlineBookOpen></p>
                    <p>Credit : {card.credit}hr</p>
                </div>
                </div>
                
                    <button className='bg-[#2F80ED] text-white rounded-lg w-full py-2 text-lg font-semibold mt-4'>Select</button>
                
                </div>
                
            </div>))
            }
        </div>
    );
};

export default Card;