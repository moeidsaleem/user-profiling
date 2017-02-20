"use strict";

// adding modules
let express = require('express');
let mongoose = require('mongoose');
let bodyParser = require('body-parser');
let PORT = process.env.PORT || 3000;
let app = express(); /*Express app*/

var companies = require('./routes/companies');
// var data = require('./routes/')

// Client-side
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname+'/client'));


app.use('/api/companies', companies);


// connecting to datbase
// Mongoose Connect
 mongoose.connect('mongodb://atrixdigital:atrix123@ds153669.mlab.com:53669/userproject');
let db = mongoose.connection; /*Database*/



// /*LOGIC 
// >When post > save the data > Change view */
// app.post('/profile', function(req,res,next){
//   let d ={ 
//   		industry_code:req.body.industry_code,
//   		 corporate_name:req.body.corporate_name,
//   		company_DBA:req.body.company_DBA,
//   		corporate_type:req.body.corporateType,
//   		formation_date:req.body.formationDate,
//   		business_description:req.body.businessDescription,
//   		isFranchise:req.body.isFranchise,
//   		franchise_name:req.body.franchise_name

//   };
//   let data = new Company(d);
//   data.save(); /*now the data is saved*/
//   console.log(data); 
//   res.send(data);

// });


// app.get('/profileData', function(req,res){
     
// 	res.send(Company.find());
// 	console.log(Company.find());
// });

// app listening
app.listen(PORT);
console.log('Started on port >>'+PORT);




