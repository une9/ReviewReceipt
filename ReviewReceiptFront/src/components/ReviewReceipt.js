const ReviewReceipt = ({review: {
    review_TITLE
}}) => {

    return (
        <article>
            <div>[ 영수증 ]</div>
            <h1>
                {review_TITLE}
            </h1>
        </article>
    )
}

export default ReviewReceipt;