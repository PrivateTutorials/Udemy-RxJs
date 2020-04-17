import {Injectable} from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {Observable} from 'rxjs';
import {Course} from '../shared/model/course';
import {Lesson} from '../shared/model/lesson';
import {map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class CoursesService {

    constructor(private db: AngularFireDatabase) {
    }

    findAllCourses(): Observable<Course[]> {
        return this.db.list('courses')
            .valueChanges()
            .do(console.log);
    }

    findLatestLessons(): Observable<Lesson[]> {
        return this.db.list('lessons', ref => ref.orderByKey().limitToLast(10))
            .valueChanges()
            .do(console.log);
    }

    findCourseByUrl(courseUrl: string): Observable<Course> {
        return this.db.list('courses', ref => ref.orderByChild('url').equalTo(courseUrl))
            .snapshotChanges()
            .map(snapshots =>
                snapshots.map(snapshot => ({id: snapshot.key, ...snapshot.payload.val()} as Course))[0]
            );
    }

    findLessonsForCourse(courseId: string): Observable<Lesson[]> {
        return this.db.list('lessons', ref => ref.orderByChild('courseId').equalTo(courseId)).valueChanges().do(console.log);
    }
}
