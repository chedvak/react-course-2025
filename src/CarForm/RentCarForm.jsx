import { useEffect, useState } from "react";
import "./RentCarForm.css";

export default function RentCarForm() {
  const EMPTY_FORM_DATA = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    pickupDate: "",
    returnDate: "",
    requests: "",
    cardType: "",
    cardNumber: "",
    cardExpiry: "",
  };
  const [formData, setFormData] = useState(EMPTY_FORM_DATA);

  const [errors, setErrors] = useState({});
  const [emptyFields, setEmptyFields] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    const e = {};
    const empty = {};

    Object.keys(formData).forEach((key) => {
      if (!formData[key].toString().trim()) {
        e[key] = "שדה חובה";
        empty[key] = true;
      }
    });

    // firstName
    if (
      !empty.firstName &&
      (formData.firstName.length < 2 ||
        formData.firstName.length > 15 ||
        !/^[A-Za-z\u05D0-\u05EA]+$/.test(formData.firstName))
    ) {
      e.firstName = "יש להזין 2–15 אותיות בלבד";
    }

    // lastName
    if (
      !empty.lastName &&
      (formData.lastName.length < 2 ||
        formData.lastName.length > 15 ||
        !/^[A-Za-z\u05D0-\u05EA]+$/.test(formData.lastName))
    ) {
      e.lastName = "יש להזין 2–15 אותיות בלבד";
    }

    // phone
    if (!empty.phone && !/^\d{10}$/.test(formData.phone)) {
      e.phone = "יש להזין 10 ספרות";
    }

    // email
    if (!empty.email && !formData.email.includes("@")) {
      e.email = "מייל לא תקין";
    }

    return { errors: e, empty };
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { errors, empty } = validate();
    setErrors(errors);
    setEmptyFields(empty);

    if (
      Object.keys(errors).length === 0 &&
      Object.keys(empty).length === 0
    ) {
      // ✅ שמירה ל-localStorage
      const rentals = JSON.parse(localStorage.getItem("rentals")) || [];

      rentals.push(formData);
      localStorage.setItem("rentals", JSON.stringify(rentals));

      alert("Rental saved successfully!");

      setFormData(EMPTY_FORM_DATA);
    }
  };

  const getClass = (name) => {
    if (emptyFields[name]) return "empty";
    if (errors[name]) return "error";
    return "";
  };

  return (
    <form className="rent-form" onSubmit={handleSubmit}>
      <h2>Car Rental Form</h2>

      <input
        name="firstName"
        placeholder="First Name"
        value={formData.firstName}
        onChange={handleChange}
        className={getClass("firstName")}
      />
      <div className="errorMsg">{errors.firstName || ""}</div>

      <input
        name="lastName"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={handleChange}
        className={getClass("lastName")}
      />
      <div className="errorMsg">{errors.lastName || ""}</div>

      <input
        name="phone"
        placeholder="Phone"
        value={formData.phone}
        onChange={handleChange}
        className={getClass("phone")}
      />
      <div className="errorMsg">{errors.phone || ""}</div>

      <input
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className={getClass("email")}
      />
        <div className="errorMsg">{errors.email || ""}</div>
      <input
        type="date"
        name="pickupDate"
        value={formData.pickupDate}
        onChange={handleChange}
        className={getClass("pickupDate")}
      />
              <div className="errorMsg">{errors.pickupDate || ""}</div>

      <input
        type="date"
        name="returnDate"
        value={formData.returnDate}
        onChange={handleChange}
        className={getClass("returnDate")}
      />
      <div className="errorMsg">{errors.returnDate || ""}</div>

      <textarea
        name="requests"
        placeholder="Special Requests"
        value={formData.requests}
        onChange={handleChange}
        className={getClass("requests")}
      />
      <div className="errorMsg">{errors.requests || ""}</div>

      <select
        name="cardType"
        value={formData.cardType}
        onChange={handleChange}
        className={getClass("cardType")}
      >
        <option value="">Select Card Type</option>
        <option value="visa">Visa</option>
        <option value="mastercard">MasterCard</option>
        <option value="amex">American Express</option>
      </select>
      <div className="errorMsg">{errors.cardType || ""}</div>

      <input
        name="cardNumber"
        placeholder="Credit Card Number"
        value={formData.cardNumber}
        onChange={handleChange}
        className={getClass("cardNumber")}
      />
      <div className="errorMsg">{errors.cardNumber || ""}</div>

      <input
        type="month"
        name="cardExpiry"
        value={formData.cardExpiry}
        onChange={handleChange}
        className={getClass("cardExpiry")}
      />
      <div className="errorMsg">{errors.cardExpiry || ""}</div>

      <button type="submit">Submit</button>
    </form>
  );
}
