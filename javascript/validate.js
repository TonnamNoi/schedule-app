// Import the formIntoEvent function


export function validateEvent(event) {
  // Ensure startTime and endTime are provided correctly as numbers
  if (event.startTime >= event.endTime) {
    return "Event end time must be after the start time";
  }

  return null; // Validation passes
}