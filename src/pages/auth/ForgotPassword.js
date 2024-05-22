import React from "react";

import AuthLayout from "layouts/Auth";

import ForgotPasswordForm from "components/auth/ForgotPasswordForm";

const ForgotPassword = () => {
  return (
    <AuthLayout>
      <ForgotPasswordForm />
    </AuthLayout>
  );
};

export default ForgotPassword;
