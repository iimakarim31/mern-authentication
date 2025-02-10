import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { AppContent } from "../context/AppContext";

const Header = () => {
  const { userData } = useContext(AppContent);
  return (
    <div className='flex flex-col items-center mt-20 px-4 text-center text-gray-800'>
      <img
        src={assets.header_img}
        alt=''
        className='w-50 h-60 rounded-full mb-6'
      />
      <h1 className='flex items-center gap-2 text-xl sm:text-3xl font-medium mb-2'>
        Hey {userData ? userData.name : "Everyone"}!
        <img src={assets.hand_wave} alt='' className='w-8 aspect-square' />
      </h1>
      <h2 className='text-2xl sm:text-3xl font-semibold mb-4'>
        Welcome to My Authentication App
      </h2>
      <p className='mb-10 max-w-md'>
        IIn this web application I am creating a Login, Registration and
        Password Reset system using MERN Stack (MongoDB, Express, React & Node)
        | JWT Authentication and OTP Email Verification in this Project.
      </p>
    </div>
  );
};

export default Header;
