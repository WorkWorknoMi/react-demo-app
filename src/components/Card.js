
import './Card.css';
//concept of composition 
function Card(props)
{
    const classes = 'card ' + props.className;
    return (
    <div className='card'>{props.children}</div>
    );
}
export default Card;