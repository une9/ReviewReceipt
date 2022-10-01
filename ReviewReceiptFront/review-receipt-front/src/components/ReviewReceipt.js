const ReviewReceipt = ({props : {
    review_title,
}}) => {

    return (
        <article>
            <div>[ 영수증 ]</div>
            <h1>
                {review_title}
            </h1>
        </article>
    )
}

export default ReviewReceipt;