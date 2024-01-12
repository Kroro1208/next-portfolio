"use client"
import React from 'react'
import Header from './Header'
import CountUp from 'react-countup'

function Hero() {
  return (
    <div className='justify-between grid-cols-12' id='home'>
      <div className='flex flex-col col-span-8 p-[2rem] pt-[1.5rem] gap-[2rem]'>
        <Header />
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
      <div className='flex gap-[2rem] ml-[2.5rem] pt-[2rem] text-center'>
        <div className='flex flex-col'>
          <span className='text-white text-3xl'>
            <CountUp
              start={0}
              end={20}
              duration={5}
            />人</span>
          <p className='text-slate-700'>在籍トレーナー</p>
        </div>
        <div>
          <span className='text-white text-3xl'>
            <CountUp
              start={0}
              end={150}
              duration={5}
            />人</span>
          <p className='text-slate-700'>会員数</p>
        </div>
        <div>
          <span className='text-white text-3xl'>
            <CountUp
              start={0}
              end={55}
              duration={5}
            /></span>
          <p className='text-slate-700'>店舗数</p>
        </div>
      </div>
    </div>
  )
}

export default Hero