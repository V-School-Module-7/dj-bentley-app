import React, { useState, useEffect } from 'react'

const getInstaProfile = require("user-instagram");


const InstagramFeed = () => {

    const [ instaState, setInstaState ] = useState([])

    useEffect(() => {
        handleInsta()
    }, []);

    const handleInsta = () => {
        getInstaProfile("djbentleytaylor")
            .then(userData => {
            const myData = userData.posts.splice(0,6)
            console.log(myData)
            const dataArr = []
            myData.forEach(data => dataArr.push(
                {
                    img: data.link + '/media/?size=t',
                    link: data.link,
                    id: data.id,
                    captionText: data.captionText
                }
                
                ))
            console.log(dataArr)
            setInstaState(dataArr)

            })
            .catch(console.error);
    }

    return (
        <div>
            <h1 className="headlineTwo">Instagram</h1>

            <div className="instaDiv">
                { instaState.map((post, i) => <a href={post.link} target='_blank' rel="noopener noreferrer" key={post.id}>
                    <img src={post.img} alt={post.captionText} />
                    </a>) }
            </div>
            
        </div>
    )
}

export default InstagramFeed