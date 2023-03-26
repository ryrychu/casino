import React from 'react'
import { footerTabBotImageLinks } from '../constants'
import { facebookIcon, gcashIcon, bankIcon } from '../assets/Web'
const images = {
    'facebookIcon': facebookIcon,
    'gcashIcon': gcashIcon,
    'bankIcon': bankIcon,
  }
const FooterTabBotImage = () => {
  return (
    <div className='flex-[1.5] w-full flex flex-row justify-between md:mt-0  border-b-2 pb-1 border-textMain/10  lg:hidden'>
    {footerTabBotImageLinks.map((footerTabBotImageLink, titleIndex) => (
      <div key={footerTabBotImageLink.key} className={`flex flex-col ss:my-0 my-4 px-8 xs:px-0 min-w-[80px] w-full`}>
        <h4 className='text-textMain cursor-default'>
          {footerTabBotImageLink.title}
        </h4>
        <ul className='flex flex-row gap-x-4'>
          {footerTabBotImageLink.links.map((link, linkIndex) => {
            return (
              <li key={`${titleIndex}-${linkIndex}`}
                className={`text-textMain cursor-pointer w-fit`}
              >
                <a href={link.link} className={`text-textMain/70 cursor-pointer`}>
                    <img src={images[link.image]} alt={link.image} className='w-8 h-8' />
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    ))}
    </div>
  )
}

export default FooterTabBotImage