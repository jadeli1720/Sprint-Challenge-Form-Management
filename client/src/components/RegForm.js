import React from "react";
import axios from "axios";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";

const RegForm = (props, { errors, touched }) => {
    return (
        <div className="formContainer">
            <div>
                <h2>Register Below</h2>
            </div>
            <Form onSubmit={props.onSubmit} data-testid="form">
                <label className='formGroup'>
                    <p className='label'>Username:</p>
                    <Field type='text' name='username' placeholder='Username' />
                    {touched.username && errors.username && (
                        <p className='errors'>{errors.username}</p>
                    )}
                </label>
                <label className='formGroup'>
                    <p className='label'>Password:</p>
                    <Field type='password' name='password' placeholder='Password' />
                    {touched.password && errors.password && (
                        <p className='errors'>{errors.password}</p>
                    )}
                </label>
                <button type='submit' className="submit">Submit</button>
            </Form>
        </div>
    )
}

const FormikRegForm = withFormik({

    //handle state and state changes
    mapPropsToValues({ username, password }) {
        return {
            username: username || '',
            password: password || ''
        };
    },

    //======VALIDATION SCHEMA==========
    validationSchema: Yup.object().shape({
        username: Yup.string()
            .required("A unique username is required"),

        password: Yup.string()
            .min(6, 'Password must be 6 characters or longer')
            .required('Password is required'),
    }),
    //======END VALIDATION SCHEMA==========    

    //handle submit with axios post()
    handleSubmit(values, { resetForm }) {
        axios
            .post(`http://localhost:5000/api/register`, values)
            .then(res => {
                console.log('Form was a success', res)
                resetForm();
            })
            .catch(err => console.log('Opps! Something went wrong.', err.response));
    }

})(RegForm);

export default FormikRegForm;