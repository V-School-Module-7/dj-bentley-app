

import './style.css'
import StarsRow from "./StarsRow"
import the_knot_logo from '../assets/the_knot_logo.png'
import TK_BOW_2024_Badge from '../assets/TK_BOW_2024_Badge.png'


function Reviews() {



    function navigateToTheKnotReviews() {
        window.open(
            "https://www.theknot.com/marketplace/dj-bentley-park-city-ut-2064480"
        );
    }

    return (

        <div className="reviews-container">

            <h1 className="reviews-header">Awards & reviews</h1>

            <div className="reviews-awards-container">
                <div className="badgeContainer">
                    <img width={100} src={the_knot_logo} />
                    <img width={100} src={TK_BOW_2024_Badge} />
                </div>
                <p>
                    DJ Bentley was selected as a 2023 and 2024 ­­winner of The Knot Best of Weddings! An accolade representing the highest- and most-rated wedding professionals
                    as reviewed by real couples. To determine the winners, The Knot analyzed millions of its user reviews across various vendor categories to find the
                    highest-rated vendors of the year. These winners represent the best of the best wedding professionals that engaged couples should consider booking
                    for their own unique weddings.
                </p>
            </div>

            <h2 className="reviews-recent-reviews-header">Recent Reviews</h2>

            <div className="reviews-recent-reviews">

                <span style={{ display: 'flex', alignItems: 'center' }} className="reviews-sub-header-container">

                    <h3 className="reviews-recent-reviews-sub-header">Jen F. - 5/5 Review</h3>
                    {/* <StarsRow /> */}

                </span>

                <p>
                    Bentley is one of my favorite DJs I&apos;ve used for my events. His professionalism, good energy, and manners are just the cherry on top of the
                    good music and vibe he sets. I throw upscale apr&eacute;s ski parties at a variety of venues in Park City such as Pendry hotel, a team USA
                    Olympic party, house parties and more with DJ Bentley. All venues have since requested his contact to do future business with.
                </p>
            </div>

            <div className="reviews-recent-reviews">

                <span style={{ display: 'flex', alignItems: 'center' }} className="reviews-sub-header-container">

                    <h3 className="reviews-recent-reviews-sub-header">Ashley W. - 5/5 Review</h3>
                    {/* <StarsRow /> */}

                </span>
                <p>
                    DJ Bentley was absolutly amazing!! He worked in every detail of every request I had for my wedding. He was on the dance floor dancing with
                    us and working the crowd to get them on the dance floor. One of the best decisions I made for my wedding was hiring DJ Bentley!
                </p>
            </div>

            <div className="reviews-recent-reviews">

                <span style={{ display: 'flex', alignItems: 'center' }} className="reviews-sub-header-container">

                    <h3 className="reviews-recent-reviews-sub-header">Joel J. - 5/5 Review</h3>
                    {/* <StarsRow /> */}

                </span>
                <p>
                    We booked DJ Bentley for our wedding. From our first conversation we knew he got what we were looking for and would read the room and cater to
                    the crowd and not trends. Our read was right and he was such a great addition to our day. We could not be happier with the result. He really felt
                    like part of the family by the end of the night nd we highly recommend DJ Bentley for your next event!
                </p>
            </div>

            <button className="reviewsBtn" onClick={navigateToTheKnotReviews}>Additional Reviews</button>
        </div>
    )
}

export default Reviews