import React, { useEffect, useState } from "react";

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
    country: "",
    street: "",
    city: "",
    region: "",
    postalCode: "",
  };

  const [sender, setSender] = useState(initialSenderState);

  useEffect(() => {
    const storedSenderState = JSON.parse(localStorage.getItem('storedSender'));
    console.log(storedSenderState);
    if (storedSenderState && storedSenderState.senderName) {
      setSender(storedSenderState);
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault(event);
    console.log('hj')
    localStorage.setItem('storedSender', JSON.stringify(sender));
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSender((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  useEffect(() => {
    localStorage.setItem('storedSender', JSON.stringify(sender));
  }, [sender]);

  const resetForm = () => {
    setSender(initialSenderState);
    localStorage.setItem('storedSender', JSON.stringify(initialSenderState));
  };

  return (
    <div>
      <form 
        onSubmit={handleSubmit}
        className="rounded-lg border border-dashed border-white hover:border-gray-900/25 p-6">
        <h2 className="text-base font-semibold leading-7 text-gray-900">From:</h2>

        <div className="mt-6 grid grid-cols-1 items-end gap-6 sm:grid-cols-6">
          <div className="sm:col-span-4 print:hidden">
            <label
              htmlFor="sender-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Company / Sender name{" "}
              <span className="text-red-500">*</span>
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
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

          <div className="sm:col-span-3 print:hidden">
            <label
              htmlFor="first-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              First name
            </label>
            <div className="mt-2">
              <input
                required
                value={sender.firstName}
                onChange={handleChange}
                type="text"
                name="firstName"
                id="first-name"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3 print:hidden">
            <label
              htmlFor="last-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Last name
            </label>
            <div className="mt-2">
              <input
                required
                value={sender.lastName}
                onChange={handleChange}
                type="text"
                name="lastName"
                id="last-name"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3 print:hidden">
            <label
              htmlFor="tax-registration-number"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Tax Registration Number
            </label>
            <div className="mt-2">
              <input
                required
                value={sender.taxRegistrationNumber}
                onChange={handleChange}
                type="text"
                name="taxRegistrationNumber"
                id="tax-registration-number"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3 print:hidden">
            <label
              htmlFor="SWIFT-code"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              SWIFT code
            </label>
            <div className="mt-2">
              <input
                required
                value={sender.SWIFTCode}
                onChange={handleChange}
                minlength="8" maxlength="11"
                type="text"
                name="SWIFTCode"
                id="SWIFT-code"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-4 print:hidden">
            <label
              htmlFor="IBAN"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              IBAN
            </label>
            <div className="mt-2">
              <input
                required
                value={sender.IBAN}
                onChange={handleChange}
                minlength="29" 
                maxlength="34"
                type="text"
                name="IBAN"
                id="IBAN"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3 print:hidden">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                required
                value={sender.email}
                onChange={handleChange}
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3 print:hidden">
            <label
              htmlFor="phone"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Phone number
            </label>
            <div className="mt-2">
              <input
                required
                value={sender.phone}
                onChange={handleChange}
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3 print:hidden">
            <label
              htmlFor="country"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Country
            </label>
            <div className="mt-2">
              <select
                required
                id="country"
                value={sender.country}
                onChange={handleChange}
                name="country"
                autoComplete="country-name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
              >
                <option value={"United States"}>United States</option>
                <option value={"Canada"}>Canada</option>
                <option value={"Mexico"}>Mexico</option>
                <option value={"Ukraine"}>Ukraine</option>
              </select>
            </div>
          </div>

          <div className="sm:col-span-3 print:hidden">
            <label
              htmlFor="street"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Street address
            </label>
            <div className="mt-2">
              <input
                required
                value={sender.street}
                onChange={handleChange}
                type="text"
                name="street"
                id="street"
                autoComplete="street"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                required
                value={sender.city}
                onChange={handleChange}
                type="text"
                name="city"
                id="city"
                autoComplete="address-level2"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                required
                value={sender.region}
                onChange={handleChange}
                type="text"
                name="region"
                id="region"
                autoComplete="address-level1"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                required
                value={sender.postalCode}
                onChange={handleChange}
                type="text"
                name="postalCode"
                id="postal-code"
                autoComplete="postal-code"
                inputmode="numeric" 
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-4 print:hidden">
          <button
            type="button"
            onClick={resetForm}
            className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </form>
      <div className="flex flex-col gap-4 p-6">
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
        {sender.street && sender.city && sender.region && sender.postalCode && sender.country && (
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
