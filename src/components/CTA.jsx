import React from 'react';
import { spartansImg} from '../assets/Web';
const CTA = () => {
  return (
    <section className={`flex flex-row py-4 gap-8 px-52 justify-between items-center`}>
        <div className='flex flex-col gap-6 w-2/5'>
          <div className='font-headingFont uppercase leading-none'>
            <h1 className='text-5xl  text-textMain'>register and be a part of team spartans.</h1>
            <h6 className='text-xl text-secondary pt-1'>team spartans lang sakalam</h6>
          </div>
          <div className='font-subFont text-textMain flex flex-col gap-4'>
            <p>Mag register na sa Royal Circle Club casino at maging parte ng patuloy na lumalaki naming team.</p>
            <p>Sa team Spartans ay hindi masasayang ang effort mo sa binibigay naming incentives, kaya register na!</p>
          </div>
          <button className='rounded-lg bg-gradient-to-b from-secondary to-tertiary py-3 px-9 w-48 font-subFont hover:from-[#f6d083] hover:to-[#FFAF05] text-primary text-sm'>Register Now</button>
        </div>
        <div className='h-[400px] flex items-center'>
          <img src={spartansImg}></img>
        </div>
    </section>
  )
}

export default CTA