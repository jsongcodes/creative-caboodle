# creative caboodle | A Full Stack App
creative caboodle is a React/Rails web application designed to give users a space to store their sources of inspiration and leave notes on it.

## General Information
### Problem
* Built in bookmark pages can get disorganized and are not visually appealing.
It can get difficult to keep track of resources, which can lead to the resources getting lost.

### Solution 
* creative caboodle allows users to save resources to a custom, organized space based on topics. Users are also able to leave personal notes on the resources.

## Technologies Used
Front-end
* JavaScript
* React
* MUI
* React Router

Back-end
* Ruby on Rails
* Active Record
* Bcrypt
* Active Record Serializers
* OpenAI API

## Usage
Install it and run:
```bash
bundle install

# create migrations with activerecord
rails db:migrate

# if you would like to use seed data
rails db:seed

# start server
rails s

npm install --prefix client

npm start --prefix client
```

## Features
![Screenshot of component hierarchy](https://imgtr.ee/images/2023/04/02/UEJWq.png)
### App
* Customize theme with Mui
* Ability to add users (sign up) and login
* Persistent login using cookies
* Responsive design

### Topics
* View various topics

### Resources
* View existing resources
* Create new resources for topics
* Search for the most popular resource
* Like resources

### Notes
* Users are only able to view their own notes
* Create new notes for resources
* Edit notes
* Delete notes

## Backend Relationships
![Screenshot of backend relationships](https://imgtr.ee/images/2023/04/07/kithi.png)

## License
[MIT](https://choosealicense.com/licenses/mit/)

## Contact
[Github] (https://www.github.com/jsongcodes)
[LinkedIn] (https://www.linkedin.com/in/jasminsong93/)