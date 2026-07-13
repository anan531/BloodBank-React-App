import React from 'react'
import Navigation from './Navigation'

const AddDonor = () => {
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
<input type="text" className="form-control" />


        </div>
        <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col xl-4 col-xxl-4">

<label htmlFor="" className="form-label">Age</label>
<input type="text" className="form-control" />

        </div>
        <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col xl-4 col-xxl-4">

<label htmlFor="" className="form-label">Gender</label>
<select name="" id="" className="form-control">
    <option className="options">Male</option>
    <option className="options">Female</option>
    <option className="options">others</option>
</select>

        </div>
        <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col xl-4 col-xxl-4">

<label htmlFor="" className="form-label">Blood Group</label>

<select name="" id="" className="form-control">
    <option className="options">Male</option>
    <option className="options">Female</option>
    <option className="options">others</option>
   </select> 

        </div>
        <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col xl-4 col-xxl-4">


<label htmlFor="" className="form-label">Phone no</label>
<input type="tel" className="form-control" />


        </div>
        <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col xl-4 col-xxl-4">

<label htmlFor="" className="form-control">Email</label>
<input type="email" className="form-control" />


        </div>
        <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col xl-4 col-xxl-4">


<label htmlFor="" className="form-control">City</label>
<input type="email" className="form-control" />


        </div>
        <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col xl-4 col-xxl-4">


<label htmlFor="" className="form-control">Weight(in kg)</label>
<input type="email" className="form-control" />

        </div>
        <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col xl-4 col-xxl-4">


<label htmlFor="" className="form-control">Last Donation Date</label>
<input type="email" className="form-control" />


        </div>
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col xl-12 col-xxl-12">


<button className="btn btn-outline-dark">SUBMIT</button>

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