
export function initEventStore() {
  document.addEventListener("event-create", (event) => {
    const createdEvent = event.detail.event; // fixed typo
    const events = getStorage();
    events.push(createdEvent)
    saveEvent(events);
  });
}

function saveEvent(events) {
  const safeToString = events.map((event) => ({
    ...event,
    date: event.date.toISOString()  // fixed arrow function body
  }));
  let stringEvents;
  try{
    stringEvents = JSON.stringify(safeToString);
  } catch(error){
    console.error("Stringdy events failed",error);
  }
 localStorage.setItem("events", stringEvents);
}
function getStorage(){
    const StoreEvent = localStorage.getItem("events");
    if(StoreEvent===null){
        return[];
    }
    let parsedEvents;
    try{
        parsedEvents = JSON.parse(StoreEvent);
    } catch (error){
        console.error("Parse events failed", error);
        return[];
    }
    const events = parsedEvents.map((event)=>({
        ...event,
        date: new Date(event.date)
}));
     return events;
}