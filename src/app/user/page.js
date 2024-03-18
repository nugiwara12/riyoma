"use client"

import Image from "next/image";

import Navbar from "@/app/components/Navbar";
import Modal from "@/app/components/Modal";
import { Fragment, useState } from "react";



import Link from "next/link";

export default function User() {

const [showModal, setShowModal,] = useState(false);


  return (
      <h1>
        <Navbar />
        <Fragment>
        <div class="w-full min-h-screen overflow-x-auto mt-4">
            <nav className="ml-4">
                {/* <Link href="./auth/register"> */}
                <button class=" bg-blue-600 hover:bg-blue-700 
                text-white font-bold py-2 px-4 mb-4 rounded-md"
                onClick={() => setShowModal(true)} onClose={() => setShowModal(false)}>
                    Add Users
                </button>
                {/* </Link> */}
            </nav>
            <hr />
            <table class="w-full text-sm text-left rtl:text-right text-black dark:text-gray-400">
                <thead class="text-xs text-white uppercase bg-gray-700 dark:bg-gray-700 dark:text-gray-400 ">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Email
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Role
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Ip
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Jc Sarmiento
                        </th>
                        <td class="px-6 py-4">
                            jc@gmail.com
                        </td>
                        <td class="px-6 py-4">
                            Admin
                        </td>
                        <td class="px-6 py-4">
                            128.456.789
                        </td>
                    </tr>

                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Jc Sarmiento
                        </th>
                        <td class="px-6 py-4">
                            jc@gmail.com
                        </td>
                        <td class="px-6 py-4">
                            Admin
                        </td>
                        <td class="px-6 py-4">
                            128.456.789
                        </td>
                    </tr>

                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Jc Sarmiento
                        </th>
                        <td class="px-6 py-4">
                            jc@gmail.com
                        </td>
                        <td class="px-6 py-4">
                            Admin
                        </td>
                        <td class="px-6 py-4">
                            128.456.789
                        </td>
                    </tr>

                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Jc Sarmiento
                        </th>
                        <td class="px-6 py-4">
                            jc@gmail.com
                        </td>
                        <td class="px-6 py-4">
                            Admin
                        </td>
                        <td class="px-6 py-4">
                            128.456.789
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
        <Modal isVisible={showModal} onClose={() => setShowModal(false)}/>
    </Fragment>
</h1>
  );
}
