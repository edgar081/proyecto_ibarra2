import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import swal from 'sweetalert';

class Login extends Component {
    render(){
        const respuesta_good=()=>{
            swal({
                title:"BIENVENIDO",
                Text:"INFRESA CON EXITO",
                icon:"success",
                button:"ACEPTAR"
            })

        }
        const respuesta_bad=()=>{
            swal({
                title:"INGRESO INCORRECTO!!!",
                Text:"INTENTALO DE NUEVO",
                icon:"error",
                button:"ACEPTAR"
            })

        }
        return(
            <GoogleLogin
            clientId="1093818016595-aipi6u47uvfvoinmm8mfelgndep852i7.apps.googleusercontent.com"
            buttonText="Bienvenido Ingresa"
            onSuccess={respuesta_good}
            onFailure={respuesta_bad}
            cookiePolicy={'single_host_origin'}
             />
        )
        
       
    }
}
export default Login