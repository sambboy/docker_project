import React, { useRef } from 'react'
import { MDBInputGroup} from 'mdb-react-ui-kit';
import { MDBBtn } from 'mdb-react-ui-kit';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
    const refEmail = useRef('')
    const refPassword = useRef('')
    const route = useNavigate('')

    const handlSubmit = () =>{
        const obj = {"Email" : refEmail.current.value , "Password" : refPassword.current.value }
        console.log('ok' , obj);
        axios.post("http://127.0.0.1:8000/api/user/login",obj)
        .then( res => {
            if (res.data.User.length >0 ){
                sessionStorage.setItem('user',JSON.stringify(res.data.User))
                route('/dashboard')
            }else{
                alert('Password or Email invalid')
            }
            })
        .catch(err =>{  console.log(err);})
    }




  return (
    <div className='container ' >
        <div className='bg-info my-5' >
           <div className='row my-5'>
                <div className='col-6 bg-primary py-5 border border-dark rounded p-5'> 
                <div>
                   <div className='px-2  '>
                    <h4 className='text-center py-3'> Titre</h4>
                   <MDBInputGroup textBefore='Email ' className='mb-3 '>
                        <input className='form-control '  ref={refEmail} type='text' placeholder="exemple@gmail.com" />
                    </MDBInputGroup>
                    <MDBInputGroup textBefore='Password' className='mb-3'>
                        <input className='form-control'  ref={refPassword} type='password' placeholder="Password" />
                    </MDBInputGroup>
                   </div>
                   <div className='text-center me-3'>

                    <MDBBtn  onClick={handlSubmit}  outline rounded className='mx-2 w-100' color='secondary'> login </MDBBtn>
                   </div>
                   
                </div>
                
                
                
                 </div>
                <div className='col-6 bg-danger py-5 img'>
                    
                 </div>
           </div>

        </div>


    </div>
  )
}

export default Login