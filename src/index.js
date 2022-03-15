const express = require('express');
const schedule = require('node-schedule');

const scheduleService = require('./scheduleService');

const app = express();
const PORT = 3334;

app.post('/schedule', (req, res) => {
  const {
    token, postToUserId, text, timestamp,
  } = req.body;

  const date = new Date(timestamp);

  console.log(`New message scheduled for ${date}`);

  schedule.scheduleJob(date, async () => {
    await scheduleService.createPost(postToUserId, text, token);
    console.log('Post sent!');
  });

  res.json('Post sucessfully scheduled.');
});

app.listen(PORT, () => {
  console.log(`SpaceBook Scheduling API is running on port ${PORT}`);
});
