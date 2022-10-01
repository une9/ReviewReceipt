import { useNavigate } from "react-router-dom"

const ReviewListItem = ({props: {
    review_id,
    review_title,
    review_type,
    user_id,
    abst,
    director,
    do_date,
    favorite_line,
    player,
    publish_year,
    publisher,
    place,
    show_type
}}) => {
    let navigate = useNavigate();

    const moveToReviewDetail = (rvid, e) => {
        console.log(rvid)
        navigate(`/review/${rvid}`);
    }


    return (
        <article onClick={(event) => moveToReviewDetail(review_id, event)}>
            <div>{do_date}</div>
            <h2>
                {review_title} ({publish_year})
            </h2>
            <p>{abst}</p>
        </article>
    )

}

export default ReviewListItem;