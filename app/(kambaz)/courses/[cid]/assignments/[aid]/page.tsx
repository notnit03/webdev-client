import Link from "next/link";
import * as db from "../../../../database";
export default async function AssignmentEditor({
  params,
}: {
  params: Promise<{ cid: string; aid: string }>;
}) {
  const { cid, aid } = await params;
  const assignment = db.assignments.find((a) => a._id === aid);
  const input = "w-full rounded border border-neutral-300 px-3 py-2";
  const row = "mb-4 flex flex-col gap-2 md:flex-row md:gap-4";
  const label = "md:w-1/3 md:pt-2 md:text-right";
  return (
    <div id="wd-assignments-editor" className="max-w-3xl">
      <label htmlFor="wd-name" className="mb-1 block">Assignment Name</label>
      <input
        id="wd-name"
        defaultValue={assignment?.title ?? ""}
        className={`${input} mb-2`}
      />
      <p className="mb-4 text-sm text-neutral-600">Assignment id: {aid}</p>
      <textarea
        id="wd-description"
        rows={8}
        defaultValue={assignment?.description ?? ""}
        className={`${input} mb-4`}
      />
      <div className={row}>
        <label htmlFor="wd-points" className={label}>Points</label>
        <div className="flex-1">
          <input id="wd-points" defaultValue={assignment?.points ?? 100} className={input} />
        </div>
      </div>
      <div className={row}>
        <label htmlFor="wd-group" className={label}>Assignment Group</label>
        <div className="flex-1">
          <select id="wd-group" defaultValue="ASSIGNMENTS" className={input}>
            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
            <option value="QUIZZES">QUIZZES</option>
            <option value="EXAMS">EXAMS</option>
            <option value="PROJECT">PROJECT</option>
          </select>
        </div>
      </div>
      <div className={row}>
        <label htmlFor="wd-display-grade-as" className={label}>Display Grade as</label>
        <div className="flex-1">
          <select id="wd-display-grade-as" defaultValue="PERCENTAGE" className={input}>
            <option value="PERCENTAGE">Percentage</option>
            <option value="POINTS">Points</option>
          </select>
        </div>
      </div>
      <div className={row}>
        <label htmlFor="wd-submission-type" className={label}>Submission Type</label>
        <div className="flex-1 rounded border border-neutral-300 p-3">
          <select id="wd-submission-type" defaultValue="ONLINE" className={`${input} mb-3`}>
            <option value="ONLINE">Online</option>
            <option value="ONPAPER">On Paper</option>
          </select>
          <div className="mb-2 font-semibold">Online Entry Options</div>
          <div className="mb-2 flex items-center gap-2">
            <input type="checkbox" id="wd-text-entry" />
            <label htmlFor="wd-text-entry">Text Entry</label>
          </div>
          <div className="mb-2 flex items-center gap-2">
            <input type="checkbox" id="wd-website-url" />
            <label htmlFor="wd-website-url">Website URL</label>
          </div>
          <div className="mb-2 flex items-center gap-2">
            <input type="checkbox" id="wd-media-recordings" />
            <label htmlFor="wd-media-recordings">Media Recordings</label>
          </div>
          <div className="mb-2 flex items-center gap-2">
            <input type="checkbox" id="wd-student-annotation" />
            <label htmlFor="wd-student-annotation">Student Annotation</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="wd-file-upload" />
            <label htmlFor="wd-file-upload">File Uploads</label>
          </div>
        </div>
      </div>
      <div className={row}>
        <span className={label}>Assign</span>
        <div className="flex-1 rounded border border-neutral-300 p-3">
          <label htmlFor="wd-assign-to" className="mb-1 block font-semibold">Assign to</label>
          <input id="wd-assign-to" defaultValue="Everyone" className={`${input} mb-3`} />
          <label htmlFor="wd-due-date" className="mb-1 block font-semibold">Due</label>
          <input type="date" id="wd-due-date" defaultValue={assignment?.due} className={`${input} mb-3`} />
          <div className="flex gap-3">
            <div className="flex-1">
              <label htmlFor="wd-available-from" className="mb-1 block font-semibold">Available from</label>
              <input type="date" id="wd-available-from" defaultValue={assignment?.available} className={input} />
            </div>
            <div className="flex-1">
              <label htmlFor="wd-available-until" className="mb-1 block font-semibold">Until</label>
              <input type="date" id="wd-available-until" defaultValue={assignment?.due} className={input} />
            </div>
          </div>
        </div>
      </div>
      <div className={row}>
        <label htmlFor="wd-ai-editor-notes" className={label}>Sample notes</label>
        <div className="flex-1">
          <textarea id="wd-ai-editor-notes" rows={3} className={input} />
        </div>
      </div>
      <hr className="my-4" />
      <div className="flex justify-end gap-2">
        <Link
          href={`/courses/${cid}/assignments`}
          id="wd-cancel"
          className="rounded border border-neutral-300 bg-neutral-100 px-4 py-2 text-neutral-900 no-underline"
        >
          Cancel
        </Link>
        <Link
          href={`/courses/${cid}/assignments`}
          id="wd-save"
          className="rounded bg-red-600 px-4 py-2 text-white no-underline"
        >
          Save
        </Link>
      </div>
    </div>
  );
}
