import { Delete, Get, Param, Body, Post, Query } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { CoursesDTO } from './CourseDto';
import { CoursesService } from './courses.service';

@Controller('courses')
export class CoursesController {
  constructor(private courseService: CoursesService) {}

  @Get()
  async getCourses(): Promise<any> {
    return this.courseService.getCourses();
  }

  @Get(':courseId')
  async getCourse(@Param('courseId') courseId: string): Promise<any> {
    const course = this.courseService.getCourse(courseId);
    return course;
  }

  @Post()
  async addCourse(@Body() createCourseDto: CoursesDTO): Promise<any> {
    return this.courseService.addCourse(createCourseDto);
  }

  @Delete()
  async removeCourse(@Query() query) {
    return this.courseService.deleteCourse(query.courseId);
  }
}
