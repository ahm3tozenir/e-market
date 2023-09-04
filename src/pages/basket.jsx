import React, { useEffect, useState } from 'react'




function Basket() {

  let getArr = JSON.parse(localStorage.getItem('arr'))

  const [sepet,setSepet] = useState(getArr)

  function deleteHandler(event,i){
    console.log(event.target.parentElement)
    let newArr = [...sepet]
    newArr.splice(i,1)
    setSepet(newArr)
  }
  
  useEffect(()=>{
    localStorage.setItem('arr',JSON.stringify(sepet))
  },[sepet])

  let total = 0
  sepet.map((e)=>{
    total += Number(e[2])
  })

  return (
    <>
{    sepet.map((e,i)=>(
      <div key={i} id={i} className='bg-red-100 flex gap-10'>
        <p>{e[0]}</p>
        <img className='w-[40px]' src={e[1]} alt="" />
        <p>{e[2]}</p>
        <button onClick={(event)=>deleteHandler(event,i)}>sil</button>
      </div>
    ))}
    <p>{total}</p>
    </>
  )
}

export default Basket