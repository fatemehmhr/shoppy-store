import { FC } from "react";
import { Field, ErrorMessage } from 'formik';

interface InputProps {
    name: string,
    label: string,
    type?: string,
    labelClassName?: string,  //optinal
    inputClassName?: string,
    errorClassName?: string,
}

const Input: FC<InputProps> = ({
    name,
    label,
    type = 'text', // if null type
    labelClassName,
    inputClassName,
    errorClassName,
}) => {


    return (
        <>
            <label htmlFor={name} className={`block mb-2 text-sm font-medium text-gray-900 dark:text-white ${labelClassName ?? ''}`}>
                {label}
            </label>
            <Field type={type} name={name} id={name} placeholder="Enter Your Name" className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${inputClassName ?? ""}`} />
            <ErrorMessage component="div" name={name} className={`text-red-600 text-sm ${errorClassName ?? ''}`} />
        </>
    )
}

export default Input;