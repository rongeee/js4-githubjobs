import { mount, shallow } from "enzyme";
import { BrowserRouter, Router } from "react-router-dom";
import App from "./App";
import JobList from "./components/JobList";
import SearchActionBar from "./components/SearchActionBar";
import JobDetailPage from "./pages/JobDetailPage";
import JobsProvider from "./provider/JobsProvider";
import { createMemoryHistory } from "history";

const mockData = [
  {
    id: "cd91e908-4316-4315-91b9-3f3879932e0b",
    type: "Full Time",
    url: "https://jobs.github.com/positions/cd91e908-4316-4315-91b9-3f3879932e0b",
    created_at: "Tue Jan 26 13:44:38 UTC 2021",
    company: "EventMobi",
    company_url: "http://eventmobi.com",
    location: "Remote",
    title: "Senior Frontend Engineer",
    description:
      '<p><strong>EventMobi is a remote-first company and this is a remote job. You may reside anywhere in Canada. Please do not apply for this role, if you do not live in Canada.</strong></p>\n<p>EventMobi is committed to creating a diverse environment and is proud to be an equal opportunity employer. All qualified applicants will receive consideration for employment.  Accommodations are available upon request for candidates taking part in all aspects of the selection process.</p>\n<p><strong>Why EventMobi?</strong></p>\n<p>Events and conferences are being reimagined online, and EventMobi is building on ten years of event technology experience to innovate one of the most flexible and engaging virtual event platforms. We are an award-winning tech startup with teams in Toronto, Berlin and Manila, with thousands of customers around the globe.</p>\n<p>We believe that live events bring people together to enable change – both in business and our society at large. In the era of COVID-19, we have become a remote-first company and are hard at work helping thousands of events pivot to virtual. EventMobi has a huge impact on the success of our customers’ events and on their attendee experience. We are on a mission to revolutionize how event planners create, market and manage their virtual and in-person events, and how remote and on-site attendees experience conferences. We would love for you to join us and leave your mark.</p>\n<p><strong>About You</strong></p>\n<p>If you\'re looking for a software development role that allows you to drive the web and the future of virtual events forward by utilizing the latest technologies, you\'ve come to the right place! Developers at EventMobi focus on building powerful front-ends that work across devices, are offline capable and are just as, if not more powerful, than their native counterparts. We use the best tools for the job, including React+Redux, NodeJS, Cordova, and Webpack to develop a platform that generates &amp; deploys thousands of apps annually and we\'re constantly looking to push the bar with your help!</p>\n<p><strong>What Your Work Will Focus On</strong></p>\n<ul>\n<li>\n<strong>Modern Web Application</strong> - You will be involved in enhancing our responsive web app that powers our mobile and virtual event space products. Solving interesting problems along the way - real time content updates, offline content, UI and architecture scaling for performance.</li>\n<li>\n<strong>Ownership</strong> - From initial design to deployment, test automation to performance monitoring, you own what you build end-to-end.</li>\n<li>\n<strong>Architecture &amp; Scale</strong> - Gathering insights and employing strong design principles, you will determine the best tech to address our customers needs while optimizing for scale.</li>\n<li>\n<strong>Development</strong> - Best practices, craftsmanship, well thought out code and mentorship to your team is your ideal and you preach this in your own work as well as with your teammates.</li>\n<li>\n<strong>Quality</strong> - You will help grow the team around you in not only pushing new capabilities for our customers, but also maintaining the utmost quality in everything we build.</li>\n</ul>\n<p><strong>What You Will Bring to the Team</strong></p>\n<ul>\n<li>5+ years experience as a software developer working on large or fast scaling products</li>\n<li>Experience and passion for Javascript and JS based UI frameworks (<strong>React/Redux</strong>)</li>\n<li>Experience working with large code bases</li>\n<li>Experience working with Restful APIs</li>\n<li>Proficient using JSX/ES6/HTML/CSS</li>\n<li>Ability to debug a codebase in a self-sufficient manner</li>\n<li>Excellent written and verbal communication</li>\n<li>Knowledge of SOLID Principles, Domain Modelling, and Design Patterns is a major benefit</li>\n<li>Ability to mentor and grow team members, provide technical guidance and oversight on implementation direction</li>\n<li>Experience with Python or other server-side languages is a nice to have</li>\n<li>Experience with Docker and AWS is a nice to have</li>\n<li>Any experience with video and digital image technology is a plus.</li>\n</ul>\n<p><strong>Remote Workspace Requirements</strong></p>\n<ul>\n<li>You have a safe, comfortable, and ergonomic workspace and working environment - a private and quiet workspace is vital for doing your best work!</li>\n<li>You have a reliable ethernet connection of at least 30Mbps upload speed with wired connection or reliable WiFi at home.</li>\n</ul>\n<p><strong>What will you get from EventMobi?</strong></p>\n<ul>\n<li>We offer the experience of a life-time working with a dynamic, open-minded and diverse team, who are excited to come to work every day and passionate about what they do and the clients they help</li>\n<li>Competitive compensation</li>\n<li>Company Stock-Options</li>\n<li>A great culture with much more along the way</li>\n</ul>\n<p><strong>About EventMobi</strong></p>\n<p>We\'re focused on building the most comprehensive &amp; extensible event management platform to help planners create incredible event experiences online or in-person. We believe that events bring people together to enable change. This has never been more clear in the time of COVID-19. We\'ve already changed how 20,000+ events in 70+ countries use technology at their events. Since the launch of our Virtual Platform, hundreds of organizations have taken their events online with EventMobi. We are seeing astonishing growth opportunities for virtual events and online conferences, and are looking forward to influencing hundreds of thousands of future events.</p>\n<p>EventMobi is a remote-first company with a distributed global workforce. We do have local offices in Toronto, Manila and Berlin but everyone is equal and communicates the same way regardless if you work from home or from the office. We are improving our working culture to be more asynchronous, with better documentation, goal setting and collaborative technologies for remote work. Being accountable for our work, along with effective planning and communication to deliver results is a critical aspect of our success as a remote-first company. We offer flexible work hours in local time zones and encourage healthy work life balance.</p>\n<p>If you are interested in seeing EventMobi in action, check out some of the videos below:</p>\n<ul>\n<li><a href="https://www.youtube.com/watch?v=tWW9jB85S3w&amp;t=2s">The Experience Manager Platform</a></li>\n<li><a href="https://www.youtube.com/watch?v=hmJpVOe5dRE">The EventMobi Mobile Event App</a></li>\n<li>\n<a href="https://thenatureofevents.com/">“The Nature of Events”</a> - a fun video showcasing the EventMobi Team</li>\n<li>Top brands and organizations from around the world have used EventMobi’s event app technology to create incredible event experiences - <a href="https://www.eventmobi.com/customers/">hear directly from our customers.</a>\n</li>\n</ul>\n',
    how_to_apply:
      '<p>Please visit <a href="https://eventmobi.bamboohr.com/jobs/view.php?id=66&amp;source=github">https://eventmobi.bamboohr.com/jobs/view.php?id=66&amp;source=github</a> and click "Apply for This Job"</p>\n',
    company_logo:
      "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdENXIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--78d9681a7475e92db796ae3c406ce4f8d2640864/em-logo.jpg",
  },
];

describe("Tests the SearchActionBar", () => {
  const wrapper = mount(
    <BrowserRouter>
      <JobsProvider>
        <App />
      </JobsProvider>
    </BrowserRouter>
  );

  it("ActionBar-container is rendered", () => {
    expect(wrapper.find(".actionbar-container")).not.toHaveLength(0);
  });
  it("Input-field is rendered.", () => {
    expect(wrapper.find("#search")).toHaveLength(1);
  });
  it("Search-button is rendered.", () => {
    expect(wrapper.find(".search-button")).toHaveLength(1);
  });
});

describe("Components on SearchPage are mounted correctly", () => {
  const wrapper = mount(
    <BrowserRouter>
      <JobsProvider>
        <App />
      </JobsProvider>
    </BrowserRouter>
  );

  it("SearchActionBar is mounted correctly", () => {
    expect(wrapper.find(SearchActionBar).exists()).toEqual(true);
  });
  it("JobList is mounted correctly", () => {
    expect(wrapper.find(JobList).exists()).toEqual(true);
  });
});

describe("Tests JobList", () => {
  const wrapper = mount(
    <BrowserRouter>
      <JobList results={mockData} />
    </BrowserRouter>
  );

  it("Title on job list-item is 'Senior Frontend Engineer'", () => {
    expect(wrapper.find("p").text()).toBe(mockData[0].title);
  });
  it("Location on job list-item is 'Remote'", () => {
    expect(wrapper.find("small").text()).toBe(mockData[0].location);
  });

  it("Link href is correct according to mockData", () => {
    expect(wrapper.find("a").prop("href")).toEqual(`/jobs/${mockData[0].id}`);
  });

  it("Image-src is correct with mock-data", () => {
    expect(wrapper.find("img").props()["src"]).toEqual(mockData[0].company_logo);
  });
  it("Correct error message for no search results", () => {
    const wrapper = mount(
      <BrowserRouter>
        <JobList results={[]} />
      </BrowserRouter>
    );
    expect(wrapper.find("p").text()).toBe("No Jobs Found");
  });
});

describe("Test JobDetailPage", () => {
  const history = createMemoryHistory();
  const wrapper = mount(
    <BrowserRouter>
      <Router history={history}>
        <JobDetailPage />
      </Router>
    </BrowserRouter>
  );

  const route = `/jobs/${mockData[0].id}`;
  history.push(route);

  it("JobDetailPage is mounted correctly", () => {
    expect(wrapper.find(JobDetailPage).exists()).toEqual(true);
  });
});
