import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='w-full h-fit pb-10 mt-10'>
            <section className='container mx-auto '>
                <div className='text-center  md:flex md:flex-wrap md:justify-between md:items-center'>
                    <p className='text-white text-4xl mb-5 md:mb-0'>
                        <span className='text-green'>M</span>
                        ovie
                    </p>

                    <div className='flex justify-center items-center flex-wrap gap-5 text-2xl'>
                        <p className='text-white'>Follow Us On:</p>
                        <div className='text-green cursor-pointer hover:text-white'>
                            <i className='fa-brands fa-facebook'></i>
                        </div>
                        <div className='text-green cursor-pointer hover:text-white'>
                            <i className='fa-brands fa-twitter'></i>
                        </div>
                        <div className='text-green cursor-pointer hover:text-white '>
                            <i className='fa-brands fa-instagram'></i>
                        </div>
                    </div>
                </div>
            </section>
            <div className='border-b border-green mt-10'></div>

            <section className='container mx-auto mt-5'>
                <div className='grid grid-cols-2 text-center md:flex md:flex-wrap md:justify-evenly md:items-start gap-5'>
                    <div className='text-white'>
                        <p className='text-2xl  mb-5 md:mb-2'>Movie</p>
                        <p className='text-lg text-slate-500 hover:text-green'>
                            Action
                        </p>
                        <p className='text-lg text-slate-500 hover:text-green cursor-pointer'>
                            Comedy
                        </p>
                        <p className='text-lg text-slate-500 hover:text-green cursor-pointer'>
                            Horror
                        </p>
                        <p className='text-lg text-slate-500 hover:text-green cursor-pointer'>
                            Animation
                        </p>
                        <p className='text-lg text-slate-500 hover:text-green cursor-pointer'>
                            Fantacy
                        </p>
                    </div>
                    <div className='text-white'>
                        <p className='text-2xl  mb-5 md:mb-2'>Series</p>
                        <p className='text-lg text-slate-500 hover:text-green cursor-pointer'>
                            Reality Shows
                        </p>
                        <p className='text-lg text-slate-500 hover:text-green cursor-pointer'>
                            Classic Shows
                        </p>
                        <p className='text-lg text-slate-500 hover:text-green cursor-pointer'>
                            Valentine Day
                        </p>
                        <p className='text-lg text-slate-500 hover:text-green cursor-pointer'>
                            Comedy
                        </p>
                        <p className='text-lg text-slate-500 hover:text-green cursor-pointer'>
                            Animation
                        </p>
                    </div>
                    <div className='text-white'>
                        <p className='text-2xl mb-5 md:mb-2'>Support</p>
                        <p className='text-lg text-slate-500 hover:text-green cursor-pointer'>
                            General info
                        </p>
                        <p className='text-lg text-slate-500 hover:text-green cursor-pointer'>
                            Privacy Policy
                        </p>
                        <p className='text-lg text-slate-500 hover:text-green cursor-pointer'>
                            Terms of Service
                        </p>
                        <p className='text-lg text-slate-500 hover:text-green cursor-pointer'>
                            Help Center
                        </p>
                    </div>
                    <div className='text-white'>
                        <p className='text-2xl  mb-5 md:mb-2'>Support</p>
                        <p className='text-lg text-slate-500 hover:text-green cursor-pointer'>
                            support@movies.com
                        </p>
                        <p className='text-lg text-slate-500 hover:text-green cursor-pointer'>
                            <i className='fa-solid fa-phone'></i>(+123)4567890
                        </p>
                    </div>
                </div>
            </section>

            <div className='px-5 text-center block md:flex md:justify-evenly md:items-center md:gap-2 text-white mt-10'>
                <Link
                    to='https://www.behance.net/gallery/174715751/Custom-Movie-Website-landing-page-UI-Design?tracking_source=search_projects|movie+website+web+design'
                    target='_blank'
                    className='cursor-pointer'
                >
                    Design bycar RAFSAN RAJKIN copyright © 2023. All rights are
                    reserved
                </Link>

                <div className='text-lg cursor-pointer hover:text-green mt-5 md:mt-0'>
                    <Link
                        to='https://github.com/OngkyRinaldo/react-movies'
                        target='_blank'
                        className='cursor-pointer '
                    >
                        <i className='fa-brands fa-github'></i>
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
