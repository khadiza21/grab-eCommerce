import React, { useState } from 'react';
import WheelComponent from 'react-wheel-of-prizes';
import './Spinner.css';


const Spinner = () => {

    const [winner, setWinner] = useState('0');


    const segments = ['0', '2', '3', '5', '10', '15', '20', '25', '30', '50', '90', '100']
    const segColors = ['#081135', '#570C31']


    // program to get a random item from an array
    function getRandomItem(arr) {
        // get random index value
        const randomIndex = (Math.random() * arr.length);
        // get random item
        const item = arr[randomIndex];
        return item;
    }

    const onFinished = (winner) => {
        console.log(winner)
        setWinner(winner);

    }

    return (
        <div>
            <h2 className="bg-neutral text-center text-3xl font-bold text-white">Your Spin Left : <span>2</span> </h2>
            <div className='flex justify-center' style={{
                pointerEvents: 'none'
            }}>
                <WheelComponent style={{
                    pointerEvents: 'none'
                }} className="spinner mx-auto bg-neutral  "
                    segments={segments}
                    segColors={segColors}
                    winningSegment={getRandomItem(segments)}
                    onFinished={(winner) => onFinished(winner)}
                    // primaryColor='black'
                    // contrastColor='white'
                    // buttonText='Spin'
                    isOnlyOnce={false}
                    // size={150}
                    upDuration={500}
                    downDuration={1000}
                    fontFamily='Arial'
                />

            </div >
            <h2 className="bg-neutral text-center text-white text-3xl font-bold ">You Win: <span>{winner}</span></h2>
        </div>

    );
};

export default Spinner;
