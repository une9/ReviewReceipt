package nineproject.ReviewReceipt.model.review;

import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface ReviewMapper {

    @Select("SELECT * FROM review")
    List<ReviewVO> selectAll();

    @Select("SELECT * FROM review JOIN review_detail USING (review_id) WHERE review_id = #{rvid}")
    ReviewDetailVO selectByRvId(int rvid);

    @Select("SELECT * FROM review WHERE user_id = #{userid}")
    ReviewVO selectByUserId(int userid);

    @Insert("INSERT INTO review VALUES()")
    int insertRv(ReviewVO rv);

//    @Update("UPDATE review SET create_date = SYSDATE(), ")
//    int updateRv(int rvid, ReviewVO rv);

    @Delete("DELETE FROM review WHERE review_id = #{rvid}")
    int deleteRv(int rvid);

}
