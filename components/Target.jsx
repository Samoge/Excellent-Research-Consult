import Image from 'next/image';
import React from 'react'


function Target() {
    return (
        <div className='lg:min-h-[80vh] flex items-center hero'>

            <div className="mx-auto max-w-5xl px-4 py-8 ">
                <p className="text-center text-white text-3xl lg:text-5xl pt-10 sina font-semibold">
                    You can’t do without Us
                </p>
                <p className="lg:w-[250px] w-[150px] h-[3px] bg-[#ff9900] mx-auto mb-3"></p>
                <section className="rounded-lg bg-gray-100 p-8">
                    <div className="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:items-center">
                        <img
                            alt="Man"
                            src="https://images.unsplash.com/photo-1625019030820-e4ed970a6c95?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                            className="aspect-square w-full rounded-lg object-cover"
                        />

                        <blockquote className="sm:col-span-2">
                            <p className="text-sm font-medium sm:text-xl">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                                perspiciatis cumque neque ut nobis excepturi, quasi iure quisquam
                                autem alias.
                            </p>

                            <cite className="mt-8 inline-flex items-center not-italic">
                                <span className="hidden h-px w-6 bg-gray-400 sm:inline-block"></span>
                                <p className="text-sm uppercase text-gray-500 sm:ms-3">
                                    <strong>Justin Harrison</strong>, Beatle Inc.
                                </p>
                            </cite>
                        </blockquote>
                    </div>
                </section>

            </div>


        </div>
    )
}

export default Target