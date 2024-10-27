"use client";

import React, { Fragment, useEffect } from "react";
import Image from "next/image";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import { signInAnonymously } from "firebase/auth";

import { Loader2 } from "lucide-react";
import { useFormik } from "formik";
import * as yup from "yup";

import { Toaster, toast } from "sonner";
import "./index.css";

import { auth } from "@/firebase/config";
import { apiPostMessageDoc } from "@/firebase/queries";

const validationSchema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  message: yup
    .string()
    .max(150, "Message should be less than 150 characters")
    .required("Message is required"),
});

export default function Contact() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [appendClass, setAppendClass] = React.useState(false);

  const { handleSubmit, handleChange, handleReset, values, errors, touched } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        message: "",
      },
      validationSchema: validationSchema,
      onSubmit: async (values) => {
        await signInAnonymously(auth);

        setIsLoading(true);
        await apiPostMessageDoc(values);
        setIsLoading(false);

        handleReset(null);
        toast("Thank you for your message.", {
          description: "I will get back to you soon.",
          closeButton: true,
          position: "bottom-center",
        });
      },
    });

  useEffect(() => {
    setAppendClass(true);
  }, []);

  return (
    <Fragment>
      <div className="w-full flex justify-center items-center">
        <Image
          src="/images/bishal-mukherjee.png"
          alt="Bishal Mukherjee"
          width={104}
          height={104}
          className={appendClass ? "element" : "mt-12"}
        />
      </div>

      <div className="flex flex-col pt-8 gap-8 align-center items-center">
        <p className="text-2xl font-bold text-center">
          Ahoy there, matey!👋 <br /> What treasures can I help you find today?
        </p>

        <form
          className="flex flex-col gap-8 md:mt-4 md:w-1/2 p-4"
          onSubmit={handleSubmit}
        >
          <div className="w-full flex flex-row gap-4">
            <div className="w-full">
              <Input
                type="text"
                placeholder="Name"
                name="name"
                value={values.name}
                onChange={handleChange}
                className="h-12"
              />
              {errors.name && touched.name && (
                <span className="text-red-500 text-xs m-1">{errors.name}</span>
              )}
            </div>

            <div className="w-full">
              <Input
                type="email"
                placeholder="Email"
                name="email"
                value={values.email}
                onChange={handleChange}
                className="h-12"
              />
              {errors.email && touched.email && (
                <span className="text-red-500 text-xs m-1">{errors.email}</span>
              )}
            </div>
          </div>

          <div>
            <Textarea
              placeholder="Message"
              name="message"
              rows={6}
              value={values.message}
              onChange={handleChange}
            />
            {errors.message && touched.message && (
              <span className="text-red-500 text-xs m-1">{errors.message}</span>
            )}
            <span className="text-gray-500 text-sm mt-2 float-right">
              {values.message.length} / 150
            </span>
          </div>

          <Button
            type="submit"
            className="w-full text-white rounded-2xl h-12"
            disabled={isLoading}
          >
            {isLoading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              "Submit"
            )}
          </Button>
        </form>
      </div>

      <Toaster />
    </Fragment>
  );
}
