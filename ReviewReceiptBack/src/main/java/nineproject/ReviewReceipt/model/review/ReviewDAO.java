package nineproject.ReviewReceipt.model.review;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class ReviewDAO implements ReviewDAOInterface{

//    @Autowired
//    SqlSession session;

    @Override
    public List<ReviewVO> selectAll() {
        return null;
    }

    @Override
    public ReviewVO selectById(int rvid) {
        return null;
    }

    @Override
    public int insertRv(ReviewVO rv) {
        return 0;
    }

    @Override
    public int updateRv(ReviewVO rv) {
        return 0;
    }

    @Override
    public int deleteRv(int rvid) {
        return 0;
    }
}
