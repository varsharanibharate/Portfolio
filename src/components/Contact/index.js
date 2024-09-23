import './index.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className="contact-container">
            <h1 className='contact-title'>Connect with Varsharani</h1>
            <p className='contact-description'>
                I’d love to hear from you! Feel free to reach out through the links below:
            </p>
            <div className='button-container'>
                <a href='https://github.com/varsharanibharate' target="_blank" rel="noreferrer" className='icon-button'>
                    <FaGithub size={30} />
                </a>
                <a href='https://www.linkedin.com/in/varsharani-bharate-8a4a26118' target="_blank" rel="noreferrer" className='icon-button'>
                    <FaLinkedin size={30} />
                </a>
            </div>
            <p className='contact-note'>
                Or you can email me at: <a href="mailto:varsharanibharate@gmail.com" className='email-link'>varsharanibharate@gmail.com</a>
            </p>

        </div>
    );
}

export default Contact;
