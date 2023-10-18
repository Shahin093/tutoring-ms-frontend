"use client";

import { useServicesQuery } from "@/redux/api/serviceApi";
import { useDebounced } from "@/redux/hooks";
import { IService } from "@/types";
import { Layout, Space, Card, Select, SelectProps, Avatar, Button } from "antd";
import { useState } from "react";
import { ReloadOutlined } from "@ant-design/icons";
import styled from "styled-components";

const { Header, Footer, Sider, Content } = Layout;

const headerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  //   width: 30,
  paddingInline: 50,
  lineHeight: "64px",
  backgroundColor: "#7dbcea",
};

const contentStyle: React.CSSProperties = {
  //   textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  //   color: "#fff",
  backgroundColor: "#b5f5ec",
};

const siderStyle: React.CSSProperties = {
  textAlign: "center",
  lineHeight: "80px",
  width: "100%",
  height: "600px",
  color: "#fff",

  padding: "50px 0px",
  backgroundColor: "#0050b3",
};

const CardComponent = styled(Card)`
  &:hover {
    background-color: #007bff;
    border-color: #0056b3;
  }
`;

// export const metadata: Metadata = {
//   title: "T-MS | Services",
// };

const ServiceBookingPage = () => {
  const query: Record<string, any> = {};
  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [serviceName, setServiceName] = useState<null | string>(null);
  const [location, setLocation] = useState<null | string>(null);

  const [open, setOpen] = useState<boolean>(false);
  const [serviceId, setServiceId] = useState<string>("");

  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;
  query["serviceName"] = serviceName;
  query["location"] = location;

  const debouncedSearchTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  if (!!debouncedSearchTerm) {
    query["searchTerm"] = debouncedSearchTerm;
  }
  const { data, isLoading } = useServicesQuery({ ...query });
  const { data: selectData } = useServicesQuery({});

  console.log("service data: ", data);

  const services = data?.services;
  const selectDataServices = selectData?.services;
  console.log("services : ", data?.services);
  const meta = data?.meta;

  const serviceNameOptions: SelectProps["options"] = [];
  const locationOptions: SelectProps["options"] = [];

  if (selectDataServices) {
    for (let i = 0; i < selectDataServices?.length; i++) {
      const item = selectDataServices[i];
      serviceNameOptions.push({
        value: item?.serviceName,
        label: item?.serviceName,
      });
    }
  }
  if (selectDataServices) {
    for (let i = 0; i < selectDataServices?.length; i++) {
      const item = selectDataServices[i];
      locationOptions.push({
        value: item?.location,
        label: item?.location,
      });
    }
  }
  console.log("options ", locationOptions);

  const handleChangeServiceName = (value: string | null) => {
    setServiceName(value);
    console.log(`selected ${value}`);
  };
  const handleChangeLocation = (value: string | null) => {
    setLocation(value);
    console.log(`selected ${value}`);
  };

  const resetFilters = () => {
    setSortBy("");
    setSortOrder("");
    setSearchTerm("");
    setLocation("");
    setServiceName("");
  };

  return (
    <Layout>
      <Header style={headerStyle}>Header</Header>
      <Layout hasSider>
        <Sider style={siderStyle}>
          {(!!sortBy ||
            !!sortOrder ||
            !!searchTerm ||
            !!location ||
            !!serviceName) && (
            <Button
              style={{ margin: "0px 5px" }}
              type="primary"
              onClick={resetFilters}
            >
              <ReloadOutlined />
              Refresh
            </Button>
          )}
          <h1>Tutor-MS</h1>
          <Select
            // mode="multiple"
            style={{ width: "80%" }}
            placeholder="Service Name"
            onChange={handleChangeServiceName}
            options={serviceNameOptions}
          />
          <Select
            // mode="multiple"
            style={{ width: "80%" }}
            placeholder="Location"
            onChange={handleChangeLocation}
            options={locationOptions}
          />
        </Sider>
        <Content
          style={{
            backgroundColor: "#b5f5ec",
          }}
        >
          <Card
            title="You can see our all Services."
            style={{
              backgroundColor: "#fafafa",
            }}
          >
            {services?.map((service: IService, index: number) => (
              <CardComponent key={index}>
                <Card
                  style={{
                    backgroundColor: "#b5f5ec",
                    // display: "flex",
                    gap: "40px",
                  }}
                  type="inner"
                  title={service?.serviceName}
                  extra={<a href="#">More</a>}
                >
                  <div style={{ display: "flex" }}>
                    <Avatar src={service?.service_image}></Avatar>
                    <h4 style={{ marginLeft: "20px" }}>
                      {service?.serviceName}
                    </h4>
                    <h4 style={{ marginLeft: "20px" }}>
                      {service?.serviceCode}
                    </h4>
                    <h4 style={{ marginLeft: "20px" }}>{service?.location}</h4>
                    <h4 style={{ marginLeft: "20px" }}>{service?.schedule}</h4>
                    <h4 style={{ marginLeft: "20px" }}>{service?.category}</h4>
                    <h4 style={{ marginLeft: "20px" }}>
                      {service?.serviceAuthor}
                    </h4>
                  </div>
                </Card>
              </CardComponent>
            ))}
          </Card>
        </Content>
      </Layout>
      {/* <Footer style={footerStyle}>Footer</Footer> */}
    </Layout>
  );
};

export default ServiceBookingPage;
