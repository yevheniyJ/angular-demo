package org.evgen.ua.dao;

import org.evgen.ua.pojo.Event;
import org.springframework.data.repository.CrudRepository;

public interface EventRepository extends CrudRepository<Event, Long> {
}
