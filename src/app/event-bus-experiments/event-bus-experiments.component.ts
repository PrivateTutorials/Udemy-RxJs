import {Component, OnInit} from '@angular/core';
import {testLessons} from '../shared/test-data/lessons';
import {store} from './app-data';

@Component({
    selector: 'event-bus-experiments',
    templateUrl: './event-bus-experiments.component.html',
    styleUrls: ['./event-bus-experiments.component.scss']
})
export class EventBusExperimentsComponent implements OnInit {

    ngOnInit(): void {
        store.initializeLessonsList([...testLessons]);

        setTimeout(() => {
            const newLesson = {
                id: Math.random(),
                description: 'Lesson that has came from BE server'
            };

            store.addLesson(newLesson);
        }, 2000);
    }

    addLesson(lessonText: string) {
        if (lessonText) {
            const newLesson = {
                id: Math.random(),
                description: lessonText
            };

            store.addLesson(newLesson);
        }
    }
}
