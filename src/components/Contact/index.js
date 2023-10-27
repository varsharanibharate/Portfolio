import './index.css'
const Contact = () => {
    return(
        <div className="contact-container">
            <h1 className='contact-title'>Connect to Varsharani</h1>
            <div className='button-container'>
                <a href='https://github.com/varsharanibharate'target = "_blank" rel="noreferrer" >
                    <button type='button' className='button'>GITHUB</button>
                </a>
                <a href='https://www.linkedin.com/in/varsharani-bharate-8a4a26118' target = "_blank" rel="noreferrer" >
                    <button type='button' className='button'>LINKEDIN</button>
                </a>
            </div>
        </div>
    )
}

export default Contact