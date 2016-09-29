package org.evgen.ua.controller;

import org.evgen.ua.pojo.Event;
import org.evgen.ua.pojo.Wrapper;
import org.evgen.ua.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class EventController {

    @Autowired
    private EventService eventService;

    @RequestMapping(value = "/event/{id}", method = RequestMethod.GET)
    public Event getEventById(@PathVariable long id) {
        return eventService.loadEventById(id);
    }

    @RequestMapping(value = "/event/save", method = RequestMethod.POST)
    public void getEventById(@RequestBody Event event) {
        eventService.saveEvent(event);
    }

    @RequestMapping(value = "/events", method = RequestMethod.GET)
    public List<Event> getAllEvents() {
        return eventService.getAllEvents();
    }

    @RequestMapping(value = "/event/{id}", method = RequestMethod.DELETE)
    public Wrapper<Long> deleteEvent(@PathVariable long id) {
        eventService.deleteEvent(id);
        return new Wrapper<>(id);
    }
}
