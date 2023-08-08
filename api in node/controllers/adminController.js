const Product = require('../models/shopModel')
const jwt = require('jsonwebtoken')
const data = 'pawan'
const secret_key = "jfdkjdkfjdksjfkdj"
exports.login = (req, res, next) => {
  let name = req.body.name
  if (name == data) {
    const token = jwt.sign({ name: name }, secret_key, {
      expiresIn: '2d'
    })
    res.status(200).json(token)
  }
  res.status(200).json({
    massege: "data received",
    body: {
      name: name
    }
  })
}

exports.home = (req, res, next) => 
{
  let token = req.query.token
  // console.log(token.split(' ')[1])
  // jwt.verify(token,secret_key,(err,data)=>
  // console.log(data))
  // let token=req
  console.log(token)
  try {
    const decode = jwt.verify(token, secret_key)
    req.user=decode.name
    res.status(200).json({
      massege: "u are allowed",
      auth: true,
      body: {

        name: "hello"
      }
    })
  } catch (error) {
    res.status(200).json({
      massege: "u are nor allowed",
      auth:false,
      body: {
        name: "hello"
      }
    })

    // if(!decode)
    // {

    //   return res.status(500).json(
    //     {
    //       massege: "u are not allowed",
    //       body: {
    //         name: "hello"
    //       }
    //     }
    //   );

    // }
    // console.log(decode)

  }

  }
  exports.add = (req, res, next) => {
    let name = req.body.name

    res.status(200).json({
      massege: "data received",
      body: {
        name: name
      }
    })
  }

  exports.show = (req, res, next) => {

    let data = {
      "location": {
        "name": "London",
        "region": "City of London, Greater London",
        "country": "United Kingdom",
        "lat": 51.52,
        "lon": -0.11,
        "tz_id": "Europe/London",
        "localtime_epoch": 1613896955,
        "localtime": "2021-02-21 8:42"
      },
      "current": {
        "last_updated_epoch": 1613896210,
        "last_updated": "2021-02-21 08:30",
        "temp_c": 11,
        "temp_f": 51.8,
        "is_day": 1,
        "condition": {
          "text": "Partly cloudy",
          "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
          "code": 1003
        },
        "wind_mph": 3.8,
        "wind_kph": 6.1,
        "wind_degree": 220,
        "wind_dir": "SW",
        "pressure_mb": 1009,
        "pressure_in": 30.3,
        "precip_mm": 0.1,
        "precip_in": 0,
        "humidity": 82,
        "cloud": 75,
        "feelslike_c": 9.5,
        "feelslike_f": 49.2,
        "vis_km": 10,
        "vis_miles": 6,
        "uv": 1,
        "gust_mph": 10.5,
        "gust_kph": 16.9,
        "air_quality": {
          "co": 230.3,
          "no2": 13.5,
          "o3": 54.3,
          "so2": 7.9,
          "pm2_5": 8.6,
          "pm10": 11.3,
          "us-epa-index": 1,
          "gb-defra-index": 1
        }
      }
    };
    res.status(200).json(data);
  }

exports.getdata=(req,res,next)=>{
  const {getio}=require('../utilities/socket')
  const io=getio()
  const data=req.query.data
  io.emit('xyz',{data:data})
  console.log(data)
}


