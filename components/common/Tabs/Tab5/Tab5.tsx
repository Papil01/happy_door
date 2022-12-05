
import { Image } from 'antd';
import React from 'react';
// import { Carousel } from 'antd';
import s from "./Tab5.module.scss"





const Tab5 = ({handleNext}:props) => {

    
  return (
       <div> 
        <div className={s.navbar} >
            <div>
                <Image src='/images/Asset1.png' />
            </div>
            <div className={s.menu} >
                <div>Home</div>
                <div>Team </div>
                <div>FAQ</div>
                <div>Contact Us </div>
            </div>
        </div>
        <div className={s.bContainer} >
           <div className={s.container} >
             <div className={s.lightningRed}  ><Image src='/images/22.png' /></div>
             <div className={s.title} >THE HAPPY DOOR FLEA</div>
             <div className={s.G31}  ><Image src='/images/Group131.png' /></div>
             <div className={s.yellowbox} >
               <h1>100rs per day -</h1>
               <h1>Rs.50 Redeemable at any stall</h1>
             </div>
             
            </div>
            <div className={s.details} >
                <h1>Summary</h1>
                <div className={s.dform}  >
                  <p>Guest 1</p>
                  <input placeholder='Name' />
                  <div className={s.dflex}>
                      <input placeholder='Mobile' />
                      <input placeholder='Email Id' />
                  </div>

                  <p>Guest 2</p>
                  <input placeholder='Name' />
                  <div className={s.dflex}>
                      <input placeholder='Mobile' />
                      <input placeholder='Email Id' />
                  </div>

                  <p>Guest 3</p>
                  <input placeholder='Name' />
                  <div className={s.dflex}>
                      <input placeholder='Mobile' />
                      <input placeholder='Email Id' />
                  </div>
                </div>
                
                
              
                
                <div className={s.button} onClick={handleNext} > <div className={s.yBtn} ></div> <h2>Next</h2></div>
            </div>
        </div>
       

    </div>
  )
}

export default Tab5