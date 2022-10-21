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
             "title": "Conferencia - Menús Energéticos",
             "name":"Conferencia - Menús Energéticos",
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
         },
         {
           "allDay": "false",
           "title": "Curso de Nutrición Energética, Actividad Física y Deporte",
           "name": "Nutrición Enregética...",
           "id": "C0001",
           "end": "2019-11-24 18:00:00",
           "start": "2019-11-23 09:00:00",
           "className": "macrobiotica",
           "url":"../evento/2019/11/23/curso-deporte.html"
         },
         {
             "allDay": "false",
             "title": "Nutrición Energética y Cocina Macrobiótica para las Mamás y Nuestros Hijos",
             "name":"Cocina Macrobiótica para la familia",
             "id": "C0001",
             "end": "2019-10-27 17:00:00",
             "start": "2019-10-26 09:00:00",
             "className": "macrobiotica",
             "url":"../evento/2019/10/26/curso-cocina-familia.html"
         },
         {
             "allDay": "false",
             "name": "Curso Bioenergética",
             "title": "Curso Bioenergética. La energía de la vida en nuestras manos",
             "id": "C0001",
             "end": "2019-10-20 15:00:00",
             "start": "2019-10-19 09:00:00",
             "className": "terapias",
             "url":"../evento/2019/10/19/curso-Bioenergetica.html"
         },
         {
             "allDay": "false",
             "name": "Taller de Cocina Macrobiótica Navideña y Festiva",
             "title": "Cocina Macrobiótica Navideña y Festiva",
             "id": "C0001",
             "end": "2019-12-15 18:00:00",
             "start": "2019-12-15 09:00:00",
             "className": "macrobiotica",
             "url":"../evento/2019/12/15/taller-navidad.html"
         }
         ,{
             "allDay": "false",
             "name": "Curso de Introducción",
             "title": "Introducción: Nutrición Energética, Salud y Cocina Macrobiótica",
             "id": "C0001",
             "end": "2019-09-21 19:00:00",
             "start": "2019-09-21 09:00:00",
             "className": "macrobiotica",
             "url":"../evento/2019/09/21/curso-introduccion.html"
         },

         {
             "allDay": "false",
             "title": "Conferencia-Medicina Integrativa",
             "name":"Conferencia-Medicina Integrativa",
             "id": "C0001",
             "end": "2019-09-13 21:00:00",
             "start": "2019-09-13 19:00:00",
             "className": "proyecto",
             "url":"../evento/2019/09/13/conferencia-medicina-integrativa.html"
         },
         {
             "allDay": "false",
             "name": "Máster Salud Natural",
             "title": "Máster Salud Natural",
             "id": "C0001",
             "end": "2020-01-26 14:00:00",
             "start": "2020-01-25 10:00:00",
             "className": "terapias",
             "url":"../evento/2020/01/24/curso-master-salud-natural.html"
         },
         {
             "allDay": "false",
             "title": "Jornada - Bienestar & Salud Natural",
             "name":"Jornada Bienestar",
             "id": "C0001",
             "end": "2019-10-05 14:00:00",
             "start": "2019-10-05 09:00:00",
             "className": "terapias",
             "url":"../evento/2019/10/05/curso-jornada-bienestar.html"
         },
         {
             "allDay": "false",
             "title": "Nutrición Energética y Cocina Macrobiótica para las Mamás y Nuestros Hijos",
             "name":"Cocina Macrobiótica para la familia",
             "id": "C0001",
             "end": "2020-02-09 17:00:00",
             "start": "2020-02-08 09:00:00",
             "className": "macrobiotica",
             "url":"../evento/2020/02/08/curso-cocina-familia.html"
         },
         {
             "allDay": "false",
             "name": "Curso de Introducción",
             "title": "Introducción: Nutrición Energética, Salud y Cocina Macrobiótica",
             "id": "C0001",
             "end": "2020-02-01 19:00:00",
             "start": "2020-02-01 09:00:00",
             "className": "macrobiotica",
             "url":"../evento/2020/02/01/curso-introduccion.html"
         },
         {
             "allDay": "false",
             "name": "Salud-Enfermedad & Nutrición Holística",
             "title": "Curso de Salud-Enfermedad & Nutrición Holística",
             "id": "C0001",
             "end": "2020-01-26 14:00:00",
             "start": "2020-01-25 10:00:00",
             "className": "terapias",
             "url":"../evento/2020/01/25/curso-salud-enfermedad.html"
         },
         {
             "allDay": "false",
             "name": "Detoxificación Celula ...",
             "title": "Detoxificación Celular, Limpieza Vital",
             "id": "C0001",
             "end": "2020-02-15 18:00:00",
             "start": "2020-02-15 10:00:00",
             "className": "terapias",
             "url":"../evento/2020/02/15/curso-detoxificacion.html"
         },
         {
             "allDay": "false",
             "title": "Conferencia-El Ayuno",
             "name":"Conferencia-El Ayuno, otra forma de nutrirse",
             "id": "C0001",
             "end": "2020-01-17 21:00:00",
             "start": "2020-01-17 19:00:00",
             "className": "proyecto",
             "url":"../evento/2020/01/17/conferencia-el-ayuno.html"
         },
         {
             "allDay": "false",
             "title": "Rejuvenecimiento",
             "name":"10 tips para el Rejuvenecimiento - Longevidad con calidad de vida-",
             "id": "C0001",
             "end": "2020-03-29 14:30:00",
             "start": "2020-03-29 09:30:00",
             "className": "terapias",
             "url":"../evento/2020/03/29/curso-rejuvenecimiento.html"
         },
         {
             "allDay": "false",
             "title": "Nutrición Energética y Suplementación Nutricional",
             "name":"Nutrición Energética y Suplementación Nutricional para la salud del sistema digestivo, dermatologico y respiratorio",
             "id": "C0001",
             "end": "2020-04-25 18:00:00",
             "start": "2020-04-25 09:30:00",
             "className": "macrobiotica",
             "url":"../evento/2020/04/25/curso-nutricion-energetica.html"
         },
         {
             "allDay": "false",
             "title": "Conferencia-Las Vacunas",
             "name":"Conferencia-Las Vacunas",
             "id": "C0001",
             "end": "2020-09-18 21:00:00",
             "start": "2020-09-18 19:00:00",
             "className": "proyecto",
             "url":"../evento/2020/09/18/conferencia-las-vacunas.html"
         },
         {
             "allDay": "false",
             "name": "Curso de Introducción",
             "title": "Introducción: Nutrición Energética, Salud y Cocina Macrobiótica",
             "id": "C0001",
             "end": "2020-10-04 19:00:00",
             "start": "2020-10-04 09:00:00",
             "className": "macrobiotica",
             "url":"../evento/2020/10/04/curso-introduccion.html"
         },
         {
             "allDay": "false",
             "name": "LA SALUD DEL SISTEMA INMUNE",
             "title": "LA SALUD DEL SISTEMA INMUNE. Potencia tus Defensas Naturales",
             "id": "C0001",
             "end": "2020-12-13 19:00:00",
             "start": "2020-12-13 09:00:00",
             "className": "terapias",
             "url":"../evento/2020/12/13/curso-salud-sistema-inmune.html"
         },
         {
             "allDay": "false",
             "name": "Curso de Introducción",
             "title": "Introducción: Nutrición Energética, Salud y Cocina Macrobiótica",
             "id": "C0001",
             "end": "2021-03-14 19:00:00",
             "start": "2021-03-14 09:00:00",
             "className": "macrobiotica",
             "url":"../evento/2021/03/14/curso-introduccion.html"
         },
         {
             "allDay": "false",
             "name": "Conferencia - Potenciar tus defensas naturales",
             "title": "Cómo potenciar tus defensas naturales a través de la Alimentación",
             "id": "C0001",
             "end": "2021-03-26 20:00:00",
             "start": "2021-03-26 19:00:00",
             "className": "macrobiotica",
             "url":"../evento/2021/03/26/conferencia-salud-sistema-inmune.html"
         },
         {
             "allDay": "false",
             "name": "Conferencia - Cómo vencer la Diabetes de Forma Natural",
             "title": "Cómo vencer la Diabetes de Forma Natural",
             "id": "C0001",
             "end": "2021-05-21 20:30:00",
             "start": "2021-05-21 19:00:00",
             "className": "macrobiotica",
             "url":"../evento/2021/05/21/conferencia-vencer-diabetes.html"
         },
         {
             "allDay": "false",
             "name": "Curso de cocina para el Verano",
             "title": "Curso - Nutrición Energética y Cocina Macrobiótica para el Verano",
             "id": "C0001",
             "end": "2021-05-23 17:00:00",
             "start": "2021-05-23 09:00:00",
             "className": "macrobiotica",
             "url":"../evento/2021/05/23/curso-cocina-verano.html"
         }
         ,
         {
             "allDay": "false",
             "name": "Curso de Introducción",
             "title": "Introducción: Nutrición Energética, Salud y Cocina Macrobiótica",
             "id": "C0001",
             "end": "2021-10-23 19:00:00",
             "start": "2021-10-23 09:00:00",
             "className": "macrobiotica",
             "url":"../evento/2021/10/23/curso-introduccion.html"
         }
         ,
         {
             "allDay": "false",
             "title": "Conferencia-El Ayuno",
             "name":"Conferencia-El Ayuno, otra forma de nutrirse",
             "id": "C0001",
             "end": "2021-09-17 20:30:00",
             "start": "2021-09-17 19:00:00",
             "className": "proyecto",
             "url":"../evento/2021/09/17/conferencia-el-ayuno.html"
         }
         ,
         {
             "allDay": "false",
             "title": "Conferencia-Cómo crear la vida de tus sueños",
             "name":"Conferencia-Cómo crear la vida de tus sueños",
             "id": "C0001",
             "end": "2021-10-15 20:30:00",
             "start": "2021-10-15 19:00:00",
             "className": "proyecto",
             "url":"../evento/2021/10/15/conferencia-vida-sueno.html"
         }
         ,
         {
             "allDay": "false",
             "title": "Cocina Macrobiótica para el Otoño",
             "name":"Nutrición Energética y Cocina Macrobiótica para el Otoño",
             "id": "C0001",
             "end": "2021-11-14 17:00:00",
             "start": "2021-11-14 09:00:00",
             "className": "macrobiotica",
             "url":"../evento/2021/11/14/curso-cocina-otono.html"
         },
         {
             "allDay": "false",
             "title": "Conferencia-Menús Energéticos",
             "name":"Conferencia-Menús Energéticos",
             "id": "C0001",
             "end": "2021-11-19 20:30:00",
             "start": "2021-11-19 19:00:00",
             "className": "proyecto",
             "url":"../evento/2021/11/19/conferencia-menu-energetico.html"
         }
         ,
         {
             "allDay": "false",
             "title": "Cocina Macrobiótica Navideña y Festiva",
             "name":"Cocina Macrobiótica Navideña y Festiva",
             "id": "C0001",
             "end": "2021-12-12 17:00:00",
             "start": "2021-12-12 09:00:00",
             "className": "macrobiotica",
             "url":"../evento/2021/12/12/curso-cocina-navidad.html"
         }
         ,
         {
             "allDay": "false",
             "title": "Conferencia-Menús Energéticos",
             "name":"Conferencia-Menús Energéticos",
             "id": "C0001",
             "end": "2022-01-19 13:00:00",
             "start": "2022-01-19 11:30:00",
             "className": "proyecto",
             "url":"../evento/2022/01/19/conferencia-menu-energetico.html"
         },
         {
             "allDay": "false",
             "title": "Cocina Macrobiótica de Invierno",
             "name":"Cocina Macrobiótica de Invierno",
             "id": "C0001",
             "end": "2022-01-30 17:00:00",
             "start": "2022-01-30 09:00:00",
             "className": "macrobiotica",
             "url":"../evento/2022/01/30/curso-cocina-invierno.html"
         },
         {
             "allDay": "false",
             "title": "DESAYUNOS ENERGÉTICOS, ALMUERZOS Y MERIENDAS SALUDABLES",
             "name":"DESAYUNOS ENERGÉTICOS, ALMUERZOS Y MERIENDAS SALUDABLES",
             "id": "C0001",
             "end": "2022-02-26 17:00:00",
             "start": "2022-02-26 10:00:00",
             "className": "macrobiotica",
             "url":"../evento/2022/02/26/curso-desayunos-almuerzos-meriendas.html"
         },
         {
             "allDay": "false",
             "title": "4 estrategias para manterner un sistema inmune eficaz",
             "name":"Sistema Inmune",
             "id": "C0001",
             "end": "2022-02-18 20:00:00",
             "start": "2022-02-18 19:00:00",
             "className": "proyecto",
             "url":"../evento/2022/02/18/conferencia-sistema-inmune.html"
         },
         {
             "allDay": "false",
             "title": "Taller - DESAYUNOS SALUDABLES. Empezar el día con Vitalidad y Energía",
             "name":"Taller - DESAYUNOS SALUDABLES",
             "id": "C0001",
             "end": "2022-03-12 12:00:00",
             "start": "2022-03-12 10:30:00",
             "className": "proyecto",
             "url":"../evento/2022/03/12/taller-desayunos-saludables.html"
         }
         ,
         {
             "allDay": "false",
             "title": "Taller - Cómo eliminar metales pesados de tu organismo",
             "name":"Taller - Cómo eliminar metales pesados de tu organismo",
             "id": "C0001",
             "end": "2022-03-25 20:00:00",
             "start": "2022-03-25 19:00:00",
             "className": "proyecto",
             "url":"../evento/2022/03/25/taller-metales-pesados.html"
         },
         {
             "allDay": "false",
             "name": "Curso de Introducción",
             "title": "Introducción: Nutrición Energética, Salud y Cocina Macrobiótica",
             "id": "C0001",
             "end": "2022-06-12 19:00:00",
             "start": "2022-06-12 09:00:00",
             "className": "macrobiotica",
             "url":"../evento/2022/06/12/curso-introduccion.html"
         } ,
         {
             "allDay": "false",
             "name": "Presentación: Nutrición Energética & Salud Natural",
             "title": "Presentación de la Formación: Nutrición Energética & Salud Natural",
             "id": "C0001",
             "end": "2022-09-08 21:00:00",
             "start": "2022-09-08 20:00:00",
             "className": "macrobiotica",
             "url":"../evento/2022/09/08/curso-presentacion-nutricion-energetica.html"
         } ,
         {
             "allDay": "false",
             "name": "Presentación: Nutrición Energética & Salud Natural",
             "title": "Presentación de la Formación: Nutrición Energética & Salud Natural",
             "id": "C0001",
             "end": "2022-09-09 20:00:00",
             "start": "2022-09-09 19:00:00",
             "className": "macrobiotica",
             "url":"../evento/2022/09/09/curso-presentacion-nutricion-energetica.html"
         } ,
         {
             "allDay": "false",
             "title": "Taller - Cómo eliminar metales pesados de tu organismo",
             "name":"Taller - Cómo eliminar metales pesados de tu organismo",
             "id": "C0001",
             "end": "2022-09-21 12:30:00",
             "start": "2022-09-21 11:00:00",
             "className": "proyecto",
             "url":"../evento/2022/09/21/taller-metales-pesados.html"
         },
         {
             "allDay": "false",
             "name": "Curso de Introducción",
             "title": "Introducción: Nutrición Energética, Salud y Cocina Macrobiótica",
             "id": "C0001",
             "end": "2022-09-25 18:00:00",
             "start": "2022-09-25 09:00:00",
             "className": "macrobiotica",
             "url":"../evento/2022/09/25/curso-introduccion.html"
         } ,
         {
             "allDay": "false",
             "name": "Nutrición Energética & Salud Natural - Seminario1",
             "title": "Nutrición Energética & Salud Natural - Seminario1",
             "id": "C0001",
             "end": "2022-09-25 18:00:00",
             "start": "2022-09-25 09:00:00",
             "className": "macrobiotica",
             "url":"../evento/2022/09/25/curso-nutricion-energetica.html"
         } ,
         {
             "allDay": "false",
             "name": "Nutrición Energética & Salud Natural - Seminario2",
             "title": "Nutrición Energética & Salud Natural - Seminario2",
             "id": "C0001",
             "end": "2022-10-23 18:00:00",
             "start": "2022-10-23 09:00:00",
             "className": "macrobiotica",
             "url":"../evento/2022/09/25/curso-nutricion-energetica.html"
         },
         {
             "allDay": "false",
             "name": "Nutrición Energética & Salud Natural - Seminario3",
             "title": "Nutrición Energética & Salud Natural - Seminario3",
             "id": "C0001",
             "end": "2022-11-20 18:00:00",
             "start": "2022-11-20 09:00:00",
             "className": "macrobiotica",
             "url":"../evento/2022/09/25/curso-nutricion-energetica.html"
         },
         {
             "allDay": "false",
             "name": "Nutrición Energética & Salud Natural - Seminario4",
             "title": "Nutrición Energética & Salud Natural - Seminario4",
             "id": "C0001",
             "end": "2022-12-11 18:00:00",
             "start": "2022-12-11 09:00:00",
             "className": "macrobiotica",
             "url":"../evento/2022/09/25/curso-nutricion-energetica.html"
         }
         ,
         {
             "allDay": "false",
             "name": "Nutrición Energética & Salud Natural - Seminario5",
             "title": "Nutrición Energética & Salud Natural - Seminario5",
             "id": "C0001",
             "end": "2023-01-15 18:00:00",
             "start": "2023-01-15 09:00:00",
             "className": "macrobiotica",
             "url":"../evento/2022/09/25/curso-nutricion-energetica.html"
         },
         {
             "allDay": "false",
             "name": "Nutrición Energética & Salud Natural - Seminario6",
             "title": "Nutrición Energética & Salud Natural - Seminario6",
             "id": "C0001",
             "end": "2023-02-12 18:00:00",
             "start": "2023-02-12 09:00:00",
             "className": "macrobiotica",
             "url":"../evento/2022/09/25/curso-nutricion-energetica.html"
         },
         {
             "allDay": "false",
             "name": "Nutrición Energética & Salud Natural - Seminario7",
             "title": "Nutrición Energética & Salud Natural - Seminario7",
             "id": "C0001",
             "end": "2023-03-05 18:00:00",
             "start": "2023-03-05 09:00:00",
             "className": "macrobiotica",
             "url":"../evento/2022/09/25/curso-nutricion-energetica.html"
         },
         {
             "allDay": "false",
             "name": "Nutrición Energética & Salud Natural - Seminario8",
             "title": "Nutrición Energética & Salud Natural - Seminario8",
             "id": "C0001",
             "end": "2023-04-16 18:00:00",
             "start": "2023-04-16 09:00:00",
             "className": "macrobiotica",
             "url":"../evento/2022/09/25/curso-nutricion-energetica.html"
         },
         {
             "allDay": "false",
             "name": "Nutrición Energética & Salud Natural - Seminario9",
             "title": "Nutrición Energética & Salud Natural - Seminario9",
             "id": "C0001",
             "end": "2023-05-07 18:00:00",
             "start": "2023-05-07 09:00:00",
             "className": "macrobiotica",
             "url":"../evento/2022/09/25/curso-nutricion-energetica.html"
         },
         {
             "allDay": "false",
             "name": "Nutrición Energética & Salud Natural - Seminario10",
             "title": "Nutrición Energética & Salud Natural - Seminario10",
             "id": "C0001",
             "end": "2023-06-04 18:00:00",
             "start": "2023-06-04 09:00:00",
             "className": "macrobiotica",
             "url":"../evento/2022/09/25/curso-nutricion-energetica.html"
         },
         {
             "allDay": "false",
             "title": "Cocina Macrobiótica de Invierno",
             "name":"Cocina Macrobiótica de Invierno",
             "id": "C0001",
             "end": "2022-12-11 18:00:00",
             "start": "2022-12-11 09:00:00",
             "className": "macrobiotica",
             "url":"../evento/2022/12/11/curso-cocina-invierno.html"
         },
         {
             "allDay": "false",
             "title": "Cocina Macrobiótica de Otoño",
             "name":"Cocina Macrobiótica de Otoño",
             "id": "C0001",
             "end": "2022-10-23 18:00:00",
             "start": "2022-10-23 09:00:00",
             "className": "macrobiotica",
             "url":"../evento/2022/10/23/curso-cocina-otono.html"
         },
         {
             "allDay": "false",
             "title": "Fundamentos Medicina Natural  ",
             "name":"Fundamentos de la Medicina Natural & Oriental. Nutrición Holística",
             "id": "C0001",
             "end": "2022-11-20 18:00:00",
             "start": "2022-11-20 09:00:00",
             "className": "macrobiotica",
             "url":"../evento/2022/11/20/curso-fundamentos.html"
         }
         ,
         {
             "allDay": "false",
             "title": "Conferencia: CHI NEI TSANG Masaje de Órganos Internos",
             "name":"Conferencia: CHI NEI TSANG Masaje de Órganos Internos",
             "id": "C0001",
             "end": "2022-10-21 20:00:00",
             "start": "2022-10-21 19:00:00",
             "className": "proyecto",
             "url":"../evento/2022/10/21/conferencia-chi-nei-tsang.html"
         }
         ,
         {
             "allDay": "false",
             "title": "Formación: CHI NEI TSANG Masaje de Órganos Internos",
             "name":"Formación: CHI NEI TSANG Masaje de Órganos Internos",
             "id": "C0001",
             "end": "2022-11-27 19:00:00",
             "start": "2022-11-26 09:00:00",
             "className": "terapias",
             "url":"../evento/2022/11/26/curso-chi-nei-tsang.html"
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
