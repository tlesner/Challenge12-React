import './Footer.css'
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <div>
            <div className='footer-container'>
                <div className='footer-list'>
                    <div
                        key='linkedin'
                        className="footer-linkedin"
                        href=''
                    >
                        <a href='https://www.linkedin.com/in/thomas-l-8b3787ab/' target='_blank'>
                            <FaLinkedin />
                        </a>
                    </div>
                    <div key='github' className="footer-github">
                        <a href='https://github.com/tlesner' target='_blank'>
                            <FaGithub />
                        </a>
                    </div>
                </div>
            </div>
            <div className='footer-copy'>
                <p>Copyright</p>
            </div>
        </div>
    )
}