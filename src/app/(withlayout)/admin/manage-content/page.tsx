"use client";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormTextArea from "@/components/Forms/FormTextArea";
import { useAddContentDataMutation } from "@/redux/api/contentApi";
import { useAddFeedbackDataMutation } from "@/redux/api/feedbackApi";
import { Button, Col, Row, message } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ManageContentPage = () => {
  const router = useRouter();
  const [addContentData] = useAddContentDataMutation();
  const onSubmit = async (values: any) => {
    console.log("values : ", values);
    message.loading("Creating...");
    try {
      const res = await addContentData(values);
      console.log("res ", res);
      if (!!res) {
        message.success("content created successfully!");
        router.push("/profile");
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
        >
          <h2
            style={{
              fontSize: "20px",
            }}
          >
            Write Feedback{" "}
          </h2>
          <Row
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
                  name="title"
                  type="text"
                  size="large"
                  label="Title"
                  placeholder="title"
                  required
                />
              </div>
            </Col>
            <Col span={12} style={{ margin: "10px 0" }}>
              <FormTextArea
                name="description"
                label="Description"
                placeholder="Type Description"
                rows={4}
              />
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

export default ManageContentPage;
