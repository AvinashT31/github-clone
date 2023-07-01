import React from 'react'

const Home = () => {
    return (
        <>
            <div className='w-full h-128 bg-[url(https://images8.alphacoders.com/394/394958.jpg)] bg-cover bg-no-repeat'>
                <nav className='w-11/12 m-auto h-14 flex justify-between pt-3'>
                    <div className='w-2/4 h-full flex pt-2'>
                        <div className="w-10 h-full">
                            <svg className="text-white" height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true">
                                <path className="fill-current" d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
                            </svg>
                        </div>
                        <div className='w-24 h-full flex justify-center text-white'>
                            <p className='mt-1'>Product</p>
                        </div>
                        <div className='w-24 h-full flex justify-center  text-white'>
                            <p className='mt-1'>Solutions</p>
                        </div>
                        <div className='w-32 h-full flex justify-center  text-white'>
                            <p className='mt-1'>open source</p>
                        </div>
                        <div className='w-24 h-full flex justify-center  text-white'>
                            <p className='mt-1'>Pricing</p>
                        </div>
                    </div>
                    <div className='w-2/5 h-full flex justify-end pt-2'>
                        <div className='border border-gray-600 w-60 h-8 mt-1 flex rounded-xl bg-gray-600'>
                            <input className='w-40 border-none outline-none ml-2 bg-gray-600 text-white placeholder:text-white' type="text" placeholder='Search Github' />
                        </div>
                        <div className='w-16 h-full ml-2'>
                            <p className='mt-1  text-white'>Sign in</p>
                        </div>
                        <div className='border border-white w-16 h-8 mt-1 rounded-xl ml-2'>
                            <p className=' text-white'>Sign up</p>
                        </div>
                    </div>
                </nav>

                <main className='w-11/12 m-auto mt-12 h-139 flex justify-between'>
                    <div className='w-3/4 h-full'>
                        <img src="https://github.githubassets.com/images/modules/site/home-campaign/lines-hero.svg" alt="" />
                        <div className='border border-slate-600 w-96 h-16 relative left-20 bottom-80 rounded-full flex bg-black'>
                            <div className='w-16'>
                                <img className='relative left-3 top-2' src="https://github.githubassets.com/images/modules/site/eyebrow-banner-icon-copilot-x.svg" alt="" />
                            </div>
                            <div className='w-10/12 text-white text-left pl-2 pt-1'>
                                <h4>Introducing GitHub Copilot X</h4>
                                <p className='text-slate-600'>Your AI pair programmer is leveling up</p>
                            </div>
                            <div className='w-8 flex items-center justify-center cursor-pointer'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffffff" viewBox="0 0 256 256"><path d="M184.49,136.49l-80,80a12,12,0,0,1-17-17L159,128,87.51,56.49a12,12,0,1,1,17-17l80,80A12,12,0,0,1,184.49,136.49Z"></path></svg>
                            </div>
                        </div>
                        <div>
                            <h1 className='relative bottom-72 left-20 text-left text-6xl text-white'>Let's build from here</h1>
                            <p className='relative bottom-72 left-20 text-left text-slate-900 font-semibold mt-5 text-3xl '>Harnessed for productivity. Designed for collaboration. Celebrated for built-in security. Welcome to the platform developers love.</p>
                        </div>
                    </div>
                    <div className='w-1/3 h-full'>
                        <img className='w-3/4' src="https://github.githubassets.com/images/modules/site/home-campaign/hero-drone.webp" alt="" />
                    </div>
                </main>
            </div>

            <div className='w-full h-140 bg-gray-800'>
                <main className='w-128 m-auto h-full flex justify-between'>
                    <div className='w-12 h-full ml-4'>
                        <div className='h-10 flex justify-center items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffffff" viewBox="0 0 256 256"><path d="M168.49,199.51a12,12,0,0,1-17,17l-80-80a12,12,0,0,1,0-17l80-80a12,12,0,0,1,17,17L97,128Z"></path></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffffff" viewBox="0 0 256 256"><path d="M184.49,136.49l-80,80a12,12,0,0,1-17-17L159,128,87.51,56.49a12,12,0,1,1,17-17l80,80A12,12,0,0,1,184.49,136.49Z"></path></svg>
                        </div>
                        <div className='border border-white w-1 h-96 flex justify-center items-center ml-5 mt-2 bg-sky-500 rounded border-none outline-none'>

                        </div>
                    </div>
                    <div className='w-11/12 h-full'>
                        <div className='w-full h-14 mt-14 flex'>
                            <div className='w-96 h-10 rounded-lg flex bg-white border-none outline-none'>
                                <div className='border border-white w-56 h-full rounded-l-lg flex justify-start border-none outline-none'>
                                    <input className='w-80 border-none outline-none ml-2 pl-2' type="text" placeholder='Email address' />
                                </div>
                                <div className='w-40 h-full rounded-r-lg flex justify-center items-center bg-sky-700 text-white font-semibold border-none outline-none cursor-pointer'>
                                    <p>Sign up for GitHub</p>
                                </div>
                            </div>
                            <div className='border border-white w-0 h-10 ml-4'>

                            </div>
                            <div className='border border-sky-800 w-64 h-10 ml-4 rounded-lg flex justify-center items-center text-white font-semibold cursor-pointer'>
                                <p>Start a free enterprise trial</p>
                                <svg className='ml-2' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffffff" viewBox="0 0 256 256"><path d="M184.49,136.49l-80,80a12,12,0,0,1-17-17L159,128,87.51,56.49a12,12,0,1,1,17-17l80,80A12,12,0,0,1,184.49,136.49Z"></path></svg>
                            </div>
                        </div>
                        <div className='h-36 mt-28 text-white'>
                            <p className='text-left'>Trusted by the world’s leading organizations</p>
                            <div className='w-full h-16 mt-10 flex justify-start items-center'>
                                <div className='w-28 h-full'>
                                    <img src="https://github.githubassets.com/images/modules/site/home-campaign/logos/stripe.svg" alt="" />
                                </div>
                                <div className='w-36 h-full ml-8'>
                                    <img src="https://github.githubassets.com/images/modules/site/home-campaign/logos/pinterest.svg" alt="" />
                                </div>
                                <div className='w-32 h-full ml-8'>
                                    <img src="https://github.githubassets.com/images/modules/site/home-campaign/logos/kpmg.svg" alt="" />
                                </div>
                                <div className='w-44 h-full ml-8'>
                                    <img src="https://github.githubassets.com/images/modules/site/home-campaign/logos/mercedes.svg" alt="" />
                                </div>
                                <div className='w-28 h-full ml-8'>
                                    <img src="https://github.githubassets.com/images/modules/site/home-campaign/logos/pg.svg" alt="" />
                                </div>
                                <div className='w-40 h-full ml-8'>
                                    <img src="https://github.githubassets.com/images/modules/site/home-campaign/logos/telus.svg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>

            <main className='w-full h-96 bg-gray-800'>
                <div className='w-128 m-auto h-full flex justify-between'>
                    <div className='w-12 h-full ml-4'>
                        <div className='h-10 flex justify-center items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#ffffff" viewBox="0 0 256 256"><path d="M216,48H180V40a28,28,0,0,0-28-28H104A28,28,0,0,0,76,40v8H40A20,20,0,0,0,20,68V196a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V68A20,20,0,0,0,216,48ZM100,40a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4v8H100Zm56,32V192H100V72ZM44,72H76V192H44ZM212,192H180V72h32Z"></path></svg>
                        </div>
                        <div className='border border-white w-1 h-80 flex justify-center items-center ml-5 mt-2 bg-sky-500 rounded border-none outline-none'>

                        </div>
                    </div>
                    <div className='w-11/12 h-full'>
                        <div className='w-2/3 h-11 '>
                            <p className='text-white text-3xl text-left'>Productivity</p>
                            <p className='text-4xl text-left mt-16 text-green-600'>Accelerate high-quality software development.<span className='text-white'>Our AI-powered platform drives innovation with tools that boost developer velocity.</span></p>
                        </div>
                    </div>
                </div>
            </main>
        </>

    )
}

export default Home
