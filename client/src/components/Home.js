import React, { useState, useContext, useEffect } from 'react'
import Header from './Header'
import MusicPlayer from './MusicPlayer'
import FellowDjs from './FellowDjs'
import IndDj from './IndDj'
import ImageGallery from './ImageGallery'
import { FaTimes } from 'react-icons/fa'
import Modal from 'react-modal'

import { UserContext } from '../context/userProvider'
const Home = (props) => {
    const { token, getData, addMix, addFellow, dataState } = useContext(UserContext)

    useEffect(() => {
        getData()
    }, [])

    const [inputs, changeInputs] = useState({
        url: '',
        mixName: '',
        dj: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        changeInputs(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const submitMix = (e) => {
        e.preventDefault()
        addMix(inputs.url, inputs.mixName)
        changeInputs(prevInputs => ({
            ...prevInputs,
            url: '',
            mixName: ''
        }))
    }

    const submitFellow = (e) => {
        e.preventDefault()
        addFellow(inputs.dj)
        changeInputs(prevInputs => ({
            ...prevInputs,
            dj: ''
        }))
    }

    const [fellowMixModalIsOpen, setFellowMixModalIsOpen] = useState(false)

    const openFellowMixModal = () => {
        setFellowMixModalIsOpen(true)
    }

    const closeFellowMixModal = () => {
        setFellowMixModalIsOpen(false)
    }
    
    const fellowMixModalStyles = {
        overlay: {
            zIndex: 20,
            margin: 'auto',
			backgroundColor: 'none',
			width: '75%',
			height: '75%'
        },
        content: {
			background: '#AE5E15',
			margin: 0,
			padding: 0,
			color: '#25282A',
			border: '1px solid black',
			borderRadius: '3px',
			boxShadow: 'black 5px 3px 8px'
        }
    }

    const adminHelp = () => {
        alert(`To add to mixlist: 
            1. Go to your mixcloud.
            2. Click the Share/Embed.
            3. Click Embed Player. Select Picture.
            4. Copy from the code snippet at the bottom the text after {src=} , not including the quotations.
            5. Paste in the "Add Music Url" input. Add in its name in the "Add Music Name" input. 
            6. Submit.
            
        To add another artist: 
            1. Type artist name in "Add Dj" input.
            2. Submit.`)
    }

    return (
        <div>
            <div className="headerImg"></div>
            <Header openAboutModal={props.openAboutModal} openBookModal={props.openBookModal} locPath={props.locPath} />

            <div className="musicFellow">
                <MusicPlayer />
                <FellowDjs artists={props.artists} />
            </div>
            { 
                token 
                && 
                <div className='editMusicDj'>
                    <form className='musicDjForm' onSubmit={submitMix}>
                        <input 
                            name='url'
                            type='text' 
                            placeholder='Add Music Url'
                            value={inputs.url}
                            onChange={handleChange} />
                        <input 
                            name='mixName'
                            type='text' 
                            placeholder='Add Music Name'
                            value={inputs.mixName}
                            onChange={handleChange} />

                        <button className='btn'>Submit</button>
                    </form>
                    <form className="djForm" onSubmit={submitFellow}>
                    <input 
                            name='dj'
                            type='text' 
                            placeholder='Add Dj'
                            value={inputs.dj}
                            onChange={handleChange} />

                        <button className='btn'>Submit</button>
                    </form>
                    <button onClick={openFellowMixModal} style={{margin: 'auto'}} className='btn'>Edit Listed Artists</button>
                    <button onClick={adminHelp} className='btn'>How to Fill In Info</button>
                </div>
            }
            
            <Modal
                isOpen={fellowMixModalIsOpen}
                onRequestClose={closeFellowMixModal}
                contentLabel="Book Modal"
                style={fellowMixModalStyles}
            >
                <h3 onClick={closeFellowMixModal} className="svgRight"><FaTimes style={{color: 'black', float:'right', margin: '10px'}} /></h3>

                <div className='editDjModal'>
                    { dataState.fellowData.map((ind) => <IndDj key={ind._id} {...ind} theKey={ind._id} />)}
                </div>
            </Modal>


            <ImageGallery />
        </div>
    )
}

export default Home