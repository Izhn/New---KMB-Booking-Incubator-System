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

// Function to retrive information from HTML form 

const bookedSlots = [];

document.getElementById('bookingForm').addEventListener('submit', (e) => {
  e.preventDefault();

  const date = document.getElementById('date');
  const time = document.getElementById('time');

  bookedSlots.push({date, time})

console.log(bookedSlots);
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