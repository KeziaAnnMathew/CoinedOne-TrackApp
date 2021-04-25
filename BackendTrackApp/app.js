const express = require('express');
const app= new express();
const port = 3000;
const cors = require('cors');
var bodyparser= require('body-parser');
app.use(cors());
app.use(bodyparser.json());
const schedulerouter= require('./src/routes/scheduleroutes')(app);
const approuter= require('./src/routes/approutes')(app);
app.use('/schedules',schedulerouter);
app.use('/apps',approuter);
app.listen(port,()=>{
    console.log("Server ready at port:"+port);
});