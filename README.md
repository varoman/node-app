# node-app
a restful application build with node.js and express deployed to heroku


Navigate to https://powerful-garden-58440.herokuapp.com you should see "app works!" text if it does.

Steps to test endpoints:

- GET <br>
  endpoint: https://powerful-garden-58440.herokuapp.com/ <br>
  you'll get all the existing users
  
- GET specific user <br>
  endpoint: https://powerful-garden-58440.herokuapp.com/${id} <br>
  ${id} can be consumed while GETing the list <br>
  
- PUT <br>
  endpoint: https://powerful-garden-58440.herokuapp.com/${id} <br>
  body: { <br> &nbsp
    "first_name": "Romelu", <br>
    "email":"lukaku@gmail.com",<br>
    "last_name": "Lukaku",<br>
    "street_address": "Roden str",<br>
    "city": "Brusselles",<br>
    "country": "belgium"<br>
  } <br>
  partial update can be performed
  
 - POST <br>
   endpoint: https://powerful-garden-58440.herokuapp.com/ <br>
   body: {<br>
     "first_name": "Romelu",<br>
     "email":"lukaku@gmail.com",<br>
     "last_name": "Lukaku",<br>
     "street_address": "Roden str",<br>
     "city": "Brusselles",<br>
     "country": "belgium"<br>
   }<br>
   
 - DELETE<br>
   endpoint: https://powerful-garden-58440.herokuapp.com/${id}
