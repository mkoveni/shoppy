# Shoppy

## Laravel 5.6 and Angular 4

This repository demonstrates how to build backend API services using the laravel framework. it also demonstrates how to consume API services from Single Page Application.

## Backend API
The api folder contains the laravel project. this project contains endpoints for:

- Creating user accounts
- Authenticating through JSON Web Token(JWT)
- Browse products
- Buy products
- Topup Accounts

there are also other endpoints that help with validation of email address and more.

## FrontEnd
The frontend project was build using Angular 4 (also known as just Angular). this project covers most of the techniques that one can use to build real-world applications. This app communicates with the API to perform all the operations required. techniques covered in this project includes:

- Input Validation
- Working with observables
- Authentication
- Persisting authentication using JWT
- Working with Http interceptors
- Persisting application state using Redux

## REQUIREMENTS

The following is needed to successfully run these projects

- PHP 7.1+
- Nodejs
- MySQL (can be replaced with SQLite)
- Composer


### How to use this repository

You can use this repository in one of 2 ways, you can simply download the zipped file and extract it or you can just clone it with the following command (you must have git installed on your system)  

>`git clone https://github.com/mkoveni/shoppy.git`  

This will create a shoppy directory in your current working directory. navigate into the shoppy directory and take a look at the api and client projects.

> `cd shoppy && cd api`  

we will start with the api project first as it contains our data endpoints. the first thing you will do is to install our project dependencies by running **`composer install`** and then set some environment variables in the .env file, The most important variables are the database variables. once that is done we will run: 

>`php artisan migrate && php artisan db:seed`  

this will create our database schema and populate the database with our initial data. once that is done we can run our project with

>`php artisan serve`  

this will run our project on the local PHP server on http://localhost:8000, you can go to routes/api.php to find all the available api endpoints and you also add or remove as you wish but keep in mind that you will also have to update the client as a result.  

### Now lets head to client project
let's first navigate to the client directory and issue the following command to install all the node dependencies

>`npm install`  

now we can run project by issueing 
> `npm run start`  

The project will run on http://localhost:4200 , copy and paste the link into your browser and Voilà, its working

**NB** you can also access the admin dashboard on the laravel project through https://localhost:8000  

email : admin@app.com  
password: admin123