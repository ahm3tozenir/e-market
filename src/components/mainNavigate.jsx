import React, { useEffect, useState } from 'react'
import { NavLink,Link } from "react-router-dom";
import Sidebar from './sidebar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function MainNavigate() {


  const [show,setShow] = useState(false)


  return (
    <div className='flex justify-between items-center'>
        <div className='flex flex-col'>
          <Link to="/">LOGO</Link>
          <button onClick={()=>setShow(!show)} className='relative top-[24px] left-[24px]'><FontAwesomeIcon icon={faBars} /></button>
          {show && <Sidebar/>}
        </div>

        <div className='w-[60%] h-10 '>
            <input type="search" name="" id="" className='w-full h-full rounded-[10px] p-5 bg-slate-400' />
        </div>
        <ul className='flex gap-28'>
            <li>Hesabım</li>
            <li>Siparişler</li>
            <NavLink to="/sepetim">Sepetim</NavLink>
        </ul>       
    </div>
  )
}

export default MainNavigate