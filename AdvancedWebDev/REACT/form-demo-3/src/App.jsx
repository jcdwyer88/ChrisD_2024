import { useState } from "react";
import { useForm } from "react-hook-form";
import { object, string, number } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { userSchema } from "./components/helper";

// import './App.css'

function App() {

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  const handleChange = (event) => {
    console.log(`${event.target.name}: ${event.target.value}`);
    setValue(event.target.name, event.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="fname">First Name </label>
        <input
          type="text"
          {...register("fname")}
          id="fname"
          onChange={handleChange}
        />
        {errors.fname && <span>{errors.fname.message}</span>}
        <br />
        <label htmlFor="lname">Last Name </label>
        <input
          type="text"
          {...register("lname")}
          id="lname"
          onChange={handleChange}
        />
        {errors.lname && <span>{errors.lname.message}</span>}
        <br />
        <label htmlFor="email">Email </label>
        <input
          type="text"
          {...register("email")}
          id="email"
          onChange={handleChange}
        />
        {errors.email && <span>{errors.email.message}</span>}
        <br />
        <label htmlFor="age">Age </label>
        <input
          type="number"
          {...register("age")}
          id="age"
          onChange={handleChange}
        />
        {errors.age && <span>{errors.age.message}</span>}
        <br />
        <label htmlFor="password">Password </label>
        <input
          type="password"
          {...register("password")}
          id="password"
          onChange={handleChange}
        />
        {errors.password && <span>{errors.password.message}</span>}
        <br />
        <button type="submit">Submit</button>
        <button type="reset" onClick={()=>reset()}>Reset</button>
      </form>
    </>
  );
}

export default App;
