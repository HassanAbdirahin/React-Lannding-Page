import React from 'react';

const SingleCard = ({icon, userAmount, price, merits, special}) => {
    return (
        <div className={`${special ? 'bg-gray-100' : 'bg-white mt-[5rem]'} w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300`}>
        <img className='w-20 mx-auto mt-[-3rem] bg-white' src={icon} alt="" />
        <h2 className='2xl font-bold text-center py-8'>{userAmount}</h2>
        <p className='text-center text-4xl font-bold'>${price}</p>
        <div className='text-center font-medium py-2'>
            {
                merits.map((merit) => {
                    return <p className="border-b mx-8 mt-8">{merit}</p>
                })
            }
        </div>
        <button className={`${special ? 'bg-black' : 'bg-[#404dff]'} rounded-md font-medium w-[200px] mx-auto my-6 px-6 py-3 text-white`}>Start Trial</button>
    </div>
    );
};

export default SingleCard;