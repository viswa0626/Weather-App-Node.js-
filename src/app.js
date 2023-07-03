const path = require('path')
const express = require('express');
// console.log(__dirname);
// console.log(__filename);


const app=express();

//Define paths for Express config
const publicDirectoryPath = path.join(__dirname,'../public');
const viewPath = path.join(__dirname,'../templates/views')

//Setup wgv
app.get('',(req,res)=>{
    res.render('index',{
        title: 'Weather App',
        
    })
})
app.get('/about',(req,res)=>{
    res.render('about',{
        title:'About Page',
        name:'Viswa'
    })
})


app.get('/help',(req,res)=>{
    res.render('help',{
        title:'Help',
        message:'How can i Help you'
    })

})

// app.get('',(req,res)=>{
//     res.send('Hello Express');
// })


// app.get('/help',(req,res)=>{
//     res.send("<h1><b>Help Page</b></h1>");

// })

// app.get('/about',(req,res)=>{
//     res.send([
//         {
//             name:"Andrew"
//         },{
//             age:30
//         }
//     ]);
// })

app.get('/weather',(req,res)=>{
    res.send("Weather Page")
})

app.listen(3000,()=>{
    console.log("Server is running up");
})