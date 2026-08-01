import StarEmptyIcon from './icons/StarEmptyIcon';
import StarFullIcon from './icons/StarFullIcon';

interface RatingProps {
    label: string;
    rating: number;
    maxRating?: number;
}

const defaultMaxRating = 5;

export function RatingRepeat(props:RatingProps) {
    return (
        <div className="flex flex-col">
            <p>{props.label}</p>
            <div className="flex">
                {Array.from({ length: props.maxRating || defaultMaxRating}, (_, index) => {
                    const isFilled = index < props.rating;
                    const key = `rating-star-${index}`;
                    return (isFilled ? <StarFullIcon key={key} /> : <StarEmptyIcon key={key} />)
                })}
            </div>
        </div>)
}