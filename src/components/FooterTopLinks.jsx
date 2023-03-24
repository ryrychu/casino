
import React from 'react'
import { facebookIcon } from '../assets/Web'
import { footerLinks } from '../constants'

const FooterTopLinks = () => {
  return (
    <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10 border-b-2 pb-4 border-textMain/10'>
    {footerLinks.map((footerLink, titleIndex) => (
      <div key={footerLink.key} className={`flex flex-col ss:my-0 my-4 min-w-[150px] w-52 border-l-2 pl-4 border-textMain/10 ${titleIndex === 0 ? 'border-l-0 pl-0' : ''}`}>
        <h4 className='text-secondary cursor-default'>
          {footerLink.title}
        </h4>
        <ul>
          {footerLink.links.map((link, linkIndex) => {
            if (titleIndex === 3 && linkIndex === 0) {
              return (
                <li key={`${titleIndex}-${linkIndex}`}>
                  <a href={link.link} className="flex items-center text-textMain cursor-pointer w-max">
                    <img src={facebookIcon} alt="Image" className="w-8 h-8" />
                  </a> 
               </li>
              )
            }
            else if (titleIndex === 4 && linkIndex === 0) {
              return (
                <li key={`${titleIndex}-${linkIndex}`}
                className={`text-textMain cursor-default w-fit`}
              >
                <a href={link.link} className={`text-textMain cursor-default`}>
                  {link.name}
                </a>
              </li>
              )
            }
            return (
              <li key={`${titleIndex}-${linkIndex}`}
                className={`text-textMain cursor-pointer w-fit`}
              >
                <a href={link.link} className={`text-textMain cursor-pointer`}>
                  {link.name}
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

export default FooterTopLinks