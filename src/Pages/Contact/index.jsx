import Form from '../../components/Form/index';
import InformationContact from '../../components/InformationContact/index';
import '../Contact/contact.css';

const Contact = () => {
    return (
        <div className='container-contact'>
            <div>
                <Form />
            </div>
            <div>
                <InformationContact />
            </div>
        </div>
    )
}

export default Contact

