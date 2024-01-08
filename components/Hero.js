import React from 'react'
import Header from './Header'

function Hero() {
  return (
    <div className='justify-between grid-cols-12' id='home'>
      <div className='flex flex-col col-span-8 p-[2rem] pt-[1.5rem] gap-[2rem]'>
        <Header/>
        <div className='relative flex mt-[4rem] bg-darkdarkGray rounded-full w-fit py-[1.2rem] px-[0.8rem] text-white text-center justify-start'>
          <div className='absolute bg-pink w-[5.5rem] h-[80%] left-[0.5rem] rounded-full bottom-[0.375rem] z-10'></div>
          <p className='z-20'>本気で変わろうとしているあなたへ</p>
        </div>
        <div className='flex flex-col gap-[1.5rem] text-7xl font-bold text-white'>
          <div>
            <span className='stroke-text'>NEXT</span>
            <span>.Pro</span>
          </div>
          <div>
            <span>フィットネスジム</span>
          </div>
          <div className='text-lg font-normal w-[80%] tracking-wider normal-case'>
            <p>仕事前の朝活に最適！短期間のサーキットトレーニングで脂肪を燃やす！</p>
          </div>
        </div>
      </div>
      <div className='col-span-4'>
      </div>
    </div>
  )
}

export default Hero