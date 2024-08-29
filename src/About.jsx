import { BriefcaseIcon, CommandLineIcon } from '@heroicons/react/20/solid'
import { Link } from "react-router-dom";

export default function About() {
    return (
        <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <svg
                    aria-hidden="true"
                    className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
                >
                    <defs>
                        <pattern
                            x="50%"
                            y={-1}
                            id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                            width={200}
                            height={200}
                            patternUnits="userSpaceOnUse"
                        >
                            <path d="M100 200V.5M.5 .5H200" fill="none" />
                        </pattern>
                    </defs>
                    <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
                        <path
                            d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                            strokeWidth={0}
                        />
                    </svg>
                    <rect fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" width="100%" height="100%" strokeWidth={0} />
                </svg>
            </div>
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="lg:max-w-lg">
                            <p className="text-base font-semibold leading-7 text-indigo-600">Software Engineer</p>
                            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Archit Menon</h1>
                            <p className="mt-6 text-xl leading-8 text-gray-700">
                                Disregard this picture of me in London, I'm actually from Salt Lake City, Utah! My interests include programming (duh!), watching sports (go 
                                <a className='text-blue-600 hover:text-blue-800 visited:text-purple-600' href='https://www.youtube.com/watch?v=1g3rn8Nkl6U'> Jazz</a> &
                                <a className='text-blue-600 hover:text-blue-800 visited:text-purple-600' href='https://www.youtube.com/watch?v=4gXlrjK4cHU&pp=ygUSdXRhaCB1dGVzIGJlYXQgYnl1'> Utes</a>!), watching movies (<a href='https://letterboxd.com/cool_cat_archie/' className='underline text-blue-600 hover:text-blue-800 visited:text-purple-600'>Letterboxd</a>),
                                shooting pool, video games, board games, pickleball, volleyball, and enjoying the Utah outdoors. My friends and family call me Archie!
                            </p>
                        </div>
                    </div>
                </div>
                <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                    <img
                        alt="Archie - Big Ben (London)"
                        src={process.env.PUBLIC_URL + '/London.JPG'}
                        className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                    />
                </div>
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                            <p>
                                I studied at the University of Utah receiving both an MS and a BS in Computer Science while also minoring in Mathematics.
                                I would consider myself a jack of all trades sorta guy, but my favorite areas in school were in Systems Programming: Operating Systems, Compilers,
                                Networking, Distributed, High Performance, Scalable Computing, etc. I also have a good amount of experience in web development!
                            </p>

                            <p className='ml-8 font-semibold mt-4'>
                                Other stuff to check out:
                            </p>
                            <ul className="ml-8 mt-8 space-y-8 text-gray-600">
                                <li className="flex gap-x-3">
                                    <BriefcaseIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-600" />
                                    <span>
                                        <Link
                                            to="/experience"
                                            className='text-blue-600 hover:text-blue-800 visited:text-purple-600'
                                        >
                                            Experience
                                        </Link>
                                    </span>
                                </li>
                                <li className="flex gap-x-3">
                                    <CommandLineIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-600" />
                                    <span>
                                        <Link
                                            to="/projects"
                                            className='text-blue-600 hover:text-blue-800 visited:text-purple-600'
                                        >
                                            Projects
                                        </Link>
                                    </span>
                                </li>

                            </ul>
                            <p className="mt-8">
                                Recently, I've accepted a role at Solventum as a software engineer! 
                                Before that I've done some freelance web development, and in school I was a CS Teaching Assistant at the University of Utah.
                            </p>
                            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Something interesting you want to send my way?</h2>
                            <p className="mt-6">
                                My email address is architmenon DOT mnn AT gmail.com (no spam or phishing attacks please).
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
