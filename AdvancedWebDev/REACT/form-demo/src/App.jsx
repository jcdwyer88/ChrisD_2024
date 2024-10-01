import { useForm } from "react-hook-form"; 
import { object, string, number } from "yup";
import { yupResolver } from "@hookform/resolvers/yup"
import './App.css';

const App = () => {
  
  const userSchema = object({
    fname: string()
    .max(5, "Cannot be more than 5 characters")
    .required("This field is required")
  })

  const { register, handleSubmit, setValue, reset, formState: {errors}, } = useForm({
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
        <div>
          <label htmlFor='fname'>First Name</label>
          <input type="text" {...register("fname")} id="fname" onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor='lname'>Last Name</label>
        < input type="text" {...register("lname")} id="lname" onChange={handleChange}/> 
        </div>
        <div>
          <label htmlFor='age'>Age</label>
         <input type="number" {...register("age")} id="age" onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor='email'>Email</label>
          <input type="email" {...register("email")} id="email" onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor='email'>Password</label>
          <input type="password" {...register("password")} id="password" onChange={handleChange}/>
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default App;