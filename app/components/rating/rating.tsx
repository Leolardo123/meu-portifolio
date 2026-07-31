import StarEmptyIcon from './icons/StarEmptyIcon';
import StarFullIcon from './icons/StarFullIcon';
import './rating.css';

interface RatingProps {
    rating: number;
    maxRating?: number;
}

const defaultMaxRating = 5;

export function RatingRepeat(props:RatingProps) {
    return (<div className="rating-repeat">
        {Array.from({ length: props.maxRating || defaultMaxRating}, (_, index) => {
            const isFilled = index < props.rating;
            return (isFilled ? <StarFullIcon /> : <StarEmptyIcon />)
        })}
    </div>)
}