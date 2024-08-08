# [https://github.com/balumalladi1/Froentensd_Student-Teacher_Dashboard](https://github.com/balumalladi1/Student-Teacher_ManagementPortal)

#
Above is the Backend Git Hub Link.

Documentation Process:

It was a MERN Full Stack Project - Used 

Backend - NodeJs,Express Js Framework for Backend.
Datbase - Mongo DB Non- SQL Data Base. 
Front End: ReactJs (Javascript Library), CSS,HTML,Javascript. 



Project Documentation:

Backend Preparation:

1) Set Up & Installations: Initially Node JS, is installed in my laptop, and Set up by using npm init and selecting Package.Json Authorities and installation will be set up.
2) Connecting To DataBase: I used Mongo Atlas and created a Database and created Cluster and Url is taken placed in .env file.
3) Dependencies Downloaded: 
            nodemon 
            dotenv
            body-parser 
            mongoose 
            express 
            cors 
            bcryptjs 
            jsonwebtoken 

3)Connect to Server – Local Storage 
          const express = require("express");
          const app = express();
          const Port = 4000; 
          
          app.listen(Port,()=>{
              console.log(`The app is connected to server ${Port}`)
          })
          app.use("/", (req,res)=>{
              res.send("Hi")
          })


4)Connecting to Server – MongoDB
          Note: MongoDB password should be have wild character like @etc.
          In MongoDB Atlas get the Cluster created and store the in .env file as

5)Procees of connection to MongoDB.
        const dotEnv = require("dotenv") 
        const mongoose = require("mongoose")
        dotEnv.config();
        mongoose.connect(process.env.MONGO_URI)
            .then(()=>console.log("mongoDB got connected"))
            .catch((error)=>console.log(error))


6)API Creation
      models:
          	User Register Schema: name,password (Need to register first, then after login)
            Student Schema: name,email,grade (This Schema is Prepared to add the details from the Front End by User and Post Method URI is Created.
            Teacher Schema: name,email,role (This Schema is Prepared to add the details from the Front End by User and Post Method URI is Created.
          	
      controllers:
            UserController: 1) User Register Logic was given by getting the data from req.body;  2)User Login Logic was given and also Middlewares was setup for checking the Json web tokens.
            StudentController: 1)Student Register Logic was given by getting the data from req.body; 2) Get details Logic was written for fetching the data to frontend. 
            TeacherController: 1)Teacher Register Logic was given by getting the data from req.body; 2) Get details Logic was written for fetching the data to frontend. 
      routes:
      	    Routes: 
           1) user register route: localhost:4000/register/add-register;
           2) Register Login route: localhost:4000/register/login 
                   username:balu 
                   Password:12345 
           3) Teacher register: localhost:4000/teacher/teacher-register  (Post Method Route is used)
           4) Teacher get Details: localhost:4000/teacher/teacher-details  (get Method is used)
           5) Student Register: localhost:4000/student/student-register (Post Method Route is used)
           6) Student Register: localhost:4000/student/student-details  (get method is used)

           Testing: Postman is used testing backend API's. 

           Deployed to Versal and got Url and same url used in the backend and Froentend for fetching the data. 
           CI/CD is done. 

Front End:

1) Set Up & Installation: Using Vite -- npx create react vite@latest and Installation set up was done .

2) UI Development: Using the CSS, React JS UI Development was done.
3) Components:
       It Consists of Login Route - (User Need to Authenticated - Username: Balu, Password:12345
       After Authenticated will be routed to Home Page - Which consists of Header, Sidebar, Welcome Image.
       In Side bar after clicking the Student Details will be routed to Student Component and Table will be displayed showing Student details and also submit Form is also available for Showing the
   Student to post to Database.
       In Side bar after clicking the Teacher Details will be routed to Student Component and Table will be displayed showing Teacher details and also submit Form is also available for Showing the
   Teacher to post to Database.
        Logout functionality was given.

4) API Integration 7 Dynamic Routing was done.
5) Pushed the Code to Git Hub and Free Deployement was done.


# Git Hub Front end link = above are the Details Showing.

Deployement was done in Netlify and please find the Netlify URL:https://balustudentportal.netlify.app
       
	


