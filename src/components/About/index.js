import './index.css'

const About = () => {
    return(
        <div className="about-container">
            <div className='details-container'>
                <h3 className='about-title'>About</h3>
                <p className='about-description'>
                    I am a Full Stack Developer based in Helsingborg, Sweden, passionate about building 
                    efficient applications using ReactJS, Node.js, and TypeScript. With a background in 
                    Mechanical Engineering, I thrive in collaborative environments and enjoy tackling 
                    new challenges. My internships have equipped me with hands-on experience in both 
                    front-end and back-end development, driving my commitment to continuous learning.
                </p>
                <p className='about-name'>-Varsharani Bharate</p>
            </div>
            <div className='image-container'>
                <img className='image' src="https://southwestern.com/wp-content/uploads/2020/02/AdobeStock_284597294-1000x563.jpeg" alt="Varsharani Bharate" />
            </div>
        </div>
    )
}

export default About;
