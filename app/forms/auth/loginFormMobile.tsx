import { withFormik } from "formik";
import * as Yup from 'yup';
import { LoginFormValuesInterface } from "../../contracts/auth";
import InnerLoginForm from "../../components/auth/innerLoginForm";
import callApi from "../../helpers/callApi";
import validationError from "../../exceptions/validationError";
import Router from "next/router";

const phoneRegExp = /^(0|0098|\+98)9(0[1-5]|[1 3]\d|2[0-2]|98)\d{7}$/

const LoginFormValidationSchema = Yup.object().shape({
    phone: Yup.string().required().min(8).matches(phoneRegExp, 'the phone format is not correct')
})


interface LoginFormProps {
    setToken: (token: string) => void
}

const LoginFormMobile = withFormik<LoginFormProps, LoginFormValuesInterface>({
    mapPropsToValues: props => ({
        phone: ''
    }),
    validationSchema: LoginFormValidationSchema,
    handleSubmit: async (values, {props, setFieldError }) => {
        try {
            const res = await callApi().post('/auth/login', values); //ما اضافه می شود baseURL به 

            if (res.status === 200) {
                // console.log(res.data);  //status and token
                props.setToken(res.data.token);
                Router.push('/auth/login/step-two');
            }
        } catch (error) {
            if (error instanceof validationError) {
                Object.entries(error.messages).forEach(([key, value]) => setFieldError(key, value as string));
            }
            console.log(error) //if statusecode !200
        }
    }

})(InnerLoginForm)

export default LoginFormMobile;