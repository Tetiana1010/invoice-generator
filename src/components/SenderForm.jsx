import React, { useEffect, useState, useCallback } from "react";
import countries from './../data/countries.json';

const SenderForm = () => {
  const initialSenderState = {
    senderName: "",
    firstName: "",
    lastName: "",
    taxRegistrationNumber: "",
    SWIFTCode: "",
    IBAN: "",
    email: "",
    phone: "",
    country: countries[0].name,
    street: "",
    city: "",
    region: "",
    postalCode: "",
  };

  const [formOpen, setFormOpen] = useState(false);
  const [sender, setSender] = useState(initialSenderState);

  useEffect(() => {
    const storedSenderState = JSON.parse(localStorage.getItem('storedSender'));
    if (storedSenderState && storedSenderState.senderName) {
      setSender(storedSenderState);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('storedSender', JSON.stringify(sender));
  }, [sender]);

  const escFunction = useCallback((event) => {
    if (event.key === "Escape") {
      setFormOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, [escFunction]);


  const handleSubmit = (event) => {
    event.preventDefault(event);
    localStorage.setItem('storedSender', JSON.stringify(sender));
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSender((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setSender(initialSenderState);
    localStorage.setItem('storedSender', JSON.stringify(initialSenderState));
  };

  const toggleForm = () => {
    setFormOpen(!formOpen);
  };

  return (
    <div className="col-span-3 flex flex-col gap-8">
      <div onClick={toggleForm}
        className="print:hidden rounded-lg border border-dashed border-gray-900/25 p-6"
      >
        <h3>From:</h3>
        <div className="flex gap-4 items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeLinejoin="1.5" stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <div>
            <h4>Sender name</h4>
            <p>Sender contact details</p>
          </div>
        </div>
      </div>
      
      {formOpen && (
        <div className="fixed inset-0 z-20 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-90 bg-white p-6 space-y-4 rounded-lg overflow-y-auto">
            <div className="flex justify-between">
              <h2 className="text-base font-semibold leading-7 text-gray-900">From:</h2>
              <button onClick={toggleForm}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeLinejoin="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="grid grig-cols-3 sm:grid-cols-6 gap-6">
                <div className="sm:col-span-4">
                  <label
                    htmlFor="sender-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Company / Sender name{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-green-600 sm:max-w-md">
                      <input
                        required
                        value={sender.senderName}
                        onChange={handleChange}
                        type="text"
                        name="senderName"
                        id="sender-name"
                        autoComplete="name"
                        className="block flex-1 border-0 bg-transparent py-1.5 px-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    First name
                  </label>
                  <div className="mt-2">
                    <input
                      value={sender.firstName}
                      onChange={handleChange}
                      type="text"
                      name="firstName"
                      id="first-name"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Last name
                  </label>
                  <div className="mt-2">
                    <input
                      value={sender.lastName}
                      onChange={handleChange}
                      type="text"
                      name="lastName"
                      id="last-name"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="tax-registration-number"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Tax Registration Number
                  </label>
                  <div className="mt-2">
                    <input
                      value={sender.taxRegistrationNumber}
                      onChange={handleChange}
                      type="text"
                      name="taxRegistrationNumber"
                      id="tax-registration-number"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="SWIFT-code"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    SWIFT code
                  </label>
                  <div className="mt-2">
                    <input
                      value={sender.SWIFTCode}
                      onChange={handleChange}
                      minLength="8" 
                      maxLength="11"
                      type="text"
                      name="SWIFTCode"
                      id="SWIFT-code"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label
                    htmlFor="IBAN"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    IBAN
                  </label>
                  <div className="mt-2">
                    <input
                      value={sender.IBAN}
                      onChange={handleChange}
                      minLength="29" 
                      maxLength="34"
                      type="text"
                      name="IBAN"
                      id="IBAN"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      value={sender.email}
                      onChange={handleChange}
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Phone number
                  </label>
                  <div className="mt-2">
                    <input
                      value={sender.phone}
                      onChange={handleChange}
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Country
                  </label>
                  <div className="mt-2">
                    <select
                      value={sender.country}
                      onChange={handleChange}
                      name="country"
                      id="country"
                      autoComplete="country-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                    >
                      {countries.map(country => (
                        <option key={country.name} value={country.name}>{country.name}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="street"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Street address
                  </label>
                  <div className="mt-2">
                    <input
                      value={sender.street}
                      onChange={handleChange}
                      type="text"
                      name="street"
                      id="street"
                      autoComplete="street"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2 print:hidden">
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    City
                  </label>
                  <div className="mt-2">
                    <input
                      value={sender.city}
                      onChange={handleChange}
                      type="text"
                      name="city"
                      id="city"
                      autoComplete="address-level2"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2 print:hidden">
                  <label
                    htmlFor="region"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    State / Province
                  </label>
                  <div className="mt-2">
                    <input
                      value={sender.region}
                      onChange={handleChange}
                      type="text"
                      name="region"
                      id="region"
                      autoComplete="address-level1"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2 print:hidden">
                  <label
                    htmlFor="postal-code"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    ZIP / Postal code
                  </label>
                  <div className="mt-2">
                    <input
                      value={sender.postalCode}
                      onChange={handleChange}
                      type="text"
                      name="postalCode"
                      id="postal-code"
                      autoComplete="postal-code"
                      inputMode="numeric" 
                      minLength="5"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  type="button"
                  onClick={resetForm}
                  className="mr-2 px-4 py-2 text-sm font-medium text-red-600 bg-white border border-red-600 rounded-md shadow-sm hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600"
                >
                  Reset
                </button>
                <button
                  type="button"
                  onClick={toggleForm}
                  className="mr-2 px-4 py-2 text-sm font-medium text-yellow-600 bg-white border border-yellow-600 rounded-md shadow-sm hover:bg-yellow-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-600"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-sm font-medium text-white bg-green-600 border border-transparent rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
        )
      }
      <div className="flex flex-col gap-4">
        {sender.firstName && sender.lastName && (
          <p>
            <b>Sender:</b> {sender.firstName} {sender.lastName}
          </p>
        )}
        {sender.taxRegistrationNumber && (
          <p>
            <b>Tax Registration Number:</b> {sender.taxRegistrationNumber}
          </p>
        )}
        {sender.SWIFTCode && (
          <p>
            <b>SWIFT Code:</b> {sender.SWIFTCode}
          </p>
        )}
        {sender.IBAN && <p><b>IBAN:</b> {sender.IBAN}</p>}
        {sender.street && sender.city && sender.postalCode && (
          <p>
            <b>Address:</b> {sender.street} {sender.city} {sender.region} {sender.postalCode} {sender.country}
          </p>
        )}
        {sender.email && <p><b>Email:</b> {sender.email}</p>}
        {sender.phone && <p><b>Phone:</b> {sender.phone}</p>}
      </div>
    </div>
  );
};

export default SenderForm;

