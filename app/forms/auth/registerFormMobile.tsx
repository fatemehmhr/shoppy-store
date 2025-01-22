import { withFormik } from "formik";
import * as Yup from 'yup';
import { RegisterFormValuesInterface } from "../../contracts/auth";
import InnerRegisterForm from "../../components/auth/innerRegisterForm";
import callApi from "../../helpers/callApi";
import Router from 'next/router';
import validationError from "../../exceptions/validationError";

const phoneRegExp = /^(0|0098|\+98)9(0[1-5]|[1 3]\d|2[0-2]|98)\d{7}$/ // in iran phone pattern

const RegisterFormValidationSchema = Yup.object().shape({
    name: Yup.string().required().min(3),
    phone: Yup.string().required().min(8).matches(phoneRegExp, 'the phone format is not correct')
})

interface RegisterFormProps {

}

const RegisterFormMobile = withFormik<RegisterFormProps, RegisterFormValuesInterface>({
    mapPropsToValues: props => ({
        name: '',
        phone: '',
    }),
    validationSchema: RegisterFormValidationSchema,
    handleSubmit: async (values, { setFieldError }) => {
        try {
            const res = await callApi().post('/auth/register', values); //ما اضافه می شود baseURL به 
            // console.log('res:', res.data); //res: Object { status: "success" }
            // console.log(res.status); // 201
            if (res.status === 201) {
                Router.push('/auth/login');
            }
        } catch (error) {
            if (error instanceof validationError) {
                // console.log(error.messages);
                Object.entries(error.messages).forEach(([key, value]) => setFieldError(key, value as string));
            }
        }
    }



})(InnerRegisterForm)

export default RegisterFormMobile;