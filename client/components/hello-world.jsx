import React from 'react';
const backgroundImageUrl = 'https://images.pexels.com/photos/2233416/pexels-photo-2233416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750';

const styles = {
  background: `url(${backgroundImageUrl})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center'
};

export default function HelloWorld() {
  return (
    <div className="w-full h-screen" style={styles}>
      <div className='flex justify-center items-center h-screen ml-12'>
        <div className="w-72 flex flex-col ml-20">
          <h1 className="text-orange-500 text-8xl font">Ramdan</h1>
          <h1 className="text-orange-500 text-8xl font">Kareem</h1>
          <div className='border border-gray-500 rounded-t-xl rounded-br-xl p-4'>
            <p className='text-end text-2xl text-white mt-3'>بسم <span className='text-orange-500'>الله</span> الرحمن الرحىم</p>
            <p className='text-center text-white m-2'>&#34;In the name of God, the Merciful, the Compassionate&#34;</p>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 w-full flex justify-center items-end pt-6 pb-8">
        <button className="text-white border-white border hover:bg-orange-500 hover:text-white hover:border-orange-500 py-2 p-4 rounded rounded-full">
          Welcome
        </button>
      </div>
    </div>
  );
}
