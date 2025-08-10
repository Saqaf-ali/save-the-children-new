

let forms = {
  login: [
    {
      label: "Email",
      name: "userEmail",
      id: "userEmail",
      type: "email",
      placeholder: "Enter your email",
      required: true,
    },
    
    {
      label: "Password",
      name: "userPassword",
      id: "userPassword",
      type: "password",
      placeholder: "Enter your password",
      required: true,
    },

   
  ],
};

localStorage.setItem("forms", JSON.stringify(forms));
