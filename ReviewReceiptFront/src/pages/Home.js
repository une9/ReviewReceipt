import { useCallback, useEffect, useState } from "react";
import axios from 'axios';
import ReviewListItem from "../components/ReviewListItem";

const Home = () => {
    const [reviews, setReviews] = useState([]);

    const fetchReviews = useCallback(async () => {
        try {
            console.log("reviews: ", reviews);

            const resp = await axios.get('/review');
            console.log("resp.data: ", resp.data);
            setReviews(resp.data);
        } catch (error) {
            console.log(error);
        }
    }, [reviews]) ;

    useEffect(() => {
        fetchReviews();
        console.log("loading")
    }, []);


    return (
        <div>
            <h1>
                Home
            </h1>

            <section>
                {
                    reviews.map((review, i) => (
                        <ReviewListItem props={review} key={i} />
                    ))
                }
            </section>
        </div>
    )
}

export default Home;