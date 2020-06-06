# Trader-Joes-Shopping-List - Back End Code Base

* An Interactive shopping list specifically for Trader Joe's Shoppers.


## GETTING STARTED
  - This is a set of instructions for you to get a copy of the project up and running on your local machine for development and testing purposes. Below are some notes on how to deploy and install the project on your machine. 

## INSTALLATION
  - first cd into the server folder and install dependencies with:
  ```npm install```

  - then launch the api with:
  ```npm run server```
  


## API 

#### BASEURL: ```https://trader-joes-shopping-list.herokuapp.com/```

## ENDPOINTS
|    METHOD    |        ROUTE         | RESTRICTED |
|--------------|----------------------|------------|
|     POST     | /api/auth/register   |    NO      |
|     POST     | /api/auth/login      |    NO      |
|     GET      | /api/users           |    YES     |
|     GET      | /api/users/:id       |    YES     |
|     PUT      | /api/users/:id       |    YES     |
|     DELETE   | /api/users/:id       |    YES     |
|     GET      | /api/items           |    YES     |
|     GET      | /api/items/:id       |    YES     |
|     POST     | /api/items           |    YES     |
|     PUT      | /api/items/:id       |    YES     |
|     DELETE   | /api/items/:id       |    YES     |

## AUTH ROUTES
  ### POST ```/api/auth/register```
    - Returns the newly created user object
    - Your request body must include a username, password, first_name, and last_name

  ### POST ```/api/auth/login```
    - Returns the user (if found and valid) along with a JSON Web token
    - Your request body must include the username, password

## USER ROUTES
  ### GET ```/api/users```
    - Returns an array of all the users in the database

  ### GET ```/api/users/:id```     
    - Returns username, password, first_name, and last_name
    - The ID should be in the request parameters

  ### PUT ```/api/users/:id```  
    - Returns an updated user object
    - The ID should be in the request parameters
    - Response of "success": "updated", and ID of the user that was updated

  ### DELETE ```/api/users/:id```  
    - Response of "success": "deleted", and ID of the user that was deleted

## Items ROUTES
  ### GET ```/api/items```
    - Returns an array of all the items in the database    

  ### GET ```/api/items/:id```  
    - Returns name, price, category
    - The ID should be in the request parameters

  ### POST ```/api/items``` 
    - Creates a new item
    - Response of "success": "You have successfully created a new item"

  ### PUT ```/api/items/:id```
    - Returns an updated items object
    - The ID should be in the request parameters  
    - Response of "success": "updated", and ID of the item that was updated

  ### DELETE ```/api/items/:id```
    - Response of "success": "deleted", and ID of the item that was deleted