import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReviewReceipt from "../components/ReviewReceipt";

const ReviewDetail = () => {
    const params = useParams();
    const rvid = params.rvid;
    const [review, setReview] = useState({});

    const fetchReview = useCallback(async () => {
        try {
            console.log("review: ", review);

            const resp = await axios.get(`/review/${rvid}`);
            console.log("resp.data: ", resp.data);
            setReview(resp.data);
        } catch (error) {
            console.log(error);
        }
    }, [review]) ;

    useEffect(() => {
        fetchReview();
        console.log("loading")
    }, []);

    return (
        <div>
            <ReviewReceipt review={review} />

        </div>
    )
}

export default ReviewDetail;