"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "../../kambaz.css";
export default function CourseNavigation({ cid }: { cid: string }) {
  const pathname = usePathname() ?? "";
  const links = [
    { label: "Home", path: "home", id: "wd-course-home-link" },
    { label: "Modules", path: "modules", id: "wd-course-modules-link" },
    { label: "Piazza", path: "piazza", id: "wd-course-piazza-link" },
    { label: "Zoom", path: "zoom", id: "wd-course-zoom-link" },
    { label: "Assignments", path: "assignments", id: "wd-course-assignments-link" },
    { label: "Quizzes", path: "quizzes", id: "wd-course-quizzes-link" },
    { label: "Grades", path: "grades", id: "wd-course-grades-link" },
    { label: "People", path: "people/table", id: "wd-course-people-link" },
  ];
  return (
    <div id="wd-courses-navigation" className="wd list-group rounded-none text-lg">
      {links.map((link) => {
        const href = `/courses/${cid}/${link.path}`;
        const active = pathname === href || pathname.startsWith(href + "/");
        return (
          <Link
            key={link.id}
            href={href}
            id={link.id}
            className={
              active
                ? "list-group-item active border-0"
                : "list-group-item border-0 text-red-600"
            }
          >
            {link.label}
          </Link>
        );
      })}
      <Link
        href={`/courses/${cid}/home`}
        id="wd-course-ai-link"
        className="list-group-item border-0 text-red-600"
      >
        Sample
      </Link>
    </div>
  );
}
