import { HttpException, Injectable } from '@nestjs/common';
import { COURSES } from './courses.mock';

@Injectable()
export class CoursesService {
  courses: any = COURSES;

  getCourses(): Promise<any> {
    return new Promise((resolve, reject) => {
      resolve(this.courses);
    });
  }

  getCourse(CourseId): Promise<any> {
    const id = Number(CourseId);
    return new Promise((resolve, reject) => {
      const course = this.courses.find((c) => c.id === id);
      if (!course) {
        throw new HttpException('Course Not found', 404);
      }
      resolve(course);
    });
  }

  addCourse(course): Promise<any> {
    return new Promise((resolve, reject) => {
      this.courses.push(course);
      resolve(this.courses);
    });
  }

  deleteCourse(courseId: number): Promise<string> {
    const id = Number(courseId);
    return new Promise((resolve, reject) => {
      const index = this.courses.findIndex((course) => course.id === id);
      console.log(index);
      if (index === -1) {
        throw new HttpException('The error', 404);
      }
      this.courses.splice(index, 1);
      resolve(this.courses);
    });
  }
}
