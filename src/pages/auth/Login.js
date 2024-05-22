import React from "react";

import AuthLayout from "layouts/Auth";

import LoginForm from "components/auth/LoginForm";
import Box from "components/ui/box/Box";
import BrannLink from "components/ui/typo/Link";

export default function Login() {
  return (
    <AuthLayout>
      <LoginForm />
      <Box marginTop={100}>
        <span style={{ color: 'grey' }} >Haven't you account?{" "}</span>
        <BrannLink href="/auth/regist">
          Create account
        </BrannLink>
      </Box>
    </AuthLayout>
  );
}
