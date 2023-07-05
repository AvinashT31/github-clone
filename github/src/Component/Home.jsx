import React from 'react'

const Home = () => {
    return (
        <>
            <div className='border border-black w-full h-screen'>
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

                {/* sign up for github */}
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

                {/* productivity */}
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

                {/* Code */}
                <main className='pt-1 w-full h-128 bg-gray-800'>
                    <div className='border border-zinc-600 w-11/12 m-auto mt-20 h-139 rounded-2xl'>
                        <div className='border border-zinc-600 w-full h-12 rounded-t-2xl flex'>
                            <div className='w-16 h-full flex justify-center items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffffff" viewBox="0 0 256 256"><path d="M168.49,199.51a12,12,0,0,1-17,17l-80-80a12,12,0,0,1,0-17l80-80a12,12,0,0,1,17,17L97,128Z"></path></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffffff" viewBox="0 0 256 256"><path d="M184.49,136.49l-80,80a12,12,0,0,1-17-17L159,128,87.51,56.49a12,12,0,1,1,17-17l80,80A12,12,0,0,1,184.49,136.49Z"></path></svg>
                            </div>
                            <div className='w-128 h-full'>
                                <div className='border border-black w-2/4 m-auto h-7 mt-2 flex justify-between items-center bg-black rounded'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#ffffff" viewBox="0 0 256 256"><path d="M208,76H180V56A52,52,0,0,0,76,56V76H48A20,20,0,0,0,28,96V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V96A20,20,0,0,0,208,76ZM100,56a28,28,0,0,1,56,0V76H100ZM204,204H52V100H204Zm-60-52a16,16,0,1,1-16-16A16,16,0,0,1,144,152Z"></path></svg>
                                    <p className='text-white'>mona-github-github-g59jpq2w5w7.github.dev</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffffff" viewBox="0 0 256 256"><path d="M228,128a12,12,0,0,1-12,12H140v76a12,12,0,0,1-24,0V140H40a12,12,0,0,1,0-24h76V40a12,12,0,0,1,24,0v76h76A12,12,0,0,1,228,128Z"></path></svg>
                                </div>
                            </div>
                            <div className='w-16 h-full flex justify-center items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#ffffff" viewBox="0 0 256 256"><path d="M228,128a12,12,0,0,1-12,12H140v76a12,12,0,0,1-24,0V140H40a12,12,0,0,1,0-24h76V40a12,12,0,0,1,24,0v76h76A12,12,0,0,1,228,128Z"></path></svg>
                            </div>
                        </div>
                        <div className='w-full h-143 rounded-b-2xl flex'>
                            <div className='w-16 h-full'>
                                <div className='w-full h-14 flex justify-center items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffffff" viewBox="0 0 256 256"><path d="M228,128a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,128ZM40,76H216a12,12,0,0,0,0-24H40a12,12,0,0,0,0,24ZM216,180H40a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Z"></path></svg>
                                </div>
                            </div>
                            <div className='border border-zinc-600 w-1/2 h-full'>
                                <div className='w-full h-14'>
                                    <ul className='flex justify-start items-center'>
                                        <li className='w-24 bg-black mt-7 ml-3 text-white'><a href="">index.html</a></li>
                                        <li className='ml-3 mt-7 text-white'><a href="">script.js</a></li>
                                        <li className='ml-3 mt-7 text-white'><a href="">packages.json</a></li>
                                    </ul>
                                </div>
                                <div className='w-full h-128'>
                                    <div className='border border-zinc-600 w-full h-72 flex'>
                                        <div className='w-8 h-full'>
                                            <ul className='text-white'>
                                                <li>1</li>
                                                <li>2</li>
                                                <li>3</li>
                                                <li>4</li>
                                                <li>5</li>
                                                <li>6</li>
                                                <li>7</li>
                                                <li>8</li>
                                                <li>9</li>
                                                <li>10</li>
                                                <li>11</li>
                                                <li>12</li>
                                            </ul>
                                        </div>
                                        <div className="w-130 h-full overflow-x-auto flex-1 text-white scrollbar-thin scrollbar-thumb-blue-5    00 scrollbar-track-zinc-600">
                                            <pre class="f4"><span class="code-editor-line-mktg d-inline-block js-type-letters">&lt;<span class="pl-ent">div</span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>d-flex flex-justify-center flex-lg-justify-end color-bg-default<span class="pl-pds">"</span></span>&gt;</span></pre>
                                            <pre class="f4"><span class="code-editor-line-mktg d-inline-block js-type-letters">&lt;<span class="pl-ent">div</span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>position-absolute width-full color-bg-default<span class="pl-pds">"</span></span> <span class="pl-e">style</span>=<span class="pl-s"><span class="pl-pds">"</span><span class="pl-s1"><span class="pl-c1"><span class="pl-c1">bottom</span></span>: <span class="pl-c1">-4<span class="pl-k">rem</span></span>;</span><span class="pl-pds">"</span></span>&gt;</span></pre>
                                            <pre class="f4"><span class="code-editor-line-mktg d-inline-block js-type-letters">  &lt;<span class="pl-ent">div</span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>container-xl p-responsive<span class="pl-pds">"</span></span>&gt;</span></pre>
                                            <pre class="f4"><span class="code-editor-line-mktg d-inline-block js-type-letters">      &lt;<span class="pl-ent">div</span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>col-8 col-sm-7 col-md-6 col-lg-5 position-relative z-2 right-lg-n12 events-none<span class="pl-pds">"</span></span>&gt;</span></pre>
                                            <pre class="f4"><span class="code-editor-line-mktg d-inline-block js-type-letters">        &lt;<span class="pl-ent">picture</span>&gt;</span></pre>
                                            <pre class="f4"><span class="code-editor-line-mktg d-inline-block js-type-letters">          &lt;<span class="pl-ent">source</span> <span class="pl-e">srcset</span>=<span class="pl-s"><span class="pl-pds">"</span>astro-mona.webp<span class="pl-pds">"</span></span> <span class="pl-e">type</span>=<span class="pl-s"><span class="pl-pds">"</span>image/webp<span class="pl-pds">"</span></span>&gt;</span></pre>
                                            <pre class="f4"><span class="code-editor-line-mktg d-inline-block js-type-letters">          &lt;<span class="pl-ent">source</span> <span class="pl-e">srcset</span>=<span class="pl-s"><span class="pl-pds">"</span>astro-mona.webp<span class="pl-pds">"</span></span> <span class="pl-e">type</span>=<span class="pl-s"><span class="pl-pds">"</span>image/webp<span class="pl-pds">"</span></span>&gt;</span></pre>
                                            <pre class="f4"><span class="code-editor-line-mktg d-inline-block js-type-letters">        &lt;/<span class="pl-ent">picture</span>&gt;</span></pre>
                                            <pre class="f4"><span class="code-editor-line-mktg d-inline-block js-type-letters">      &lt;/<span class="pl-ent">div</span>&gt;</span></pre>
                                            <pre class="f4"><span class="code-editor-line-mktg d-inline-block js-type-letters">    &lt;/<span class="pl-ent">div</span>&gt;</span></pre>
                                            <pre class="f4"><span class="code-editor-line-mktg d-inline-block js-type-letters">    &lt;/<span class="pl-ent">div</span>&gt;</span></pre>
                                            <pre class="f4"><span class="code-editor-line-mktg d-inline-block js-type-letters">&lt;/<span class="pl-ent">div</span>&gt;</span></pre>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-1/2 h-full'>
                                <div className='h-14 flex justify-between items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffffff" viewBox="0 0 256 256"><path d="M228,128a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,128ZM40,76H216a12,12,0,0,0,0-24H40a12,12,0,0,0,0,24ZM216,180H40a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Z"></path></svg>
                                    <svg className="text-white" height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true">
                                        <path className="fill-current" d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffffff" viewBox="0 0 256 256"><path d="M225.29,165.93C216.61,151,212,129.57,212,104a84,84,0,0,0-168,0c0,25.58-4.59,47-13.27,61.93A20.08,20.08,0,0,0,30.66,186,19.77,19.77,0,0,0,48,196H208a19.77,19.77,0,0,0,17.31-10A20.08,20.08,0,0,0,225.29,165.93ZM54.66,172C63.51,154,68,131.14,68,104a60,60,0,0,1,120,0c0,27.13,4.48,50,13.33,68ZM172,224a12,12,0,0,1-12,12H96a12,12,0,0,1,0-24h64A12,12,0,0,1,172,224Z"></path></svg>
                                </div>
                                <div className='w-full h-142 bg-cover'>
                                    <img className='bg-cover w-full h-full rounded-br-2xl' src="https://github.githubassets.com/images/modules/site/home/globe.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                </main>

                <main className='w-full bg-gray-800 h-138 z-10'>
                    <div className='w-11/12 m-auto h-143 flex justify-between'>
                        <div className='w-24 h-full flex justify-center items-center'>
                            <div className='w-131 h-full ml-4 bg-primary rounded'>

                            </div>
                            <div>
                                <img className='relative top-24' src="https://github.githubassets.com/images/modules/site/home-campaign/git-branch-productivity.svg" alt="" />
                            </div>
                        </div>
                        <div className='w-11/12 h-full bg-[url(https://github.githubassets.com/images/modules/site/home-campaign/bg-stars-1.webp)] bg-cover'>
                            <div className='w-full h-64 flex justify-between mt-6'>
                                <div className='w-2/5 h-full'>
                                    <p className='text-left text-xl font-bold mt-5 text-white'>GitHub Codespaces<span className='text-gray-500'> offers a complete dev environment in seconds, so you can code, build, test, and open pull requests from any repo anywhere</span></p>
                                    <div className='w-80 h-8 mt-5 font-bold text-white flex justify-start items-center'>
                                        <p>Check out GitHub Codespaces</p>
                                        <svg className='ml-5' xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#ffffff" viewBox="0 0 256 256"><path d="M184.49,136.49l-80,80a12,12,0,0,1-17-17L159,128,87.51,56.49a12,12,0,1,1,17-17l80,80A12,12,0,0,1,184.49,136.49Z"></path></svg>
                                    </div>
                                </div>
                                <div className='w-1/2 h-full'>
                                    <img className='w-80 mt-5 ml-12' src="https://github.githubassets.com/images/modules/site/codespaces/illo-ports.png" alt="" />
                                    <img className='w-72 relative left-64 bottom-80' src="https://github.githubassets.com/images/modules/site/codespaces/illo-context-menu.png" alt="" />
                                </div>
                            </div>
                            <div className='w-full h-40 mt-16'>
                                <div className='border border-primary text-primary w-24 h-5 rounded-2xl flex justify-center items-center'>
                                    <p className=' text-left text-xs'>Did you know</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#2ea043" viewBox="0 0 256 256"><path d="M144,180a16,16,0,1,1-16-16A16,16,0,0,1,144,180Zm92-52A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128ZM128,64c-24.26,0-44,17.94-44,40v4a12,12,0,0,0,24,0v-4c0-8.82,9-16,20-16s20,7.18,20,16-9,16-20,16a12,12,0,0,0-12,12v8a12,12,0,0,0,23.73,2.56C158.31,137.88,172,122.37,172,104,172,81.94,152.26,64,128,64Z"></path></svg>
                                </div>
                                <div className='text-left mt-5'>
                                    <h1 className='text-5xl font-bold text-primary'>22% increase</h1>
                                    <p className='mt-3 font-bold text-2xl text-white'>in developer productivity
                                        after three years with GitHub1</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>

    )
}

export default Home
