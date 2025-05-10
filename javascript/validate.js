export function validateEvent(event) {
    if (!event.title || event.title.trim() === '') {
        throw new Error('Event title is required');
    }
    if (!event.date || isNaN(new Date(event.date).getTime())) {
        throw new Error('Valid date is required');
    }
    if (!event.color) {
        throw new Error('Color selection is required');
    }
    return true; 
}