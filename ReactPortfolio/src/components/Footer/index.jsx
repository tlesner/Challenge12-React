import './Footer.css'

export default function Footer () {
    const buttons = ['LinkedIn', 'GitHub']
        return(
            <div>
                <div className='footer-container'>
                    <div className='footer-list'>
                        {buttons.map((button, index) => (
                                <div key={index} className="footer-item">{button}</div>
                            )
                        )}
                    </div>
                </div>
                <div className='footer-copy'>
                    <p>Copyright</p>
                </div>
            </div>
    )
}