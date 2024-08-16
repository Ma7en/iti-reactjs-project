// font awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    // faStar,
    faStarHalfAlt,
    faStar as farStar,
} from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";

function Stars({ rating }) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.25 && rating - fullStars < 0.99;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
        <>
            <div className="rating-stars my-3">
                {[...Array(fullStars)].map((_, index) => (
                    <FontAwesomeIcon
                        key={index}
                        icon={farStar}
                        color="#2fa023"
                    />
                ))}

                {hasHalfStar && (
                    <FontAwesomeIcon icon={faStarHalfAlt} color="#2fa023" />
                )}

                {[...Array(emptyStars)].map((_, index) => (
                    <FontAwesomeIcon icon={faStar} key={index} />
                ))}
            </div>
        </>
    );
}

export default Stars;
