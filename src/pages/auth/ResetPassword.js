import React from "react";

import AuthLayout from "layouts/Auth";

import ResetPasswordForm from "components/auth/ResetPasswordForm";

const ResetPassword = () => {
  return (
    <AuthLayout>
      <ResetPasswordForm />
    </AuthLayout>
  );
};

export default ResetPassword;
