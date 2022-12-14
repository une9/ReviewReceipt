package nineproject.ReviewReceipt.model.review;

import java.util.List;

public interface ReviewDAOInterface {
    public List<ReviewVO> selectAll();
    public ReviewVO selectById(int rvid);
    public int insertRv(ReviewVO rv);
    public int updateRv(ReviewVO rv);
    public int deleteRv(int rvid);
}
