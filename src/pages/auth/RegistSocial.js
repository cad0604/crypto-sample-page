import React from "react";

import RegistrationLayout from "layouts/Registration";
import RegistrationSocialForm from "components/auth/RegistrationSocialForm";
export const RegisterDataContext = React.createContext(null);

export default function RegistSocial() {

  return (
    <RegistrationLayout>
      {/* asdfasdf */}
      <RegistrationSocialForm />
    </RegistrationLayout>
  );
}
