import './index.css'

const About = () => {
    return(
        <div className="about-conatiner">
            <div className='details-container'>
                <hr />
                <h3 className='about-title'>About Varsharani</h3>
                <p className='about-description'>I am Varsharani and I am currently looking for job in Frontend Development.<br /> 
                 I have a bachelor's degree in Mechanical. People find me to be an upbeat, <br /> 
                 self motivated team player with excellent communication skills.<br />
                 I am dedicated person with a family of four. Problem Solver, Love to make<br />  things simple, Full Stack Developer,
                    Passionate and dedicated to work.
                </p>
            </div>
            <div className='image-container'>
                <img className='image' src="https://southwestern.com/wp-content/uploads/2020/02/AdobeStock_284597294-1000x563.jpeg" alt=""/>
            </div>
        </div>
    )
}

export default About