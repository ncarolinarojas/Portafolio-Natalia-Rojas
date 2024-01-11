import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa el CSS de Bootstrap
import '../Form/form.css';

const Form = () => {
    const [message, setMessage] = useState('');

    const handleChange = () => {
        setMessage('Your message has been sent');
    }

    return (
        <div className="container">
            <form action="https://formsubmit.co/nataliarojasco22@gmail.com" method="POST" className="inputs">
                <div className="text-center">
                    <h2>Fill out the form to contact me via email</h2>
                </div>

                <div className="row mb-3">
                    <div className="col-md-6">
                        <label htmlFor='name' className="form-label">Name </label>
                        <input type="text" name='name' className="form-control" />
                    </div>

                    <div className="col-md-6">
                        <label htmlFor='lastName' className="form-label">Last Name </label>
                        <input type="text" name='lastName' className="form-control" />
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-md-6">
                        <label htmlFor='email' className="form-label">Email </label>
                        <input type="email" name='email' className="form-control" />
                    </div>

                    <div className="col-md-6">
                        <label htmlFor='subject' className="form-label">Subject </label>
                        <input type="text" name='subject' className="form-control" />
                    </div>
                </div>

                <div className="mb-3">
                    <label htmlFor='message' className="form-label">Message </label>
                    <textarea name='message' className="form-control"></textarea>
                </div>

                <div className="text-center mb-3">
                    <input type="submit" value={'Submit'} onClick={() => handleChange()} className="btn btn-primary" />
                    <input type="hidden" name="_next" value="https://portfolio-natalia-rojas.netlify.app/" />
                    <input type="hidden" name="_captcha" value="false" />
                </div>

                <div className="text-center">
                    <span>{message}</span>
                </div>
            </form>
        </div>
    )
}

export default Form;
