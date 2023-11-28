const express = require('express');
const app = express();
const cors = require('cors');


app.use(express.json());

app.use(cors());

//database

const db=require('./models');

//router
const postRouter=require('./routes/PostRouter');
app.use("/posts",postRouter);

//router for users
const userRouter=require('./routes/Users');
app.use("/auth",userRouter);


db.sequelize.sync().then(()=>
{
    app.listen(3001,()=>
    {
        console.log('server is running')
    });
    
});


