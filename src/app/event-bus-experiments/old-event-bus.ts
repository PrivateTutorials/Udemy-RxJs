/*
import * as _ from 'lodash';

export const LESSONS_LIST_AVAILABLE = 'NEW_LIST_AVAILABLE';
export const ADD_NEW_LESSON = 'ADD_NEW_LESSON';

export interface Observer {
    notify(data: any);
}

interface Subject {
    registerObserver(eventType: string, obs: Observer);

    unregisterObserver(eventType: string, obs: Observer);

    notifyObservers(eventType: string, data: any);
}

class EventBus implements Subject {
    private observers: { [key: string]: Observer[] } = {};

    notifyObservers(eventType: string, data: any) {
        this.observersPerEventType(eventType)
            .forEach((observer) => observer.notify(data));
    }

    registerObserver(eventType: string, obs: Observer) {
        this.observersPerEventType(eventType).push(obs);
    }

    unregisterObserver(eventType: string, obs: Observer) {
        _.remove(this.observersPerEventType(eventType), (el) => el === obs);
    }

    private observersPerEventType(eventType: string): Observer[] {
        const observersPerType = this.observers[eventType];
        if (!observersPerType) {
            this.observers[eventType] = [];
        }
        return this.observers[eventType];
    }
}

export const globalEventBus = new EventBus();
*/
