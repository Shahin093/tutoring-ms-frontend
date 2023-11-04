"use client";
import { Card, Col, Rate, Row } from "antd";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useReviewsQuery } from "@/redux/api/reviewApi";

interface ReviewProps {
  name: string;
  content: string;
  starRating: number;
  imageUrl: string;
}

const Review = () => {
  const { data } = useReviewsQuery(undefined);
  console.log("review", data);

  const reviews = [];

  if (data) {
    for (let i = 0; i < data?.length; i++) {
      const item = data[i];
      reviews.push({
        id: item?.id,
        name: item?.user?.name,
        content: item?.review_Comment,
        starRating: item?.reatingCount,
        imageUrl: item?.user?.profileImg,
      });
    }
  }

  // const reviews = [
  //   {
  //     id: 1,
  //     name: "John Doe",
  //     content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //     starRating: 4.5,
  //     imageUrl:
  //       "https://academist.qodeinteractive.com/wp-content/uploads/2018/06/main-home-team-big-8.jpg",
  //   },
  //   {
  //     id: 1,
  //     name: "John Doe",
  //     content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //     starRating: 4.5,
  //     imageUrl:
  //       "https://academist.qodeinteractive.com/wp-content/uploads/2018/06/main-home-team-big-8.jpg",
  //   },
  //   {
  //     id: 1,
  //     name: "John Doe",
  //     content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //     starRating: 4.5,
  //     imageUrl:
  //       "https://academist.qodeinteractive.com/wp-content/uploads/2018/06/main-home-team-big-8.jpg",
  //   },
  // ];
  const settings = {
    centerMode: true,
    centerPadding: "60px",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,

    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div
      style={{
        marginTop: "100px",
        marginBottom: "100px",
        margin: "16px",
      }}
    >
      <Slider {...settings}>
        {reviews &&
          reviews?.map((review) => (
            <div key={review.id}>
              <Card
                title={review?.name}
                extra={
                  <Rate allowHalf defaultValue={review?.starRating} disabled />
                }
                style={{
                  width: 350,
                  height: 300,
                  margin: "13px",
                  backgroundColor: "#f4ffb8",
                }}
              >
                <img
                  src={review?.imageUrl}
                  alt={review?.name}
                  style={{ width: "20%" }}
                />
                <p>{review?.content}</p>
              </Card>
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default Review;
