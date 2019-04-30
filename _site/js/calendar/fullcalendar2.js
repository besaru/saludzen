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
              "name": "Qi Gong - Taller práctico",
              "title": "Qi Gong",
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
          },
          {
              "allDay": "false",
              "title": "Taller - Constelaciones Familiares",
              "name":"Taller - Constelaciones Familiares",
              "id": "C0001",
              "end": "2018-01-27 14:00:00",
              "start": "2018-01-27 09:30:00",
              "className": "macrobiotica",
              "url":"../evento/2018/01/27/taller-constelaciones.html"
          },
          {
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
          },
          {
                // a recurring event
                "allDay": "false",
                "title": "Curso de Reflexología Podal Holística",
                "name": "Reflexología Podal Holística",
                "id": "C0007",
                "end": "2018-02-01 20:00:00",
                "start": "2018-02-01 17:30:00",
                "className": "terapias",
                "url":"../evento/2018/02/01/curso-reflexologia-podal.html"
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
                "title": "Qi Gong, los 6 Sonidos Curativos",
                "name": "Qi Gong",
                "id": "C0007",
                "end": "2018-02-27 20:30:00",
                "start": "2018-02-27 19:00:00",
                "className": "terapias",
                "url":"../evento/2018/02/27/taller-quigong.html"

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
                 "url":"../evento/2018/03/17/curso-madera.html"

         },
          {
                   "allDay": "false",
                   "title": "Taller - Constelaciones Familiares",
                   "name":"Taller - Constelaciones Familiares",
                   "id": "C0001",
                   "end": "2018-04-07 20:00:00",
                   "start": "2018-04-07 16:00:00",
                   "className": "macrobiotica",
                   "url":"../evento/2018/04/07/taller-constelaciones.html"
               },
               {
                   "allDay": "false",
                   "title": "Meditación Activa Osho",
                   "name":"Meditación Osho",
                   "id": "C0001",
                   "end": "2018-04-08 17:00:00",
                   "start": "2018-04-08 10:00:00",
                   "className": "terapias",
                   "url":"../evento/2018/04/08/taller-osho.html"
               },
               {
                   "allDay": "false",
                   "title": "Setas Medicinales",
                   "name":"Setas Medicinales",
                   "id": "C0001",
                   "end": "2018-04-21 19:00:00",
                   "start": "2018-04-21 09:00:00",
                   "className": "macrobiotica",
                   "url":"../evento/2018/04/21/curso-setas.html"
               },

               {
                   "allDay": "false",
                   "title": "Primer Seminario de Introducción. Bases de la Nutrición Energética y Cocina Macrobiótica",
                   "name":"Seminario de Introducción",
                   "id": "C0001",
                   "end": "2018-04-22 19:00:00",
                   "start": "2018-04-22 09:00:00",
                   "className": "macrobiotica",
                   "url":"../evento/2018/04/22/curso-introduccion.html"
               },
               {
                   "allDay": "false",
                   "title": "Taller Práctico - Meditación Japonesa",
                   "name":"Meditación Japonesa",
                   "id": "C0001",
                   "end": "2018-03-21 20:30:00",
                   "start": "2018-03-21 19:00:00",
                   "className": "terapias",
                   "url":"../evento/2018/03/21/taller-meditacion-japonesa.html"
               },
               {
                   "allDay": "false",
                   "title": "Zazen - El Arte Japonés de Meditar Sentado",
                   "name":"Zazen",
                   "id": "C0001",
                   "end": "2018-04-18 20:30:00",
                   "start": "2018-04-18 19:00:00",
                   "className": "terapias",
                   "url":"../evento/2018/04/18/taller-zazen.html"
               }
               ,
               {
                   "allDay": "false",
                   "title": "Nutrición Energética y Cocina Macrobiótica para las Mamás y Nuestros Hijos",
                   "name":"Cocina Macrobiótica para la familia",
                   "id": "C0001",
                   "end": "2018-05-06 18:00:00",
                   "start": "2018-05-05 09:00:00",
                   "className": "macrobiotica",
                   "url":"../evento/2018/05/05/curso-cocina-familia.html"
               }
               ,

               {
               "allDay": "false",
               "title": "Qi Gong, la Sonrisa Interior",
               "name": "Qi Gong",
               "id": "C0007",
               "end": "2018-05-16 20:30:00",
               "start": "2018-05-16 19:00:00",
               "className": "terapias",
               "url":"../evento/2018/05/16/taller-quigong.html"

             },
       {
           "allDay": "false",
           "name": "Curso Bioenergética",
           "title": "Curso Bioenergética. La energía de la vida en nuestras manos",
           "id": "C0001",
           "end": "2018-06-03 18:00:00",
           "start": "2018-06-02 09:00:00",
           "className": "terapias",
           "url":"../evento/2018/06/02/curso-Bioenergetica.html"
       },
       {
           "allDay": "false",
           "title": "Nutrición Energética y Cocina Macrobiótica para Verano",
           "name":"Cocina Macrobiótica para Verano",
           "id": "C0001",
           "end": "2018-06-10 18:00:00",
           "start": "2018-06-10 09:00:00",
           "className": "terapias",
           "url":"../evento/2018/06/10/curso-cocina-verano.html"
       },
       {
           "allDay": "false",
           "title": "Taller de Meditación para la Gestión del Dolor",
           "name":"Meditación para la Gestión del Dolor",
           "id": "C0001",
           "end": "2018-05-23 20:30:00",
           "start": "2018-05-23 19:00:00",
           "className": "terapias",
           "url":"../evento/2018/03/21/taller-meditacion-japonesa.html"
       },
       {
           "allDay": "false",
           "name": "Taller - Danza Terapéutica",
           "title": "Taller de Danza Terapéutica, Canto Vivencial y Juego Familiar ",
           "id": "C0001",
           "end": "2018-06-02 13:30:00",
           "start": "2018-06-02 11:00:00",
           "className": "terapias",
           "url":"../evento/2018/06/02/taller-danza.html"
       },
        {
                 "allDay": "false",
                 "title": "Taller - Constelaciones Familiares",
                 "name":"Taller de Constelaciones Familiares",
                 "id": "C0001",
                 "end": "2018-06-03 10:00:00",
                 "start": "2018-06-03 13:30:00",
                 "className": "terapias",
                 "url":"../evento/2018/06/03/taller-constelaciones.html"
             },
             {
                 "allDay": "false",
                 "title": "Taller - Constelaciones Familiares",
                 "name":"Taller - Constelaciones Familiares",
                 "id": "C0001",
                 "end": "2018-06-14 20:00:00",
                 "start": "2018-06-14 17:30:00",
                 "className": "terapias",
                 "url":"../evento/2018/06/14/taller-constelaciones.html"
             },
             {
               "allDay": "false",
               "name": "Qi Gong ",
               "title": "Qi Gong - Taller práctico",
               "id": "C0001",
               "end": "2018-06-20 19:30:00",
             "start": "2018-06-20 18:00:00",
             "className": "terapias",
             "url":"../evento/2018/06/20/taller-quigong.html"
         },
         {
             "allDay": "false",
             "name":"Cocina de Niños para Adultos",
             "title": "Taller de Cocina Energética Saludable. Cocina de Niños para Adultos",
             "id": "C0001",
             "end": "2018-06-30 17:30:00",
             "start": "2018-06-30 10:00:00",
             "className": "macrobiotica",
             "url":"../evento/2018/06/30/curso-cocina-ninos.html"
         }
         ,
         {
             "allDay": "false",
             "title": "Conferencia - Nutrición",
             "name":"Conferencia - Macrobiótica, La Revolución Pacífica",
             "id": "C0001",
             "end": "2018-09-15 13:00:00",
             "start": "2018-09-15 11:00:00",
             "className": "macrobiotica",
             "url":"../evento/2018/09/15/conferencia-nutricion.html"
         },
         {
             "allDay": "false",
             "title": "Practica Zen - Zazen y Kinhin",
             "name":"Practica Zen",
             "id": "C0001",
             "end": "2018-09-19 20:30:00",
             "start": "2018-09-19 19:00:00",
             "className": "terapias",
             "url":"../evento/2018/09/19/taller-zazen.html"
         },
         {
             "allDay": "false",
             "title": "Curso de Introducción. Nutrición Energética, Salud y Cocina Macrobiótica",
             "name":"Curso de Introducción",
             "id": "C0001",
             "end": "2018-09-30 19:00:00",
             "start": "2018-09-30 09:00:00",
             "className": "macrobiotica",
             "url":"../evento/2018/09/30/curso-introduccion.html"
         },
         {
             "allDay": "false",
             "title": "Nutrición Energética y Cocina Macrobiótica para Otoño",
             "name":"Cocina Macrobiótica para Otoño",
             "id": "C0001",
             "end": "2018-10-07 18:00:00",
             "start": "2018-10-07 09:00:00",
             "className": "macrobiotica",
             "url":"../evento/2018/10/07/curso-cocina-otono.html"
         },
         {
             "allDay": "false",
             "name": "Curso Chi Nei Tsang",
             "title": "Curso Chi Nei Tsang - Dia1/3",
             "id": "C0001",
             "end": "2018-10-20 19:00:00",
             "start": "2018-10-20 09:00:00",
             "className": "terapias",
             "url":"../evento/2018/10/20/curso-CHI.html"
         },/*
         {
             "allDay": "false",
             "name": "Curso Chi Nei Tsang",
             "title": "Curso Chi Nei Tsang - Dia2/3",
             "id": "C0001",
             "end": "2018-10-21 14:00:00",
             "start": "2018-10-21 09:00:00",
             "className": "terapias",
             "url":"../evento/2018/10/20/curso-CHI.html"
         },
         {
             "allDay": "false",
             "name": "Curso Chi Nei Tsang",
             "title": "Curso Chi Nei Tsang - Dia3/3",
             "id": "C0001",
             "end": "2018-11-11 14:00:00",
             "start": "2018-11-11 09:00:00",
             "className": "terapias",
             "url":"../evento/2018/10/20/curso-CHI.html"
         },*/
         {
             "allDay": "false",
             "name": "Taller de Cocina Macrobiótica Navideña y Festiva",
             "title": "Cocina Macrobiótica Navideña y Festiva",
             "id": "C0001",
             "end": "2018-12-16 17:00:00",
             "start": "2018-12-16 09:00:00",
             "className": "macrobiotica",
             "url":"../evento/2018/12/16/taller-navidad.html"
         },
         {
             "allDay": "false",
             "name": "Curso Acupuntura",
             "title": "Curso Acupuntura",
             "id": "C0001",
             "end": "2018-10-04 21:00:00",
             "start": "2018-10-04 17:30:00",
             "className": "terapias",
             "url":"../evento/2018/10/04/curso-acupuntura.html"
         },
         {
             "allDay": "false",
             "name": "Curso Auriculoterapia",
             "title": "Curso Auriculoterapia",
             "id": "C0001",
             "end": "2018-09-22 19:00:00",
             "start": "2018-09-22 09:00:00",
             "className": "terapias",
             "url":"../evento/2018/09/22/curso-auriculoterapia.html"
         },
         {
             "allDay": "false",
             "name": "Cocina Macrobiótica para el Sistema Inmune",
             "title": "Cocina Macrobiótica para el Sistema Inmune",
             "id": "C0001",
             "end": "2018-11-17 18:00:00",
             "start": "2018-11-17 09:00:00",
             "className": "macrobiotica",
             "url":"../evento/2018/11/17/curso-cocina-sistema-inmune.html"
         },
         {
             "allDay": "false",
             "name": "Curso de Osteopatia Sacro-Craneal con Integración Miofascial y Visceral",
             "title": "Osteopatia Sacro-Craneal",
             "id": "C0001",
             "end": "2018-11-24 19:00:00",
             "start": "2018-11-24 09:00:00",
             "className": "terapias",
             "url":"../evento/2018/11/24/curso-osteopatia-sacro-craneal.html"
         },
         {
             "allDay": "false",
             "name": "Meditación a través de los Chacras",
             "title": "Meditación a través de los Chacras",
             "id": "C0001",
             "end": "2019-01-23 20:30:00",
             "start": "2019-01-23 19:00:00",
             "className": "qigong",
             "url":"../evento/2019/01/23/taller-meditacion-chacras.html"
         },
         {
             "allDay": "false",
             "name": "Cocina para el Invierno",
             "title": "Nutrición Energética y Cocina Macrobiótica para el Invierno",
             "id": "C0001",
             "end": "2019-01-27 18:00:00",
             "start": "2019-01-27 09:00:00",
             "className": "macrobiotica",
             "url":"../evento/2019/01/27/curso-cocina-invierno.html"
         },
         {
             "allDay": "false",
             "name": "Curso de Introducción",
             "title": "Introducción: Nutrición Energética, Salud y Cocina Macrobiótica",
             "id": "C0001",
             "end": "2019-02-03 19:00:00",
             "start": "2019-02-03 09:00:00",
             "className": "macrobiotica",
             "url":"../evento/2019/02/03/curso-introduccion.html"
         },
         {
             "allDay": "true",
             "name": "Bioenergética Taoista",
             "title": "Bioenergética Taoista: Programa de Desarrollo Personal basado en el Sistema Taoista para transformar el estrés en vitalidad. Bioenergética. Taoísta. Qi-Gong - Tao Curativo",
             "id": "C0001",
             "end": "2019-02-10 14:00:00",
             "start": "2019-02-09 09:00:00",
             "className": "terapias",
             "url":"../evento/2019/02/09/curso-bioenergetica-taoista.html"
         },
         {
             "allDay": "true",
             "name": "Técnica Metamórfica",
             "title": "Técnica Metamórfica",
             "id": "C0001",
             "end": "2019-02-17 14:00:00",
             "start": "2019-02-16 09:00:00",
             "className": "terapias",
             "url":"../evento/2019/02/16/curso-tecnica-metamorfica.html"
         },
         {
             "allDay": "false",
             "name": "Meditación Japonesa",
             "title": "Meditación Japonesa",
             "id": "C0001",
             "end": "2019-02-20 20:30:00",
             "start": "2019-02-20 19:00:00",
             "className": "qigong",
             "url":"../evento/2019/02/20/taller-meditacion-japonesa.html"
         },
         {
             "allDay": "false",
             "name": "Cocina para la Primavera",
             "title": "Nutrición Energética y Cocina Macrobiótica para la Primavera",
             "id": "C0001",
             "end": "2019-03-24 18:00:00",
             "start": "2019-03-24 09:00:00",
             "className": "macrobiotica",
             "url":"../evento/2019/03/24/curso-cocina-primavera.html"
         },
         {
             "allDay": "true",
             "name": "El Orden del Universo",
             "title": "El Orden del Universo. Conocimiento Energético y Medicina Vibracional. Fundamentos de la Medicina Oriental. Ciclo de la Salud. Proceso de Enfermedad.",
             "id": "C0001",
             "end": "2019-04-07 18:00:00",
             "start": "2019-04-06 09:00:00",
             "className": "terapias",
             "url":"../evento/2019/04/06/curso-orden-universo.html"
         },
         {
             "allDay": "false",
             "name": "Desayunos Energéticos Almuerzos & Meriendas Saludables",
             "title": "Desayunos energéticos. Empieza el dia con Vitalidad y Energía. Almuerzos & Meriendas Saludables",
             "id": "C0001",
             "end": "2019-05-12 18:00:00",
             "start": "2019-05-11 09:00:00",
             "className": "macrobiotica",
             "url":"../evento/2019/05/11/curso-desayunos-almuerzos-meriendas.html"
         },

         {
             "allDay": "false",
             "name": "Cooking Training",
             "title": "Cooking Training. 15 platos en 2 horas. Cocina, Rápida y Facil. Cocina Sana para llevar. Formas de ahorrar tiempo en la cocina. Embotados. Cocina Angélica. Preparados para varios dias.",
             "id": "C0001",
             "end": "2019-06-02 17:00:00",
             "start": "2019-06-01 09:00:00",
             "className": "macrobiotica",
             "url":"..evento/2019/06/15/curso-cooking-training.html"
         },
         {
             "allDay": "false",
             "title": "El Arte de Saber Alimentarnos",
             "name":"El Arte de Saber Alimentarnos",
             "id": "C0001",
             "end": "2019-03-08 20:30:00",
             "start": "2019-03-08 19:00:00",
             "className": "macrobiotica",
             "url":"../evento/2019/03/08/conferencia-saber-alimentarnos.html"
         },
         {
             "allDay": "false",
             "title": "Zazen - El Arte Japonés de Meditar Sentada",
             "name":"Zazen",
             "id": "C0001",
             "end": "2019-03-20 20:30:00",
             "start": "2019-03-20 19:00:00",
             "className": "terapias",
             "url":"../evento/2019/03/20/taller-zazen.html"
         },
         {
             "allDay": "false",
             "title": "Conferencias - Menús Energéticos",
             "name":"Conferencia",
             "id": "C0001",
             "end": "2019-05-10 20:00:00",
             "start": "2019-05-10 19:00:00",
             "className": "macrobiotica",
             "url":"../evento/2019/05/10/conferencia-menus-energeticos.html"
         },
         {
             "allDay": "false",
             "title": "Jornada - Bienestar & Salud Natural",
             "name":"Jornada Bienestar",
             "id": "C0001",
             "end": "2019-05-25 14:00:00",
             "start": "2019-05-25 09:00:00",
             "className": "terapias",
             "url":"../evento/2019/05/25/curso-jornada-bienestar.html"
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
