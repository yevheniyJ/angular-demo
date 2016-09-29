package org.evgen.ua.service;

import org.evgen.ua.pojo.Event;

import java.util.List;

public interface EventService {

    Event loadEventById(long id);

    void saveEvent(Event event);

    List<Event> getAllEvents();

    void deleteEvent(long id);
}
