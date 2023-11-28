Server side:
Node init; for creating a file.
Npm install express cors mysql2
After that 
const express = require('express')
const app = express ()
app.listen(3001,()=>
{
    console.log ('server is running')
});

You we need to install nodemon auto restart while on changes
Now change the this code to 
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },

This one
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
"start": "nodemon index.js"

	
  },

Installing sequelize  
npm install --save-dev sequelize-cli
npx sequelize-cli init
delete seeds folder we don’t need it.
Model Tables Structure here;

module.exports = (sequelize,DataTypes)=>
{
    const Posts = sequelize.define("Posts", 
    {
        title: {
            type:DataTypes.STRING,
            allowNull:false,
        },
        PostText:
        {
            type:DataTypes.STRING,
            allowNull:false,
            
        },
        username:
        {
            type:DataTypes.STRING,
            allowNull:false,
        }
    });

    return Posts;
    
};

Posts table.

For user auth needed: npm install bcrypt

For sessions in server need to install : npm install jsonwebtoken




