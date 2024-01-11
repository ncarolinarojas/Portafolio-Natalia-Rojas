import Form from '../../components/Form/index';
import InformationContact from '../../components/InformationContact/index';
import '../Contact/contact.css';

const Contact = () => {
    return (
        <div className='container-contact'>
            <div className='row'>
                <div className='col-md-6'>
                    <Form />
                </div>
                <div className='col-md-6'>
                    <InformationContact />
                </div>
            </div>
        </div>
    );
}

export default Contact;

