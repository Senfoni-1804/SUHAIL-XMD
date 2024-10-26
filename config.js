const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || ""  SUHAIL_21_07_10_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDk0LFxuICAgICAgICA2NyxcbiAgICAgICAgOTYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNDksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjExLFxuICAgICAgICAxOTgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNyxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIsXG4gICAgICAgIDczLFxuICAgICAgICAyMTAsXG4gICAgICAgIDM4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTk3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDQxLFxuICAgICAgICAxNzksXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MixcbiAgICAgICAgOTksXG4gICAgICAgIDEzNSxcbiAgICAgICAgODQsXG4gICAgICAgIDYwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDc1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDYsXG4gICAgICAgIDkwLFxuICAgICAgICAxODQsXG4gICAgICAgIDgyLFxuICAgICAgICAxODUsXG4gICAgICAgIDcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDI4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDkwLFxuICAgICAgICAxNSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDExLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTE4LFxuICAgICAgICA4MCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNzksXG4gICAgICAgIDY1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjQsXG4gICAgICAgIDcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMixcbiAgICAgICAgMjMwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIwNixcbiAgICAgICAgODMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNTMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjI2LFxuICAgICAgICAzNSxcbiAgICAgICAgMTcxLFxuICAgICAgICA5NCxcbiAgICAgICAgODIsXG4gICAgICAgIDUxLFxuICAgICAgICAyNDksXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQzLFxuICAgICAgICAyMyxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNjksXG4gICAgICAgIDgsXG4gICAgICAgIDM2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTExLFxuICAgICAgICAyNixcbiAgICAgICAgMSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgOTcsXG4gICAgICAgIDIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTYzLFxuICAgICAgICA2MCxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMjM4LFxuICAgICAgICAzMixcbiAgICAgICAgMzEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgOTEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNDYsXG4gICAgICAgIDExNSxcbiAgICAgICAgOTIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTg2LFxuICAgICAgICAyNDksXG4gICAgICAgIDAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTY4LFxuICAgICAgICA2NSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjIsXG4gICAgICAgIDAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEzLFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE4LFxuICAgICAgICAyMyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNDQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMzgsXG4gICAgICAgIDY3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDg4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNDMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgODAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjAyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTYwLFxuICAgICAgICA5MCxcbiAgICAgICAgNDgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTE1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA5MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMCxcbiAgICAgICAgMjgsXG4gICAgICAgIDI2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDI5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDQ5LFxuICAgICAgICAxLFxuICAgICAgICA3MCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDExMCxcbiAgICAgICAgNTUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgODIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjE1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNjIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTE5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDg1LFxuICAgICAgICAxMDksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTM1LFxuICAgICAgICA0OSxcbiAgICAgICAgODcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNzUsXG4gICAgICAgIDc2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgODgsXG4gICAgICAgIDEyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAzOCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTMwLFxuICAgICAgICAwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjUyLFxuICAgICAgICA1MixcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTcxLFxuICBcImFkdlNlY3JldEtleVwiOiBcImMxSEdsTVBoZHpDaUdMSHhqeDAwSGJOYnFjMWxFaUtrU2hicGo0OWZadWs9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkVKRF96dVNaUm51N2FaYzQtdzhKaWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNGQxYzI4YzItN2FjOS00M2JjLWJjYjctMWEyZjY3Y2NkOGJjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQyLFxuICAgICAgMTYzLFxuICAgICAgMTQwLFxuICAgICAgMjI0LFxuICAgICAgOTMsXG4gICAgICA4MSxcbiAgICAgIDEyOSxcbiAgICAgIDI0MCxcbiAgICAgIDc1LFxuICAgICAgMzksXG4gICAgICA2MyxcbiAgICAgIDE2NixcbiAgICAgIDU2LFxuICAgICAgNixcbiAgICAgIDEwNixcbiAgICAgIDEwOSxcbiAgICAgIDE4MCxcbiAgICAgIDEwNixcbiAgICAgIDI1MyxcbiAgICAgIDE3MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjMsXG4gICAgICAyMDYsXG4gICAgICAxODMsXG4gICAgICAyMjUsXG4gICAgICAxMTgsXG4gICAgICA0MixcbiAgICAgIDE5NSxcbiAgICAgIDEyNSxcbiAgICAgIDYzLFxuICAgICAgNjgsXG4gICAgICAxMjgsXG4gICAgICAxNzksXG4gICAgICA0NSxcbiAgICAgIDE2NyxcbiAgICAgIDEzMCxcbiAgICAgIDkxLFxuICAgICAgMjM2LFxuICAgICAgMTUxLFxuICAgICAgMTgsXG4gICAgICAxMTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiOEVCSjg1TkVcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjUwOTMxMTE1Mjg0OjM4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNDQ2MTE5MzQ3NDg3Mzg6MzhAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTlN6MTdNSEVQcXo5YmdHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJvWStiZ25ZdlhnK1NRN1VDYnB3WG8zbnFXbTVTSWloaUJQcnRBVWlvWjJFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImhzNFdKdlZGaFVNREoyWTQ4bExBVXAwa3ZiNkVXYjY2MVRwRzBGeWljNG5nRE54Qnp1UHdSaUxOQTBiZDhmTndlWkpyczU3VGpLOGY5MnhhYlEyYUJBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIldsaGVnRFV0THdZODduVkhZcGRPdi9BelNISW8xL2VvVUV4M2NxK0ZHVGo0TjNISFc0OUNmUVgvSGh2V0Z4bTFlUDZWQUZiaWxyd0x2YVRzNnJtaURBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjUwOTMxMTE1Mjg0OjM4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA5N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI5OTc2ODMwXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ==


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "•",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
