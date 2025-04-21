import './About.css'
import Thomas from '../../assets/ThomasLesner.jpg'

export default function About() {
    return (
        <div className='about-container'>
            <p>
                About
            </p>
            <img
                src={Thomas}
                alt="Picture of Thomas Lesner" 
            />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos rerum nostrum, dicta non fugit nam earum impedit dolores voluptatibus commodi, assumenda iure! Dolore molestiae soluta tempore reiciendis! Laboriosam, iure enim?</p>
        </div>
    )
}