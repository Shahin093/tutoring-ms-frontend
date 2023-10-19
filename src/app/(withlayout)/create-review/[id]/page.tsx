"use client";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormTextArea from "@/components/Forms/FormTextArea";
import { useAddFeedbackDataMutation } from "@/redux/api/feedbackApi";
import { useAddReviewDataMutation } from "@/redux/api/reviewApi";
import { getUserInfo } from "@/services/auth.service";
import { Button, Col, Row, message } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";

type IDProps = {
  params: any;
};

const ManageFeedbackPage = ({ params }: IDProps) => {
  const user = getUserInfo() as any;
  const { id } = params;
  const router = useRouter();
  const [addReviewData] = useAddReviewDataMutation();

  const onSubmit = async (values: any) => {
    console.log("values : ", values);
    const data = { userId: user?.userId, serviceId: id, ...values };
    message.loading("Creating...");
    try {
      const res = await addReviewData(data);
      console.log("res ", res);
      if (!!res) {
        message.success("Review created successfully!");
        router.push("/myBooking");
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <div>
      <div
        style={{
          background: "#e6fffb",
          border: "radius",
          padding: "20px",
        }}
      >
        <Form
          submitHandler={onSubmit}
          // resolver={yupResolver(registrationSchema)}
        >
          <h2
            style={{
              fontSize: "20px",
            }}
          >
            Write Feedback{" "}
          </h2>
          <Row
            // justify="center"
            // align="middle"
            style={{
              minHeight: "40vh",
              gap: "10px",
              background: "#d9d9d9",
              padding: "10px",
            }}
          >
            <Col sm={12} md={16} lg={14}>
              <div
                style={{
                  margin: "15px 0px",
                }}
              >
                <FormInput
                  name="review-content"
                  type="text"
                  size="large"
                  label="Description"
                  placeholder="description"
                  required
                />
              </div>
            </Col>
            <Col sm={12} md={16} lg={14}>
              <div
                style={{
                  margin: "15px 0px",
                }}
              >
                <FormInput
                  name="review-count"
                  type="number"
                  size="large"
                  label="Review Rating"
                  placeholder="review count"
                  required
                />
              </div>
            </Col>

            <Col sm={12} md={16} lg={14}>
              <Button
                type="primary"
                htmlType="submit"
                style={{ justifyContent: "center" }}
              >
                Create
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};

export default ManageFeedbackPage;
