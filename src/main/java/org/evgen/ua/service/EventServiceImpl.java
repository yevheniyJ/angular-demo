package org.evgen.ua.service;

import org.evgen.ua.pojo.Event;
import org.evgen.ua.pojo.Location;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class EventServiceImpl implements EventService {

    private List<Event> events = new ArrayList<>();

    {
        Event event = new Event(1L, "Angular Boot Camp", "9/20/2016", "2:33 pm",
                new Location("Google street", "Lviv"), "/img/AngularJS-logo.png",
                "Test description\nNew Line");
        events.add(event);
    }

    @Override
    public Event loadEventById(long id) {
        for (Event event : events) {
            if (event.getId() == id) {
                return event;
            }
        }
        return null;
    }

    @Override
    public void saveEvent(Event event) {
        if (event.getId() == null) {
            event.setId(events.size() + 1L);
        } else {
            Event eventToUpdate = loadEventById(event.getId());
            events.remove(eventToUpdate);
        }
        events.add(event);
    }

    @Override
    public List<Event> getAllEvents() {
        return events;
    }

    @Override
    public void deleteEvent(long id) {
        Event event = loadEventById(id);
        events.remove(event);
    }
}
