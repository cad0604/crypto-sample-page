import React from "react";

import RegistrationForm from "components/auth/RegistrationForm";
import RegistrationLayout from "layouts/Registration";
export const RegisterDataContext = React.createContext(null);

export default function Register() {

  return (
    <RegistrationLayout>
      {/* asdfasdf */}
      <RegistrationForm />
    </RegistrationLayout>
  );
}
