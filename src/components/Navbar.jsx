import './Navbar.css';
import logo from '/airbnb-logo.png';
import preview from '/photo-grid.png';

export default function Navbar(){
    return(
        <header>
            <div className='top-bar'>
                <img className='logo' src={logo} height="40px" alt='Website logo.'/>
            </div>
            <div className='intro'>
                <img className='preview-img' src={preview} alt='Preview grid of images.'/>
                <div className='description'>
                    <h1>Online Experiences</h1>
                    <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
                </div>
            </div>
        </header>
    )
}