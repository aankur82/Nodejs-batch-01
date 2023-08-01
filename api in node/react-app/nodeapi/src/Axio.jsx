import React from 'react'
import axios from 'axios'

function Axio() {
    async function post(params) {
        const data = await axios.post('http://localhost:3000/admin/add',
            {
                name: "gajesh"
            },
            {
                Headers: {
                    'Content-Type': 'application/json'
            }})
    console.log(data)
}
async function get(params) {
    const res = await axios.get('http://localhost:3000/admin/weather',
    {
        Headers:{
            Accept:'application/json'
        }
    })
console.log(res.data)
}
return (
    <div>
        <button onClick={post}>click here</button>
        <button onClick={get}>get data</button>


    </div>
)
}

export default Axio
