import React, { useEffect, useState } from "react";
import { Button, Form } from "antd";
import { hasSpace, required } from "config/Validation";
import BrannLink from "components/ui/typo/Link";
import Box from "components/ui/box/Box";
import BrannInput from "components/ui/input/Input";
import BrannPasswordInput from "components/ui/input/PasswordInput";

import BrannIcon from "components/ui/typo/Icon";
import { faChevronRight, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { Facebook, Google, LinkedIn } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import actions from "states/auth/sign/actions";
import { LoginSocialFacebook, LoginSocialGoogle, LoginSocialLinkedin } from "reactjs-social-login";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export default function LoginForm() {
  const [googleLoginData, setGoogleLoginData] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { shouldRegist, user, isAuthenticating } = useSelector(state => state.login);

  useEffect(() => {
    if (shouldRegist === true) navigate(`../regist_social?gmail=${googleLoginData.email}&name=${googleLoginData.name}`);
  }, [shouldRegist, navigate, googleLoginData]);

  useEffect(() => {
    if (user !== null) {
      Cookies.set('token', user.accessToken);
      Cookies.set('username', user.user.username);
      navigate('/')
    }
  }, [user, navigate]);

  useEffect(() => {
    if (googleLoginData !== null) {
      console.log('googleLoginData', googleLoginData);
      dispatch({
        type: actions.LOGIN,
        payload: {
          socialLogin: 1,
          email: googleLoginData.email,
          password: 'social'
        }
      })
    }
  }, [dispatch, googleLoginData]);

  const onFinish = (values) => {
    values.socialLogin = 0;
    dispatch({
      type: actions.LOGIN,
      payload: values
    })
  };

  const handleGoogleResolve = async (tokenResponse) => {
    console.log('access_token', tokenResponse);
    // // fetching userinfo can be done on the client or the server
    // const userInfo = await axios
    //   .get('https://www.googleapis.com/oauth2/v3/userinfo',
    //     {
    //       headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
    //     })
    // console.log('userInformation', userInfo);
    setGoogleLoginData(tokenResponse);
  }

  const handleFacebookResolve = async (response) => {
    setGoogleLoginData(response);
  }

  const handleLinkedInResolve = async (response) => {
    setGoogleLoginData(response);
  }

  return (
    <>
      <Form className="login" name="login-form" onFinish={onFinish}>
        <Form.Item name="email" rules={[required, hasSpace]} className="login__field" >
          <BrannInput prefix={<BrannIcon icon={faUser} />} className="login__input" placeholder="User name / Email" />
        </Form.Item>
        <Form.Item name="password" rules={[required]} className="login__field"  >
          <BrannPasswordInput prefix={<BrannIcon icon={faLock} />} className="login__input" placeholder="Password" />
        </Form.Item>
        <Form.Item noStyle>
          <Box textAlign="left">
            <BrannLink href="/auth/forget-password" underline >
              Forget Password?
            </BrannLink>
          </Box>
          <Button htmlType="submit" className="button login__submit" style={{ height: '3.6rem' }} loading={isAuthenticating}>
            <span style={{ color: '#000088' }} >Log In Now</span>
            {/* <i className="button__icon fas fa-chevron-right"></i> */}
            <BrannIcon icon={faChevronRight} className="button__icon" />
          </Button>
        </Form.Item>
      </Form>
      <div className="social-login">
        <h3 style={{ color: '#ff8d00' }}>log in via</h3>
        <div className="social-icons">
          <LoginSocialFacebook
            appId={process.env.REACT_APP_FACEBOOK_APP_ID}
            onReject={(error) => console.log(error)}
            onResolve={(response) => handleFacebookResolve(response.data)}
          >
            <BrannLink children={<Facebook />} className="social-login__icon" />
          </LoginSocialFacebook>

          <LoginSocialGoogle
            client_id={
              "1084618473456-h1f7cjtofv1jb7niv4a5e3bqnhpm1uog.apps.googleusercontent.com"
            }
            onResolve={({ provider, data }) => {
              handleGoogleResolve(data);
            }}
            onReject={(err) => {
              console.log(err);
            }}
            scope="https://www.googleapis.com/auth/userinfo.email"
          >
            <BrannLink children={<Google />} className="social-login__icon" />
          </LoginSocialGoogle>
          {/* <BrannLink children={<Google />} className="social-login__icon" onClick={login}></BrannLink> */}
          <LoginSocialLinkedin
            isOnlyGetToken
            client_id={process.env.REACT_APP_LINKEDIN_CLIENT_ID}
            onResolve={(response) => handleLinkedInResolve(response.data)}
            onReject={(err) => {
              console.log(err);
            }}
          >
            <BrannLink children={<LinkedIn />} className="social-login__icon" />
          </LoginSocialLinkedin>
        </div>
      </div >
      <div className="screen__background">
        <span className="screen__background__shape screen__background__shape4"></span>
        <span className="screen__background__shape screen__background__shape3"></span>
        <span className="screen__background__shape screen__background__shape2"></span>
        <span className="screen__background__shape screen__background__shape1"></span>
      </div>
    </>
  );
}
