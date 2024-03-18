import Image from "next/image";
import Link from "next/link";

import Navbar from "@/app/components/Modal";

export default function Auth() {
  return (

    <div className="flex justify-center items-center min-h-screen bg-cover bg-center" 
    style={{ backgroundImage: "url('/wallpaper.jpg')"}}>
      <form className="w-full max-w-md bg-slate-300 bg-opacity-25 shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="text-center mb-4">
          <center><Image
            width={75}
            height={75}
            src="/genie-logo.svg"
            alt="avatar-img"
          /></center>
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <div className="relative">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
              required=""
            />
            <i className="bx bxs-user absolute top-1/2 transform -translate-y-1/2 right-3 text-gray-400" />
          </div>
        </div>
        <div className="mb-6">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <div className="relative">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
              required=""
            />
            <i className="bx bxs-lock-alt absolute top-1/2 transform -translate-y-1/2 right-3 text-gray-400" />
          </div>
        </div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <input className="mr-2 leading-tight" type="checkbox" id="rememberMe" />
            <label className="text-sm text-white" htmlFor="rememberMe">
              Remember Me
            </label>
          </div>
          <div className="text-sm text-blue-500 hover:text-blue-600" href="#">
            Forgot Password
          </div>
        </div>
        <Link href="/dashboard" ><button
          className="w-full bg-blue-900 hover:bg-blue-950  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Login
        </button>
        </Link>

        {/* <div className="text-center mt-4">
          <p>
          Don't have an account?{" "}
          <Link className="text-blue-500 hover:text-blue-600" href="/register">
              Register
          </Link>
          </p>
        </div> */}

      </form>
    </div>

  );
};
