import React, {useContext, useState, useEffect} from 'react'
import { UserContext } from '../context/userProvider'

const About = () => {
    const { token, editAbout, dataState: {aboutData} } = useContext(UserContext)
    const [loader, setLoader] = useState('Loading')

    useEffect(() => {
        if(aboutData[0]?._id === undefined){
            setLoader('Loading')
        }else {
            setLoader(aboutData[0]?._id)
        }
    })

    let initText = aboutData[0].aboutText
    const [aboutText, setAboutText] = useState(initText)

    // use useEffect to set the initState to the value of the current aboutText

    const handleChange = (e) => {
        setAboutText(e.target.value)
    }

    const handleUpdate = () => {
        editAbout(aboutText, aboutData[0]?._id)
        alert`Successfully updated!`
    }

    

    return (
        <div className="aboutPage">
            <div className='aboutImage'></div>
            <div className='aboutContent'>
                <h1>ABOUT ME</h1>
                {loader === 'Loading'?
                    <p>Loading...</p>
                    :
                    <>
                        {token ? 
                        <div className="editAbout">
                            <textarea value={aboutText} onChange={handleChange} name="about" id="aboutMe" cols="30" rows="10"></textarea>
                            <br/>
                            <button onClick={handleUpdate}>Save</button>
                        </div>
                        : 
                        <p>{aboutData[0].aboutText}</p> }
                    </>
                }                
            </div>
        </div>
    )
}

export default About