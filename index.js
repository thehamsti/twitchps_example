/**
 * TwitchPS Example Application
 *
 * @license MIT - https://github.com/jctrvlr/twitchps_example/blob/master/LICENSE
 * @version 0.1.0
 * @author Jack Cummings, https://github.com/jctrvlr/
 *
 */

const TwitchPS = require('twitchps');

// Initial topics -- Token removed for security
let init_topics = [{topic: "channel-bits-events-v1.22916751", token: 'token'}, {topic: 'video-playback.venruki'}];

// Defaults: Reconnect = true, debug = false
// Without optional options
// var ps = new TwitchPS({init_topics: init_topics});
var ps = new TwitchPS({reconnect: false, init_topics: init_topics, debug: true});

// Example of adding topics with and without tokens -- Token removed for security
ps.addTopic([{topic: "video-playback.starladder_cs_en"}]);
ps.addTopic([{topic: 'whispers.38290946', token: 'nkuaf7ur3trg7ju37md1y3u5p52s3q'}]);

// Examples of all types of events to listen for
ps.on('bits', (data) => {
  console.log('Bits Event');
  console.log('Bits Used: ' + data.bits_used);
  console.log('Channel Name: ' + data.channel_name);
  console.log('User Name: ' + data.user_name);
  console.log(data);
  // Use data here -- See docs for what data fields are emitted
});

ps.on('whisper', (data) => {
  console.log('Whisper Event');
  console.log('To: ' + data.recipient.username);
  console.log('From: ' + data.sender.username);
  console.log('Message: ' + data.body);
  // Use data here -- See docs for what data fields are emitted
});

ps.on('stream-up', (data) => {
  console.log('Stream up Event');
  console.log('Time: ' + data.time);
  console.log('Channel: ' + data.channel_name);
  // Use data here -- See docs for what data fields are emitted
});

ps.on('stream-down', (data) => {
  console.log('Stream down Event');
  console.log('Time: ' + data.time);
  console.log('Channel: ' + data.channel_name);
  // Use data here -- See docs for what data fields are emitted
});

ps.on('viewcount', (data) => {
  console.log('Viewcount Event');
  console.log('Time: ' + data.time);
  console.log('Channel: ' + data.channel_name);
  console.log('Views: ' + data.viewers);
  // Use data here -- See docs for what data fields are emitted
});

// Set to remove topic after 30 seconds to emulate an event trigger
setTimeout(() => {
  ps.removeTopic([{topic: "video-playback.starladder_cs_en"}]);
}, 30000);
