import React from "react";
import ReactDOM from "react-dom/client";

import { ConfigProvider } from "antd";
import { AntConfigProps } from "config/AntConfig";
import "assets/css/app.scss";

import App from "App";
import { GoogleOAuthProvider } from "@react-oauth/google";

if (document.getElementById("root")) {
  ReactDOM.createRoot(document.getElementById("root")).render(
    <ConfigProvider {...AntConfigProps}>
      <GoogleOAuthProvider clientId="1084618473456-h1f7cjtofv1jb7niv4a5e3bqnhpm1uog.apps.googleusercontent.com">
        <App />
      </GoogleOAuthProvider>
    </ConfigProvider>
  );
}
