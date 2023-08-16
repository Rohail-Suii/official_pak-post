import React from 'react'

const Side_bar = () => {
    return (
        <div>
            <div className='fixed left-0 top-1/2  flex flex-col  items-left'>
                <div>
                    <a href='#' className='text-2xl  bg-black border-collapse border-white text-white font-bold'>Home</a>
                </div>
                <div>
                    <a href='#' className='text-2xl bg-black text-white font-bold'>About</a>
                </div>
                <div>
                    <a href='#' className='text-2xl bg-black text-white font-bold'>Contact</a>
                </div>

            </div>
        </div>
    )
}

export default Side_bar