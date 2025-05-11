import { initViewSelect } from "./viewselect.js";
import { initCalender } from "./calender.js";
import { Eventbutton } from "./event-create-button.js";
import { Eventformdialog } from "./event-dialog.js";
//import { initCalendar } from "./month-calender2.js";
import{initnotification} from "./notification.js"
import { initEventStore} from "./event-store.js";
  Eventformdialog();
  initViewSelect();
  initCalender();
  Eventbutton();
  //initCalendar();
  initnotification();
  initEventStore();
  // index.js


document.addEventListener('DOMContentLoaded', function () {
  const columns = document.querySelectorAll('.week-column');
  const bookings = {}; 
  const userColors = ['#A5D8FF', '#FFD6A5', '#FFADAD', '#CAFFBF', '#FDFFB6', '#D0BBFF']; // 6 users

  columns.forEach((column, columnIndex) => {
    const cells = column.querySelectorAll('.cell-item');

    cells.forEach((cell, rowIndex) => {
      cell.dataset.row = rowIndex;
      cell.dataset.col = columnIndex;

      cell.addEventListener('click', function () {
        const userColor = userColors[columnIndex];
        const isBooked = bookings[rowIndex]?.has(columnIndex);

        if (isBooked) {
          cell.style.backgroundColor = '';
          removeBooking(rowIndex, columnIndex);
        } else {
          cell.style.backgroundColor = userColor;
          addBooking(rowIndex, columnIndex, userColor);
        }
        updateIntersections();
      });
    });
  });

  function addBooking(row, col, color) {
    if (!bookings[row]) bookings[row] = new Map();
    bookings[row].set(col, color);
  }

  function removeBooking(row, col) {
    if (bookings[row]) {
      bookings[row].delete(col);
      if (bookings[row].size === 0) delete bookings[row];
    }
  }

  function updateIntersections() {
    // Reset all cells
    document.querySelectorAll('.cell-item').forEach(cell => {
      const row = parseInt(cell.dataset.row);
      const col = parseInt(cell.dataset.col);

      if (bookings[row]?.has(col)) {
        cell.style.backgroundColor = bookings[row].get(col);
      } else {
        cell.style.backgroundColor = '';
      }

      cell.dataset.intersected = 'false';
    });

    // Highlight intersections
    for (const row in bookings) {
      if (bookings[row].size > 1) {
        bookings[row].forEach((_, col) => {
          const cell = document.querySelectorAll('.week-column')[col]
            .querySelectorAll('.cell-item')[row];
          if (cell) {
            cell.style.backgroundColor = '#4169E1'; 
            cell.dataset.intersected = 'true';
          }
        });
      }
    }
  }
});
