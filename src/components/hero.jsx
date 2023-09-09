import React, { useState } from 'react'

function Hero() {

    const [count, setCount] = useState(0);

    const imgArr = [
        'https://images.hepsiburada.net/banners/s/0/672-378/bannerImage2134_20230623231018.jpeg/format:webp',
        'https://images.hepsiburada.net/banners/s/0/672-378/bannerImage2117_20230623152653.jpeg/format:webp',
        'https://images.hepsiburada.net/banners/s/0/672-378/bannerImage2110_20230823121121.jpeg/format:webp'
    ]
    const thumbnailImage = [
        'https://images.hepsiburada.net/banners/s/0/71-40/thumbnailImage2127_20230623231012.jpeg/format:webp',
        'https://images.hepsiburada.net/banners/s/0/71-40/thumbnailImage2111_20230623152646.jpeg/format:webp',
        'https://images.hepsiburada.net/banners/s/0/71-40/thumbnailImage2102_20230823121113.png/format:webp'

    ]

    function next(){
        if(count<imgArr.length-1){
            setCount(count+1)
        }else if(count === imgArr.length-1){
            setCount(0)
        }
    }

    function prev(){
        if(count>0){
            setCount(count-1)
        }else if(count === 0){
            setCount(imgArr.length-1)
        }
    }

  return (
    <div className='container mx-auto w-[672px] h-[378px] relative my-[100px] border-8 border-black rounded hidden sm:block'>
        <button onClick={prev} className='absolute top-1/2 left-[-20px] bg-white transform -translate-y-1/2 text-3xl font-bold rounded-full w-[50px] h-[50px] transition duration-100 ease-in-out hover:bg-black hover:border-black hover:text-slate-300'>{'<'}</button>
        <img className='w-full h-full rounded' src={imgArr[count]} alt="" />
        <button onClick={next} className='absolute top-1/2 right-[-20px] bg-white transform -translate-y-1/2 text-3xl font-bold rounded-full w-[50px] h-[50px] transition duration-100 ease-in-out hover:bg-black hover:border-black hover:text-slate-300'>{'>'}</button>
        <div className='container flex gap-5 justify-center mx-auto columns-3 w-[full] mt-[32px]'>
            <img src={thumbnailImage[0]} onClick={()=>setCount(0)} className='h-[40px] w-[71px] border-black border-4 rounded cursor-pointer' alt="" />
            <img src={thumbnailImage[1]} onClick={()=>setCount(1)} className='h-[40px] w-[71px] border-black border-4 rounded cursor-pointer' alt="" />
            <img src={thumbnailImage[2]} onClick={()=>setCount(2)} className='h-[40px] w-[71px] border-black border-4 rounded cursor-pointer' alt="" />
        </div>
    </div>
  )
}

export default Hero