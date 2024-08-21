import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const items = [
    {
        id: 1,
        role: 'Software Engineer at Solventum (September 2024 - present)',
        description: ['Stay tuned!']
    },
    {
        id: 2,
        role: 'Full-Stack Engineer Freelance (October 2023 - present)',
        description: [
            'Worked in a team of 3 with the California Collaborative for Educational Excellence (CCEE) to make web apps (React and AWS) for the California education system',
            "Created a hub for educational resources/initiatives with a lot functionality for admins, submitters, and the general public",
            "Functionality includes searching, filtering, admin features, form submissions, authorization, tutorials, etc."
        ]
    },
    {
        id: 3,
        role: 'Teaching Assistant at the University of Utah School of Computing (January 2020 - May 2023)',
        description: [
            'Aided students in learning Java, Python, basic software engineering, debugging, sorting algorithms, graph algorithms, object-oriented programming, and data structures',
            'Acted as a head TA for several courses which involved administrative duties as well as more teaching responsibility'
        ]
    },
    {
        id: 4,
        role: 'Amazon Warehouse Associate (Summer 2019)',
        description: ['Stowed a lot of product', 'Got a good workout']
    }
]

export default function Experience() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
                <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
                    <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Work Experience</h2>
                    <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
                        {items.map((item) => (
                            <Disclosure key={item.id} as="div" className="pt-6">
                                <dt>
                                    <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900">
                                        <span className="text-base font-semibold leading-7">{item.role}</span>
                                        <span className="ml-6 flex h-7 items-center">
                                            <PlusSmallIcon aria-hidden="true" className="h-6 w-6 group-data-[open]:hidden" />
                                            <MinusSmallIcon aria-hidden="true" className="h-6 w-6 [.group:not([data-open])_&]:hidden" />
                                        </span>
                                    </DisclosureButton>
                                </dt>
                                <DisclosurePanel as="dd" className="mt-2 pr-12">
                                    <ul className='list-disc ml-4'>
                                        {item.description.map((bulletPoint) =>
                                            <li key={bulletPoint}>
                                                <p className="text-base leading-7 text-gray-600">{bulletPoint}</p>
                                            </li>
                                        )}
                                    </ul>
                                </DisclosurePanel>
                            </Disclosure>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}

