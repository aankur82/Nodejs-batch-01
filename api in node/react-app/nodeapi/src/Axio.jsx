import React from 'react'
import axios from 'axios'

function Axio() {
    async function post(params) {
        const token=localStorage.getItem('token');
        const res = await axios.post(`http://localhost:3000/admin/add?token=${token}`,
            {
                name: "gajesh"
            },
            {
                Headers: {
                    'Content-Type': 'application/json'
                }
            })
        console.log(res.data.is_login)
    }
    async function get(params) {
        const res = await axios.get('http://localhost:3000/admin/weather',
            {
                Headers: {
                    Accept: 'application/json'
                }
            })
    }
    async function login(params) {
        const token=localStorage.getItem('token');
        const res = await axios.post(`http://localhost:3000/admin/login?token=${token}`,
            {
                "name": 'pawan'
            },
            {
                Headers: {
                    Accept: 'application/json'
                }
            })
            console.log(res.data)
            if(res.data.is_login ==true)
            {
                alert('u are logged');
            }
            else{
                alert('login in');
                 localStorage.setItem('token',res.data)
            localStorage.setItem('auth','true')
            }
           
        
    }
    async function home(params) {
        if(localStorage.getItem('auth')=='false')
        {
            alert('please login first');
        }else
        {
             const token=localStorage.getItem('token')
        const res = await axios.get(`http://localhost:3000/admin/home?token=${token}`)
        console.log(res)
        if(!res.data.auth)
        {
            localStorage.clear()
            localStorage.setItem('auth','false');
        }

        }
       
    }
    async function senddata() {
        const res = await axios.get(`http://localhost:3000/admin/getdata?data=helloeveryone`)
        
    }
    return (
        <div>
            <button onClick={post}>click here</button>
            <button onClick={get}>get data</button>
            <button onClick={login}>login</button>
            <button onClick={home}>home</button>
            <button onClick={senddata}>send data</button>

        </div>
    )
}


export default Axio
