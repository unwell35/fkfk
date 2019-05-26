const Discord = require('discord.js'); 
const client = new Discord.Client();
const fs = require('fs');
const status = JSON.parse(fs.readFileSync('./status.json' , 'utf8'));
const prefix = "+";
client.on("ready",() => { //iTzMurtaja
console.log("Ready!"); //iTzMurtaja
if(!status[client.user.id]) {status[client.user.id] = {
    text: client.user.tag,
    type: "WATCHING"
}} //iTzMurtaja
client.user.setActivity(status[client.user.id].text, {type: status[client.user.id].type})    //iTzMurtaja
     client.user.setStatus("dnd");
});
 
client.on("message", message => { //iTzMurtaja
if(message.content.startsWith(prefix + "pre")) { //iTzMurtaja
if(message.author.id !== "399250242136047619") return; //iTzMurtaja
var args = message.content.split(" ").slice(1).join(" "); //iTzMurtaja
status[client.user.id].text = args //iTzMurtaja
message.reply("Done, I set it to \`" + args +"\`") //iTzMurtaja
  client.user.setActivity(status[client.user.id].text,{  type : status[client.user.id].type})} //iTzMurtaja
fs.writeFile("./status.json", JSON.stringify(status), (err) => { //iTzMurtaja
if (err) console.error(err) //iTzMurtaja
}) //iTzMurtaja
}); //iTzMurtaja
 
client.on("message", message => { //iTzMurtaja
if (message.author.id !== "399250242136047619") return; //iTzMurtaja
  if(message.content === prefix + "watching") { //iTzMurtaja
status[client.user.id].type = "WATCHING" //iTzMurtaja
message.reply("Done, I set it to \`WATCHING\`") //iTzMurtaja
client.user.setActivity(status[client.user.id], {type: status[client.user.id].type})} //iTzMurtaja
else //iTzMurtaja
if(message.content === prefix + "listening") { //iTzMurtaja
status[client.user.id].type = "LISTENING" //iTzMurtaja
message.reply("Done, I set it to \`LISTENING\`") //iTzMurtaja
client.user.setActivity(status[client.user.id], {type: status[client.user.id].type})} //iTzMurtaja
else //iTzMurtaja
if(message.content === prefix + "playing") { //iTzMurtaja
status[client.user.id].type = "PLAYING" //iTzMurtaja
message.reply("Done, I set it to \`PLAYING\`") //iTzMurtaja
client.user.setActivity(status[client.user.id], {type: status[client.user.id].type})} //iTzMurtaja
fs.writeFile("./status.json", JSON.stringify(status), (err) => { //iTzMurtaja
if (err) console.error(err) //iTzMurtaja
})})
client.login(process.env.BOT_TOKEN);
