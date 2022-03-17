import React from 'react'

type Props = {}

const NewsPage = (props: Props) => {
    return (
        <section className="pt-7 pb-9">
            <header>
                <h2 className="uppercase mb-2 text-3xl font-extrabold leading-tight text-gray-900">
                    Bài viết
                </h2>
                <p className="mb-8 text-lg text-gray-500">
                    Bài viết mới nhất được cập nhật liên tục
                </p>
            </header>

            <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
                    <a href="/" aria-label="Article">
                        <img src="https://images.pexels.com/photos/932638/pexels-photo-932638.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" className="object-cover w-full h-64 rounded" alt="" />
                    </a>
                    <div className="py-5">
                        <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">13 Jul 2020</p>
                        <a href="/" aria-label="Article" className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700">
                            <p className="text-2xl font-bold leading-5">Diving to the deep</p>
                        </a>
                        <p className="mb-4 text-gray-700">
                            Sed ut perspiciatis unde omnis iste natus error sit sed quia
                            consequuntur magni voluptatem doloremque.
                        </p>
                        <div className="flex space-x-4">
                            <a href="/" aria-label="Likes" className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group">
                                <div className="mr-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700">
                                        <polyline points="6 23 1 23 1 12 6 12" fill="none" strokeMiterlimit={10} />
                                        <path d="M6,12,9,1H9a3,3,0,0,1,3,3v6h7.5a3,3,0,0,1,2.965,3.456l-1.077,7A3,3,0,0,1,18.426,23H6Z" fill="none" stroke="currentColor" strokeMiterlimit={10} />
                                    </svg>
                                </div>
                                <p className="font-semibold">7.4K</p>
                            </a>
                            <a href="/" aria-label="Comments" className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group">
                                <div className="mr-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700">
                                        <polyline points="23 5 23 18 19 18 19 22 13 18 12 18" fill="none" strokeMiterlimit={10} />
                                        <polygon points="19 2 1 2 1 14 5 14 5 19 12 14 19 14 19 2" fill="none" stroke="currentColor" strokeMiterlimit={10} />
                                    </svg>
                                </div>
                                <p className="font-semibold">81</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
                    <a href="/" aria-label="Article">
                        <img src="https://images.pexels.com/photos/932638/pexels-photo-932638.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" className="object-cover w-full h-64 rounded" alt="" />
                    </a>
                    <div className="py-5">
                        <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">13 Jul 2020</p>
                        <a href="/" aria-label="Article" className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700">
                            <p className="text-2xl font-bold leading-5">Diving to the deep</p>
                        </a>
                        <p className="mb-4 text-gray-700">
                            Sed ut perspiciatis unde omnis iste natus error sit sed quia
                            consequuntur magni voluptatem doloremque.
                        </p>
                        <div className="flex space-x-4">
                            <a href="/" aria-label="Likes" className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group">
                                <div className="mr-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700">
                                        <polyline points="6 23 1 23 1 12 6 12" fill="none" strokeMiterlimit={10} />
                                        <path d="M6,12,9,1H9a3,3,0,0,1,3,3v6h7.5a3,3,0,0,1,2.965,3.456l-1.077,7A3,3,0,0,1,18.426,23H6Z" fill="none" stroke="currentColor" strokeMiterlimit={10} />
                                    </svg>
                                </div>
                                <p className="font-semibold">7.4K</p>
                            </a>
                            <a href="/" aria-label="Comments" className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group">
                                <div className="mr-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700">
                                        <polyline points="23 5 23 18 19 18 19 22 13 18 12 18" fill="none" strokeMiterlimit={10} />
                                        <polygon points="19 2 1 2 1 14 5 14 5 19 12 14 19 14 19 2" fill="none" stroke="currentColor" strokeMiterlimit={10} />
                                    </svg>
                                </div>
                                <p className="font-semibold">81</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
                    <a href="/" aria-label="Article">
                        <img src="https://images.pexels.com/photos/932638/pexels-photo-932638.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" className="object-cover w-full h-64 rounded" alt="" />
                    </a>
                    <div className="py-5">
                        <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">13 Jul 2020</p>
                        <a href="/" aria-label="Article" className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700">
                            <p className="text-2xl font-bold leading-5">Diving to the deep</p>
                        </a>
                        <p className="mb-4 text-gray-700">
                            Sed ut perspiciatis unde omnis iste natus error sit sed quia
                            consequuntur magni voluptatem doloremque.
                        </p>
                        <div className="flex space-x-4">
                            <a href="/" aria-label="Likes" className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group">
                                <div className="mr-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700">
                                        <polyline points="6 23 1 23 1 12 6 12" fill="none" strokeMiterlimit={10} />
                                        <path d="M6,12,9,1H9a3,3,0,0,1,3,3v6h7.5a3,3,0,0,1,2.965,3.456l-1.077,7A3,3,0,0,1,18.426,23H6Z" fill="none" stroke="currentColor" strokeMiterlimit={10} />
                                    </svg>
                                </div>
                                <p className="font-semibold">7.4K</p>
                            </a>
                            <a href="/" aria-label="Comments" className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group">
                                <div className="mr-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700">
                                        <polyline points="23 5 23 18 19 18 19 22 13 18 12 18" fill="none" strokeMiterlimit={10} />
                                        <polygon points="19 2 1 2 1 14 5 14 5 19 12 14 19 14 19 2" fill="none" stroke="currentColor" strokeMiterlimit={10} />
                                    </svg>
                                </div>
                                <p className="font-semibold">81</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center mt-5">
                <a href="#" className="px-4 py-2 mx-1 text-gray-700 transition-colors duration-200 transform bg-white rounded-md hover:bg-blue-500 hover:text-white bg-gray-100">
                    <div className="flex items-center -mx-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                        </svg>
                        <span className="mx-1">Previous</span>
                    </div>
                </a>
                <a href="#" className="hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-200 transform bg-white rounded-md sm:inline bg-gray-100 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white">
                    5
                </a>
                <a href="#" className="px-4 py-2 mx-1 text-gray-700 transition-colors duration-200 transform bg-white rounded-md hover:bg-blue-500 hover:text-white bg-gray-100">
                    <div className="flex items-center -mx-1">
                        <span className="mx-1">Next</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                        </svg>
                    </div>
                </a>
            </div>
        </section>
    )
}

export default NewsPage;