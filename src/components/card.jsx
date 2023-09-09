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
    let count = 1
    function buyHandler(e){
        let addCost = Number(e.target.parentElement.previousElementSibling.lastChild.firstChild.textContent)
        setCost(cost + addCost)
        let id = e.target.parentElement.previousElementSibling.firstChild.nextElementSibling.textContent
        let title = e.target.parentElement.previousElementSibling.firstChild.textContent
        let img = e.target.parentElement.parentElement.firstChild.src
        let price = addCost

        getArr = JSON.parse(localStorage.getItem('arr'))

        for(let i=0; i<local.length; i++){
            if(id === local[i].id){
                let del = local.indexOf(local[i])
                local.splice(del,1)
                count = getArr[i].count +1
                console.log(local.indexOf(local[i]))       
            }
        }

        let lsObj = {
            'id':id,
            'title':title,
            'img':img,
            'price':price,
            'count':count
        }



        setLocal([...local,lsObj])
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
                {Object.values(data.products).map((e,i)=>(
                    <div key={i} className="mx-auto w-80 mb-5 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg box-border">
                    <img className="h-48 w-full object-cover object-center" src={e.images[0]} alt="Product" />
                    <div className="p-4">
                        <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900 truncate capitalize">{e.title}</h2>
                        <p className='hidden'>{e.id}</p>
                        <p className="mb-2 text-base dark:text-gray-300 text-gray-700 truncate">{e.description}</p>
                        <div className="flex items-center">
                        <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white after:content-['$']">{e.price}</p>
                        <p className="text-base  font-medium text-gray-500 line-through dark:text-gray-300">{e.price + e.price*e.discountPercentage/100}$</p>
                        <p className="ml-auto text-base font-medium text-green-500">{e.discountPercentage}%</p>
                        </div>
                    </div>
                    <div className='w-full flex justify-end'>
                        <button className="before:ease relative h-12 w-40 overflow-hidden border border-orange-500 bg-orange-500 text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-orange-500 hover:before:-translate-x-40" onClick={buyHandler}>İncele</button>
                        <button className="before:ease relative h-12 w-40 overflow-hidden border border-green-500 bg-green-500 text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-green-500 hover:before:-translate-x-40" onClick={buyHandler}>Shine</button>
                        
                    </div>
                    </div>
                ))}
                </>
        }
    </>
  )
}

export default Card

