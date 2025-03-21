import * as _ from 'lodash';
import {Lesson} from '../shared/model/lesson';

// Subj may have many subscribers, Observable - only 1 subscriber

import {Subject, Observable, Observer, BehaviorSubject} from 'rxjs';


class DataStore {
    private lessonsListSubject = new BehaviorSubject([]);

    public lessonsList$: Observable<Lesson[]> = this.lessonsListSubject.asObservable();

    initializeLessonsList(newList: Lesson[]) {
        this.lessonsListSubject.next(_.cloneDeep(newList));
    }

    addLesson(newLesson: Lesson) {
        const lessons = this.cloneLessons();
        lessons.push(_.cloneDeep(newLesson));
        this.lessonsListSubject.next(lessons);
    }

    deleteLesson(lessonToDelete: Lesson) {
        const lessons = this.cloneLessons();
        _.remove(lessons, (lesson) => lesson.id === lessonToDelete.id);
        this.lessonsListSubject.next(lessons);
    }

    toggleLessonViewed(toggled: Lesson) {
        const lessons = this.cloneLessons();
        const lesson = _.find(lessons, (less) => less.id === toggled.id);
        lesson.completed = !lesson.completed;
        this.lessonsListSubject.next(lessons);
    }

    private cloneLessons() {
        return _.cloneDeep(this.lessonsListSubject.getValue());
    }
}

export const store = new DataStore();
