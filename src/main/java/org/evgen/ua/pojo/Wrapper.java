package org.evgen.ua.pojo;

public class Wrapper<T> {

    private T content;

    public Wrapper() {
    }

    public Wrapper(T content) {
        this.content = content;
    }

    public T getContent() {
        return content;
    }

    public void setContent(T content) {
        this.content = content;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Wrapper<?> wrapper = (Wrapper<?>) o;

        return content != null ? content.equals(wrapper.content) : wrapper.content == null;

    }

    @Override
    public int hashCode() {
        return content != null ? content.hashCode() : 0;
    }

    @Override
    public String toString() {
        return "Wrapper{" +
                "content=" + content +
                '}';
    }
}
