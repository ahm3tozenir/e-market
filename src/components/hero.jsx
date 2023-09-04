import React, { useState } from 'react'

function Hero() {

    const [count, setCount] = useState(0);

    const imgArr = [
        'https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68',
        'https://fastly.picsum.photos/id/11/2500/1667.jpg?hmac=xxjFJtAPgshYkysU_aqx2sZir-kIOjNR9vx0te7GycQ',
        'https://fastly.picsum.photos/id/12/2500/1667.jpg?hmac=Pe3284luVre9ZqNzv1jMFpLihFI6lwq7TPgMSsNXw2w'
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
    <div className='container mx-auto h-[40vh] relative my-[100px]'>
        <button onClick={prev} className='bg-gray-400 absolute top-1/2 left-0 transform -translate-y-1/2'>prev</button>
        <img className='w-full h-full' src={imgArr[count]} alt="" />
        <button onClick={next} className='bg-gray-400 absolute top-1/2 right-0 transform -translate-y-1/2'>next</button>
        <div className='container flex gap-5 justify-center mx-auto columns-3 h-[50px] bg-red-300'>
            <img src={imgArr[0]} onClick={()=>setCount(0)} className='h-full w-[50px]' alt="" />
            <img src={imgArr[1]} onClick={()=>setCount(1)} className='h-full w-[50px]' alt="" />
            <img src={imgArr[2]} onClick={()=>setCount(2)} className='h-full w-[50px]' alt="" />
        </div>
    </div>
  )
}

export default Hero