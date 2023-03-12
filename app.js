const express = require('express');
const web = require('./routes/web');
const siteUnderCons = require('./middlewares/uc-middleware.js')

const app= express();
const port = process.env.PORT||3000;


// Application level middleware

app.use(siteUnderCons);

app.set('view engine','ejs');

app.use('/',web);

app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`);
})