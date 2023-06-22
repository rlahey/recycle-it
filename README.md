# recycle-it

Hello and welcome to my app, Recycle It. If you are lucky enough to have selected me as a potential employee, thank you for considering me! 

### How to view recycle-it
Recycle It is still in development so you must follow the steps below to access the website. The website is not finished but I am actively working on it until I think it is perfect! 

Steps:
1. Run `git clone https://github.com/rlahey/recycle-it.git` in your terminal
2. Navigate to the app in your terminal: `cd recycle-it`
3. run `yarn install`
4. Navigate to the server to complete the following commands: `cd server`
5. Create the database using postGresSql: `createdb rlahey_breakable_toy_development`
6. get the databases most recent change: `yarn run migrate:latest`
7. get data `yarn run db:seed`
8. go back to the root of the app: `cd ..`
9. open app: `yarn run dev`
10. In your browser navigate to localhost3000

   



### About Recycle-It: 

Recycle It is a full-stack app that uses Google Maps API.  It shows Boston residents where they can drop of their clothes/ textiles they no longer want or need.  The goal is to reduce how much of our clothes end up in landfills.  Boston is working with Helpsy to help prevent this.  Recycle It shows where the drop off bins exist in every boston neighborhood! There is also a feature where a user can give away an item or two if they do not want to drop their clothes off at a bin. 

### Why I created this app

I completed a coding bootcamp in boston and our final project was to create an app using react that can connect to a 3rd party API.  You might think "a recycling app sounds pretty lame" but I have always been an advocate of mother nature and protecting our environment for our future generations. There are many ways we can tackle climate change and learn to live a more sustainable lifestyle but I wanted to start with fast fashion.  The city of Boston works with Helpsy to recycle textiles so they do not end up in landfills.  Recycle It shows boston residents where the Helpsy drop off bins so they can rest their minds knowing that their old textiles will end up in good hands.