import React from 'react'

export default function EditModal({ handleModal, setIsEdit, isEdit }) {
    return (
        <>
            {/* Edit User Modal */}
            <div
                className={`fixed left-0 top-0 md:left-[300px] md:top-37 right-0 z-50 mt-10 items-center justify-center pt-[450px] py-20 sm:p-10 ${isEdit ? 'flex' : 'hidden '} overflow-x-hidden overflow-y-auto  h-modal`}
                id="edit-user-modal"
            >
                <div className="relative w-full max-w-2xl px-4 ">
                    {/* Modal content */}
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-800">
                        {/* Modal header */}
                        <div className="flex items-start justify-between p-5 border-b rounded-t dark:border-gray-700">
                            <h3 className="text-xl font-semibold dark:text-white">Edit user</h3>
                            <button onClick={() => handleModal(setIsEdit, false)}
                                type="button"
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-700 dark:hover:text-white"
                                data-modal-toggle="edit-user-modal"
                            >
                                <svg
                                    className="w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                        </div>
                        {/* Modal body */}
                        <div className="p-6 space-y-6">
                            <form action="#">
                                <div className="grid grid-cols-6 gap-6">
                                    <div className="col-span-6 sm:col-span-3">
                                        <label
                                            htmlFor="first-name"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            First Name
                                        </label>
                                        <input
                                            type="text"
                                            name="first-name"
                                            defaultValue="Bonnie"
                                            id="first-name"
                                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="Bonnie"
                                            required=""
                                        />
                                    </div>
                                    <div className="col-span-6 sm:col-span-3">
                                        <label
                                            htmlFor="last-name"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Last Name
                                        </label>
                                        <input
                                            type="text"
                                            name="last-name"
                                            defaultValue="Green"
                                            id="last-name"
                                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="Green"
                                            required=""
                                        />
                                    </div>
                                    <div className="col-span-6 sm:col-span-3">
                                        <label
                                            htmlFor="email"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            defaultValue="bonnie@flowbite.com"
                                            id="email"
                                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="example@company.com"
                                            required=""
                                        />
                                    </div>
                                    <div className="col-span-6 sm:col-span-3">
                                        <label
                                            htmlFor="position"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Position
                                        </label>
                                        <input
                                            type="text"
                                            name="position"
                                            defaultValue="React Developer"
                                            id="position"
                                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="e.g. React developer"
                                            required=""
                                        />
                                    </div>
                                    <div className="col-span-6 sm:col-span-3">
                                        <label
                                            htmlFor="current-password"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Current Password
                                        </label>
                                        <input
                                            type="password"
                                            name="current-password"
                                            defaultValue="••••••••"
                                            id="current-password"
                                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="••••••••"
                                            required=""
                                        />
                                    </div>
                                    <div className="col-span-6 sm:col-span-3">
                                        <label
                                            htmlFor="new-password"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            New Password
                                        </label>
                                        <input
                                            type="password"
                                            name="new-password"
                                            defaultValue="••••••••"
                                            id="new-password"
                                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="••••••••"
                                            required=""
                                        />
                                    </div>

                                </div>
                            </form>
                        </div>
                        {/* Modal footer */}
                        <div className="items-center p-6 border-t border-gray-200 rounded-b dark:border-gray-700">
                            <button
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                type="submit"
                            >
                                Save all
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
