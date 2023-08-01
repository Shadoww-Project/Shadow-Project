import React from 'react'
import { Link } from 'react-router-dom'

export default function Header({ setSearch, handleModal, setIsAdd }) {
    return (
        <div className="p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5 dark:bg-gray-800 dark:border-gray-700">
            <div className="w-full mb-1">
                <div className="mb-4">
                    <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
                        All users
                    </h1>
                </div>
                <div className="sm:flex">
                    <div className="items-center hidden mb-3 sm:flex sm:divide-x sm:divide-gray-100 sm:mb-0 dark:divide-gray-700">
                        <label htmlFor="users-search" className="sr-only">
                            Search
                        </label>
                        <div className="relative mt-1 lg:w-64 xl:w-96">
                            <input onChange={(event) => { setSearch(event.target.value) }}
                                type="text"
                                name="email"
                                id="users-search"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Search for users"
                            />
                        </div>
                        <div className="flex pl-0 mt-3 space-x-1 sm:pl-2 sm:mt-0">
                            <Link
                                href="#"
                                className="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div className="flex items-center ml-auto space-x-2 sm:space-x-3">
                        <button onClick={() => handleModal(setIsAdd, true)}
                            type="button"
                            data-modal-toggle="add-user-modal"
                            className="inline-flex items-center justify-center w-1/2 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            <svg
                                className="w-5 h-5 mr-2 -ml-1"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            Add user
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
