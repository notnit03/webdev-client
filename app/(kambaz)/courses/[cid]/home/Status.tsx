import type { ReactNode } from "react";
import {
  FaCheckCircle,
  FaHome,
  FaStream,
  FaBullhorn,
  FaChartBar,
  FaBell,
  FaRegLightbulb,
} from "react-icons/fa";
import { MdDoNotDisturbAlt } from "react-icons/md";
import { BiImport } from "react-icons/bi";
import { LiaFileImportSolid } from "react-icons/lia";

function StatusButton({
  id,
  icon,
  label,
}: {
  id?: string;
  icon: ReactNode;
  label: string;
}) {
  return (
    <button
      id={id}
      type="button"
      className="mb-1 flex w-full items-center gap-2 rounded border border-neutral-300 bg-neutral-100 px-3 py-2 text-left text-sm"
    >
      {icon} {label}
    </button>
  );
}

export default function CourseStatus() {
  return (
    <div id="wd-course-status">
      <h2 className="mb-3 text-xl font-semibold">Course Status</h2>
      <div className="mb-1 flex gap-1">
        <button
          type="button"
          className="inline-flex min-w-0 flex-1 items-center justify-center rounded border border-neutral-300 bg-white px-1.5 py-1.5 text-xs"
        >
          <MdDoNotDisturbAlt className="me-1 shrink-0 text-base" /> Unpublish
        </button>
        <button
          type="button"
          className="inline-flex min-w-0 flex-1 items-center justify-center rounded bg-green-600 px-1.5 py-1.5 text-xs text-white hover:bg-green-700"
        >
          <FaCheckCircle className="me-1 shrink-0 text-base" /> Publish
        </button>
      </div>
      <StatusButton icon={<BiImport />} label="Import Existing Content" />
      <StatusButton icon={<LiaFileImportSolid />} label="Import from Commons" />
      <StatusButton icon={<FaHome />} label="Choose Home Page" />
      <StatusButton icon={<FaStream />} label="View Course Stream" />
      <StatusButton icon={<FaBullhorn />} label="New Announcement" />
      <StatusButton icon={<FaChartBar />} label="New Analytics" />
      <StatusButton icon={<FaBell />} label="View Course Notifications" />
      <StatusButton id="wd-ai-status" icon={<FaRegLightbulb />} label="Sample action" />
    </div>
  );
}
