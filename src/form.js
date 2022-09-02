import React, { useState } from 'react';
import { Multiselect } from 'multiselect-react-dropdown';
import { useForm } from "react-hook-form";
import "./form.css" ;



const Form = () => {

    const { register, handleSubmit,formState: { errors }} = useForm();



const onSubmit = (data) => {
    console.log(data);
  }


const data = [
    {Country:'India', id:1},
    {Country:'America', id:2},
    {Country:'Russia', id:3},
    {Country:'China', id:4},
    {Country:'England', id:5}
]
const [options] = useState(data);

console.log(errors);
  return (
    <>
      <div className='container'>
        <form onSubmit={handleSubmit(onSubmit)}>

            <label>Name : </label>
               <input type="text" placeholder="Enter your name" 
               {...register("Name",{required:"Name is Required"})} />
               {errors.Name && errors.Name.message && <p>{errors.Name.message}</p>}
               <br />

               <label>password:</label>
                <input type="password" placeholder="Enter your password" 
                {...register("password",{required:"password is required"})} />
                {errors.password && errors.password.message && <p>{errors.password.message}</p>}
                <br />

               <label>NewPassword:</label>
                <input type="password" placeholder="new password"
                  {...register("NewPassword",{required:"password is Required"})} />
                   {errors.NewPassword && errors.NewPassword.message && <p>{errors.NewPassword.message}</p>}
                  <br />

               {/* <label> Old password: </label>
               <input type="password" placeholder=" old password" /><br /> */}

               <label>Email: </label>
               <input type="email" placeholder="Entr your email"
                {...register("email",{required:"email is Required"})} />
                {errors.email && errors.email.message && <p>{errors.email.message}</p>}
                <br />

               
               <div> 
                 <label>Sex:</label>
              <label> Male</label> <input type="radio" name='gender' value="male" id='male'/>
              <label> Female</label><input type="radio" name='gender' value="Female" id='female'/> 
               
               </div>

               <div>  
               <label> Skills: </label>< br/>
              
                <input type="checkbox" className ="form-check-input" />
                <label className='form-check-label'>HTML5</label>< br/> 
                <input type="checkbox" className ="form-check-input" />
                <label className='form-check-label'>CSS3</label>< br/>
               
                <input type="checkbox" className ="form-check-input" />
                <label className='form-check-label'>BOOTSTRAP3</label>< br/>
                <input type="checkbox" className ="form-check-input" />
                <label className='form-check-label'>Javascript</label>< br/>
                <input type="checkbox" className ="form-check-input" />
                <label className='form-check-label'>React </label>< br/>
                
               </div>

               <label>Degree: </label>
               <select  {...register("Degree",{ required: true })}>
               <option value="">Select...</option>
               <option value="A">B.E</option>
               <option value="B">B.Tech</option>
               </select><br />

              <div style={{width:"30%",Display:"flex"}}>
                <label>Country:</label>     
               <Multiselect
                options={options}
                displayValue="Country"  />
              <br />
              <center> <input type="submit" value="Submit" id='submit' /></center>

              </div>
        </form>
      </div>
    </>
  )
}

export default Form ;
