const express = require('express');
const router = express.Router();
const dbmodel = require('../model/dbmodel');
const admission = require('../model/admission');
const training = require('../model/training');

router.get('/', (req, res)=> {
    res.render('index');
});

router.get('/registration', (req, res)=> {
    res.render('registration');
});

router.get('/adminlogin', (req, res)=> {
    res.render('adminlogin');
});

router.get('/userlogin', (req, res)=> {
    res.render('userlogin');
});


//database
router.post('/send', (req, res)=> {
    const {fullname, email, password, mobile, dateofbirth, gender, location, file} = req.body;
   // console.log(fullname, email, password, mobile, dateofbirth, gender, location, file);
    const bracUser = new dbmodel({
        fullname,
        email, 
        password, 
        mobile, 
        dateofbirth, 
        gender, 
        location, 
        file 
    });
    bracUser.save((err)=> {
        if(err){
            console.log("Database can't reached data");
        }else{
            console.log("Data save successfully");
            res.redirect('/');
        }
        
    });
});

//show database data
router.get('/userinfo', (req, res)=> {
    dbmodel.find((err, docs)=> {
        if(!err){
            res.render('userinfo', {bracs:docs});
        }
        else{
            console.log("Error 404");
        }
    });
});

//get update
router.get('/update/:id', (req, res)=> {
    dbmodel.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, (err, docs)=> {
        if(err){
            console.log("Update operation failed");
        }
        else{
            res.render('update', {brac: docs});
        }
    });
});



//post update
router.post('/update/:id', (req, res)=> {
    dbmodel.findByIdAndUpdate({_id: req.params.id}, req.body, (err, docs)=> {
        if(err){
            console.log("Data doesn't update");
        }
        else{
            res.redirect('/userinfo');
        }
    });
});

//delete
router.get('/userinfo/:id', (req, res)=> {
    dbmodel.findByIdAndDelete({_id: req.params.id}, (err, docs)=> {
        if(err){
            console.log("Data doesn't delete");
        }
        else{
            res.redirect('/userinfo');
        }
    });
});



//admin post(admission)
router.post('/add', (req, res)=> {
    const {catagory, area, comment, file} = req.body;
    const bracAdmission = new admission({
    catagory,
    area,
    comment,
    file 
    });
    bracAdmission.save((err)=> {
        if(err){
            console.log("Database can't reached data");
        }else{
            console.log("Data save successfully");
            res.redirect('/dashboard');
        }
        
    });
});

router.get('/dashboard', (req, res)=> {
    admission.find((err, docs)=> {
        if(!err){
            res.render('dasboard', {admissions:docs});
        }
        else{
            console.log("Error 404");
        }
    });
});

router.get('/admissionUpdate/:id', (req, res)=> {
    admission.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, (err, docs)=> {
        if(err){
            console.log("Update operation failed");
        }
        else{
            res.render('admissionUpdate', {brac: docs});
        }
    });
});

router.post('/admissionUpdate/:id', (req, res)=> {
    admission.findByIdAndUpdate({_id: req.params.id}, req.body, (err, docs)=> {
        if(err){
            console.log("Data doesn't update");
        }
        else{
            res.redirect('/dashboard');
        }
    });
});

router.get('/dashboard/:id', (req, res)=> {
    admission.findByIdAndDelete({_id: req.params.id}, (err, docs)=> {
        if(err){
            console.log("Data doesn't delete");
        }
        else{
            res.redirect('/dashboard');
        }
    });
});




//admin post(training)
router.post('/addTraining', (req, res)=> {
    const {catagory, area, comment, file} = req.body;
    const bracTraining = new training({
    catagory,
    area,
    comment,
    file 
    });
    bracTraining.save((err)=> {
        if(err){
            console.log("Database can't reached data");
        }else{
            console.log("Data save successfully");
            res.redirect('/trainingpost');
        }
        
    });
});

router.get('/trainingpost', (req, res)=> {
    training.find((err, docs)=> {
        if(!err){
            res.render('trainingpost', {trainings:docs});
        }
        else{
            console.log("Error 404");
        }
    });
});

router.get('/trainingpost/:id', (req, res)=> {
    training.findByIdAndDelete({_id: req.params.id}, (err, docs)=> {
        if(err){
            console.log("Data doesn't delete");
        }
        else{
            res.redirect('/trainingpost');
        }
    });
});

router.get('/trainingUpdate/:id', (req, res)=> {
    training.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, (err, docs)=> {
        if(err){
            console.log("Update operation failed");
        }
        else{
            res.render('trainingUpdate', {training: docs});
        }
    });
});

router.post('/trainingUpdate/:id', (req, res)=> {
    training.findByIdAndUpdate({_id: req.params.id}, req.body, (err, docs)=> {
        if(err){
            console.log("Data doesn't update");
        }
        else{
            res.redirect('/trainingpost');
        }
    });
});

module.exports = router;