Bellissimmo (Ecommerce Website with all basic features)
Heroku:  https://bellissimmo.herokuapp.com/

Creators:
1) Abhra Ghosh (LinkedIn: www.linkedin.com/in/abhra-ghosh-57840a1b7)
2) Sagnik Das (LinkedIn: www.linkedin.com/in/sagnik-das-6aa2211b5)

This project can be broadly classified into 3 main aspects namely - 
1) Front End (HTML CSS)
2) Back End (Node Js)
3) Database (Mongo DB)

Some notable dependencies used in this project are - 
1) Express framework for serving HTTP requests.
2) Axios and Cheerio for Web Scraping. The data scraped was then stored in the database.
3) MongoDB driver for linking the server and the database.
4) Nightmare to make API calls for scraping scripts.

Front End - 
The front end of this project was done using HTML and moderately heavy CSS. sessionStorage was used for storing the session details. The Document Object Model (DOM) using jQuery has been used to access and manipulate the documents. Some basic data structures used are Arrays( for data manipulation using functions like splice, slice, map, forEach, push) Hashtables (for storing items selected in the cart). Basic regular expressions were used to retrieve data from strings. Geocoding and Reverse Geocoding has been used to calculate the distance between the store and customer address (HERE Maps).

Back End - 
Express which is a minimal and flexible Node.js web application framework has been used in this project. It allows us to set up middlewares, respond to different HTTP requests, define different routes, and also dynamically render the HTML pages. Data sent and received from the front end are in JSON format. The MongoDB driver has been used to manipulate the database.

Database -
NoSQL database (MongoDB) was used in this project. The MongoDB Atlas which is a global cloud database service system was used, this allowed us to store and retrieve data from only one location. The database has different tables majorly for storing the user information,  cart details, order placement details, and the product details (which have been scraped from the web).

This project has been very helpful by giving us a clear picture of how different API requests are served, how the client-server communication takes place, how interactions between a database and a server are done. Along with this, it has also helped us in discovering the vast varieties of alluring CSS features available. Overall it was a fun project and looking forward to many more.
