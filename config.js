const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="ogunsolaolubunmilola@gmail.com"
global.location="Lagos,Nigeria."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348069363347";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_15_16_04_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICA0MyxcbiAgICAgICAgOTMsXG4gICAgICAgIDU3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjM0LFxuICAgICAgICA1LFxuICAgICAgICA0LFxuICAgICAgICAyMyxcbiAgICAgICAgOTMsXG4gICAgICAgIDc2LFxuICAgICAgICA3MCxcbiAgICAgICAgMjM2LFxuICAgICAgICA4MyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDgwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgOSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgOTAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxODQsXG4gICAgICAgIDgsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTksXG4gICAgICAgIDgwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDYyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDM3LFxuICAgICAgICAzMSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjI4LFxuICAgICAgICAzNCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDczLFxuICAgICAgICAyMDMsXG4gICAgICAgIDAsXG4gICAgICAgIDExNixcbiAgICAgICAgNjcsXG4gICAgICAgIDk1LFxuICAgICAgICAxLFxuICAgICAgICA3MixcbiAgICAgICAgODgsXG4gICAgICAgIDMyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDMxLFxuICAgICAgICAxODEsXG4gICAgICAgIDIwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDg5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDMwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDYxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNDUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNjMsXG4gICAgICAgIDYwLFxuICAgICAgICAzNCxcbiAgICAgICAgNjUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMyxcbiAgICAgICAgOTUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgODEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTQ0LFxuICAgICAgICA5NixcbiAgICAgICAgNjMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTU5LFxuICAgICAgICAzMCxcbiAgICAgICAgNjUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTA3LFxuICAgICAgICAzNixcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA3MSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDExNCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTYyLFxuICAgICAgICA0OCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTEzLFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAyOCxcbiAgICAgICAgMTE3LFxuICAgICAgICAzMCxcbiAgICAgICAgMTI4LFxuICAgICAgICA1NCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDExNCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE2MixcbiAgICAgICAgODUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDg1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDgzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDM4LFxuICAgICAgICAxLFxuICAgICAgICA5OCxcbiAgICAgICAgOTAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTgwLFxuICAgICAgICA4MixcbiAgICAgICAgNixcbiAgICAgICAgMjI5LFxuICAgICAgICAxMzksXG4gICAgICAgIDY4LFxuICAgICAgICA3NCxcbiAgICAgICAgMTcyLFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTE2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDk4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDY2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTgxLFxuICAgICAgICA3MixcbiAgICAgICAgMTA3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNzcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDEwMVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA5NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDksXG4gICAgICAgIDE4NixcbiAgICAgICAgMTYxLFxuICAgICAgICAxNTksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTgyLFxuICAgICAgICA5NSxcbiAgICAgICAgODMsXG4gICAgICAgIDcyLFxuICAgICAgICA1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTI5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTQ5LFxuICAgICAgICA1MCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE1LFxuICAgICAgICA3LFxuICAgICAgICA5MixcbiAgICAgICAgMjM1LFxuICAgICAgICA5NixcbiAgICAgICAgNDQsXG4gICAgICAgIDgwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjM0LFxuICAgICAgICA0LFxuICAgICAgICAyMyxcbiAgICAgICAgNzUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNzYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTMxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDUsXG4gICAgICAgIDMzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTAxLFxuICAgICAgICAzNyxcbiAgICAgICAgMTUwLFxuICAgICAgICAzOCxcbiAgICAgICAgNixcbiAgICAgICAgMjAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTQ1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIllXODI1Q0dvSGdVaHplTjRkc0N1ODZKZUN6dEhYbXJBcU4wQmpjVG9PbkU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkJUbWhVd3Z2UmRPOEktV3Q4ZlI1YUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYTUyZjBmY2QtYzAwOC00MmU4LWFiNDUtMTQ1MjI3NjU2NjFmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2NyxcbiAgICAgIDExLFxuICAgICAgMTc0LFxuICAgICAgNTcsXG4gICAgICAxMjYsXG4gICAgICA1MyxcbiAgICAgIDIzMyxcbiAgICAgIDc2LFxuICAgICAgMTIxLFxuICAgICAgMjUxLFxuICAgICAgNzYsXG4gICAgICAzNixcbiAgICAgIDUzLFxuICAgICAgMjE1LFxuICAgICAgMjUzLFxuICAgICAgMTgwLFxuICAgICAgMTQsXG4gICAgICAzMSxcbiAgICAgIDg4LFxuICAgICAgODJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODksXG4gICAgICA5LFxuICAgICAgNyxcbiAgICAgIDE5MCxcbiAgICAgIDEyLFxuICAgICAgMjMwLFxuICAgICAgNDgsXG4gICAgICAxNCxcbiAgICAgIDEzOCxcbiAgICAgIDYyLFxuICAgICAgMzMsXG4gICAgICAxOTcsXG4gICAgICAxNjUsXG4gICAgICAxNTYsXG4gICAgICA5MSxcbiAgICAgIDc0LFxuICAgICAgMTYsXG4gICAgICAzOCxcbiAgICAgIDIwMyxcbiAgICAgIDIxMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJZM1g0NUo2TlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODA2OTM2MzM0NzoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMjE2NzkwMzc2NTc5OjJAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiRnJhbmNpc1wiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1A3azlPMENFTU9ycWNBR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwia0VKUFRrUFMxR2p0aVhlQlJSUlFZcmRwR3p6MzRERTlmK1ROT1NwU0VXYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJRNkEwU2h2UU00TGFEMWJNU2FtNE1WYnRtbzViTEJ0eGt5NWlpZTFPUk5WUUtJck1NL1IwdzBIdUQvRU4vUzFtM2t5WU9welJ4SzNvMlE0Wkd3UGdCUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJTakllT29WTFI5WU9jbjRHU2h1ZEl0NEpBcXRUL21UNWlqSCsxWGtTdjdlUjlxb1ZHbVA3T1hhcXVFL1IvWGx5Mm5IcUV1SlFiQWorTUpZbDUrUzlBdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MDY5MzYzMzQ3OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxMDNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQ1NTA3NzgzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBT1FpXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPUWkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIvYUVxWHNqR3NCVXFSTG8vWGxDN0JhRWhoajdhVFR6dndGMzVDRjAvc3NRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjc2NzM3Mzk1MCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzEsMF19LFwidGltZXN0YW1wXCI6XCIxNzQ1NTA3Nzg2NjU5XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-MD",
  ownername:process.env.OWNER_NAME|| "Suhail:Shy<3",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
