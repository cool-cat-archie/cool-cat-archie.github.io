import {
    AcademicCapIcon,
    BanknotesIcon,
    ChatBubbleLeftRightIcon,
    CpuChipIcon,
    KeyIcon,
    MusicalNoteIcon,
    PhotoIcon,
    Squares2X2Icon
} from '@heroicons/react/24/outline'

import { Link } from "react-router-dom";


const actions = [
    {
        title: 'CCEE Resource Hub',
        href: 'ccee-resouce-hub',
        icon: AcademicCapIcon,
        iconForeground: 'text-slate-700',
        iconBackground: 'bg-slate-50',
        description: 'Freelance project for the California Collaborative for Educational Excellence (CCEE) - created a hub for educational resources/initiatives with a lot functionality for admins, submitters, and the general public.',
    },
    {
        title: 'Locality Sensitive Hashing for Data Prefetching',
        href: 'prefetching',
        icon: CpuChipIcon,
        iconForeground: 'text-teal-700',
        iconBackground: 'bg-teal-50',
        description: 'Explored using previous patterns of memory accesses to predict future memory accesses by a program in order to increase performance of memory bound applications.',
    },
    {
        title: 'DistanSing',
        href: 'distansing',
        icon: MusicalNoteIcon,
        iconForeground: 'text-purple-700',
        iconBackground: 'bg-purple-50',
        description: 'Audio sharing application allowing musicians to play/sing together over the internet with minimal latency over a peer to peer network.',
    },
    {
        title: 'Parlé',
        href: 'parle',
        icon: ChatBubbleLeftRightIcon,
        iconForeground: 'text-sky-700',
        iconBackground: 'bg-sky-50',
        description: 'Award winning (3rd place at HackTheU 2019) application for sending and receiving SMS messages between users while translating messages into the preferred language of recipients.',
    },
    {
        title: 'Limits of Alpha Testing',
        href: 'alpha-testing',
        icon: PhotoIcon,
        iconForeground: 'text-yellow-700',
        iconBackground: 'bg-yellow-50',
        description: 'Computer graphics project that implemented techniques that improve upon traditional alpha testing.',
    },
    {
        title: 'Distributed KDC',
        href: 'distributed-kdc',
        icon: KeyIcon,
        iconForeground: 'text-rose-700',
        iconBackground: 'bg-rose-50',
        description: 'A distributed approach to KDC (key distribution centers) operations where multiple edge servers are distributing the work of a KDC.',
    },
    {
        title: 'Beating the Odds',
        href: 'beating-the-odds',
        icon: BanknotesIcon,
        iconForeground: 'text-emerald-700',
        iconBackground: 'bg-emerald-50',
        description: 'A visualization project for NBA Vegas odds.',

    },
    {
        title: 'Connect 4 Verification',
        href: 'connect-4-verification',
        icon: Squares2X2Icon,
        iconForeground: 'text-indigo-700',
        iconBackground: 'bg-indigo-50',
        description: 'Model checker to traverse the space of Connect 4 games for optimal play.',
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Projects() {
    return (
        <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-200 shadow sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0">
            {actions.map((action, actionIdx) => (
                <div
                    key={action.title}
                    className={classNames(
                        actionIdx === 0 ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none' : '',
                        actionIdx === 1 ? 'sm:rounded-tr-lg' : '',
                        actionIdx === actions.length - 2 ? 'sm:rounded-bl-lg' : '',
                        actionIdx === actions.length - 1 ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none' : '',
                        'group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500',
                    )}
                >
                    <div>
                        <span
                            className={classNames(
                                action.iconBackground,
                                action.iconForeground,
                                'inline-flex rounded-lg p-3 ring-4 ring-white',
                            )}
                        >
                            <action.icon aria-hidden="true" className="h-6 w-6" />
                        </span>
                    </div>
                    <div className="mt-8">
                        <h3 className="text-base font-semibold leading-6 text-gray-900">
                            <Link to={action.href} className="focus:outline-none">
                                {/* Extend touch target to entire panel */}
                                <span aria-hidden="true" className="absolute inset-0" />
                                {action.title}
                            </Link>
                        </h3>
                        <p className="mt-2 text-sm text-gray-500">
                            {action.description}
                        </p>
                    </div>
                    <span
                        aria-hidden="true"
                        className="pointer-events-none absolute right-6 top-6 text-gray-300 group-hover:text-gray-400"
                    >
                        <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
                            <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                        </svg>
                    </span>
                </div>
            ))}
        </div>
    )
}
