package nineproject.ReviewReceipt.model.review;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReviewService {

    @Autowired
    private ReviewMapper um;

    public List<ReviewVO> getAllReview() {
        final List<ReviewVO> reviewList = um.selectAll();
        return reviewList;
    }

    public ReviewDetailVO getReviewDetail(int rvid) {
        return um.selectByRvId(rvid);
    }

}
