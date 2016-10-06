package org.evgen.ua.service;

import com.google.common.collect.Lists;
import lombok.extern.slf4j.Slf4j;
import lombok.val;
import org.evgen.ua.dao.EventRepository;
import org.evgen.ua.pojo.Event;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Slf4j
public class EventServiceImpl implements EventService {

    @Autowired
    private EventRepository eventRepository;

    @Override
    @Transactional(readOnly = true)
    public Event loadEventById(long id) {
        log.debug("Looking for event with id : {}", id);
        val event = eventRepository.findOne(id);
        log.debug("Event found : {}", event);
        return event;
    }

    @Override
    @Transactional
    public void saveEvent(Event event) {
        if (event.getId() == null || event.getId() == 0L) {
            log.debug("Saving new event : {}", event);
        } else {
            log.debug("Updating existing event : {}", event);
        }
        eventRepository.save(event);
    }

    @Override
    @Transactional(readOnly = true)
    public List<Event> getAllEvents() {
        log.debug("Fetching all events");
        return Lists.newArrayList(eventRepository.findAll());
    }

    @Override
    @Transactional
    public void deleteEvent(long id) {
        log.debug("Deleting event with id : {}", id);
        eventRepository.delete(id);
    }
}
