import { object, string, number } from "yup";


export const userSchema = object({
    fname: string()
      .max(5, "Cannot be more than 5 characters in length")
      .required("This is a required field"),
    lname: string()
      .min(2, "Must be more than one character")
      .max(5, "Cannot be more than five characters"),
    age: number()
      .min(1, "Cannot be younger than 1")
      .max(99, "Cannot be older than 99")
      .required("This is a required field"),
    email: string()
      .email("Must be email format")
      .required("This is a required field"),
    password: string()
      .min(9, "Must have at least nine characters")
      .max(11, "Cannot have more than 11 characters"),
  });