import { FaStar } from 'react-icons/fa';


const StarsRow = () => {
    const numberOfStars = 5;// define how many stars
    const rowOfStars = [...Array(numberOfStars)].map((faStar, index) => <FaStar key={index} color='#f5da42'/>);// map over the icon to keep code DRY
 
return (
<div className='row-of-stars-component'>
    {rowOfStars}
</div>
)
}
 
export default StarsRow