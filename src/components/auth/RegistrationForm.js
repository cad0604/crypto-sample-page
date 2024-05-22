import { Checkbox, Col, Form, Row } from "antd";
import BrannSubmitButton from "components/ui/button/SubmitButton";
import BrannInput from "components/ui/input/Input";
import BrannPasswordInput from "components/ui/input/PasswordInput";
import { email, hasSpace, match, passwordVaildate, required, termsAgree } from "config/Validation";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import actions from "states/auth/sign/actions";

export default function RegistrationForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isSigned, isAuthenticating } = useSelector(state => state.login);

    useEffect(() => {
        if (isSigned === true) {
            navigate('/')
        }

    }, [isSigned, navigate])

    const onFinish = (values) => {
        delete values.confirmPassword;
        delete values.privacyTerms;

        dispatch({
            type: actions.SIGNUP,
            payload: values
        });
    }

    return (
        <>
            <Form className="login__registration" name="regiseration-form" onFinish={onFinish}>
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item name="username" rules={[required, hasSpace]}>
                            <BrannInput placeholder="Username *" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item name="email" rules={[required, email]}>
                            <BrannInput placeholder="Email *" />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item name="firstName" rules={[required]}>
                            <BrannInput placeholder="First name *" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item name="lastName" rules={[required]}>
                            <BrannInput placeholder="Last name *" />
                        </Form.Item>
                    </Col>
                </Row>
                <Form.Item name="phone">
                    <BrannInput placeholder="Telephone number *" />
                </Form.Item>

                <Form.Item name="password" rules={[required, passwordVaildate]} hasFeedback>
                    <BrannPasswordInput placeholder="New password *" />
                </Form.Item>
                <Form.Item
                    name="confirmPassword"
                    dependencies={["password"]}
                    rules={[required, match]}
                    hasFeedback
                >
                    <BrannPasswordInput placeholder="Confirm password *" />
                </Form.Item>
                <Form.Item name="privacyTerms" valuePropName="checked" rules={[termsAgree]}>
                    <Checkbox>
                        Do you agree to the <a target="_blank" rel="noreferrer" href="/">Terms</a> and <a target="_blank" rel="noreferrer" href="/">Conditions</a>.
                    </Checkbox>
                </Form.Item>
                <Form.Item>
                    <BrannSubmitButton label="SignUp" fullWidth loading={isAuthenticating} />
                </Form.Item>
            </Form>
            <div className="screen__background">
                <span className="screen__background__shape screen__background__shape4"></span>
                <span className="screen__background__shape screen__background__shape3"></span>
                <span className="screen__background__shape screen__background__shape2"></span>
                <span className="screen__background__shape screen__background__shape1"></span>
            </div>
        </>
    )
}