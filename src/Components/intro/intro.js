import React from 'react';
import './intro.css'
import bg from '../../Assets/ProfileImage.png'

const intro = () => {
    return (
        <section id='intro'>
            <div className='introContent'>
                <span className='hello'>Hello,</span>
                <span className='introText'>I'm <span className='introName'>Jubit</span></span>
                <p className="introPara">currently pursuing my MCA looking to move into an AI specialist role. <br /></p>
            </div>
            <img src={bg} alt='Profile' className='bg'></img>
        </section>
    )
}

export default intro;