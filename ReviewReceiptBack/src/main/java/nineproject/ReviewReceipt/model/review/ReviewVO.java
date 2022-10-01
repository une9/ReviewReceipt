package nineproject.ReviewReceipt.model.review;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import java.sql.Date;

@Getter @Setter
@RequiredArgsConstructor
public class ReviewVO {

    private Long review_id;
    private String review_type;
    private Date do_date;
    private String review_title;
    private String abst;
    private String publisher;
    private String director;
    private String player;
    private String favorite_line;
    private String show_type;
    private String place;
    private int user_id;
    private Date publish_year;

}
