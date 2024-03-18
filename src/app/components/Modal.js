import {react} from "react";
import Image from "next/image";
import Link from "next/link";
import { IoIosCloseCircle } from "react-icons/io";


const Modal = ({isVisible, onClose}) => {
    if ( !isVisible ) return null;

const handleClose = (e) => {
    if(e.target.id === 'wrapper') onClose();
}

    
    return (
    <>
        <div className="fixed inset-0 bg-black bg-opacity-25 
            backdrop-blur-sm flex justify-center item-center" id="wrapper" onClick={handleClose}>

            <div className="w-[40rem] flex flex-col">
                {/* <button className="text-white text-xl place-self-end" onClick={() => onClose()}>
                    <IoIosCloseCircle />
                </button> */}
                <div className="bg-white p-2 rounded  border border-black mt-10">
                
                <div className="max-w-xxl mx-auto my-10 p-6 bg-white rounded-md shadow-md landscape">
                    <h2 className="text-2xl font-semibold mb-6 text-center">Register</h2>
                    <form className="grid grid-cols-2 gap-4">
                        <div className="mb-4">
                            <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">Username</label>
                            <input type="text" id="username" className="w-full px-3 py-2 border border-gray-500 rounded-md" />
                        </div>
                        {/* <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                            <input type="email" id="email" className="w-full px-3 py-2 border  border-gray-500 rounded-md" />
                        </div> */}
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                            <input type="password" id="password" className="w-full px-3 py-2 border  border-gray-500 rounded-md" />
                        </div>
                        {/* <div className="mb-6">
                            <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-bold mb-2">Confirm Password</label>
                            <input type="password" id="confirmPassword" className="w-full px-3 py-2 border  border-gray-500 rounded-md" />
                        </div> */}
                        <div className="col-span-2 flex justify-end">
                            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 mr-3">Register</button>
                            <button type="button" className="bg-red-800 text-white py-2 px-4 rounded-md hover:bg-red-900" onClick={() => onClose()}>Cancel</button>
                        </div>
                    </form>
                </div>

                            
                </div>
            </div>
        </div>

        
    </>
    )
}

export default Modal