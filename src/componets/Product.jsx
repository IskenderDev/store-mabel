import React from 'react'
import prod from '../assets/bed.png'

const Product = () => {
    return (
        <div className='bg-slate-100 rounded-lg'>
            <div>
                <input type="checkbox" />
            </div>
            <div>
                <img src={prod} alt="" />
            </div>
            <div>
                Шкаф
            </div>
            <div>
                <div>
                    <button>+</button>
                </div>
                <div>
                    <input type="number" step={1}/>
                </div>
                <div>
                    -
                </div>
            </div>
        </div>
    )
}

export default Product