var express = require('express');
var myctrl = require('../controller/usercontroller');

var approute = express.Router();

var jt = require('../config/jwthealper');
approute.get('/',(req,res)=>{
  res.status(200).json({
    msg:"working"
  })
})
approute.post('/newuser',myctrl.addnew);
approute.get('/getAll',myctrl.getAll);
approute.get('/userinfo/:id',myctrl.selectedData);
approute.get('/selectedfield',myctrl.selectbyfield);
approute.put('/updateRecord/:id',myctrl.updatedData);
approute.delete('/del/:id',myctrl.deletedata);

// Register

approute.post('/reg',myctrl.registerData);

// Admin

approute.post('/admin',myctrl.addAdmin);

approute.post('/auth',myctrl.authenticate);

//approute.get('/userinfo/:id',myctrl.userProfile);

approute.post('/profile',jt.verifyjwtToken,myctrl.userProfile);
  approute.get('/userinfo/:id',myctrl.selectedData);


module.exports = approute;
