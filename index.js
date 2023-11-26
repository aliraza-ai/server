const express = require('express');
const app = express();

app.use(express.json());

//database
const db=require('./models');
//router
const postRouter=require('./routes/PostRouter');
app.use("/posts",postRouter);


db.sequelize.sync().then(()=>
{
    app.listen(3001,()=>
    {
        console.log('server is running')
    });
    
});


