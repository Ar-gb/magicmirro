/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: [], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "fr",
	timeFormat: 24,
	units: "metric",

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"},
		{
			module: "clock",
			position: "top_center",
            config: {
		displayType: "analog", // options: digital, analog, both

		showPeriod: true,
		showPeriodUpper: false,
		clockBold: false,
		showDate: false,
			showWeek: false,
			dateFormat: "dddd, LL"
			},
	
		},
		{
			module: "compliments",
			position: "middle_center"
		},
{
    module: "MMM-AssistantMk2",
    position: "top_right",
    config: {
      record: {
        recordProgram : "arecord",  
        device        : "plughw:1",
      },

      notifications: {
        ASSISTANT_ACTIVATED: "HOTWORD_PAUSE",
        ASSISTANT_DEACTIVATED: "HOTWORD_RESUME",
      },
    }
  },
		{
			module: "currentweather",
			position: "top_right",
			config: {
				location: "New York",
				locationID: "6077246",  //ID from http://bulk.openweathermap.org/sample/; unzip the gz file and find your city
				appid: "b3bae0fcab3a1545c55e5ecae7c1e8cc"
			}
		},
		{
			module: "weatherforecast",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				location: "New York",
				locationID: "6077246",  //ID from http://www.openweathermap.org/help/city_list.txt
				appid: "b3bae0fcab3a1545c55e5ecae7c1e8cc"
			}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true
			}
		},
		{
    module: 'MMM-GoogleFit',
    position: 'bottom_left',
    config: {
        // If desired
    }
},
{
  module: "MMM-NowPlayingOnSpotify",
  position: "bottom_right",

  config: {
    clientID: "464353fdfa8f46f8849fd0df200e1ed0",
    clientSecret: "01a7c375637a4b7c8e3a05818c8c6085",
    accessToken: "BQDM6yBG3VkgCQKdChJ6OetQ4f_D3Y3DC04mdUzuHpPTTazawLW-UtVkg8dUFhFFN2yUMXwhfFD-H560Tsac4y7L1eU7enfkD4wt1SCEC2XOo6ivftOVSzIQAJ89c2PV4Xs5vQNwF7oIoOxMkeX8hGf3qA",
    refreshToken: "AQC2Sup3tmLT9lfeYw3D2h5AGJDrOOu_6_8dl28R9PYazIC0Pl7IUmYtFMUf0bgeFoPuuvCpbh6skkhdKcI_bwc10_C811LuAFrh1vErbjNB9mRVTXOVRGhZgLpn_7uvBFc"
  }
},

  {
    module: "MMM-Hotword",
    config: {
      record: {
        recordProgram : "arecord",  
        device        : "plughw:0",
      },
      autostart:true,
      onDetected: {
        notification: function (payload) {
          return "ASSISTANT_ACTIVATE"
        },
        payload: function (payload){
          return {
            profile: payload.hotword
          }
        }
      },
    },
  },

{
    module: 'MMM-portscan',
    header: 'Serveurs',
    position: 'top_left',
    
    config: {
      updateInterval: 60,      // in seconds
      textalign: 'left',      // left, right, center
      color_open: '#F0F0F0',   // hex value or empty
      color_closed: '#0b0b0b', // hex value or empty

      hosts: [
        {
          hostname: 'ar-nas-server.duckdns.org',
          ports: [
            {port: 443, displayedName: 'Ar-Nas'},
          ],},{
	hostname: 'proto-nas.duckdns.org',
          ports: [
            {port: 443, displayedName: 'Proto-Nas'},
          ],
        },
               
    ]
    }
 },

	{
		module: 'MMM-PushBulletNotifications',
		header: 'Notifications',
		position: 'top_left',	// This can be any of the regions.		
		config: {
			// See 'Configuration options' for more information.
			accessToken: "o.kVAKyd8ZHWoAd9ttO4Q6TTopgMPbjhQ2", //PushBullet API Access Token
			numberOfNotifications: 3,
			filterTargetDeviceName: "",
			showPushesSentToAllDevices: true,
			onlyAllowCommandsFromSourceDevices: [],
			fetchLimitPushBullet: 50,
			showPushes: true,
			showPushesOnLoad: true,
			showDismissedPushes: true,
			showMirroredNotifications: true, 
			onlyShowLastNotificationFromApplication: false,
			showIndividualNotifications: false,
			showSMS: true,
			showMessage: true,
			showIcons: true,
			showDateTime: true,
			localesDateTime: 'fr-FR',
			playSoundOnNotificationReceived: true,
			soundFile: 'modules/MMM-PushBulletNotifications/sounds/new-message.mp3',			
			maxMsgCharacters: 50,
			maxHeaderCharacters: 32,
			showModuleIfNoNotifications: true,
			noNotificationsMessage: "No new notifications",
			debugMode: false,
		}
	},


    {
      //disabled:true,
      module: 'MMM-CalendarExt',
      position: "top_center",
      config: {
        system: {
          show: ["daily"],
          locale: 'fr',
          redrawInterval:60000,
        },
        views: {
          daily: {
            position:'bottom_bar',
            counts:7,
          },
          
        },
        defaultCalendar: {
          maxEntries:50,
          maxDays:180,
          interval: 1000*60*5,
        },
        calendars :[
          {
            name: "Cours",
            symbol: "calendar-o",
            styleName: "style1",
            url: "https://calendar.google.com/calendar/ical/bergmann.baptiste%40gmail.com/private-f581a537e096456e889cf24185bd5f0f/basic.ics"
          },
	  {
	    name: "Jours ferie",
            symbol: "calendar-o",
            styleName: "style2",
            url: "https://calendar.google.com/calendar/ical/fr.french%23holiday%40group.v.calendar.google.com/public/basic.ics"
          },
{
	    name: "Anniversaires",
            symbol: "calendar-o",
            styleName: "style2",
            url: "https://calendar.google.com/calendar/ical/85ahk6pht87ng4ajrn1r1rvg7s%40group.calendar.google.com/private-47f5fc8cb5e72f3ea412e6075fb8a578/basic.ics"
          },
	  {
	    name: "Poshow",
            symbol: "calendar-o",
            styleName: "style2",
            url: "https://calendar.google.com/calendar/embed?src=um6e9jhgdvsatshro43loavvfs%40group.calendar.google.com&ctz=America%2FToronto"
          },
        ],
      }
    },

	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
