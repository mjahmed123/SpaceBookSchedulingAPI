# SpaceBook Scheduling Backend API
API used to schedule a date and time for posts to be sent.

Link to this repository: https://github.com/mjahmed123/SpaceBookSchedulingAPI

## Setup
1. Clone this repo using the command `git clone https://github.com/mjahmed123/SpaceBookSchedulingAPI.git`
2. Navigate to the directory using `cd SpaceBookSchedulingAPI`
3. Run `npm install` to install the required dependencies.
4. Run `npm run dev` to start the scheduling server.
If you see `SpaceBook Scheduling API is running on port 3334` in the console, that means that the server is successfully running.

## How does this work?
I have created an express restful server with a POST route "/schedule". This route accepts the users: token (senders token), postToUserId (receiver user id), text (Posts content) and timestamp as a JSON body. I used a dependency called "node-schedule" which executes a callback when the time is reached. When the time is reached, the scheduling server will send a POST request to the SpaceBook API to the `/user/{userId}/post` route.

## Dependencies Used:
• node-schedule - Allows you to schedule events. This is used to schedule when a post is to be sent.   
• express - Allow you to create an restful API. This is used to schedule a post using the route `/schedule`   
• axios - Allows you to send HTTP requests to a server. This is used to send a POST request to the SpaceBook API.

## Why is this done this way?
There is no way to schedule posts when the frontend app is closed or if the device is switched off. Creating a backend server will ensure that each post is scheduled properly even if the device is not connected to the internet.
