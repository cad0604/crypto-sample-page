import { Checkbox, Col, Form, Row } from "antd";
import BrannSubmitButton from "components/ui/button/SubmitButton";
import BrannInput from "components/ui/input/Input";
import { email, hasSpace, required, termsAgree } from "config/Validation";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import actions from "states/auth/sign/actions";

export default function RegistrationSocialForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [params] = useSearchParams();
    const { isSigned, isAuthenticating } = useSelector(state => state.login);

    const userGmail = params.get('gmail');
    const userName = params.get('name');

    useEffect(() => {
        if (isSigned === true) {
            navigate('/')
        }

    }, [isSigned, navigate])

    const onFinish = (values) => {
        delete values.privacyTerms;
        values.password = "1@3Qweasd";
        dispatch({
            type: actions.SIGNUP,
            payload: values
        });
    }

    return (
        <>
            <Form
                className="login__registration"
                name="regiseration-form"
                fields={[
                    { name: 'email', value: userGmail },
                    { name: 'username', value: userName }
                ]}
                onFinish={onFinish}
            >
                <Row gutter={16} style={{ marginTop: '4rem' }}>
                    <Col span={12}>
                        <Form.Item name="username" rules={[required, hasSpace]}>
                            <BrannInput placeholder="Username *" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item name="email" rules={[required, email]}>
                            <BrannInput placeholder="Email *" disable />
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
                <Form.Item name="phone" rules={[required]}>
                    <BrannInput placeholder="Telephone number *" />
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