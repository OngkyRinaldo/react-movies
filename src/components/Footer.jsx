import Logo from '../assets/img/logo.png';
import AppleLogo from '../assets/img/footer/apple.png';
import GooglePlay from '../assets/img/footer/game.png';
import Facebook from '../assets/img/footer/socmed/facebook.png';
import Instagram from '../assets/img/footer/socmed/instagram.png';
import Twitter from '../assets/img/footer/socmed/twitter.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-black w-full font-Dm-Sans text-white'>
            <div className='container mx-auto'>
                <div className='flex flex-col md:flex-row items-center justify-evenly'>
                    <div className='flex-row text-center  md:mt-5 '>
                        <h2 className='text-slate-400 text-lg'>
                            Download Our App
                        </h2>
                        <div className='flex justify-center items-center gap-3 mb-4 md:mb-0'>
                            <img
                                src={Logo}
                                alt='logo.png'
                                className='rounded-full object-cover w-10 h-10 mt-5 md:mt-0'
                            />
                            <h2 className='text-orange-500 text-lg pt-4'>
                                Movie
                            </h2>
                        </div>
                        <div className='flex  justify-center items-center px-5 flex-wrap md:gap-2 mb-5 '>
                            <div className=' border border-slate-500 bg-slate-700 rounded-full flex justify-center items-center gap-3 py-2 px-5'>
                                <img
                                    src={AppleLogo}
                                    alt='apple.png'
                                    className='w-10 h-10 object-cover p-2   '
                                />
                                <div className='flex-row '>
                                    <p className='text-slate-300 '>
                                        Download on the
                                    </p>
                                    <p className='text-white block'>
                                        Apple Store
                                    </p>
                                </div>
                            </div>
                            <div className=' border border-slate-500 bg-slate-700 rounded-full flex justify-center items-center gap-3 py-2 px-10 mt-3'>
                                <img
                                    src={GooglePlay}
                                    alt='GooglePlay.png'
                                    className='w-10 h-10 object-cover p-2   '
                                />
                                <div className='flex-row'>
                                    <p className='text-slate-300 '>Get it on</p>
                                    <p className='text-white block'>
                                        Google Play
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex-row text-center'>
                        <h2 className='text-slate-400 text-lg'>Navigation</h2>
                        <div className='flex  justify-center items-center gap-3 mb-4'>
                            <div className='flex-row text-slate-500'>
                                <Link
                                    to='/'
                                    className='block  hover:text-slate-300'
                                >
                                    Home
                                </Link>
                                <Link
                                    to='/upcomming'
                                    className='block  hover:text-slate-300'
                                >
                                    Upcomming Movie
                                </Link>
                                <Link
                                    to='/topRate'
                                    className='block  hover:text-slate-300'
                                >
                                    Top Rate
                                </Link>
                                <Link
                                    to='/mostViewed'
                                    className='block  hover:text-slate-300'
                                >
                                    Popular
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='flex-row text-center md:-mt-5 mb-4'>
                        <h2 className='text-slate-400 text-lg'>Legal</h2>
                        <div className='flex-row text-slate-500'>
                            <span className='block hover:text-slate-300'>
                                General info
                            </span>
                            <span className='block  hover:text-slate-300'>
                                Privacy Policy
                            </span>
                            <span className='block  hover:text-slate-300'>
                                Term of service
                            </span>
                        </div>
                    </div>
                    <div className='flex-row text-center  mb-4 md:mt-6'>
                        <h2 className='text-slate-400 text-lg'>Contact Us</h2>
                        <div className='flex-row text-slate-500'>
                            <span className='block hover:text-slate-300'>
                                support@movie.com
                            </span>
                            <span className='block hover:text-slate-300'>
                                Tel : +1234567890
                            </span>
                            <span className='block '>Or By Using :</span>
                            <div className='flex justify-center items-center gap-3 mt-2 '>
                                <img
                                    src={Facebook}
                                    alt='facebook'
                                    className='w-10 h-10 object-cover border bg-slate-500 rounded-full hover:border-orange-500'
                                />
                                <img
                                    src={Instagram}
                                    alt='instagram'
                                    className='w-10 h-10 object-cover border bg-slate-500 rounded-full hover:border-orange-500 p-2'
                                />
                                <img
                                    src={Twitter}
                                    alt='twitter'
                                    className='w-10 h-10 object-cover border bg-slate-500 rounded-full hover:border-orange-500'
                                />
                            </div>
                        </div>
                    </div>
                    <div className='flex-row text-center  mb-4 md:-mt-10'>
                        <h2 className='text-slate-400 text-lg'>
                            Share Website Via :
                        </h2>
                        <div className='flex-row text-slate-500'>
                            <div className='flex justify-center items-center gap-3 mt-2 '>
                                <img
                                    src={Facebook}
                                    alt='facebook'
                                    className='w-10 h-10 object-cover border bg-slate-500 rounded-full hover:border-orange-500'
                                />
                                <img
                                    src={Instagram}
                                    alt='instagram'
                                    className='w-10 h-10 object-cover border bg-slate-500 rounded-full hover:border-orange-500 p-2'
                                />
                                <img
                                    src={Twitter}
                                    alt='twitter'
                                    className='w-10 h-10 object-cover border bg-slate-500 rounded-full hover:border-orange-500'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
