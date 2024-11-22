import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Header = ({insideHome}) => {
  const userWishlist = useSelector(state=>state.wishlistReducer)

  return (
    <nav className='flex bg-violet-600 fixed w-full p-5 text-white font-bold'>
        <Link to={'/'} className='text-2xl'> <i className='fa-solid fa-truck-fast me-1'></i>Daily Cart</Link>
        <ul className='flex-1 text-right'>
            { insideHome && <li className='list-none inline-block px-5'><input style={{width:'300px'}} className='rounded p-1' type="text" placeholder='Search Products Here' /></li>}
            <li className='list-none inline-block px-5'><Link to={'/Wishlist'}><i className='fa-solid fa-heart text-red-700'></i>Wishlist <span className='bg-black text-white p-1 rounded'>{userWishlist?.length}</span></Link></li>
            <li className='list-none inline-block px-5'><Link to={'/Cart'}><i className='fa-solid fa-cart-plus text-green-600'></i>Cart <span className='bg-black text-white p-1 rounded'>10</span></Link></li>
        </ul>
    </nav>
  )
}

export default Header