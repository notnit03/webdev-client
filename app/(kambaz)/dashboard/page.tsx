import CourseCard from "./CourseCard";
import * as db from "../database";
export default function Dashboard() {
  const courses = db.courses;
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title" className="text-3xl">Dashboard</h1>
      <hr className="my-2" />
      <h2 id="wd-dashboard-published" className="text-xl">
        Published Courses ({courses.length})
      </h2>
      <hr className="my-2 mb-4" />
      <div
        id="wd-dashboard-courses"
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
      >
        {courses.map((course) => (
          <CourseCard key={course._id} {...course} />
        ))}
      </div>
    </div>
  );
}
