import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Project from './Project';
import NavBar from './NavBar';

function App() {
  const allProjects = getProjects()
  return (
    <div className="App">
      <header className="App-header">
        <HashRouter>
          <NavBar />
          <Routes>
            <Route path="" element={<About />} />
            <Route path="/experience" element={<Experience />} />

            {/* Individual Project pages */}
            <Route path="/projects/ccee-resouce-hub" element={<Project project={allProjects.get('ccee')} />} />
            <Route path="/projects/prefetching" element={<Project project={allProjects.get('prefetching')} />} />
            <Route path="/projects/distansing" element={<Project project={allProjects.get('distansing')} />} />
            <Route path="/projects/parle" element={<Project project={allProjects.get('parle')} />} />
            <Route path="/projects/alpha-testing" element={<Project project={allProjects.get('alpha')} />} />
            <Route path="/projects/distributed-kdc" element={<Project project={allProjects.get('distributed')} />} />
            <Route path="/projects/beating-the-odds" element={<Project project={allProjects.get('beating')} />} />
            <Route path="/projects/connect-4-verification" element={<Project project={allProjects.get('connect')} />} />

            <Route path="/projects" element={<Projects />} />

          </Routes>
        </HashRouter>
      </header>
    </div>
  );
}

class ProjectClass {
  constructor(title, description, stack, imageList, youtubeLink, date, repo) {
    this.title = title;
    this.description = description;
    this.stack = stack;
    this.imageList = imageList;
    this.youtubeLink = youtubeLink;
    this.date = date;
    this.repo = repo;
  }
}

function getProjects() {
  const allProjects = new Map();
  // description, stack, imageList, youtube, date, repo
  const ccee = new ProjectClass(
    'CCEE System of Support Resource Hub',
    (<p>
      Checkout the live site of <a className='text-blue-600 hover:text-blue-800 visited:text-purple-600' href='https://www.ccee-sos-resource-hub.org/'>CCEE Resource Hub</a>!
      The System of Support Resource Hub is a hub for universal resources aimed at enhancing student outcomes and supporting educators.
      With over 30 statewide projects, grants, and initiatives, this is a new one-stop website designed to provide equity in access to
      valuable tools for educators. There are 130+ universal resources catered to benefit districts, county offices, or charter schools.
      From webinars, to toolkits, to self-assessment frameworks, people can find what they need to improve outcomes for students.
      If you would like to learn more background information about the Resource Hub, please read the 
      <a className='text-blue-600 hover:text-blue-800 visited:text-purple-600' href='https://cceestatewidealphabucket84052-staging.s3.us-west-2.amazonaws.com/public/OverviewCCEESII.pdf?x-amz-content-sha256=e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855&x-amz-user-agent=aws-amplify%2F5.3.12+storage%2F2+framework%2F1&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIA4K3QJ2B4W7ZNVYAR%2F20240826%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240826T053913Z&X-Amz-SignedHeaders=host&X-Amz-Expires=900&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBLBRZ6nsWHu3RPYLZ0Qt07hHVC1rjUyICEIp3BlrRTfAiBzhdN0sVJd5biFspc51cPfrsPXVMX8XQq%2F9HobrkqrMirUBQjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDg0Nzk1NDY5NDI2NSIMGnl1vx1SWHAi8gj4KqgFe6bXdMTt8k1WkiPMjE%2FzTDT1ezBDivnRI9Y7IbPli6NgPdx%2BjnGr04LMA3ihSH1jbvXjLXTQPY2BpUhWUJ37MTWE3jGglo2XAYT821Lfssk%2BclOTg2%2B6KlcTeMs1qoJwqqCuz%2Fc2IURP4LDFWFZI273XxcFj%2Be%2BSPdH9GXbhisYuJFWDHByqLsI6ygFDrmPkJ7ac0KHMlnkKIe4YfmBCLggSqdObv7OXRNoOicKR2MxXudDcPVd3I2omEyVngpY86R%2Bzo4ktPiMALenflyJOkkgSYoo4PdRDeRhInUNfPcptByECVmt4mY3YpUaUy3dN%2BIefHJuejXu5xKFmesI1BzEz8Ta16BzNZOmkEhvk7273IU5evlK7JQIHWq4KU1qU1%2FjRr4iJlFpicHfjafV5h64pirpP4j7LedF94WiC1PZvgh3ydO%2FCtQzSq%2FrufG9m4msPmL6EojnGneqITsZrK2C1r3GVimH6EZc6dSGQBpolh9cO6upM%2Brxjk3UhUu8x8TNXNIdEySLF%2FeNM1VS5cBzwsFdw9En1VQMIwqBmdNfHjIU5bBIl%2F2TK7jW9QhEzz4IaBNeIdCt1xIG2aJcpKXkD2dipNQiFai8B5qzBY%2FeDyOCAC2Mbm27ISmui1S0TU2eIsNnOoT%2Bbi7KUXAZZwv0jaJJknHTMVvtcvVVcSyaDim7oZQePaGb5l%2FeFc%2B2W9msA1ksyLLjy%2BWY2uZBf%2BFVA5T%2FVmcgsgCAugkzDcfeuVM2mdg5RqYqge8FQcmxpEClt999Ktf3Wmz2CB49Dg5dlrCu0faKX7%2BM%2FUxQQDNZM8%2Bl6%2FNuM13094MGvWRkja8UD7RtS3r5TCtlaZurc3H0E4BkH14JELicw0PpbakB2%2Fz3Byy1hdT3G1ADlt%2F0GmspVdWkq%2BbQwgaqwtgY63ALJgK9DALknd2R9k3QmLczMPVzmPvfscHoV9DrGs8Fanx3IIlQ1fmH4nELvCyqzrHZdw9%2FIlu%2FSfhnm64M6lewG6Mavgkz5BsAu6ZzeP9UCw%2FP26q4BfLcB8WtXSPi1JqHPCJ4PvrtdJFe54owmvj%2BJAjAIqRZC5K3x%2BSIHKQn2zbhVXENX5DF9peu3Bc5O4nRrznf9sxSqEj7LCWPqcjID%2BOTr5iFnVAC0Hywxd2WDzWN4J0A5Qc3aktyNnqJ3nJ1Ne0WMZem6i7l5Tcft5FVvzz0D1XnEjZ%2B3d0YW22rcKOHl%2FI%2FuOOVAUpLUbAHQuhTcTwBfksiu71VoXmNCOtDptTNXfRZfK3GvDbPiOSrVfBpAbU%2FJSII34Mcnym%2FHUYUmt4Q7OgQxp4K0BpyqO8zHdiflzPZ4qYxtnio%2FclF87YNf%2BtbJoQZ4q4c6pXN%2FJafgeWICEtG8ay%2FXJ0s%3D&X-Amz-Signature=c193ac630b1a690816bc7afe8257d067b83a479567f997a27490da9ca27d3464'> Overview of the Statewide System of Support Resource Hub</a>.
      Please note there are also many features only available to resource submitters and admins.
    </p>),
    'React, AWS (Amplify, S3, DynamoDB, Cognito), Tailwind',
    [
      {
        link: 'home.png',
        caption: 'Section of the homepage for searching, filtering, and viewing resources.'
      },
      {
        link: 'admin.png',
        caption: 'Admin panel of the resource hub where resources can be approved, edited, deleted, etc.'
      },
    ],
    null,
    'October 2023 - present',
    null
  )
  allProjects.set('ccee', ccee)

  const prefetching = new ProjectClass(
    'Locality Sensitive Hashing for Data Prefetching',
    '',
    'C++, ChampSim',
    [],
    null,
    'Spring 2023',
    null
  )
  allProjects.set('prefetching', prefetching)

  const distansing = new ProjectClass(
    'DistanSing',
    '',
    'C++, Qt, Python',
    [],
    null,
    'Fall 2020 - Spring 2021',
    null
  )
  allProjects.set('distansing', distansing)

  const parle = new ProjectClass(
    'Parlé',
    '',
    'Python',
    [],
    null,
    'Fall 2019',
    null
  )
  allProjects.set('parle', parle)

  const alpha = new ProjectClass(
    'Limits of Alpha Testing',
    '',
    'OpenGL',
    [],
    null,
    'October 2023 - present',
    null
  )
  allProjects.set('alpha', alpha)

  const distributed = new ProjectClass(
    'Distributed KDC',
    '',
    'Typescript, Cloudflare Workers',
    [],
    null,
    'October 2023 - present',
    null
  )
  allProjects.set('distributed', distributed)

  const beating = new ProjectClass(
    'Beating the Odds',
    '',
    'Javascript, D3',
    [],
    null,
    'October 2023 - present',
    null
  )
  allProjects.set('beating', beating)

  const connect = new ProjectClass(
    'Connect 4 Verification',
    '',
    'CMurphi',
    [],
    null,
    'October 2023 - present',
    null
  )
  allProjects.set('connect', connect)
  return allProjects;
}
export default App;
