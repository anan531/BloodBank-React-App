import React, { useState } from 'react'
import Navigation from './Navigation'
import axios from 'axios'

const AddDonor = () => {

    const[input,changeInput] = useState(

            {

                "donor_name":"",
                "age":"",
                "gender":"",
                "blood_group":"",
                "phone":"",
                "email":"",
                "city":"",
                "weight_kg":"",
                "last_donation_date":""

            }
        )

            const inputHandler = (event) =>{


                    changeInput({...input,[event.target.name]:event.target.value})
            }


            const readValue = () => {

                    console.log(input)

                    axios.post("https://host-demo-app.onrender.com/api/add-donor",input).then(

                        (response) => {


                            console.log(response.data)

                            alert("Donor added succesfully")

                        }

                    ).catch(

                        (error) => {


                            console.error("Error adding donor:",error)

                            alert("Failed to add Donor")


                        }

                    )


            }



  return (
    <div>
<Navigation/>
<h1 align="center">Add Donor</h1>

<div className="container">
    <div className="row g-3">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

<div className="container">
    <div className="row g-3">
        <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col xl-4 col-xxl-4">

<label htmlFor="" className="form-label">Donor Name</label>
<input type="text" className="form-control" name="donor_name" value={input.donor_name} onChange={inputHandler}/>


        </div>
        <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col xl-4 col-xxl-4">

<label htmlFor="" className="form-label">Age</label>
<input type="text" className="form-control" name="age" value={input.age} onChange={inputHandler}/>

        </div>
        <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col xl-4 col-xxl-4">

<label htmlFor="" className="form-label">Gender</label>
<select id="" className="form-control" name="gender" value={input.gender} onChange={inputHandler}>
    <option value ="Male" className="options">Male</option>
    <option value ="Female" className="options">Female</option>
    <option value ="Others" className="options">others</option>
</select>

        </div>
        <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col xl-4 col-xxl-4">

<label htmlFor="" className="form-label">Blood Group</label>

<select id="" className="form-control" name="blood_group" value={input.blood_group} onChange={inputHandler}>
    <option  value="O+" className="options">O+</option>
    <option value="O-" className="options">O-</option>
    <option value="A+" className="options">A+</option>
    <option value="A-" className="options">A-</option>
    <option  value="B+" className="options">B+</option>
    <option value="B-" className="options">B-</option>
    <option value="AB+" className="options">AB+</option>
    <option value="AB-" className="options">AB-</option>
   </select> 

        </div>
        <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col xl-4 col-xxl-4">


<label htmlFor="" className="form-label">Phone no</label>
<input type="tel" className="form-control" name="phone" value={input.phone} onChange={inputHandler}/>


        </div>
        <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col xl-4 col-xxl-4">

<label htmlFor="" className="form-label">Email</label>
<input type="email" className="form-control" name="email" value={input.email} onChange={inputHandler}/>


        </div>
        <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col xl-4 col-xxl-4">


<label htmlFor="" className="form-label">City</label>
<input type="email" className="form-control" name="city" value={input.city} onChange={inputHandler}/>


        </div>
        <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col xl-4 col-xxl-4">


<label htmlFor="" className="form-control">Weight(in kg)</label>
<input type="email" className="form-control" name="weight_kg" value={input.weight_kg} onChange={inputHandler}/>

        </div>
        <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col xl-4 col-xxl-4">


<label htmlFor="" className="form-control">Last Donation Date</label>
<input type="date" className="form-control" name="last_donation_date" value={input.last_donation_date} onChange={inputHandler}/>


        </div>
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col xl-12 col-xxl-12">


<button className="btn btn-outline-dark" onClick={readValue}>SUBMIT</button>

        </div>
    </div>
</div>

        </div>
    </div>
</div>

    </div>
  )
}

export default AddDonor