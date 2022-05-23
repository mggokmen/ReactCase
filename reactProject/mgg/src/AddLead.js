import React,{useState} from 'react'
import {useNavigate,Link} from 'react-router-dom'
import {InputGroup,FormControl} from 'react-bootstrap'
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'
import validator from 'validator'
import { ToastContainer, toast } from 'react-toastify';

import 'react-phone-number-input/style.css'
import 'react-toastify/dist/ReactToastify.css';

function AddLead(){
    
    const [full_name,setFullName]=useState()
    const [email,setEmail]=useState()
    const [phone,setPhone]=useState()
    const navigate=useNavigate()  

    async function newLead(){
        
        let item={full_name,email,phone}

        if(document.querySelector("#full_name").value===""){
            toast('Full Name cannot be null')
            document.querySelector("#full_name").focus()
            return            
        }

        if(document.querySelector("#email").value==="" || !validator.isEmail(document.querySelector("#email").value)) {    
            toast('Invalid Email format')
            document.querySelector("#email").focus()
            return
        }

        if(document.querySelector("#phone").getAttribute("error")){
            toast('Invalid Phone Number format')
            document.querySelector("#phone").focus()
            return
        }

        let result = await fetch("http://localhost:8000/api/add",{
            method:'POST',
            body:JSON.stringify(item),
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
        })

        result = await result.json()
        if(result.success===true){
            alert('Lead added!')
            navigate('/list')
        }else{
            toast("Failed to add lead")
        }

    }
    
    return(
        <div className="col-sm-6 offset-sm-3 col-lg-4 offset-lg-4">
            <h2 className="testHead2">Add New Lead</h2>
            <ToastContainer />

            <InputGroup className="mb-3 row">
                <InputGroup.Text id="fullNameLabel" className="col-sm-3">Full Name</InputGroup.Text>
                <FormControl
                    value={full_name|| ''} 
                    onChange={(e)=>setFullName(e.target.value)} 
                    placeholder="Full Name"
                    required
                    aria-label="fullNameLabel"
                    aria-describedby="fullNameLabel"
                    id="full_name"
                />
            </InputGroup>

            <InputGroup className="mb-3 row">
                <InputGroup.Text id="emailLabel" className="col-sm-3">Email</InputGroup.Text>
                <FormControl
                    value={email || ''} 
                    onChange={(e)=>setEmail(e.target.value)}
                    placeholder="Email"
                    aria-label="emailLabel"
                    aria-describedby="emailLabel"
                    id="email"
                />
            </InputGroup>

            <InputGroup className="mb-3 row">
                <InputGroup.Text id="phoneLabel" className="col-sm-3">Phone</InputGroup.Text>
                <PhoneInput
                    placeholder="Enter phone number"
                    value={phone}
                    defaultCountry="TR"
                    onChange={setPhone}
                    className="col-sm-9"
                    id="phone"
                    required
                    error={phone ? (isValidPhoneNumber(phone) ? undefined : 'Invalid phone number') : 'Phone number required'}
                />
            </InputGroup>
            <div className="col-md-12 text-end p-3 pt-1">
                <Link to="/list" className="btn btn-secondary m-1">Go Back</Link>
                <button onClick={newLead} className="btn btn-success m-1" type="button">Add</button>
            </div>
        </div>
    )
}

export default AddLead