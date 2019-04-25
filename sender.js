const request = require("request-promise"),
  uuidV4 = require("uuid/v4"),
  {
    Message,
    Originator
  } = require("./node_modules/flowai-js/lib")

const options = {
  method: 'POST',
  headers: {
    'cache-control': 'no-cache',
    'Content-Type': 'application/json',
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZ2VudElkIjoiOTc2MzY4MzMtNzAxNy00NzA2LWIxYzUtNmUyZTkyZWM3MzgwIiwiY2hhbm5lbElkIjoiODMxMjAyY2QtMzA4OC00ODFkLWE0ODctZmE1Zjg4ZWU1NWMyIiwiaWF0IjoxNTU1NTE1MjkyfQ.BQlTpraKvd-OE8LYUsGfAOX4Bzrh8kknbMGeSXd1bGE'
  },
  uri: 'https://app-dev.flow.ai/channel-rest/webhook',
  body: {
    payload: new Message({
      threadId: uuidV4(),
      speech: 'hello',
      originator: new Originator({
        name: "Test rest user",
        profile: {
          fullName: "Test rest user"
        }
      })
    })
  },
  json: true
}

request(options)