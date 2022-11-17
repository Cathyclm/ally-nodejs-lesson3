const express = require('express');
const cors = require('cors');
const router = require('./router');
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api",router);

app.use(cors());
app.use(express.json());
app.use('/api',router)


app.listen(8000,function(){
    console.log("Server is running on http://127.0.0.1:8000");
})
