import react, { useDebugValue } from'react'
import axios from 'axios'
import {useState} from 'react'

function Fetchdata() {

    const [data,setData]=useState([])

    const FetchData=()=>{
        axios.get('http://localhost:5000/Dashboard').then((response)=>{
           // console.log(response);
           setData(response.data)
        })
    }
   
return (
    
    <>
    
    <button className='btn btn-primary' onClick={FetchData}>Fetchdata</button>
    {

    data.map( (value) =>(
    
<table class="table table-dark">
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">Name</th>
      <th scope="col">Date</th>
      <th scope="col">TIme</th>
      <th scope="col">status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"></th>
      <td>{value.Name}</td>
      <td>{value.Date}</td>
      <td>{value.Time}</td>
      <td>{value.Status}</td>
    </tr>
   
  </tbody>
</table>


    )
    )

}
    </>
    

)

}

export default Fetchdata