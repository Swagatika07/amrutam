import React from "react";
import plus from "../assets/plus.svg";
import fb from "../assets/fb.svg";
import insta from "../assets/insta.svg";
import yt from "../assets/yt.svg";
import twitter from "../assets/twitter.svg";
import women from "../assets/Women.svg"
import immunity from "../assets/Immunity.svg";
import skin from "../assets/Skincare.svg";
import hair from "../assets/Hair.svg";
import org from '../assets/org.svg';
import reviewer from '../assets/reviewer.svg';
import star from '../assets/star.svg';
import {motion} from 'framer-motion';
const SpecCard = (props) =>{
    return(
        <div className="spec-container">
          <div className="spec">
           <div className="pics"><img src={props.Image}/></div>
           <p>{props.para}</p>
          </div>
         </div>
    )
}
const TreatBtn = (props) => {
    return (
    <div className="treat-btn">
    {props.treat}
    </div>
    )
}
const LeftHero = () => {
  return (
    <motion.div initial={{opacity: 0, x:-100}}
    animate={{ opacity: 1, x: 0}}
    transition={{ duration: 1.0 }} className="left-hero-wrapper">
      <div className="about-me">
        <div className="little-bit-of-me">
          <p>A Little About Me</p>
          <div className="follow-btn">
            <p>Follow</p>
            <img src={plus} alt="plus" />
          </div>
        </div>
        <div className="me-desc">
          <p>
            Hello I am Dr. Bruce Willis a Gynaecologist in Sanjivni Hospital
            Surat. love to work with all my hospital staff and seniour doctors.
            Completed my graduation in Gynaecologist Medicine from the{" "}
          </p>
          <div className="read-more">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="437"
              height="1"
              viewBox="0 0 437 1"
              fill="none"
            >
              <path d="M0 0.5H437" stroke="#797979" stroke-width="0.5" />
            </svg>
            <span>Read More</span>
          </div>
        </div>
        <div className="language-wrapper">
          <p>Language Spoken</p>
          <div className="lang">English</div>
          <div className="lang">Hindi</div>
          <div className="lang">Telugu</div>
        </div>
        <div className="social-media">
          <img src={fb} alt="fb" />
          <img src={insta} alt="insta" />
          <img src={yt} alt="yt" />
          <img src={twitter} alt="twitter" />
        </div>
      </div>

      <div className="about-me">
        <div className="little-bit-of-me">
          <p>I Specialize In</p>
        </div>
        <div className="services">
         <SpecCard Image={women} para="Women's health"/>
         <SpecCard Image={skin} para="Skin Care"/>
         <SpecCard Image={immunity} para="Immunity"/>
         <SpecCard Image={hair} para="Hair Care"/>
        </div>
      </div>
      <div className="about-me">
        <div className="little-bit-of-me">
          <p>The Concerns I Treat</p>
        </div>
        <div className="treatments">
         <TreatBtn treat="Skin Treatment"/>
         <TreatBtn treat="Pregnancy"/>
         <TreatBtn treat="Period Doubts"/>
         <TreatBtn treat="Endometriosis"/>
         <TreatBtn treat="Pelvic Pain"/>
         <TreatBtn treat="Ovarian Cysts"/>
         <TreatBtn treat="+ 5 More"/>
        </div>
        </div>

        <div className="about-me">
        <div className="little-bit-of-me">
          <p>My Work Experience</p>
        </div>
        <div className="work-exp">
        <p className="exp">I have been in practice for : 7+ Years</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="422" height="1" viewBox="0 0 422 1" fill="none">
  <path d="M0 0.5H421.5" stroke="#D1D5D1"/>
</svg>
<div className="work-proof">
 <div className="org-icon"><img src={org}/></div>
 <div className="org-desc">
 <div className="org-designation">
 <p className="org-name">Midtown Medical Clinic</p>
 <p className="designation">Senior Doctor</p></div>
 <p className="duration">2016-present</p>
 </div>
</div>
<div className="work-proof">
 <div className="org-icon"><img src={org}/></div>
 <div className="org-desc">
 <div className="org-designation">
 <p className="org-name">Midtown Medical Clinic</p>
 <p className="designation">Senior Doctor</p></div>
 <p className="duration">2016-present</p>
 </div>
</div>
        </div>
       
        </div>

        <div className="about-me">
        <div className="little-bit-of-me">
          <p>Featured Reviews(102)</p>
        </div>
        <div className="review"> 
        {[1,2].map((item) => (
            <div className="review-wrapper">
            <div className="review-container">
           <div className="upper-r">
            <div className="review-giver">
            <img src={reviewer}/>
            <div className="reviewer-details">
             <p className="alicent">Alicent Hightower</p>
             <p className="consult">Consulted for Skin care</p>
             </div>
            </div>
            <p className="date">20 January 2023</p>
           </div>
           <div className="lower-r">
           <div className="ratings">
              {[1,2,3,4,5].map((item) => (
                <img src={star} alt="star" />
              ))}
            </div>
            <p>Might be bit early to confirm but yes I can see noticeable difference in my hairfall. will write again after using it for longer periods</p>
           </div>
          </div>
          </div>
          ))}
          </div>
        </div>
        
       
    </motion.div>
  );
};

export default LeftHero;
