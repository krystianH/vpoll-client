# vpoll-client
Hackday project

Messages
--------

CreatePoll. Used to start a new poll

```javascript
{
    "clientID": "5D7856F9-5495-41C7-B005-F7D870C25161", //Id of the client sending the message GUID
    "messageID": "1095C221-A635-4F41-8637-C48EF67A69D9", //Id of the the message GUID
    "pollId": "1095C221-A635-4F41-8637-C48EF6111111", //Id of poll GUID
    "type": "createPoll", //Type of Poll We might create different types of polls in the future
    "startTime": "2015-06-10 14:10:12Z", //When do this poll start in UTC
    "stopTime": "2015-06-10 14:12:22Z", //When do this poll end in UTC
    "title": "Who wins the game", //Title of poll
    "queries": [ // List of Queries
        {
            "id": "1",
            "text": "Ashkan Sarkeshik",
            "type": "button"   //When a button is pressed a 1 will be sent, We might want to extend this to cb et
        },
        {
            "id": "2",
            "text": "Petter Magnusson",
            "type": "button"
        }
    ]
}
```

Responses 

```javascript
{
    "clientID": "5D7856F9-5495-41C7-B005-F7D870C25162", //Who sent this message
    "messageID": "1095C221-A635-4F41-8637-C48EF67A69DA", //Id of message
    "pollId": "1095C221-A635-4F41-8637-C48EF6111111", //Id of the poll that this message is about
    "type": "respPoll", //This is a VOTE in a createPoll
    "responses": [ //Responses in poll
        {
            "id": "1", 
            "button": "1"  //This is a press on a button
        }
    ]
}
```
