import React from 'react';
import {
    AiOutlineGithub,
    AiOutlineLinkedin
} from "react-icons/ai";

const Footer = () => {
    return (
        <footer className='mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl mt-10'>
            <hr className='w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0'/>
            <div className='mx-auto  p-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between'>
                <div className='flex flex-row items-center justify-center space-x-1 text-neutral-500 dark:text-neutral-100'>
                    <a href='mailto:elkinrodriguez03@gmail.com' className='hover:underline'>© 2023 Elkin Rodriguez Siatama</a>
                </div>
                <div className='flex flex-row items-center justify-center space-x-2 mb-1'>
                    <a href="https://github.com/Elkinrodriguez03" rel='noreferrer' target='_blank'>
                        <AiOutlineGithub 
                            className='hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100'
                            size={30}
                        />
                    </a>
                    <a href="https://www.linkedin.com/in/elkinrodriguezs/" rel='noreferrer' target='_blank'>
                        <AiOutlineLinkedin 
                            className='hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100'
                            size={30}
                        />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
