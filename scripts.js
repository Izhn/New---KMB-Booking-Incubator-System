// Function to pop up the HTML form

function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

function resetForm() {
  document.getElementById("bookingForm").reset();
}



// Defining variable to store list of events

let ListOfBooking = [];


// Function to retrive information from HTML form 

const form = document.getElementById('bookingForm');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const dateSell = document.getElementById('dateSell').value;
  const timeSell = document.getElementById('timeSell').value;
  const className = document.getElementById('className').value;
  const incubator = document.getElementById('incubator').value;

  console.log(dateSell, timeSell, className, incubator);

  let event = {
    title: className,
    start: dateSell + 'T' + timeSell + ':00',
    end: dateSell + 'T' + timeSell + ':00',
  };

  ListOfBooking.push(event);

  console.log(ListOfBooking);
});




// Creating the calender - Shamir

document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');
  var calendar = new FullCalendar.Calendar(calendarEl, {
    headerToolbar: { // Changed from 'header' to 'headerToolbar'
      left: 'dayGridMonth,timeGridWeek,timeGridDay',
      center: 'title',
      right: 'prev,next today'
    },
    initialView: 'dayGridMonth', 
    events: [
      // test
      {
        title: 'The Title',
        start: '2024-07-05T00:00:00',
        end: '2024-07-05T00:02:00'
      },
      {
        title: 'The Title',
        start: '2024-07-05T00:00:00',
        end: '2024-07-05T01:00:00'
      }
    ],
    
    // slotEventOverlap: false
  });
  calendar.render();
});

var calendar = new Calendar(calendarEl, {
  events: {
    title: className,
    start: dateSell + 'T' + timeSell + ':00',
    end: dateSell + 'T' + timeSell + ':00',
  },
  })