import React from "react";
import { NextPage } from "next";
import LoginFormMobile from "./../../../app/forms/auth/loginFormMobile";
import { useAppDispatch } from "../../../app/hooks";
import { updatePhoneVerifyToken } from "../../../app/store/auth";




const login: NextPage = () => {

    const dispatch = useAppDispatch();

    const setPhoneVerifyToken = (token: string) => {
        dispatch(updatePhoneVerifyToken(token));
    }
    
    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    Login Phone Verify
                </a>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Create an account
                        </h1>
                        <LoginFormMobile setToken={setPhoneVerifyToken}  />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default login;