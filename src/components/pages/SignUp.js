import { useState } from 'react';
import React from 'react'
import Form from '../Form'
import FormSuccess from '../FormSuccess'
import '../Form.css'
import img2 from '../../assets/images/img-2.svg'

const SignUp = () => {
    const [isSubmitted, setIsSubmitted] = useState();

    function submitForm() {
        setIsSubmitted(true);
    }

    return (
        <>
            <div className="form-container">
                <span className="close-btn">x</span>
                <div className="form-content-left">
                    <img src={img2} className="form-img" />
                </div>
                {!isSubmitted ? <Form submitForm={submitForm} /> : <FormSuccess />}
            </div>
       
       
        </>
    )
}

export default SignUp