import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Lesson} from '../shared/model/lesson';
import {store} from '../event-bus-experiments/app-data';
import {BehaviorSubject, Observer} from 'rxjs';

@Component({
    selector: 'lessons-counter',
    templateUrl: './lessons-counter.component.html',
    styleUrls: ['./lessons-counter.component.scss']
})
export class LessonsCounterComponent implements Observer<Lesson[]>, OnInit {
    lessonsCounter = new BehaviorSubject(0);

    constructor(private ref: ChangeDetectorRef) {
    }

    ngOnInit(): void {
        store.lessonsList$.subscribe(this);
    }

    error(err: any) {
        console.log(err);
    }

    complete() {
        console.log('Completed');
    }

    next(data: Lesson[]) {
        this.lessonsCounter.next(data.length);
    }
}
