import React from 'react';
import { spartansImg} from '../assets/Web';
const CTA = () => {
  return (
    <section className={`flex flex-row py-4 gap-8 px-0 xs:px-20 lg:px-52 justify-between items-center`}>
        <div className='flex flex-col gap-6 w-full lg:w-2/5'>
          <div className='font-headingFont uppercase leading-none'>
            <h1 className='text-3xl  text-textMain'>register and be a part of team spartans.</h1>
            <h6 className='text-xl text-secondary pt-1'>team spartans lang sakalam</h6>
          </div>
          <div className='font-subFont text-textMain hidden lg:flex lg:flex-col gap-4'>
            <p>Mag register na sa PLAYFINO SPORT&CASINO at maging parte ng patuloy na lumalaki naming team.</p>
            <p>Sa team Spartans ay hindi masasayang ang effort mo sa binibigay naming incentives, kaya register na!</p>
          </div>
          <div className='lg:hidden font-subFont text-textMain flex flex-col gap-4'>
            <p>Mag register na saPLAYFINO SPORT&CASINO at maging parte ng patuloy na lumalaki naming team. Sa team Spartans ay hindi masasayang ang effort mo sa binibigay naming incentives, kaya register na!</p>
          </div>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSfoNPiXvSbDnMkEcpyGc9K1Y9HFmaUJVLLI2tLBJSBCd0FIvw/viewform?fbclid=IwAR1AU1xuZH1lEWsNLzBTFJinxNbcgIDmx1IHyTmvG7r9DByVB9es5Nn7A3k"><button className='rounded-lg bg-gradient-to-b from-secondary to-tertiary py-3 px-9 w-48 font-subFont hover:from-[#FA4EAF] hover:to-[#fc65ed] font-medium text-textMain text-sm'>Register Now</button></a>
        </div>
        <div className='h-[400px] hidden lg:flex lg:items-center'>
          <a href='https://www.facebook.com/playfinooc'><img src={spartansImg}></img></a>
        </div>
    </section>
  )
}

export default CTA