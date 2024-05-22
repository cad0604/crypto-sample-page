import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import { Form } from "antd";

import { match, passwordVaildate, required } from "config/Validation";

import BrannSubmitButton from "components/ui/button/SubmitButton";
import BrannPasswordInput from "components/ui/input/PasswordInput";

import { useDispatch, useSelector } from "react-redux";
import actions from "states/auth/reset/actions";
import BrannTitle from "components/ui/typo/Title";

export default function ResetPasswordForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [params] = useSearchParams();

  const { isReseted, isReseting } = useSelector(state => state.resetPass);

  useEffect(() => {
    if (isReseted === true) {
      navigate("/auth/login");
    }
  }, [isReseted, navigate]);

  const onFinish = (values) => {
    values.token = params.get('token');
    values.userId = Number(params.get('id'));
    dispatch({
      type: actions.RESET,
      payload: values
    })
  };

  return (
    <>
      <Form className="login" name="reset-password-form" onFinish={onFinish}>
        <Form.Item>
          <BrannTitle text={"Reset password"} />
        </Form.Item>
        <Form.Item name="password" rules={[required, passwordVaildate]} className="login__field" hasFeedback>
          <BrannPasswordInput placeholder="New Password *" />
        </Form.Item>
        <Form.Item
          name="confirmPassword"
          dependencies={["password"]}
          rules={[required, match]}
          hasFeedback
          className="login__field"
        >
          <BrannPasswordInput placeholder="Confirm password *" />
        </Form.Item>
        <Form.Item>
          <BrannSubmitButton fullWidth label="Reset Password" loading={isReseting} />
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
