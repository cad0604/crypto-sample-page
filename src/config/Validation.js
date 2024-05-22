export const required = {
  required: true,
  message: "The field is required",
};

export const number = {
  type: 'integer',
  message: "Write number on floor plan",
}
export const email = {
  type: "email",
  message: "Please enter a valid email",
};

export const min = {
  min: 8,
  message: "The password must be at least 8 characters long",
};

export const passwordVaildate = {
  pattern: "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$",
  message: "The password must contain an uppercase letter, number and special letter."
}

export const hasSpace = {
  pattern: /^\S*$/,
  message: "Please remove the space letter"
}
export const match = ({ getFieldValue }) => ({
  validator(_, value) {
    if (!value || getFieldValue("password") === value) {
      return Promise.resolve();
    }
    return Promise.reject("The passwords dn't match");
  },
});

export const customerMatch = ({ getFieldValue }) => ({
  validator(_, value) {
    if (!value || getFieldValue("new_password") === value) {
      return Promise.resolve();
    }
    return Promise.reject("The passwords dn't match");
  },
});

export const termsAgree = () => ({
  validator(_, value) {
    if (value === true)
      return Promise.resolve();
    return Promise.reject("Please confirm terms and conditions.")
  }
})
