import React from 'react';
import logo from '../../assets/logo.png'
import { format } from 'date-fns';

const Header = () => {
    const date = new Date();
    const day = format(date, "EEEE");
    const rest = format(date, "LLLL dd, yyyy");
    return (
      <div className='flex flex-col justify-center items-center p-12.5'>
        <img src={logo} className='w-[450px]' alt="" />
        <p className='mt-5 mb-2.5 text-accent'>Journalism Without Fear or Favour</p>
        <p className='text-accent'>
            <strong>{day}</strong>, {rest}
        </p>
      </div>
    );
};

export default Header;