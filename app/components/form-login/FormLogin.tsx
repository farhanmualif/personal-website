"use client";
import { getCsrfToken, getSession, signIn } from "next-auth/react";

export default function FormLogin() {
  async function onSubmited(e: any) {
    e.preventDefault();
    const host = `${window.location.protocol}//${window.location.host}/`;
    try {
      // const body = {
      //   redirect: false,
      //   crsfToken: await getCsrfToken(),
      //   email: e.target.email.value,
      //   password: e.target.password.value,
      //   callbackUrl: `${host}/home`,
      // };

      // const login = await fetch(`api/auth/signin`, {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //     credentials: "include",
      //   },
      //   // body: JSON.stringify(body),
      //   body: JSON.stringify(body),
      //   credentials: "include",
      // });

      // if (!login.ok) {
      //   throw new Error("login failure");
      // }
      // const session = await fetch("api/auth/session");
      // console.log(session);

      const res = await signIn("credentials", {
        redirect: false,
        email: e.target.email.value,
        password: e.target.value,
      });
      if (!res?.ok) {
        throw new Error(res?.error?.toString());
      }
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <form onSubmit={onSubmited} className="my-10">
      <div className="flex flex-col space-y-5">
        <label htmlFor="email">
          <p className="font-medium text-slate-700 pb-2">Email address</p>
          <input
            id="email"
            name="email"
            type="email"
            className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
            placeholder="Enter email address"
          />
        </label>
        <label htmlFor="password">
          <p className="font-medium text-slate-700 pb-2">Password</p>
          <input
            id="password"
            name="password"
            type="password"
            className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
            placeholder="Enter your password"
          />
        </label>
        <div className="flex flex-row justify-between">
          <div>
            {/* <label htmlFor="remember" className="">
            <input
              type="checkbox"
              id="remember"
              className="w-4 h-4 border-slate-200 focus:bg-indigo-600"
            />
            Remember me
          </label> */}
          </div>
          <div>
            <a href="#" className="font-medium text-indigo-600">
              Forgot Password?
            </a>
          </div>
        </div>
        <button
          type="submit"
          className="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
            />
          </svg>
          <span>Login</span>
        </button>
        <p className="text-center">
          Not registered yet?{" "}
          <a
            href="auth/register"
            className="text-indigo-600 font-medium inline-flex space-x-1 items-center">
            <span>Register now </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </span>
          </a>
        </p>
      </div>
    </form>
  );
}
