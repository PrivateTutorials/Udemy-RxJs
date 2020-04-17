import {Component, OnInit} from '@angular/core';
import {Lesson} from '../shared/model/lesson';
import {BehaviorSubject, Observer} from 'rxjs';
import {store} from '../event-bus-experiments/app-data';

@Component({
    selector: 'lessons-list',
    templateUrl: './lessons-list.component.html',
    styleUrls: ['./lessons-list.component.scss']
})
export class LessonsListComponent implements Observer<Lesson[]>, OnInit {
    lessons = new BehaviorSubject([]); // or ReplaceSubject if don't have initial value

    ngOnInit(): void {
        store.lessonsList$.subscribe(this);
    }

    next(data: Lesson[]) {
        console.log(data);
        this.lessons.next(data);
    }

    error(err: any){
        console.log(err);
    }

    complete(){
        console.log('Completed');
    }

    select(lesson: Lesson) {
        console.log(lesson);
    }

    toggleLessonViewed(lesson: Lesson) {
        store.toggleLessonViewed(lesson);
    }

    delete(event: MouseEvent, lessonToDelete: Lesson) {
        event.stopPropagation();
        console.log('DELETING LESSON: ' + JSON.stringify(lessonToDelete, null, 2));
        store.deleteLesson(lessonToDelete);
    }
}
