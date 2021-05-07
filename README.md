# Express_Cheat-Sheet
My first intro to Express Js. This is a handy reference for some of the basics to get started with Express JS.

## What is Express JS ?
Express is a fast, minimalistic and flexible Node.js web application framework that provides a robust set of features for web & mobile applications.

## Why Express JS ?
* Express Js is fast, light & free and also makes building server side Node JS application much simpler & easier.
* Express Js can be used for both server rendered apps as well as APIs/Microservices.
* Express Js allows us to have full control over requests & responses.
* Express Js is by far the most popular framework in the industry & can be easily used with client-side frameworks as it is all Javascript.

## Quick Guide 
* __app.js__ : This is the main entry point file which sets up an express server running. Its also performes other functionalities like using Middlewares, navigating through routes for API and also setting up a Static folder instead of individual routing. 
* __/Middlewares/logger.js__ : This is to demonstrate the working of Middlewares. Inside logger.js we explore "moment" package which helps us in knowing the various things like request protocols, hosts, date & time.
* __public__ : This is the Static folder containing HTML & CSS files.
* __Routes/APIs/memb.js__ : This is the development of a REST API used for CRUD Operations. We have a dummy data file "Member.Js" on which we send GET, POST, PUT & DELETE requests.  
