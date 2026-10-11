import { FaUserCircle } from "react-icons/fa";
const people = [
  { name: "Tony Stark", login: "001234561S", section: "S101", role: "STUDENT", last: "2020-10-01", total: "10:21:32" },
  { name: "Bruce Wayne", login: "001234562S", section: "S101", role: "STUDENT", last: "2020-11-02", total: "23:32:23" },
  { name: "Steve Rogers", login: "001234563S", section: "S101", role: "STUDENT", last: "2020-10-02", total: "13:21:32" },
  { name: "Natasha Romanoff", login: "001234564S", section: "S101", role: "TA", last: "2020-11-05", total: "11:22:33" },
  { name: "Nithya", login: "001234565S", section: "S101", role: "STUDENT", last: "2026-10-01", total: "09:15:20" },
  { name: "Niya", login: "001234566S", section: "S101", role: "FACULTY", last: "2026-10-03", total: "14:40:05" },
  { name: "Nisha", login: "001234567S", section: "S101", role: "TA", last: "2026-10-05", total: "07:30:45" },
  { name: "Jane Sample", login: "001234568S", section: "S101", role: "STUDENT", last: "2026-09-20", total: "05:10:10" },
  { name: "Alex Sample", login: "001234569S", section: "S101", role: "STUDENT", last: "2026-09-21", total: "06:20:20" },
  { name: "Sam Sample", login: "001234570S", section: "S101", role: "TA", last: "2026-09-22", total: "08:30:30" },
];
export default function PeopleTable() {
  return (
    <div id="wd-people-table" className="overflow-x-auto">
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-neutral-300">
            <th className="p-2">Name</th>
            <th className="p-2">Login ID</th>
            <th className="p-2">Section</th>
            <th className="p-2">Role</th>
            <th className="p-2">Last Activity</th>
            <th className="p-2">Total Activity</th>
          </tr>
        </thead>
        <tbody>
          {people.map((p) => (
            <tr key={p.login} className="odd:bg-neutral-50">
              <td className="p-2 text-nowrap">
                <FaUserCircle className="me-2 inline text-4xl text-neutral-500" />
                <span className="text-red-600">{p.name}</span>
              </td>
              <td className="p-2">{p.login}</td>
              <td className="p-2">{p.section}</td>
              <td className="p-2">{p.role}</td>
              <td className="p-2">{p.last}</td>
              <td className="p-2">{p.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
