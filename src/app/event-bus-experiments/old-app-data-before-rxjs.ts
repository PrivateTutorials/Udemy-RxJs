/*
import * as _ from 'lodash';
import {Lesson} from '../shared/model/lesson';


// Observer pattern - clear separation of subscriptions from ability to trigger data
export interface Observer {
    next(data: any);
}

export interface Observable {
    subscribe(observer: Observer);

    unsubscribe(observer: Observer);
}

// Subject - is smth like an event bus
interface Subject extends Observer, Observable {
}

class SubjectImplementation implements Subject {
    private observers: Observer[] = [];

    next(data: any) {
        this.observers.forEach(observer => observer.next(data));
    }

    subscribe(obs: Observer) {
        this.observers.push(obs);
    }

    unsubscribe(obs: Observer) {
        _.remove(this.observers, el => el === obs);
    }
}

// Store (Reactive) pattern
class DataStore implements Observable{
    private lessons: Lesson[] = [];

    private lessonsListSubject = new SubjectImplementation(); // contains list of observers

    subscribe(observer: Observer) {
        this.lessonsListSubject.subscribe(observer);
        observer.next(this.lessons);
    }

    unsubscribe(observer: Observer) {
        this.lessonsListSubject.unsubscribe(observer)
    }

    initializeLessonsList(newList: Lesson[]) {
        this.lessons = _.cloneDeep(newList);
        this.broadcast();
    }

    addLesson(newLesson: Lesson) {
        this.lessons.push(_.cloneDeep(newLesson));
        this.broadcast();
    }

    deleteLesson(lessonToDelete: Lesson) {
        _.remove(this.lessons, (lesson) => lesson.id === lessonToDelete.id);
        this.broadcast();
    }

    toggleLessonViewed(toggled: Lesson) {
        const lesson = _.find(this.lessons, (less) => less.id === toggled.id);
        lesson.completed = !lesson.completed;
        this.broadcast();
    }

    broadcast() {
        this.lessonsListSubject.next(_.cloneDeep(this.lessons));
    }
}

export const store = new DataStore();
*/
