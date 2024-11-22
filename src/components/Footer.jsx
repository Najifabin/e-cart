import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div style={{ height: '250px' }} className="bg-violet-600 container w-full p-2 mt-5 text-white">
                <div className="flex  justify-evenly">
                    <div style={{ width: '400px' }}>
                        <h5 className='text-2xl'> <i className='fa-solid fa-truck-fast me-1'></i>Daily Cart</h5>
                        <p>Designed and built with all the love in the world by the ZERO team with the help of our contributors.</p>
                        <p>Code licensed ZERO, docs CC BY 3.0.</p>
                        <p>Currently v5.3.3.</p>
                    </div>

                    <div className="flex flex-col">
                        <h5 className='font-semibold text-xl'>Links</h5>
                        <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>Home</Link>
                        <Link to={'/Wishlist'} style={{ textDecoration: 'none', color: 'white' }}>Wishlist</Link>
                        <Link to={'/Cart'} style={{ textDecoration: 'none', color: 'white' }}>Cart</Link>
                    </div>
                    <div className="flex flex-col">
                        <h5 className='font-semibold text-xl'>Guides</h5>
                        <a style={{ textDecoration: 'none', color: 'white' }} href="https://react.dev/" target='_blank'>React</a>
                        <a style={{ textDecoration: 'none', color: 'white' }} href="https://reactrouter.com/en/main" target='_blank'>React Router</a>
                        <a style={{ textDecoration: 'none', color: 'white' }} href="https://react-bootstrap.github.io/" target='_blank'>React Bootstrap</a>
                    </div>
                    <div className="flex flex-col">
                        <h5 className='font-semibold text-xl'>Contact</h5>
                        <div className="flex">
                            <input  placeholder='Enter your email here' type="text" className='rounded p-1  me-2' />
                            <button className='btn btn-info'><i className='fa-solid fa-arrow-right'></i></button>
                        </div>
                        <div className="flex justify-around mt-3">
                            <a href="" style={{ textDecoration: 'none', color: 'white' }} target='_blank'><i className='fa-brands fa-twitter'></i></a>
                            <a href="" style={{ textDecoration: 'none', color: 'white' }} target='_blank'><i className='fa-brands fa-instagram'></i></a>
                            <a href="" style={{ textDecoration: 'none', color: 'white' }} target='_blank'><i className='fa-brands fa-facebook'></i></a>
                            <a href="" style={{ textDecoration: 'none', color: 'white' }} target='_blank'><i className='fa-brands fa-linkedin'></i></a>
                            <a href="" style={{ textDecoration: 'none', color: 'white' }} target='_blank'><i className='fa-brands fa-github'></i></a>
                            <a href="" style={{ textDecoration: 'none', color: 'white' }} target='_blank'><i className='fa-brands fa-phone'></i></a>
                        </div>
                    </div>
                </div>
                <p className='text-center mt-3'>Copyright &copy; July 2024 Batch, E-Cart. Built with React</p>
            </div>

        </>
    )
}

export default Footer