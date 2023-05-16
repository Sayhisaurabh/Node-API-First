const express = require('express')
const mongoose = require('mongoose');
const app = express()
const port = 8000
app.use(express.json())
app.use(express.urlencoded({extended: false}))
const ProductRoutes = require('./routes/product');
const CategoryRoutes = require('./routes/category');
const registerRoutes = require('./routes/register');
const loginRoutes = require('./routes/login');
 
// include all routes 
app.use(ProductRoutes);
app.use(CategoryRoutes);
app.use(registerRoutes);
app.use(loginRoutes);
// db connection 
mongoose.set("strictQuery", false)
mongoose.connect('mongodb+srv://sayhisaurabh:vmTxoVneulX54iH5@nodeapi.jtpc5iu.mongodb.net/?retryWrites=true&w=majority')
  .then(() => console.log('Connected!'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})