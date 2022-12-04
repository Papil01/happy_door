
import { Image } from 'antd';
import React from 'react';
// import { Carousel } from 'antd';
import s from "./Tab2.module.scss"





const Tab2 = ({handleNext}:props) => {

    
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
                <h1>Number of Guests</h1>
                <input placeholder='Name' />
                {/* <input placeholder='Mobile' />
                <input placeholder='Email Id' /> */}
                <div className={s.discount} > <Image src='/images/Group.png' /> <h3>10% Off on 10 0r more tickets</h3> </div>
                <div className={s.button} onClick={handleNext} > <div className={s.yBtn} ></div> <h2>Next</h2></div>
            </div>
        </div>
       

    </div>
  )
}

export default Tab2