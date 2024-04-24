import React from "react";
import BG from "../assets/FrameBG.png";
import Doctor from "../assets/Doctor.svg";
import Pin from "../assets/Pin.svg";
import Grad from "../assets/Grad.svg";
import Comment from "../assets/Comment.png";
import {motion} from 'framer-motion';
const FindDcotor = () => {
  const FilterBtn = (props) => {
    return (
      <div className="filter-btn">
        <p>{props.name}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="8"
          viewBox="0 0 14 8"
          fill="none"
        >
          <path
            d="M1 1.5L7 6.5L13 1.5"
            stroke="#828282"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    );
  };
  let itms = ["Skin Care", "Female", "Rs 0 - Rs. 500", "Hindi"];
  let counts = [1,2,3];
  return (
    <>
      <motion.div
      initial={{opacity: 0, y:-100}}
    animate={{ opacity: 1, y: 0}}
    transition={{ duration: 1.0 }}
        className="find-doctor-wrapper"
        style={{ backgroundImage: "url(" + BG + ")" }}
      >
        <p>Find expert Doctors for an In-clinic session here </p>
        <div className="bar-wrapper">
          <div className="location-dropdown">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                d="M14.2942 8.23375L14.2936 8.23315C13.8086 7.74897 13.2109 7.5 12.5273 7.5C11.8438 7.5 11.2462 7.749 10.7618 8.23345C10.2769 8.71838 10.0273 9.31621 10.0273 10C10.0273 10.6837 10.2768 11.2812 10.7618 11.7656C11.2461 12.2506 11.8437 12.5 12.5273 12.5C13.2111 12.5 13.809 12.2505 14.2939 11.7656C14.7783 11.2811 15.0273 10.6835 15.0273 10C15.0273 9.31649 14.7784 8.71874 14.2942 8.23375ZM7.27929 4.59258L7.27936 4.59251C8.79844 3.19121 10.5409 2.5 12.5273 2.5C14.5138 2.5 16.2563 3.19121 17.7753 4.59251L17.7754 4.59258C19.2663 5.96736 20.0273 7.81773 20.0273 10.2C20.0273 11.6731 19.4747 13.2999 18.3084 15.09C17.1427 16.8788 15.3634 18.839 12.9525 20.9698C12.9003 21.0124 12.835 21.0506 12.7518 21.0818C12.6707 21.1122 12.5967 21.125 12.5273 21.125C12.4579 21.125 12.3839 21.1122 12.3029 21.0818C12.2197 21.0506 12.1544 21.0124 12.1022 20.9698C9.69129 18.839 7.912 16.8788 6.74624 15.09C5.58003 13.2999 5.02734 11.6731 5.02734 10.2C5.02734 7.81773 5.78835 5.96736 7.27929 4.59258Z"
                fill="#3A643B"
                stroke="#3A643B"
              />
            </svg>
            <p>Select Location</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="20"
              viewBox="0 0 19 20"
              fill="none"
            >
              <path
                d="M3.51953 7.5L9.50151 14.1667L15.4835 7.5"
                stroke="#131313"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="search-bar">
            <p>eg. Doctor, specialisation, clinic name</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="29"
              height="24"
              viewBox="0 0 29 24"
              fill="none"
            >
              <path
                d="M14.8354 4L13.1811 5.41L19.7279 11H5.44922V13H19.7279L13.1811 18.59L14.8354 20L24.2215 12L14.8354 4Z"
                fill="#1C1B1F"
              />
            </svg>
          </div>
        </div>
      </motion.div>
      <motion.div className="filters"
      initial={{opacity: 0, x:-100}}
    animate={{ opacity: 1, x: 0}}
    transition={{ duration: 1.0 }}>
        <div className="fbtn-container">
          <FilterBtn name="Expertise" />
          <FilterBtn name="Gender" />
          <FilterBtn name="Fee" />
          <FilterBtn name="Languages" />
          <div className="filter-btn btnG">
            <p>All Filters</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="8"
              viewBox="0 0 14 8"
              fill="none"
            >
              <path
                d="M1 1.5L7 6.5L13 1.5"
                stroke="#828282"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </motion.div>
      <motion.div className="filter-list-wrapper"
      initial={{opacity: 0, x:100}}
    animate={{ opacity: 1, x: 0}}
    transition={{ duration: 1.0 }}>
        <div className="filter-list">
          {itms.map((itm) => (
            <div className="filter-list-btn">
              <p>{itm}</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="15"
                viewBox="0 0 12 15"
                fill="none"
              >
                <path
                  d="M10.9524 1.87522L1.04912 12.9676"
                  stroke="#838383"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M1.21484 1.875L10.9523 13.125"
                  stroke="#838383"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </div>
          ))}
        </div>
      </motion.div>
    
      <div className="profile-card-wrapper">
      {counts.map(count=>(
        <motion.div 
        initial={{ opacity: 0, rotateY: 180 }}
            animate={{ opacity: 1, rotateY: 0 }}
            exit={{ opacity: 0, rotateY: 180 }}
            transition={{ duration: 1.0 }}
            className="profile-card-container">
          <div className="profile-card">
            <div className="profile-upper">
              <div className="profile-pic-section">
                <img className="p-pic" src={Doctor} alt="doctor" />
                <div className="d-ratings">
                  <div className="d-rating">
                    <p>4.2</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M4.85547 18.3333L6.20964 12.4792L1.66797 8.54167L7.66797 8.02083L10.0013 2.5L12.3346 8.02083L18.3346 8.54167L13.793 12.4792L15.1471 18.3333L10.0013 15.2292L4.85547 18.3333Z"
                        fill="#EFDA3B"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="dp-info-container">
               <p>Dr. Prerna Narang</p>
               <div className="dp-info">
                <div className="domain">
                 <div className="domain-d">
                 <img src={Pin} alt="icon"/>
                 <p>Male-Female Infertility</p>
                 </div>
                 <div className="domain-d">
                 <img src={Grad} alt="icon"/>
                 <p>7 years of experience</p>
                 </div>
                 <div className="domain-d">
                 <img src={Comment} alt="icon"/>
                 <p>Speaks: English, Hindi, Marathi</p>
                 </div>
                </div>
                <div className="consult1">
                 <div className="video-consult">
                  <span className="p1">Video Consultation</span>
                  <span className="p2">₹800</span>
                 </div>
                 <div className="video-consult">
                  <span className="p1">Chat Consultation</span>
                  <span className="p2">Free</span>
                 </div>
               </div>
              </div>
            </div>
            <div className="profile-bottom">
            <div className="view-prof">View Profile</div>
            <div className="booking">Book a consultation</div>
            </div>
          </div>
        </div>
      </motion.div>
      ))}
      </div>
      
      </>
  );
};

export default FindDcotor;
