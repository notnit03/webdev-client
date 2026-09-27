import AssignmentItem from "./AssignmentItem";
export default async function Assignments({
  params,
}: {
  params: Promise<{ cid: string }>;
}) {
  const { cid } = await params;
  return (
    <div id="wd-assignments">
      <input id="wd-search-assignment" placeholder="Search for Assignments" />
      <button id="wd-add-assignment-group">+ Group</button>
      <button id="wd-add-assignment">+ Assignment</button>
      <h3 id="wd-assignments-title">
        ASSIGNMENTS 40% of Total <button>+</button>
      </h3>
      <ul id="wd-assignment-list">
        <AssignmentItem
          cid={cid}
          aid="123"
          title="A1 - ENV + HTML"
          details="Multiple Modules | Not available until Sep 20 at 12:00am | Due Sep 27 at 11:59pm | 125 pts"
        />
        <AssignmentItem
          cid={cid}
          aid="124"
          title="A2 - CSS + TAILWIND"
          details="Multiple Modules | Not available until Sep 27 at 12:00am | Due Oct 4 at 11:59pm | 125 pts"
        />
        <AssignmentItem
          cid={cid}
          aid="125"
          title="A3 - JAVASCRIPT + REACT"
          details="Multiple Modules | Not available until Oct 4 at 12:00am | Due Oct 11 at 11:59pm | 125 pts"
        />
      </ul>
    </div>
  );
}
