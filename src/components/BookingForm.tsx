import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const BookingForm = () => {
  const [step, setStep] = useState("1");
  const [availableTimes, setAvailableTimes] = useState<string[]>([]);

  useEffect(() => {
    const times = fetchAPI(new Date());
    setAvailableTimes(times);
  }, []);

  const getValidationSchema = (availableTimes: string[]) =>
    Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      date: Yup.date()
        .min(new Date(), "Past dates are not allowed")
        .required("Please choose a date"),
      time: Yup.string()
        .required("Please choose a time")
        .test("is-valid-time", "Invalid time selected", (value) => {
          if (!value) return false;
          return availableTimes.includes(value);
        }),
      guest: Yup.number()
        .min(1, "At least 1 guest required")
        .max(20, "Maximum 20 guests allowed")
        .required("Please enter number of guests"),
      occasion: Yup.string()
        .oneOf(
          ["birthday", "anniversary", "engagement", "other"],
          "Invalid occasion"
        )
        .required("Please select an occasion"),
    });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      date: "",
      time: "",
      guest: "",
      occasion: "",
    },
    validationSchema: getValidationSchema(availableTimes),
    enableReinitialize: true,
    onSubmit: (values) => {
      const success = submitAPI(values); // submitAPI çağrısı
      if (success) {
        setStep("3"); // Success ekranı
      } else {
        alert("Submission failed. Please try again.");
      }
    },
  });

  return (
    <section className="bg-lemongreen text-white py-[72px] px-[10px] md:px-[0px]">
      <h2 className="font-markazi font-medium text-[64px] md:text-center mb-8">
        Book a Table
      </h2>
      <form
        className="flex flex-col gap-6 max-w-[860px] mx-auto bg-white text-black p-8 rounded-[16px] shadow-lg"
        onSubmit={formik.handleSubmit}
      >
        {step === "1" ? (
          <>
            <div className="flex flex-col">
              <label htmlFor="firstName" className="mb-2 font-medium">
                First Name
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-lemongreen"
              />
              {formik.touched.firstName && formik.errors.firstName ? (
                <span className="text-red-600 text-sm mt-1">
                  {formik.errors.firstName}
                </span>
              ) : null}
            </div>

            {/* Last Name */}
            <div className="flex flex-col">
              <label htmlFor="lastName" className="mb-2 font-medium">
                Last Name
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-lemongreen"
              />
              {formik.touched.lastName && formik.errors.lastName ? (
                <span className="text-red-600 text-sm mt-1">
                  {formik.errors.lastName}
                </span>
              ) : null}
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-2 font-medium">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-lemongreen"
              />
              {formik.touched.email && formik.errors.email ? (
                <span className="text-red-600 text-sm mt-1">
                  {formik.errors.email}
                </span>
              ) : null}
            </div>

            {/* continue Button */}
            <button
              onClick={() => setStep("2")}
              className="px-6 py-3 bg-lemonyellow text-black font-medium rounded-[16px] w-fit mx-auto transition cursor-pointer border-2 border-lemonyellow hover:bg-white hover:text-black hover:border-black hover:border-2"
            >
              Continue
            </button>
          </>
        ) : step === "2" ? (
          <>
            <div className="flex flex-col">
              <label htmlFor="date" className="mb-2 font-medium">
                Choose Date
              </label>
              <input
                id="date"
                name="date"
                type="date"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.date}
                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-lemongreen"
              />
              {formik.touched.date && formik.errors.date ? (
                <span className="text-red-600 text-sm mt-1">
                  {formik.errors.date}
                </span>
              ) : null}
            </div>

            {/* Time */}
            <div className="flex flex-col">
              <label htmlFor="time" className="mb-2 font-medium">
                Choose Time
              </label>
              <select
                id="time"
                name="time"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.time}
                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-lemongreen"
              >
                <option value="">Select a time</option>
                {availableTimes.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
              {formik.touched.time && formik.errors.time ? (
                <span className="text-red-600 text-sm mt-1">
                  {formik.errors.time}
                </span>
              ) : null}
            </div>

            {/* Guests */}
            <div className="flex flex-col">
              <label htmlFor="guest" className="mb-2 font-medium">
                Number of Guests
              </label>
              <input
                id="guest"
                name="guest"
                type="number"
                min="1"
                max="20"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.guest}
                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-lemongreen"
              />
              {formik.touched.guest && formik.errors.guest ? (
                <span className="text-red-600 text-sm mt-1">
                  {formik.errors.guest}
                </span>
              ) : null}
            </div>

            {/* Occasion */}
            <div className="flex flex-col">
              <label htmlFor="occasion" className="mb-2 font-medium">
                Occasion
              </label>
              <select
                id="occasion"
                name="occasion"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.occasion}
                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-lemongreen"
              >
                <option value="">Select an occasion</option>
                <option value="birthday">Birthday</option>
                <option value="anniversary">Anniversary</option>
                <option value="engagement">Engagement</option>
                <option value="other">Other</option>
              </select>
              {formik.touched.occasion && formik.errors.occasion ? (
                <span className="text-red-600 text-sm mt-1">
                  {formik.errors.occasion}
                </span>
              ) : null}
            </div>

            {/* Buttons */}
            <div className="flex justify-center items-center gap-4">
              <button
                type="button"
                onClick={() => setStep("1")}
                className="px-6 py-3 bg-lemonyellow text-black font-medium rounded-[16px] transition cursor-pointer border-2 border-lemonyellow hover:bg-white hover:text-black hover:border-black"
              >
                Back
              </button>
              <button
                type="submit"
                className="px-6 py-3 bg-lemonyellow text-black font-medium rounded-[16px] transition cursor-pointer border-2 border-lemonyellow hover:bg-white hover:text-black hover:border-black"
              >
                Submit
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col items-center justify-center text-center p-10 rounded-2xl">
              {/* Success Icon */}
              <div className="w-16 h-16 rounded-full bg-[#48742C] flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>

              {/* Success Message */}
              <h3
                role="heading"
                data-testid="submit-success"
                className="text-2xl font-semibold mb-2"
              >
                Reservation Confirmed!
              </h3>
              <p className="text-gray-700 mb-6">
                Success 🎉 Your table will be ready when you show up.
              </p>

              {/* Button */}
              <button
                onClick={() => (window.location.href = "/")}
                className="px-6 py-3 bg-lemonyellow text-black font-medium rounded-[16px] transition cursor-pointer border-2 border-lemonyellow hover:bg-white hover:text-black hover:border-black"
              >
                Go Home
              </button>
            </div>
          </>
        )}
      </form>
    </section>
  );
};

export default BookingForm;
