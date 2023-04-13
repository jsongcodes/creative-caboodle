# creative caboodle | A Full Stack App
creative caboodle is a React/Rails web application designed to give users a space to store their sources of inspiration based on topics and leave notes on it.

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

### App
* Customize theme with MUI
* Ability to add users (sign up) and login
* Persistent login using cookies
* Responsive design

### Topics
* View various topics
* Create topics

### Resources
* View existing resources
* Create new resources for topics
* Like resources
* Filter through resource titles
* View my resources

### Notes
* Users are only able to view their own notes
* Create new notes for resources
* Edit notes
* Delete notes

## Backend Relationships
![Screenshot of backend relationships](https://imgtr.ee/images/2023/04/13/y7M40.png)

## License
[MIT](https://choosealicense.com/licenses/mit/)

## Contact
[Github] (https://www.github.com/jsongcodes)
[LinkedIn] (https://www.linkedin.com/in/jasminsong93/)