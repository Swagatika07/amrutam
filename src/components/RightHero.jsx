import React from 'react'
import {motion} from 'framer-motion';
import { useState } from 'react';
import circleTick from '../assets/circle-tick.svg';
import calendar from '../assets/calendar.svg';
const RightHero = () => {
  const BtnData = [
      { name: "In-Clinic", activeTabIndex: 0, time: "45 Mins" },
      { name: "Video", activeTabIndex: 1, time: "45 Mins" },
      { name: "Chat", activeTabIndex: 2, time: "10 Mins" },
    ];

    const [activeTab, setActiveTab] = useState(1);
    const handleActiveTab = (item) => {
      setActiveTab(item?.activeTabIndex);
    };
    const [clickedIndex, setClickedIndex] = useState(0);
  
    const slots = [
      { id: 1, date: 'Mon, 10 Oct', count:10 },
      { id: 2, date: 'Tue, 11 Oct', count:2 },
      { id: 3, date: 'Wed, 12 Oct', count:5 }
    ];
  
    const handleClick = (index) => {
      setClickedIndex(index);
    };
    const [clickedIndexTime,setClickedIndexTime]= useState(5);
    const [clickedIndexeTime,setClickedIndexeTime]= useState(null);
    const morningTime = ['09.00 AM','09.30 AM','10.00 AM','10.15 AM','10.45 AM','11.00 AM'];
    const mTimes = [
      { id: 1, time: '09.00 AM'},
      { id: 2, time: '09.30 AM'},
      { id: 3, time: '10.00 AM'},
      { id: 4, time: '10.15 AM'},
      { id: 5, time: '10.45 AM'},
      { id: 6, time: '11.00 AM'}
    ];
    // const items = ['Item 1', 'Item 2', 'Item 3'];

    const handleClickTime = (index) => {
      setClickedIndexTime((index === clickedIndexTime) ? 5 : index);
      console.log('clicked');
      console.log(clickedIndexTime);
      console.log(index);
    };
    const eTimes = [
      { id: 1, time: '09.00 PM'},
      { id: 2, time: '09.30 PM'},
      { id: 3, time: '10.00 PM'},
      { id: 4, time: '10.15 PM'},
      { id: 5, time: '10.45 PM'},
      { id: 6, time: '11.00 PM'}
    ];
    const handleClickeTime = (index) => {
      setClickedIndexeTime((index === clickedIndexeTime) ? null : index);
      console.log('clicked');
      console.log(clickedIndexTime);
      console.log(index);
    };
  return (
    <motion.div className='right-hero-wrapper' 
    initial={{opacity: 0, x:100}}
    animate={{ opacity: 1, x: 0}}
    transition={{ duration: 1.0 }}>
      <div className='appointment-header'>
      <p className='a-fee'>Appointment Fee</p>
      <p className='fee'>₹699.00</p>
      </div>
      <div className='select-session'>
       <p>Select your mode of session</p>
       <svg
              xmlns="http://www.w3.org/2000/svg"
              width="437"
              height="1"
              viewBox="0 0 437 1"
              fill="none"
            >
              <path d="M0 0.5H437" stroke="#797979" stroke-width="0.5" />
            </svg>
      </div>
      <div className='session-opt'>
      {BtnData?.map((item, index) => (
      <div className={`${activeTab === item?.activeTabIndex ? 'opt-btn-active' : 'opt-btn'}`}  onClick={() => handleActiveTab(item)}
      key={index}>
      <div className='opt-wrapper'>
      <p className={`not-active-p ${activeTab === item?.activeTabIndex ? 'green' : 'normalFont'}`}>{item?.name}</p>
      {activeTab === item?.activeTabIndex && (
      <img src={circleTick}/>
      )}
      </div>
      <p className='not-active-min'>{item?.time}</p></div>
      ))
    }
      </div>
      <div className='select-session'>
       <p>Pick a Time slot</p>
       <svg
              xmlns="http://www.w3.org/2000/svg"
              width="437"
              height="1"
              viewBox="0 0 437 1"
              fill="none"
            >
              <path d="M0 0.5H437" stroke="#797979" stroke-width="0.5" />
            </svg>
<img src={calendar}/>


      </div>
      <div className='slot-wrap'>
        <div className='slot-content'>
        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="22" viewBox="0 0 21 22" fill="none">
        <path d="M20.0193 10.9804C20.0086 5.45744 15.523 0.989084 9.99998 0.999744C4.47699 1.0104 0.00864036 5.49603 0.0192994 11.019C0.0299585 16.542 4.51559 21.0104 10.0386 20.9997C15.5616 20.989 20.0299 16.5034 20.0193 10.9804ZM18.5193 10.9833C18.5236 13.2377 17.6323 15.4014 16.0413 16.9985C14.4503 18.5957 12.29 19.4954 10.0357 19.4997C7.78135 19.5041 5.61762 18.6127 4.02048 17.0217C2.42335 15.4307 1.52365 13.2705 1.5193 11.0161C1.51495 8.76179 2.40631 6.59806 3.99728 5.00093C5.58826 3.4038 7.74854 2.50409 10.0029 2.49974C12.2572 2.49539 14.4209 3.38675 16.0181 4.97773C17.6152 6.56871 18.5149 8.72898 18.5193 10.9833ZM12.058 15.5258C12.1982 15.3849 12.2767 15.1941 12.2763 14.9954C12.276 14.7966 12.1967 14.6062 12.056 14.4658L8.57928 11.0025L12.0426 7.52581C12.1748 7.38338 12.2465 7.1952 12.2427 7.0009C12.2389 6.80661 12.1599 6.62138 12.0222 6.48423C11.8845 6.34708 11.699 6.26873 11.5047 6.26567C11.3104 6.26262 11.1225 6.33511 10.9805 6.46786L6.98826 10.4756C6.84809 10.6165 6.76956 10.8072 6.76995 11.006C6.77033 11.2047 6.84959 11.3952 6.99031 11.5356L10.998 15.5278C11.1389 15.668 11.3297 15.7465 11.5284 15.7462C11.7272 15.7458 11.9177 15.6665 12.058 15.5258Z" fill="#808080"/>
        </svg>
        <div className='slot-btn-gr'>
{slots.map((slot,index)=>(
         <div  key={slot.id}
         onClick={() => handleClick(index)}
         className={`${clickedIndex === index ?'slot-btn': 'slot-btn-inactive'}`}>
         <p className={`slot-btn-p ${clickedIndex === index ? 'p-active': 'p-inactive'}`}>{slot.date}</p>
         <p className={`slot-count ${(parseInt(slot.count)===2) && 'slot-count-2'} ${(parseInt(slot.count)===5) && 'slot-count-5'} ${(parseInt(slot.count)===10) && 'slot-count-10'}`}>{slot.count} Slots</p>
         
         </div>
      ))}
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
  <path d="M0.0390625 10C0.0390625 15.523 4.51606 20 10.0391 20C15.5621 20 20.0391 15.523 20.0391 10C20.0391 4.477 15.5621 0 10.0391 0C4.51606 0 0.0390625 4.477 0.0390625 10ZM1.53906 10C1.53906 7.74566 2.4346 5.58365 4.02865 3.98959C5.62271 2.39553 7.78472 1.5 10.0391 1.5C12.2934 1.5 14.4554 2.39553 16.0495 3.98959C17.6435 5.58365 18.5391 7.74566 18.5391 10C18.5391 12.2543 17.6435 14.4163 16.0495 16.0104C14.4554 17.6045 12.2934 18.5 10.0391 18.5C7.78472 18.5 5.62271 17.6045 4.02865 16.0104C2.4346 14.4163 1.53906 12.2543 1.53906 10ZM8.00906 5.47C7.86861 5.61062 7.78972 5.80125 7.78972 6C7.78972 6.19875 7.86861 6.38937 8.00906 6.53L11.4791 10L8.00906 13.47C7.87658 13.6122 7.80446 13.8002 7.80789 13.9945C7.81132 14.1888 7.89003 14.3742 8.02744 14.5116C8.16485 14.649 8.35024 14.7277 8.54454 14.7312C8.73884 14.7346 8.92689 14.6625 9.06906 14.53L13.0691 10.53C13.2095 10.3894 13.2884 10.1988 13.2884 10C13.2884 9.80125 13.2095 9.61063 13.0691 9.47L9.06906 5.47C8.92844 5.32955 8.73781 5.25066 8.53906 5.25066C8.34031 5.25066 8.14969 5.32955 8.00906 5.47Z" fill="#808080"/>
</svg>
        </div>
      </div>
      <div className='morning-session'>
       <p>Morning</p>
       <div className='morning-slot'>
       {mTimes.map((mTime,index)=>(
        <div key={mTime.id} onClick={() => handleClickTime(index)} className={`morning-times ${ index === clickedIndexTime ? 'bg-green' : 'bg-white'}`}>
         {mTime.time}
        </div>
       ))}
       </div>
      </div>
      <div className='morning-session'>
      <p>Evening</p>
      <div className='morning-slot'>
      {eTimes.map((eTime,index)=>(
       <div key={eTime.id} onClick={() => handleClickeTime(index)} className={`morning-times ${ index === clickedIndexeTime ? 'bg-green' : 'bg-white'}`}>
        {eTime.time}
       </div>
      ))}
      </div>
     </div>
     <motion.div className='make-apt'
     whileHover={{ scale: 1.01, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)" }} // Scale up and add shadow on hover
     whileTap={{ scale: 0.9 }}
     initial={{ opacity: 0, y: 20 }}
     animate={{ opacity: 1, y: 0 }}
     transition={{ duration: 0.5 }} >
     Make an appointment
     </motion.div>
    </motion.div>
  )
}

export default RightHero
