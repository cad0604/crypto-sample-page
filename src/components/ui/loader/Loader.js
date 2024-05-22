import React from "react";
import { Space, Spin } from "antd";

function Loader() {
  return (
    <Space className="brann-page-loader">
      <Spin />
    </Space>
  );
}

export default Loader;
