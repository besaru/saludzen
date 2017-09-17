/*!
 * FullCalendar2 header gcal.html

 */


 	$(document).ready(function() {

 		$('#calendar').fullCalendar({

 		/*	header: {
 				left: 'prev,next today',
 				center: 'title',
 				right: 'month,agendaWeek,agendaDay,listYear'
 			},*/
      header: {
      left: 'title',
      center: 'agendaDay,agendaWeek,month',
      right: 'prev,next today'
    },

      locale: 'es',
      firstDay: 1,
      timeFormat: 'H(:mm)',
      businessHours: true,
      fixedWeekCount: false,
      showNonCurrentDates: true,
      eventLimit: true,
      displayEventTime:true,
 			//displayEventTime: false, // don't show the time column in list view

 			// THIS KEY WON'T WORK IN PRODUCTION!!!
 			// To make your own Google API key, follow the directions here:
 			// http://fullcalendar.io/docs/google_calendar/
 		 googleCalendarApiKey:'AIzaSyAAMhWuXaPjEI8YafyvRze8uPUQEXJ0elc',

 			// US Holidays
 		eventSources: [ {
            googleCalendarId:'ggm4elj55rqd72jiveg21vrk9o@group.calendar.google.com',
            className: 'proyecto'
          },
          {
            googleCalendarId:'n6uqmliu0no52mjea6qn4cnehs@group.calendar.google.com',
            className: 'terapias'
          },
          {
          googleCalendarId:'fnjqbdufufr0ek0on5go20as3c@group.calendar.google.com',
          className: 'macrobiotica'
        },
        {
        googleCalendarId:'nn88r760s9rncnho1j4dt1ua08@group.calendar.google.com',
        className: 'biodanza'
      }


             ],

    //  'en.usa#holiday@group.v.calendar.google.com',
      //ggm4elj55rqd72jiveg21vrk9o@group.calendar.google.com
 			eventClick: function(event) {
 				// opens events in a popup window
 				window.open(event.url, 'gcalevent', 'width=700,height=600');
 				return false;
 			},

 			loading: function(bool) {
 				$('#loading').toggle(bool);
 			}

 		});

 	});


//  $('#calendar').fullCalendar({

//    eventSources: [
//        '../js/calendar/source.json'
//    ],
//  });-->
