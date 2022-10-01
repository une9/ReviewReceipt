package nineproject.ReviewReceipt.controller;

import nineproject.ReviewReceipt.model.review.ReviewDetailVO;
import nineproject.ReviewReceipt.model.review.ReviewService;
import nineproject.ReviewReceipt.model.review.ReviewVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/review")
public class ReviewController {

    @Autowired
    private ReviewService rs;

    @GetMapping
    public List<ReviewVO> getAllReviews() {
        return rs.getAllReview();
    }

    @GetMapping("/{rvid}")
    public ReviewDetailVO getReviewDetail(@PathVariable int rvid) {
        return rs.getReviewDetail(rvid);
    }
}
