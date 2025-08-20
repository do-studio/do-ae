import React from 'react';
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoMdMail } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";


const Contact = () => {
  return (
    <div className='bg-black rounded-3xl overflow-hidden relative p-5 xl:p-16 text-white'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-y-5'>
            <div className='md:col-span-2 flex flex-col gap-4'>
                <p>Let's talk growth!</p>
                <h1 className='text-3xl xl:text-5xl font-medium xl:w-[80%]'>LET'S BUILD SOMETHING AMAZING TOGETHER</h1>
                <p className='text-sm xl:text-lg'>Ready to skyrocket your digital growth?<br/> Drop us a line and we'll reply within 24 hours.</p>
                <button className='!bg-[#AEFE00] text-black w-fit text-sm px-10 py-4 rounded-full'>Get Started</button>
            </div>

            <div className='border rounded-2xl p-5 flex flex-col justify-between gap-5'>
                <div className='border text-white w-fit font-medium  xl:text-2xl px-5 xl:px-10 py-2 xl:py-4 rounded-xl xl:rounded-2xl'>DO STUDIO</div>
                <div className='flex flex-col gap-2 text-xs md:text-sm'>
                    <span className='flex gap-2 items-center'>
                        <BiSolidPhoneCall className='text-lg'/>
                        <a href="#">[+01] 800-555-7654</a>
                    </span>
                    <span className='flex gap-2 items-center'>
                        <IoMdMail className='text-lg'/>
                        <a href="#">example@pagelabs.com</a>
                    </span>
                    <span className='flex gap-2 items-center'>
                        <MdLocationOn className='text-lg'/>
                        <a href="#">789 Horizon Ave, Skycity Tech Park, ZIP 56789</a>
                    </span>
                </div>
            </div>
      </div>
    </div>
  )
}

export default Contact
