
import { Image } from 'antd';
import React from 'react';
// import { Carousel } from 'antd';
import s from "./Tab1.module.scss"
import {useState} from "react"
import {useRecoilState } from "recoil"
import dataState from '@components/common/Atom';


const Tab1 = ({handleNext}:props) => {
const [name , setName] = useState("")
const [mobile , setMobile] = useState("")
const [email , setEmail] = useState("")
const [data, setdata] = useRecoilState(dataState);


const handleClick= () =>{ 
 let a ={...data ,
    "Name":name ,
    "Mobile":mobile,
    "Email" :email
}    
   setdata(a)
 handleNext();
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
                <h1>Enter Details Here</h1>
                <input onChange={(e)=>setName(e.target.value)}  placeholder='Name' />
                <input onChange={(e)=>setMobile(e.target.value)} placeholder='Mobile' />
                <input onChange={(e)=>setEmail(e.target.value)} placeholder='Email Id' />
                <div className={s.button} onClick={handleClick} > <div className={s.yBtn} ></div> <h2>Next</h2></div>
            </div>
        </div>
       

    </div>
  )
}

export default Tab1