import './About.css'
import Thomas from '../../assets/ThomasLesner.jpeg'

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
            <p>Im Thomas Lesner, an Account Executive and Manager with nearly a decade of leadership experience and a strong track record in driving results. With a customer-centric mindset and a passion for communication, Ive led high-performing teams and consistently broken sales records across both private and government sectors. Recently, Ive wanted to find a new challenge in life, a greater purpose. I hope to one day become a leader and mentor in the coding industry. Join me on my journey!</p>
        </div>
    )
}