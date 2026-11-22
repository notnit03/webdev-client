"use client";
import { useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import * as client from "../courses/client";
import { useAccountContext } from "../account/AccountContext";
import {
  emptyCourse,
  useCoursesStore,
  type Course,
} from "../store/coursesStore";
export default function Dashboard() {
  const courses = useCoursesStore((state) => state.courses);
  const setCourses = useCoursesStore((state) => state.setCourses);
  const addCourse = useCoursesStore((state) => state.addCourse);
  const updateCourse = useCoursesStore((state) => state.updateCourse);
  const deleteCourse = useCoursesStore((state) => state.deleteCourse);
  const [course, setCourse] = useState<Course>(emptyCourse);
  const { currentUser } = useAccountContext();
  useEffect(() => {
    const load = async () => {
      try {
        if (currentUser) {
          setCourses(await client.findMyCourses());
        } else {
          setCourses(await client.fetchAllCourses());
        }
      } catch {
        setCourses([]);
      }
    };
    load();
  }, [currentUser, setCourses]);
  const onAddCourse = async () => {
    const newCourse = await client.createCourse(course);
    addCourse(newCourse);
  };
  const onUpdateCourse = async () => {
    const saved = await client.updateCourse(course);
    updateCourse(saved);
  };
  const onDeleteCourse = async (courseId: string) => {
    await client.deleteCourse(courseId);
    deleteCourse(courseId);
  };
  const input =
    "mb-2 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5";
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title" className="text-3xl">Dashboard</h1>
      <hr className="my-2" />
      <h5 className="mb-2 flex flex-wrap items-center gap-2 text-lg font-semibold">
        New Course
        <button
          type="button"
          className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
          id="wd-add-new-course-click"
          onClick={onAddCourse}
        >
          Add
        </button>
        <button
          type="button"
          className="rounded bg-yellow-400 px-3 py-1.5 text-sm font-medium"
          id="wd-update-course-click"
          onClick={onUpdateCourse}
        >
          Update
        </button>
      </h5>
      <input
        className={input}
        value={course.name}
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
        id="wd-course-name"
      />
      <textarea
        className={input}
        rows={3}
        value={course.description}
        onChange={(e) => setCourse({ ...course, description: e.target.value })}
        id="wd-course-description"
      />
      <input
        className={input}
        value={course.number}
        onChange={(e) => setCourse({ ...course, number: e.target.value })}
        id="wd-course-number"
      />
      <input
        type="date"
        className={`${input} mb-3`}
        value={course.startDate}
        onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
        id="wd-course-start-date"
      />
      <hr className="my-2" />
      <h2 id="wd-dashboard-published" className="text-xl">
        Published Courses ({courses.length})
      </h2>
      <hr className="my-2 mb-4" />
      <div
        id="wd-dashboard-courses"
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
      >
        {courses.map((c) => (
          <CourseCard
            key={c._id}
            course={c}
            onEdit={() => setCourse(c)}
            onDelete={() => onDeleteCourse(c._id)}
          />
        ))}
      </div>
    </div>
  );
}
