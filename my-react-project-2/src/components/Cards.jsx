import React from 'react';
import Single from '../assets/single.png';
import Double from '../assets/double.png';
import Triple from '../assets/triple.png';
import SingleCard from './SingleCard';

const Cards = () => {
    return (
        <div className='w-full py-[10rem] px-4 bg-white'>
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
            <SingleCard icon={Single} userAmount='Single User' price={149} merits={['500 GB Storage', '1 Granted User', ' Send Up to 2 GB']}/>
            <SingleCard icon={Double} userAmount='Partnership' price={199} merits={['1 TB Storage', '3 Granted User', ' Send Up to 10 GB']} special={true}/>
            <SingleCard icon={Triple} userAmount='Group Account' price={299} merits={['5 TB Storage', '10 Granted User', ' Send Up to 20 GB']}/>
            </div>
        </div>
    );
};

export default Cards;