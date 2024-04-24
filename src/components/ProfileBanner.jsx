import React from "react";
import {motion} from 'framer-motion';
import banner from "../assets/banner.png";
import profilePic from "../assets/profilePic.svg";
import star from "../assets/star.svg";
import bluetick from "../assets/bluetick.png";
import Hero from "./Hero";
const ProfileBanner = () => {
  const items = [1, 2, 3, 4];
  return (
    <>
    <div className="profile-banner-wrapper">
      <img src={banner} alt="banner" style={{ width: "85.5vw" }} />
      <img
        className="profile-pic"
        src={profilePic}
        alt="profile-pic"
        style={{ width: "159px", height: "159px" }}
      />
      <div className="profile-info">
        <div className="informations">
          <div className="doctor-info">
            <div className="doctor-name">
              <h4>Dr. Bruce Willis</h4>
              <img src={bluetick} alt="bluetick" />
            </div>
            <h5>Gynecologist</h5>
            <div className="ratings">
              <p>4.2</p>
              {items.map((item) => (
                <img src={star} alt="star" />
              ))}
            </div>
          </div>
          <div className="num-data">
           <div className="num-wrap">
            <p>Followers</p>
            <span>850</span>
           </div>
           <div className="num-wrap">
           <p>Followings</p>
           <span>18K</span>
          </div>
          <div className="num-wrap">
          <p>Posts</p>
          <span>250</span>
         </div>
          </div>
          <motion.div className="appt-btn" 
          whileHover={{ scale: 1.1, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)" }}
          whileTap={{ scale: 0.9 }} 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }} >
          <p>Book an Appointment</p>
          </motion.div>
        </div>
      </div>
    </div>
    <Hero/>
    </>
  );
};

export default ProfileBanner;
