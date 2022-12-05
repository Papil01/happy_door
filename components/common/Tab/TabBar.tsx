import React, { useEffect, useState } from 'react'
// import { Carousel } from 'antd';
import Tab1 from '../Tabs/Tab1';
import Tab2 from '../Tabs/Tab2';
import Tab3 from '../Tabs/Tab3/Tab3';
import Tab4 from '../Tabs/Tab4';
import Tab5 from '../Tabs/Tab5';
import {useRecoilState} from  "recoil"
import dataState from '../Atom';

const TabBar = () => {
  const [tab ,setTab] = useState(0)
  const [data, setdata] = useRecoilState(dataState);
  const handleNext =()=>{
    setTab(()=> tab+1 )
    console.log(tab)
    console.log(data)
  }
  return (
    <div  >
      <div style={{display: tab===0? "block":"none"}} >
        <Tab1  handleNext={handleNext }  />
      </div>
      <div style={{display: tab===1? "block":"none"}} >
        <Tab2 handleNext={handleNext } />
      </div>
      <div style={{display: tab===2? "block":"none"}} >
        <Tab3 handleNext={handleNext } />
      </div>
      <div style={{display: tab===3? "block":"none"}} >
        <Tab4 handleNext={handleNext } />
      </div>
      <div style={{display: tab===4? "block":"none"}} >
        <Tab5 handleNext={handleNext } />
      </div>

    
    </div>
  )
}

export default TabBar