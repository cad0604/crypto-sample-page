import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Form, notification } from "antd";

import { email, required } from "config/Validation";

import BrannInput from "components/ui/input/Input";
import BrannSubmitButton from "components/ui/button/SubmitButton";
import { useDispatch, useSelector } from "react-redux";
import actions from "states/auth/reqresetpass/actions"
import BrannTitle from "components/ui/typo/Title";
// import actions1 from "states/auth/actions"

export default function ForgotPasswordForm() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [api, contextHolder] = notification.useNotification();


  const { user, isRequesting } = useSelector((state) => state.requestPass);

  useEffect(() => {
    if (user !== null) {
      // const accessToken = user.link.split("token=")[1].split("&id=")[0];
      // const userID = user.link.split("token=")[1].split("&id=")[1];
      // localStorage.setItem("accessToken", accessToken);
      // localStorage.setItem("userID", userID);
      // navigate("/auth/reset-password/" + accessToken);
      const openNotification = () => {
        api.open({
          message: 'Success!',
          duration: 5,
          description:
            'Request reset email has sent to your email. Please check email and reset your password',
          style: {
            width: 400,
          },
        });
      };
      openNotification();
    }
  }, [user, navigate, api])


  const onFinish = (values) => {
    dispatch({
      type: actions.REQUESTRESET,
      payload: values,
    });
  };

  return (

    <>
      {contextHolder}
      <Form className="login" name="forgot-password-form" onFinish={onFinish}>
        <Form.Item>
          <BrannTitle text={"Did you forgot password?"} />
        </Form.Item>
        <Form.Item name="email" rules={[required, email]} className="login__field">
          <BrannInput placeholder="Email *" />
        </Form.Item>
        <Form.Item>
          <BrannSubmitButton fullWidth label="Send email" loading={isRequesting} />
        </Form.Item>
      </Form>
      <div className="screen__background">
        <span className="screen__background__shape screen__background__shape4"></span>
        <span className="screen__background__shape screen__background__shape3"></span>
        <span className="screen__background__shape screen__background__shape2"></span>
        <span className="screen__background__shape screen__background__shape1"></span>
      </div>
    </>
  );
}