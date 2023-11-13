import React from 'react'
import { footerBotLinks } from '../constants'
import { facebookIcon, gcashIcon, mozillaIcon, bankIcon, chromeIcon, security1Icon, security2Icon, licenseIcon } from '../assets/Web'
const images = {
    'facebookIcon': facebookIcon,
    'gcashIcon': gcashIcon,
    'mozillaIcon': mozillaIcon,
    'bankIcon': bankIcon,
    'chromeIcon': chromeIcon,
    'security1Icon': security1Icon,
    'security2Icon': security2Icon,
    'licenseIcon': licenseIcon,
  }
  const FooterBottomLinks = () => {
    return (
      <div className='flex-[1.5] w-full hidden flex-row justify-between md:mt-0 mt-10 border-b-2 pb-4 pt-4 border-textMain/10 lg:flex'>
        {footerBotLinks.map((footerBotLink, titleIndex) => (
          <div
            key={footerBotLink.key}
            className={`flex flex-col ss:my-0 my-4 min-w-[80px] w-52 ${
              titleIndex === 0 ? 'border-none' : 'border-l-2 pl-4 border-textMain/10'
            }`}
          >
            <h4 className='text-secondary cursor-default'>{footerBotLink.title}</h4>
            <ul className='flex justify-start list-none gap-2'>
              {footerBotLink.links.map((link, linkIndex) => {
                return (
                  <li key={`${titleIndex}-${linkIndex}`}>
                    <a href={link.link} className='flex items-center text-textMain cursor-pointer w-max'>
                      <img src={images[link.image]} alt={link.image} className='w-8 h-8' />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    );
  };

export default FooterBottomLinks