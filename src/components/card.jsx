import React, { useEffect, useState } from 'react'


function Card() {


    let ls = Number(localStorage.getItem('fiyat'))
    let degisken = 0

    if(ls!==0){
        degisken = ls
    }
    

    let getArr = JSON.parse(localStorage.getItem('arr'))
    let empArr = []

    if(getArr){
      empArr = getArr
    }



    const [cost,setCost] = useState(degisken)
    const [local,setLocal] = useState(empArr)

    function buyHandler(e){
        let addCost = Number(e.target.previousElementSibling.textContent)
        setCost(cost + addCost)
        
        let title = e.target.parentElement.firstChild.textContent
        let img = e.target.previousElementSibling.previousElementSibling.previousElementSibling.firstChild.src
        let price = addCost
        setLocal([...local,[title,img,price]])
    }



    useEffect(()=>{
        localStorage.setItem('arr',JSON.stringify(local))
    },[local])


    useEffect(()=>{
        localStorage.setItem('fiyat',cost)
    },[cost])


    // api
    const [data,setData] = useState(null)
    async function getApi(){
        const response = await fetch('https://dummyjson.com/products')
        const fdata = await response.json()
        setData(fdata)
        
    }
    useEffect(()=>{
        getApi()
    },[])


  return (
    <>
        {
                data &&
                <>
                {Object.values(data.products).map((e)=>(
                    <div className=' h-[500px] bg-slate-500 border-2 border-sky-500' key={e.id}>
                        <div className='mx-auto w-[400px]'>
                            <h2>{e.title}</h2>
                            <div className='h-[300px]'>
                                <img className='h-full' src={e.images[0]} alt='product img' />
                            </div>
                            <p>{e.description}</p>
                            <p>{e.price}</p>
                            <button onClick={buyHandler}>Satın al</button>
                        </div>

                    </div>
                ))}
                </>
        }
    </>
  )
}

export default Card

