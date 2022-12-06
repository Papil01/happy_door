
import { Image } from 'antd';
import React,{useState} from 'react';
// import { Carousel } from 'antd';
import s from "./Tab5.module.scss"
import { Button, Modal } from 'antd';




const Tab5 = ({handleNext}:props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

    
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
                      <div className={s.gbox}  >
                        <div>
                          <h4>Amount</h4>
                          <p>Group Discount 10%</p>
                          <hr/>
                          <h5>Total Amount</h5>
                        </div>
                        <div>
                          <h4>Rs.5000</h4>
                          <p>-Rs.500</p>
                          <hr/>
                          <h5>Rs.4500</h5>
                        </div>
                      </div>
                  </div>
                </div>
                
               
              
                
                <div className={s.button} onClick={showModal}> <div className={s.yBtn} ></div> <h3>Pay</h3></div>
                <Modal width={829}   className={s.modal}  title="Basic Modal" open={isModalOpen}  onOk={handleOk}  onCancel={handleCancel} >
                <Image src='/images/Group 97383.png' />
                <h1>Your Booking is complete</h1>
                <p>you will receive a confirmation mail with ticket details</p>
                <p>for quiries contact 4235154</p>
                </Modal>
            </div>
        </div>
       

    </div>
  )
}

export default Tab5