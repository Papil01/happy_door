
import { Image } from 'antd';
import React from 'react';
// import { Carousel } from 'antd';
import s from "./Tab3.module.scss"
import {useState} from "react"
import {useRecoilState } from "recoil"
import dataState from '@components/common/Atom';



const Tab3 = ({handleNext}:props) => {
 const [date,setDate] = useState("")
 const [data, setdata] = useRecoilState(dataState);

 const handleClick =(a:string)=>{
  setDate(a)
  let b ={
    ...data ,
    "Date":date
  }

  setdata(b)
 }

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
                <h1>What Dates are you going on?</h1>
                <div>
                 <button className={s.btn1}  onClick={()=>handleClick("15th sept")} >15th sept</button>
                 <button className={s.btn2}  onClick={()=>handleClick("16th sept")} >16th sept</button> 
                </div>
              
                <div className={s.button} onClick={handleNext} > <div className={s.yBtn} ></div> <h2>Next</h2></div>
            </div>
        </div>
       

    </div>
  )
}

export default Tab3