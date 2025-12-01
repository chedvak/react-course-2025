import React, { useState } from "react";

const Form = () => {


  const handleChange = (e) => {
    const { name, value } = e.target;
    //setFormData with { ...prev, [name]: value }

  };

  const onSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      //api call with formData
    }
  };

  const validate = () => {
    const newErrors = {};
    return newErrors;
  };

  return (
    <form>
      <label>Name: </label>
      <input name="name"></input>
      <label>Email: </label>
      <input name="email"></input>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
