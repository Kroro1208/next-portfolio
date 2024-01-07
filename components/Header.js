import React from 'react'
import Image from 'next/image'

function Header() {
    return (
        <div className='flex justify-between'>
            <Image
                src={"/assets/whitelogo.png"}
                alt="image"
                width={100}
                height={60}
                className='w-[7rem]'
            />

            <div>
                <ul className='flex gap-[2rem] text-white'>
                    <li className='cursor-pointer hover:text-black'>ホーム</li>
                    <li className='cursor-pointer hover:text-black'>プログラム</li>
                    <li className='cursor-pointer hover:text-black'>選ばれる理由</li>
                    <li className='cursor-pointer hover:text-black'>トレーニングプラン</li>
                    <li className='cursor-pointer hover:text-black'>参加者の声</li>
                </ul>
            </div>
        </div>
    )
}

export default Header