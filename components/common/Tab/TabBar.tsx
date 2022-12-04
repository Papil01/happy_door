import React, { useEffect, useState } from 'react'
// import { Carousel } from 'antd';
import Tab1 from '../Tabs/Tab1';
import Tab2 from '../Tabs/Tab2';
import Tab3 from '../Tabs/Tab3/Tab3';
import Tab4 from '../Tabs/Tab4';



const TabBar = () => {
  const [tab ,setTab] = useState(0)
  useEffect(()=>{
    if(tab===0){}
  },[tab])
  const handleNext =()=>{
    setTab(()=> tab+1 )
    console.log(tab)
  }
  return (
    <div  >
      {/* <div>
        <Tab1 handleNext={handleNext }  />
      </div>
      <div>
        <Tab2 handleNext={handleNext } />
      </div>
      <div>
        <Tab3 handleNext={handleNext } />
      </div>
      <div>
        <Tab4 handleNext={handleNext } />
      </div> */}

      {tab===0?<Tab1 handleNext={handleNext }  />:tab===1?<Tab2 handleNext={handleNext } />:tab===3?<Tab3 handleNext={handleNext } />:<Tab4 handleNext={handleNext } />}
    </div>
  )
}

export default TabBar