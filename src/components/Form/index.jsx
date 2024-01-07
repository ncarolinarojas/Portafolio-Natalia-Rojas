import { useState } from "react"
import '../Form/form.css'

const Form = () => {

    const [message, setMessage] = useState('')

    const handleChange = () => {
        setMessage('Your message has been send')
        console.log(message);
    }

    return (
        <div className="form-content">
            <form action="https://formsubmit.co/nataliarojasco22@gmail.com" method="POST" className="inputs">
                <div>
                    <label htmlFor='name'>Name </label>
                    <br />
                    <input type="text" name='name' />
                </div>
                <div>
                    <label htmlFor='lastName'>Last Name </label>
                    <br />
                    <input type="text" name='lastName' />
                </div>


                <div>
                    <label htmlFor='email'>Email </label>
                    <br />
                    <input type="email" name='email' />
                </div>

                <div>
                    <label htmlFor='subject'>Subject </label>
                    <br />
                    <input type="text" name='subject' />
                </div>

                <div>
                    <label htmlFor='message'>Message </label>
                    <br />
                    <textarea name='message'></textarea>
                </div>

                <div>
                    <input type="submit" value={'Submit'} onClick={() => handleChange()} />
                    <input type="hidden" name="_next" value="http://localhost:5173/contact" />
                    <input type="hidden" name="_captcha" value="false" />
                </div>

                <div>
                    <span>{message}</span>
                </div>
            </form>
        </div>
    )

}

export default Form