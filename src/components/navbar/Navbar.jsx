import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);

    const navLinkStyles = ({ isActive }) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
            color: isActive ? '#C0F73F' : '#D1D0D2',
        };
    };

    return (
        <header
            className=' w-full mx-auto border-b border-white'
            data-aos='fade-down'
        >
            <nav className='w-full text-xl  '>
                <div className=' justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8'>
                    <div>
                        <div className=' flex items-center justify-between py-3 md:py-5 md:block'>
                            <Link to='/' className='text-white'>
                                <span className='text-green'>M</span>
                                ovie
                            </Link>
                            <div className='md:hidden'>
                                <button
                                    className='p-2 text-gray-700 rounded-md outline-none bg-white '
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    {navbar ? (
                                        <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            className='w-6 h-6 '
                                            viewBox='0 0 20 20'
                                            fill='currentColor'
                                        >
                                            <path
                                                fillRule='evenodd'
                                                d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                                                clipRule='evenodd'
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            className='w-6 h-6 '
                                            fill='none'
                                            viewBox='0 0 24 24'
                                            stroke='currentColor'
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                d='M4 6h16M4 12h16M4 18h16'
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div
                            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                                navbar ? 'block' : 'hidden'
                            }`}
                        >
                            <ul className='items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 mt-5'>
                                <li className='text-center'>
                                    <NavLink
                                        to='/'
                                        className='text-white cursor-pointer py-2 px-5 rounded-3xl text-bioMain  '
                                        style={navLinkStyles}
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                <li className='text-center'>
                                    <NavLink
                                        to='/upcomming'
                                        className='text-white cursor-pointer py-2 px-5 rounded-3xl text-bioMain '
                                    >
                                        Upcomming Movie
                                    </NavLink>
                                </li>
                                <li className='text-center'>
                                    <NavLink
                                        to='/topRate'
                                        className='text-white cursor-pointer py-2 px-5 rounded-3xl text-bioMain  '
                                    >
                                        Top Rate
                                    </NavLink>
                                </li>
                                <li className='text-center'>
                                    <NavLink
                                        to='/mostViewed'
                                        className='text-white cursor-pointer py-2 px-5 rounded-3xl text-bioMain  '
                                    >
                                        Popular
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
