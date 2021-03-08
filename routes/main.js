const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require('fs')



router.use(express.static(path.join(__dirname, "../public")))


router.get('/home', (req, res) => {
    fs.readFile(path.join(__dirname, "../public/datas/data.json"), "utf8", function (err, data) {

        if (err) return res.status(400).send("Something went wrong!!!")
        data = JSON.parse(data)
        
        let searchData=[]
       
        if(req.query.name){
           
            for(let index of data){
                for(let element in index){
                    if(index[element].includes(req.query.name)){
                        searchData.push(index)
                        continue;
                    }
                }
            }
           
            res.render('pages/home.ejs',{datas: "searchData",searchData})
        }
        else{
          
        res.render('pages/home.ejs', {data,datas:"data"})}



    })
})

router.get('/about', (req, res) => {
    res.render('pages/about.ejs')




})



router.get('/contact', (req, res) => {
    res.render('pages/contact.ejs')




})

router.get('/product/:id', (req, res) => {
    let param=req.params.id
   
    fs.readFile(path.join(__dirname, "../public/datas/data.json"), "utf8", function (err, data) {

        if (err) return res.status(400).send("Something went wrong!!!")
        data = JSON.parse(data)
        res.render('infos/info.ejs', {data,param})



    })
})
module.exports = router