import { FormikProps  } from "formik";
import { Form } from 'formik';
import Input from "../shared/form/input";
import { RegisterFormValuesInterface } from "../../contracts/auth";


const InnerRegisterForm = (props: FormikProps<RegisterFormValuesInterface>) => {
    return (
        <Form className="space-y-4 md:space-y-6" >
            <div>
                <Input name="name" type="text" label="your Name" />
            </div>


            <div>
                <Input name="phone" type="text" label="Phone Number" />
            </div>


            <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">register</button>

        </Form>
    )
}

export default InnerRegisterForm;