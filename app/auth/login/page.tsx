"use client";
import FormLogin from "@/app/components/form-login/FormLogin";
import Image from "next/image";

export const Login = () => {
  return (
    <>
      <div className="lg:w-4/5 mx-auto px-2 lg:px-4 py-3">
        <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
          <h1 className="text-4xl font-medium">Login</h1>
          <p className="text-slate-500 mt-2">Hi, Welcome back 👋</p>

          <div className="my-5">
            <button className="w-full text-center py-3 my-3 border flex space-x-2 items-center justify-center border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
              <Image
                src="https://www.svgrepo.com/show/355037/google.svg"
                width={24}
                height={24}
                alt=""
              />{" "}
              <span>Login with Google</span>
            </button>
          </div>
          <FormLogin />
        </div>
      </div>
    </>
  );
};
