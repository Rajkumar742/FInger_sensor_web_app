import React from 'react'
import Brand_clints from '../../components/Brand_clints'
import Explore_solution from '../../components/buttons/Explore_solution'

// Product_card _imgs

import smartlocks from "../../assets/Product_card_img/product-card-1.png";
import biometricsystem from "../../assets/Product_card_img/product-card-2.png";
import Accescontrol from "../../assets/Product_card_img/product-card-3.png";

import mbvl20 from "../../assets/Product_card_img/product-card-5.png";
import vf300pro from "../../assets/Product_card_img/product-card-6.png";
import bioenterx from "../../assets/Product_card_img/product-card-4.png";

export default function Home_Comp2() {
  return (
    <div className='w-full h-screen  px-10'>
     <Brand_clints></Brand_clints>
     <div className='flex justify-around py-10'>
        <h3 className='font-bold'>build smart security <br /> infrastructure</h3>
        <p>AI-powered biometric and smart access solutions <br /> designed to secure workplaces, offices, and enterprises <br /> 
        with advanced technology.</p>
     </div>
   {/* buttons and left-right */}
   <div>
     <Explore_solution></Explore_solution>
   </div>

   {/* Product_card_1 */}

   <div className='flex mt-6 w-full h-70 gap-3.5 overflow-x-auto'>
      <img src={smartlocks} alt="smart locks" />
      <img src={biometricsystem} alt="biometric system" />
      <img src={Accescontrol} alt="Acces control" />
      <img src={smartlocks} alt="smart locks" />
      <img src={biometricsystem} alt="biometric system" />
      <img src={Accescontrol} alt="Acces control" />
       <img src={smartlocks} alt="smart locks" />
      <img src={biometricsystem} alt="biometric system" />
      <img src={Accescontrol} alt="Acces control" />
   </div>

   {/* product car 2 */}
   <h1 className='mt-10 font-bold text-2xl'>Advanced Security Products</h1>

   <div className=" mt-10 flex gap-5 overflow-x-auto overflow-y-hidden pb-4 scrollbar-hide snap-x snap-mandatory">

  <div className="min-w-full sm:min-w-[48%] lg:min-w-[32%] flex-shrink-0 snap-start border-4 border-white rounded-lg shadow-lg">
    <img src={mbvl20} alt="mbvl20" className="w-full rounded-lg" />
    <p className="mt-3 py-3 ">
      <span className='font-bold'>Mb20 VL</span> <br />Smart biometric attendance system. <br />Face and fingerprint verification with fast access <br /> control.
    </p>
  </div>

  <div className="min-w-full sm:min-w-[48%] lg:min-w-[32%] flex-shrink-0 snap-start border-4 border-white rounded-lg shadow-lg">
    <img src={vf300pro} alt="vf300pro" className="w-full rounded-lg" />
    <p className="mt-3 p-3">
    <span className='font-bold'>VF300 PRO</span><br /> RFID & fingerprint attendance device. <br /> Smart access control with biometric security.
    </p>
  </div>

   <div className="min-w-full sm:min-w-[48%] lg:min-w-[32%] flex-shrink-0 snap-start border-4 border-white rounded-lg shadow-lg">
    <img src={vf300pro} alt="vf300pro" className="w-full rounded-lg" />
    <p className="mt-3 p-3">
    <span className='font-bold'>VF300 PRO</span><br /> RFID & fingerprint attendance device. <br /> Smart access control with biometric security.
    </p>
  </div>

   <div className="min-w-full sm:min-w-[48%] lg:min-w-[32%] flex-shrink-0 snap-start border-4 border-white rounded-lg shadow-lg">
    <img src={vf300pro} alt="vf300pro" className="w-full rounded-lg" />
    <p className="mt-3 p-3">
    <span className='font-bold'>VF300 PRO</span><br /> RFID & fingerprint attendance device. <br /> Smart access control with biometric security.
    </p>
  </div>

 

  

 

</div>

   <div>

   </div>
    </div>
  )
}
