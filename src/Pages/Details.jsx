import React from 'react'

const Details = () => {
  return (
    <>
    <div className="container mx-auto h-screen">
      <div className="flex justify-center md:items-center pt-[60px] px-2">
        <div className='flex flex-col md:flex-row h-max md:h-full md:p-5 p-6 justify-between items-center md:items-start rounded-lg bg-gradient-to-tr from-teal-100 to-violet-200 shadow-lg gap-2 '>

          <div className="md:w-[400px] w-60 h-full shadow-md rounded-md overflow-hidden">
              <img className="" src="./src/assets/images/bishaskto manush.jpg" alt=""/>
          </div>

          <div className="md:w-[400px] border-2 p-3 flex flex-col gap-2">
            <h1 className="text-3xl font-bold">Image Name(Bishakto Manush)</h1>
            <div className='flex flex-col gap-2 justify-end'>
              <button className='py-2 bg-white rounded-md shadow-md hover:shadow-lg hover:bg-slate-300'>Add to Wish List</button>
              <button className='py-2 bg-white rounded-md shadow-md hover:shadow-lg hover:bg-rose-200'>Add to Cart</button>
              <button className='py-2 bg-white rounded-md shadow-md hover:shadow-lg hover:bg-emerald-300'>Checkout</button>
            </div>
            
          </div>
        </div>
        
      </div>        
    </div>
    </>
  )
}

export default Details