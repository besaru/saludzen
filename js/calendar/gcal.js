/*!
 * FullCalendar2 header fulcalendar.html

 */
 $(document).ready(function() {
     $('#calendar').fullCalendar({
         googleCalendarApiKey: '312137144459-71c9ttfjlpqftgd1t7pme4nkdfllcba0.apps.googleusercontent.com',
         events: {
             googleCalendarId: 'ggm4elj55rqd72jiveg21vrk9o@group.calendar.google.com'
         }
         className: 'gcal-event'
     });
 });
