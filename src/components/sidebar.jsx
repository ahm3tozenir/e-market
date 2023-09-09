import React, { useEffect, useState } from 'react'


function Sidebar() {
  
  const [show,setShow] = useState(true)


  useEffect(()=>{

  },[show])

  if(show){
    document.body.style.overflowY = 'hidden'
  }else{
    document.body.style.overflowY = 'auto'
  }

  return (
    <>
    {show &&
    <aside className='absolute h-screen w-[300px] overflow-scroll z-10 left-0 top-0 bg-red-50 opacity-90'>
      <button onClick={()=>setShow(!show)} className='absolute top-0 right-0'>x</button>
      <div className='h-full text-center'>
          <p className=''>Kampanyalar</p>
          <p>Kuponlarım</p>
          <p>Hesabım</p>
          <p>Ayarlar</p>
          <p>Yardım</p>
      </div>
    </aside>
    }
  </>
  )
}

export default Sidebar