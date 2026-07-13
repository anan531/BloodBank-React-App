import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navigation from './Navigation'

const ViewDonors = () => {

const[data,changeData] = useState([])

        const fetchData = () => {

            axios.get("https://host-demo-app.onrender.com/api/donors").then(

                (response) => {

                    changeData(response.data)


                }

            ).catch()

        }

        useEffect(


            () => {


                fetchData()

            }, []

        )



  return (
    <div>

        <Navigation/>
<h1 align= "center">View Donors</h1>    


<div className="container">
    <div className="row g-3">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col xl-12 col-xxl-12">

<div className="container">
    <div className="row g-3">


    {data.map(

        (value,index) => {

                return(

        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


<div class="card" >
  <div class="card-body">
    <h5 class="card-title">{value.donor_name}</h5>
    <p class="card-text">{value.age}</p>
    <p class="card-text">{value.gender}</p>
    <p class="card-text">{value.blood_group}</p>
    <p class="card-text">{value.phone}</p>
    <p class="card-text">{value.city}</p>
    <p class="card-text">{value.weight_kg}</p>
    <p class="card-text">{value.age}</p>
  </div>
</div>


        </div>



                )

        }


    )}


    </div>
</div>


        </div>
    </div>
</div>



    </div>
  )
}

export default ViewDonors