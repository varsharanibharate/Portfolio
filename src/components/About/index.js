import './index.css'

const About = () => {
    return(
        <div className="about-conatiner">
            <div className='details-container'>
                <hr />
                <h3 className='about-title'>About Varsharani</h3>
                <p className='about-description'>Problem Solver, Love to make things simple, <br /> Full Stack Developer,
                    Passionate and <br />dedicated to work.
                </p>
            </div>
            <div className='image-container'>
                <img className='image' src="https://southwestern.com/wp-content/uploads/2020/02/AdobeStock_284597294-1000x563.jpeg" alt=""/>
            </div>
        </div>
    )
}

export default About