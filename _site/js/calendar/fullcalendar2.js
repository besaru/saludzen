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

     events:[

     {
         "allDay": "false",
         "title": "Primer Seminario de Introducción. Bases de la Nutrición Energética y Cocina Macrobiótica",
         "name":"Seminario de Introducción",
         "id": "C0001",
         "end": "2017-09-16 19:00:00",
         "start": "2017-09-16 09:00:00",
         "className": "macrobiotica",
         "url":"../evento/2017/09/16/curso-iniciacion.html"
     },


         {
             "allDay": "false",
             "title": "Taller de Meditación",
             "name":"Taller",
             "id": "T0001",
             "end": "2017-09-17 13:00:00",
             "start": "2017-09-17 10:00:00",
             "className": "terapias",
             "url":"../evento/2017/09/17/taller-meditacion.html"
         },
         {
             "allDay": "false",
             "title": "Conferencia - Los 4 alimentos más perjudiciales para tu salud",
             "name": "Conferencia - Nutrición",
             "id": "C0001",
             "end": "2017-09-29 20:00:00",
             "start": "2017-09-29 19:00:00",
             "className": "proyecto",
             "url":"../evento/2017/09/29/conferencia-nutricion.html"
         },

        {
          "allDay": "false",
          "title": "Curso de Nutrición Energética, Actividad Física y Deporte",
          "name": "Nutrición Enregética...",
          "id": "C0001",
          "end": "2017-10-08 18:00:00",
          "start": "2017-10-07 10:00:00",
          "className": "macrobiotica",
          "url":"../evento/2017/10/07/curso-deporte.html"
        },



          {
              "allDay": "false",
              "title": "Primer Seminario de Introducción. Bases de la Nutrición Energética y Cocina Macrobiótica",
              "name":"Seminario de Introducción",
              "id": "C0001",
              "end": "2017-10-14 19:00:00",
              "start": "2017-10-14 09:00:00",
              "className": "macrobiotica",
              "url":"../evento/2017/10/14/curso-iniciacion.html"
          },
          {
              "allDay": "false",
              "title": "Curso de Desayunos Energéticos",
              "name": "Desayunos Energéticos",
              "id": "C0001",
              "end": "2017-10-29 18:00:00",
              "start": "2017-10-29 10:00:00",
              "className": "macrobiotica",
              "url":"../evento/2017/10/29/curso-desayunos.html"
          },
          {
              "allDay": "false",
              "name": "Curso Chi Nei Tsang",
              "title": "Curso Chi Nei Tsang",
              "id": "C0001",
              "end": "2017-11-05 13:00:00",
              "start": "2017-11-04 10:00:00",
              "className": "terapias",
              "url":"../evento/2017/11/04/curso-CHI.html"
          },

          {
              "allDay": "false",
              "name": "Curso Elemento Metal",
              "title": "Curso Elemento Metal",
              "id": "C0001",
              "end": "2017-11-12 18:00:00",
              "start": "2017-11-11 09:00:00",
              "className": "macrobiotica",
              "url":"../evento/2017/11/11/curso-Metal.html"
          },

          {
              "allDay": "false",
              "name": "Taller TAO",
              "title": "Taller TAO",
              "id": "C0001",
              "end": "2017-11-18 18:00:00",
              "start": "2017-11-18 09:00:00",
              "className": "terapias",
              "url":"../evento/2017/11/18/taller-TAO.html"
          },

          {
              "allDay": "false",
              "name": "Conferencia Gratuita - Introducción a la Meditación",
              "title": "Introducción a la Meditación",
              "id": "C0001",
              "end": "2017-12-14 19:00:00",
              "start": "2017-12-14 17:30:00",
              "className": "terapias",
              "url":"../evento/2017/12/14/introduccion-meditacion.html"
          },
          {
              "allDay": "false",
              "name": "Taller de Cocina Macrobiótica Navideña y Festiva",
              "title": "Cocina Macrobiótica Navideña y Festiva",
              "id": "C0001",
              "end": "2017-12-17 15:00:00",
              "start": "2017-12-17 10:00:00",
              "className": "macrobiotica",
              "url":"../evento/2017/12/17/taller-navidad.html"
          },
          {
              "allDay": "false",
              "name": "Qui Gong - Taller práctico",
              "title": "Qui Gong",
              "id": "C0001",
              "end": "2017-12-21 19:30:00",
              "start": "2017-12-21 18:00:00",
              "className": "terapias",
              "url":"../evento/2017/12/21/Qui-Gong.html"
          },

          {
              "allDay": "false",
              "title": "Charla - El Arte de Curar con el Agua",
              "name":"Charla - El Arte de Curar con el Agua",
              "id": "C0001",
              "end": "2018-01-19 20:00:00",
              "start": "2018-01-19 19:00:00",
              "className": "macrobiotica",
              "url":"../evento/2018/01/19/charla-agua.html"
          },
          {
              "allDay": "false",
              "title": "Primer Seminario de Introducción. Bases de la Nutrición Energética y Cocina Macrobiótica",
              "name":"Seminario de Introducción",
              "id": "C0001",
              "end": "2018-01-20 19:00:00",
              "start": "2018-01-20 09:00:00",
              "className": "macrobiotica",
              "url":"../evento/2018/01/20/curso-introduccion.html"
          },
          {
              "allDay": "false",
              "name": "Taller de Danza Terapéutica",
              "title": "Taller de Danza Terapéutica",
              "id": "C0001",
              "end": "2018-01-21 20:00:00",
              "start": "2018-01-21 18:00:00",
              "className": "macrobiotica",
              "url":"../evento/2018/01/21/taller-danza.html"
          },
          {
              "allDay": "false",
              "title": "Zazen - El Arte Japonés de Meditar Sentada",
              "name":"Zazen",
              "id": "C0001",
              "end": "2018-01-24 20:30:00",
              "start": "2018-01-24 19:00:00",
              "className": "terapias",
              "url":"../evento/2018/01/24/taller-zazen.html"
          }
          ,{
              "allDay": "false",
              "title": "Taller - Constelaciones Familiares",
              "name":"Taller - Constelaciones Familiares",
              "id": "C0001",
              "end": "2018-01-27 14:00:00",
              "start": "2018-01-27 09:30:00",
              "className": "macrobiotica",
              "url":"../evento/2018/01/27/taller-constelaciones.html"
          }
          ,{
              "allDay": "false",
              "title": "Cocina Tradicional y Energética",
              "name":"Cocina Tradicional y Energética",
              "id": "C0001",
              "end": "2018-01-28 18:00:00",
              "start": "2018-01-28 09:00:00",
              "className": "macrobiotica",
              "url":"../evento/evento/2018/01/28/cocina-tradicional.html"
          },
          {
              "allDay": "false",
              "title": "Primer Seminario de Introducción. Bases de la Nutrición Energética y Cocina Macrobiótica",
              "name":"Seminario de Introducción",
              "id": "C0001",
              "end": "2018-02-09 19:00:00",
              "start": "2018-02-09 09:00:00",
              "className": "macrobiotica",
              "url":"../evento/2018/02/09/curso-introduccion.html"
          },
          {
              "allDay": "false",
              "title": "Las Relaciones",
              "name":"Las Relaciones: familiares, de pareja y con uno mismo",
              "id": "C0001",
              "end": "2018-02-11 18:00:00",
              "start": "2018-02-10 09:00:00",
              "className": "macrobiotica",
              "url":"../evento/2018/02/10/curso-relaciones.html"
          },
          {
              "allDay": "false",
              "title": "Taller de Cosmética Natural Personalizada",
              "name":"Cosmética Natural",
              "id": "C0001",
              "end": "2018-02-17 11:00:00",
              "start": "2018-02-17 14:00:00",
              "className": "macrobiotica",
              "url":"../evento/2018/02/17/taller-cosmetica.html"
          }
          ,
          {
                // a recurring event
                "allDay": "false",
                "title": "Curso de Reflexología Podal Holística",
                "name": "Reflexología Podal Holística",
                "id": "C0007",
                "end": "2018-02-01 20:00:00",
                "start": "2018-02-01 17:30:00",
                "className": "terapias",
                "url":"../evento/2018/02/01/curso-reflexologia-podal.html",
                /*"dow":"[4]",
                "ranges":[{"start":"2018/02/01", "end":"2018/02/27"}]
                "isRecurrring": "true",
                  "ranges": [{
                      "start": "2018/02/01",
                      "end": "2018/02/27",
                    }],*/
                } ,

        {

                "allDay": "false",
                "title": "Qui Gong, los 6 Sonidos Curativos",
                "name": "Qui Gong",
                "id": "C0007",
                "end": "2018-02-27 20:30:00",
                "start": "2018-02-27 19:00:00",
                "className": "terapias",
                "url":"../evento/2018/02/27/taller-quigong.html",

        }, 
        {
            "allDay": "false",
            "title": "Primer Seminario de Introducción. Bases de la Nutrición Energética y Cocina Macrobiótica",
            "name":"Seminario de Introducción",
            "id": "C0001",
            "end": "2018-03-04 19:00:00",
            "start": "2018-03-04 09:00:00",
            "className": "macrobiotica",
            "url":"../evento/2018/03/04/curso-introduccion.html"
        },
                {

                 "allDay": "false",
                 "title": "Medicina Oriental del Elemento Madera",
                 "name": "Curso Elemento Madera",
                 "id": "C0007",
                 "end": "2018-03-18 18:00:00",
                 "start": "2018-03-17 09:00:00",
                 "className": "macrobiotica",
                 "url":"../evento/2018/03/17/curso-madera.html",

                }



     ]
,
/*
      eventClick: function(event) {
              if (event.url) {
                  window.open(event.url);
                  return false;
              }
          }*/
          loading: function(bool) {
     				$('#loading').toggle(bool);
     			}
      });
  });

/*
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

*/
/*
//  $('#calendar').fullCalendar({

//    eventSources: [
//        '../js/calendar/source.json'
//    ],
//  });*/
