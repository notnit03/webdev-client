export default function YourForm() {
  return (
    <div id="wd-your-form-section">
      <h4>Student Profile</h4>
      <form id="wd-your-form">
        <h5>About me</h5>
        <label htmlFor="wd-your-first-name">First name: </label>
        <input
          id="wd-your-first-name"
          type="text"
          defaultValue="Nithya"
          placeholder="First name"
        />
        <br />
        <label htmlFor="wd-your-last-name">Last name: </label>
        <input
          id="wd-your-last-name"
          type="text"
          defaultValue="Vangala"
          placeholder="Last name"
        />
        <br />
        <label htmlFor="wd-your-student-id">Student ID: </label>
        <input
          id="wd-your-student-id"
          type="password"
          defaultValue="00123456"
          placeholder="NUID"
        />
        <br />

        <h5>Why I am taking this course</h5>
        <label htmlFor="wd-your-bio">Bio: </label>
        <br />
        <textarea
          id="wd-your-bio"
          cols={40}
          rows={6}
          defaultValue="I did my bachelors in Computer Science at VIT University and I am now an MSCS student at Northeastern. I am taking this course to learn how to build full stack web applications from the interface down to the database. Outside class I dance, cook, hike, and photograph nature and beaches."
        />
        <br />

        <h5>Class standing</h5>
        <input type="radio" name="wd-your-standing" id="wd-standing-freshman" />
        <label htmlFor="wd-standing-freshman">Freshman</label>
        <br />
        <input type="radio" name="wd-your-standing" id="wd-standing-sophomore" />
        <label htmlFor="wd-standing-sophomore">Sophomore</label>
        <br />
        <input type="radio" name="wd-your-standing" id="wd-standing-junior" />
        <label htmlFor="wd-standing-junior">Junior</label>
        <br />
        <input type="radio" name="wd-your-standing" id="wd-standing-senior" />
        <label htmlFor="wd-standing-senior">Senior</label>
        <br />
        <input
          type="radio"
          name="wd-your-standing"
          id="wd-standing-graduate"
          defaultChecked
        />
        <label htmlFor="wd-standing-graduate">Graduate</label>
        <br />

        <h5>Enrollment</h5>
        <input
          type="radio"
          name="wd-your-enrollment"
          id="wd-enrollment-full"
          defaultChecked
        />
        <label htmlFor="wd-enrollment-full">Full time</label>
        <br />
        <input type="radio" name="wd-your-enrollment" id="wd-enrollment-part" />
        <label htmlFor="wd-enrollment-part">Part time</label>
        <br />

        <h5>Interests</h5>
        <input
          type="checkbox"
          name="wd-your-interests"
          id="wd-interest-languages"
          defaultChecked
        />
        <label htmlFor="wd-interest-languages">
          Languages (I speak seven, including English, French, and Arabic)
        </label>
        <br />
        <input
          type="checkbox"
          name="wd-your-interests"
          id="wd-interest-dancing"
          defaultChecked
        />
        <label htmlFor="wd-interest-dancing">Dancing</label>
        <br />
        <input type="checkbox" name="wd-your-interests" id="wd-interest-cooking" />
        <label htmlFor="wd-interest-cooking">Cooking</label>
        <br />
        <input type="checkbox" name="wd-your-interests" id="wd-interest-hiking" />
        <label htmlFor="wd-interest-hiking">Hiking</label>
        <br />
        <input
          type="checkbox"
          name="wd-your-interests"
          id="wd-interest-photography"
          defaultChecked
        />
        <label htmlFor="wd-interest-photography">
          Nature and beach photography
        </label>
        <br />

        <h5>Program</h5>
        <label htmlFor="wd-your-major">Major: </label>
        <br />
        <select id="wd-your-major" defaultValue="MSCS">
          <option value="MSCS">MS Computer Science</option>
          <option value="MSDS">MS Data Science</option>
          <option value="MSCY">MS Cybersecurity</option>
          <option value="MSIS">MS Information Systems</option>
        </select>
        <br />
        <label htmlFor="wd-your-topics">
          Topics I want to go deeper into this term:{" "}
        </label>
        <br />
        <select
          multiple
          id="wd-your-topics"
          defaultValue={["WEBDEV", "DATABASES"]}
        >
          <option value="WEBDEV">Full stack web development</option>
          <option value="DATABASES">Databases</option>
          <option value="NLP">Natural language processing</option>
          <option value="VISION">Computer vision</option>
          <option value="CLOUD">Cloud and deployment</option>
        </select>
        <br />

        <h5>Details</h5>
        <label htmlFor="wd-your-email">School email: </label>
        <input
          type="email"
          id="wd-your-email"
          defaultValue="vangala.n@northeastern.edu"
          placeholder="name@northeastern.edu"
        />
        <br />
        <label htmlFor="wd-your-grad-year">Expected graduation year: </label>
        <input
          type="number"
          id="wd-your-grad-year"
          defaultValue="2027"
          min={2026}
          max={2032}
        />
        <br />
        <label htmlFor="wd-your-start-date">Program start date: </label>
        <input type="date" id="wd-your-start-date" defaultValue="2025-09-02" />
        <br />
        <label htmlFor="wd-your-excitement">
          How excited I am about this course (0 to 10):{" "}
        </label>
        <input
          type="range"
          id="wd-your-excitement"
          defaultValue="9"
          min="0"
          max="10"
        />
        <br />

        <h5>Actions</h5>
        <button id="wd-your-save" type="submit">
          Save
        </button>
        <button id="wd-your-cancel" type="button">
          Cancel
        </button>
      </form>
    </div>
  );
}