import StarEmptyIcon from "./icons/StarEmptyIcon";
import StarFullIcon from "./icons/StarFullIcon";

interface RatingProps {
  rating: number;
  width: number;
  height: number;
  maxRating?: number;
}

const defaultMaxRating = 5;

export function RatingRepeat(props: RatingProps) {
  return (
    <div className="flex flex-col">
      <div className="flex">
        {Array.from(
          { length: props.maxRating || defaultMaxRating },
          (_, index) => {
            const isFilled = index < props.rating;
            const key = `rating-star-${index}`;
            return isFilled ? (
              <StarFullIcon
                key={key}
                width={props.width}
                height={props.height}
              />
            ) : (
              <StarEmptyIcon
                key={key}
                width={props.width}
                height={props.height}
              />
            );
          },
        )}
      </div>
    </div>
  );
}
