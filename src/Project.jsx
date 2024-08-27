import { InformationCircleIcon } from '@heroicons/react/20/solid'

export default function Project({ project }) {
    return (
        <div className="bg-white px-6 py-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
                <p className="text-base font-semibold leading-7 text-indigo-600">{project.date}</p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{project.title}</h1>
                <p className="mt-6 text-xl leading-8">
                    Project Stack: {project.stack}
                </p>
                {project.repo &&
                    <a className="mt-6 text-xl leading-8 text-blue-600 hover:text-blue-800 visited:text-purple-600" href={project.repo}>
                        Repository
                    </a>
                }
                <div className="mt-10 max-w-2xl">
                    <p>
                        {project.description}
                    </p>
                    {project.imageList.map(img =>
                            <figure className="mt-16">
                                <img
                                    alt=""
                                    src={process.env.PUBLIC_URL + '/' +img.link}
                                    className="aspect-video rounded-xl bg-gray-50 object-contain border-solid border-2"
                                />
                                <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
                                    <InformationCircleIcon aria-hidden="true" className="mt-0.5 h-5 w-5 flex-none text-gray-300" />
                                    {img.caption}
                                </figcaption>
                            </figure>
                        )
                    }
                </div>
            </div>
        </div>
        // <>
        // {project.description}
        // {project.date}
        // {project.stack}
        // {project.imageList.size > 0 &&
        //      (project.imageList.map(img => 
        //         <img
        //             alt=''
        //             src={process.env.PUBLIC_URL + '/' +img}
        //         />
        //      ))
        // }
        // {project.youtubeLink &&
        //     project.youtubeLink
        // }
        // {project.repo &&
        //     project.repo
        // }
        // </>
    )
}