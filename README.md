# node-app
a restful application build with node.js and express deployed to heroku


Navigate to https://powerful-garden-58440.herokuapp.com you should see "app works!" text if it does.

Steps to test endpoints:

- GET
  endpoint: https://powerful-garden-58440.herokuapp.com/
  you'll get all the existing users
  
- GET specific user
  endpoint: https://powerful-garden-58440.herokuapp.com/${id}
  ${id} can be consumed while GETing the list
  
- PUT
  endpoint: https://powerful-garden-58440.herokuapp.com/${id}
  body: {
	  "first_name": "Romelu",
    "email":"lukaku@gmail.com",
    "last_name": "Lukaku",
    "street_address": "Roden str",
    "city": "Brusselles",
    "country": "belgium"
  }
  partial update can be performed
  
 - POST 
   endpoint: https://powerful-garden-58440.herokuapp.com/
   body: {
     "first_name": "Romelu",
     "email":"lukaku@gmail.com",
     "last_name": "Lukaku",
     "street_address": "Roden str",
     "city": "Brusselles",
     "country": "belgium"
   }
   
 - DELETE
   endpoint: https://powerful-garden-58440.herokuapp.com/${id}
