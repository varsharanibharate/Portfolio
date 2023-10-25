import './index.css'

const Home = () => {
    return(
        <div className="home-container">
            <h1 className='name'>Varsharani Bharate</h1>
            <p className='title'>Problem Solver, Love to make things simple</p>
            <hr />
            <div className='button-container'>
                <button type='button' className='button'>TWITTER</button>
                <button type='button' className='button'>GITHUB</button>
                <button type='button' className='button'>LINKEDIN</button>
                <button type='button' className='button'>FACEBOOK</button>
            </div>
        </div>
    )
}

export default Home