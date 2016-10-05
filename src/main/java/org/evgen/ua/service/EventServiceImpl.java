package org.evgen.ua.service;

import lombok.extern.slf4j.Slf4j;
import lombok.val;
import org.evgen.ua.pojo.Event;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@Slf4j
public class EventServiceImpl implements EventService {

    private List<Event> events = new ArrayList<>();

    {
        val event = new Event(1L, "Angular Boot Camp", "9/20/2016", "2:33 pm", "Google street", "Lviv", "/img/AngularJS-logo.png", "Test description\nNew Line");
        events.add(event);
    }

    @Override
    public Event loadEventById(long id) {
        log.debug("Looking for event with id : {}", id);
        for (val event : events) {
            if (event.getId() == id) {
                log.debug("Event successfully found with id : {}", id);
                return event;
            }
        }
        log.debug("Event not found with id : {}", id);
        return null;
    }

    @Override
    public void saveEvent(Event event) {
        if (event.getId() == null) {
            event.setId(events.size() + 1L);
            log.debug("Saving new event : {}", event);
        } else {
            val eventToUpdate = loadEventById(event.getId());
            events.remove(eventToUpdate);
            log.debug("Updating existing event : {}", event);
        }
        events.add(event);
    }

    @Override
    public List<Event> getAllEvents() {
        log.debug("Fetching all events");
        return events;
    }

    @Override
    public void deleteEvent(long id) {
        val event = loadEventById(id);
        log.debug("Deleting event : {}", event);
        events.remove(event);
    }
}
