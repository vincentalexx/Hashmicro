import { useState } from 'react';
import hashmicro from '../public/assets/image/hashmicro.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {

    let [isOpen, setisOpen] = useState(false)

    const closeNavbar = () => {
        setisOpen(false);
    }

    return (
        <nav>
            <div className="bg-white fixed w-full">
                <div className='flex justify-between px-10 md:px-16 lg:px-20 h-20 items-center border-b-2 shadow-md'>
                    <img src={hashmicro} alt="hashmicro" className='h-8 object-cover'/>
                    <div className='flex items-center'>
                        <div onClick={() => setisOpen(!isOpen)} className='text-2xl cursor-pointer lg:hidden gap-x-14 ml-32'>
                            {
                                // <FontAwesomeIcon icon={faBars} />
                                isOpen ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} />
                            }
                        </div>
                        <div className='flex flex-col h-10 justify-between'>
                            <div className='hidden lg:flex'>
                                <ul className="flex space-x-16 items-center">
                                    <li className="">
                                        <div className=''>
                                            <p className='' style={{fontSize: "12px"}}>Email Sekarang</p>
                                            <p className='font-bold'>hello@hashmicro.co.id</p>
                                        </div>
                                    </li>
                                    <li className="">
                                        <div className=''>
                                            <p className='' style={{fontSize: "12px"}}>Hubungi Kami</p>
                                            <p className='font-bold'>021 5099 6750</p>
                                        </div>
                                    </li>
                                    <li>
                                        <button className='p-2 bg-red-700 text-white font-bold rounded-lg hover:brightness-90'>Demo Gratis</button>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>

                </div>
                {isOpen && (
                    <div className='p-6 lg:hidden px-16 border-b-2 ease-out duration-300 shadow-md' >
                        <ul className="flex flex-col space-y-4 ">
                            <li className="">
                                <div className=''>
                                    <p className='' style={{fontSize: "12px"}}>Email Sekarang</p>
                                    <p className='font-bold'>hello@hashmicro.co.id</p>
                                </div>
                            </li>
                            <hr className='border-1 border-gray-500'/>
                            <li className="">
                                <div className=''>
                                    <p className='' style={{fontSize: "12px"}}>Hubungi Kami</p>
                                    <p className='font-bold'>021 5099 6750</p>
                                </div>
                            </li>
                            <hr className='border-1 border-gray-500'/>
                            <li>
                                <button className='p-2 bg-red-700 text-white font-bold rounded-lg hover:bg-white hover:text-black border-red-700 border-2 ease-out duration-300'>Demo Gratis</button>
                            </li>
                        </ul>
                    </div>
                )}
            </div>

            
        </nav>
    );
}

export default Navbar