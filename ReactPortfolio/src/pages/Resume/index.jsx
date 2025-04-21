import'./Resume.css'
import resume from '../../assets/Lesner Resume 2024.pdf'

export default function Resume() {
    return (
        <div>
            <div>Resume</div>
            <iframe src={resume} className='iframe'></iframe>
        </div>
    )
}