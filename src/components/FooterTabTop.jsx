import React from 'react'
import { footerTabTopLinks} from '../constants'
const FooterTabTop = () => {
  return (
    <div className='flex-[1.5] w-full flex flex-row justify-between md:mt-0  border-b-2 pb-1 border-textMain/10  lg:hidden'>
    {footerTabTopLinks.map((footerTabTopLink, titleIndex) => (
      <div key={footerTabTopLink.key} className={`flex flex-col ss:my-0 my-4 px-8 xs:px-0 min-w-[80px] w-full`}>
        <h4 className='text-textMain cursor-default'>
          {footerTabTopLink.title}
        </h4>
        <ul className='grid grid-cols-2'>
          {footerTabTopLink.links.map((link, linkIndex) => {
            return (
              <li key={`${titleIndex}-${linkIndex}`}
                className={`text-textMain cursor-pointer w-fit`}
              >
                <a href={link.link} className={`text-textMain/70 cursor-pointer`}>
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

export default FooterTabTop