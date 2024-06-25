import headshot from '../assets/Headshot.jpeg'
import { AwesomeButton } from "react-awesome-button";
import 'react-awesome-button/dist/styles.css';

const PersonCard = () => {
    return (
        <>
            <div className='grid col fade-in-3 person-card'>
                <div><img src={headshot} alt='Trey Yu' className='headshot-image'/>
                </div>
                <br/>
                <div className='introductions fade-in-5'>
                    <p className='fade-in-5'>Hey, thanks for stopping by</p>
                    <p className='fade-in-7'>I'm Trey, Software Engineer and Project Manager</p>
                </div>
                <AwesomeButton
                    cssModule={AwesomeButton}
                    type="Primary"
                    onPress={() => {
                        console.log("Pressed")
                    }}>
                    Button Text
                </AwesomeButton>
            </div>
            <div className='grid col'>

            </div>
        </>
    )
}

export default PersonCard