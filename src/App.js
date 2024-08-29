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
    <p>
      In a program, there can be many similar memory access patterns.
      The idea is we hoped that similar access pattern continue to be similar.
      Using locality sensitive hashing (LSH), our goal was to use a previous pattern to make a prediction for a similar pattern in the future.
      The program stores a list of memory address offsets into the current page (configurable parameter).
      The code computes the delta: the difference between last address and the one after it, then computes a K min hash on the pattern.
      The hope was that similar patterns should hash to this value with high probability.
      Similar to Misra-Gries, the program has a sketch to store the predictions that happen frequently.
      We used a fork of <a className='text-blue-600 hover:text-blue-800 visited:text-purple-600' href='https://github.com/Quangmire/ChampSim'>ChampSim</a> that included some baseline prefetchers to compare to (Simplified-ISB and Best Offset) including a case with no prefetching.
      We generated a set of “prefetches” and fed that into the simulator which will then run the program and issue our prefetches. It then reports information like average IPC and the Useful and Useless prefetch counts.
      Our LSH implementation can be very accurate depending on the configurations, but it consistently isn’t aggressive enough to improve the IPC over prior work.
    </p>,
    'C++, ChampSim',
    [
      {
        link: 'prefetcher/IPC.png',
        caption: 'IPC results for all of the different prefetching strategies. The x-axis are the trace files tested on.'
      },
      {
        link: 'prefetcher/PRECISION.png',
        caption: 'Precision results'
      },
      {
        link: 'prefetcher/RECALL.png',
        caption: 'Recall results'
      },
      {
        link: 'prefetcher/Bloom.png',
        caption: 'Effect of a bloom filter on the space'
      },
      {
        link: 'prefetcher/Space.png',
        caption: 'Space used by each prefetching strategy'
      },
    ],
    null,
    'Spring 2023',
    'https://github.com/cool-cat-archie/ScalableFinalProject'
  )
  allProjects.set('prefetching', prefetching)

  const distansing = new ProjectClass(
    'DistanSing',
    <>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/Z5_xx9twI48?si=Wq5VGy6lsoLukNrS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

      <p className='mt-4'>
        Main personal contribution: worked on the networking peer to peer functionality
        <br /> <br />
        COVID-19 changed life in many ways.  Musicians are among many who were struggling heavily during this pandemic. The University of Utah’s School of music has a requirement that the students perform with other students in order to graduate.
        Due to Coronavirus and the social distancing requirement, this was very challenging. One attempted solution was trying to perform together through programs such as Zoom.  Since Zoom and other similar programs send
        audio and video data to a remote server first and then send it to the participants, there is high latency. This latency causes the musicians to get out of sync and prevents them from effectively practicing or performing together.
        <br /> <br />
        The purpose of DistanSing is to solve this problem and to give musicians the ability to practice together once again. We worked closely with musicians and with people from the school of music as we designed and built our system.
        <br /> <br />
        In order to accomplish this we implemented UDP holepunching so that peer to peer connections can be made over the internet without users needing to worry about setting up port forwarding on each of their individual routers.
        This feature makes our system simpler and easier to use than any other one that is currently available that we are aware of.
        DistanSing is capable of connecting users in rooms called rehearsals and allows them to communicate over a peer to peer network.
        The users experience very low latency and do not notice any lag. Apart from this low latency audio communication, users also have complete control of what they are hearing once they are inside a rehearsal.
        Each user can adjust the volume and mute any other user inside the rehearsal and these changes will only be reflected to themselves. There is also a solo button which allows for professors or directors to mute everyone besides one specific user with the click of one single button.
      </p>
    </>,
    'C++, Qt, FFmpeg, PortAudio, Python, AWS',
    [],
    null,
    'Fall 2020 - Spring 2021',
    null
  )
  allProjects.set('distansing', distansing)

  const parle = new ProjectClass(
    'Parlé',
    <p>
      <a className='text-blue-600 hover:text-blue-800 visited:text-purple-600' href='https://devpost.com/software/parle'>Parlé</a> finished 3rd at <a className='text-blue-600 hover:text-blue-800 visited:text-purple-600' href='https://www.fox13now.com/2019/10/05/fourth-annual-hack-the-u-hackathon-draws-big-crowds-for-big-prizes'>HackTheU 2019</a> (Utah's largest hackathon).
      We created an API that sends and receives SMS messages between users, translating messages into the preferred language of recipients. Additionally, Galileo's API was used to send money between users, showing users the balance in their bank account across multiple currencies.

    </p>,
    'Python, Twilio, Galileo API',
    [
      {
        link: 'parle/group.jpg',
        caption: 'Parlé team: Ruben Arellano, Ryan Furukawa, Me (Archie!), Prince Mugisha'
      },
      {
        link: 'parle/prize.jpeg',
        caption: 'Parlé team receiving our prize, a Google Home!'
      },
    ],
    null,
    'Fall 2019',
    'https://github.com/MVPrince10/Parle'
  )
  allProjects.set('parle', parle)

  const alpha = new ProjectClass(
    'Limits of Alpha Testing',
    <p>
      My project was to implement various techniques (Stochastic Alpha Testing, Hashed Alpha Testing, and Alpha Distribution) to get around the limits of traditional alpha testing.
      These techniques were proposed in <a className='text-blue-600 hover:text-blue-800 visited:text-purple-600' href='http://www.cemyuksel.com/research/alphadistribution/'>research</a> done by Cem Yuksel, a graphics professor at the University of Utah.
      <br /><br />
      In computer graphics, there is a technique called alpha testing. Basically, there are these billboards (flat images)
      that are used for very detailed objects, so that you can just render an image instead of a detailed model. However there needs to
      be parts of this image that are transparent. Using the alpha value of the RGBA pixel value, the alpha test decides whether or not a
      pixel is transparent on whether the alpha value is below a certain threshold. This works really well, except for one important problem.
      At courser Mip-map levels (eg. further away textures), you lose detail which is why the above techniques were created.
    </p>,
    'OpenGL',
    [
      {
        link: 'alpha/shader.png',
        caption: 'This traditional alpha test code in the fragment shader discards when the alpha value is below the 0.1 threshold. This code snippet is from learnopengl.com.'
      },
      {
        link: 'alpha/alpha.png',
        caption: 'This image shows some of my results. It may be a little hard to see but there is slightly more detail at this Mip-map level in the improved techniques.'
      },
      {
        link: 'alpha/alphadist_comp2.png',
        caption: 'These are more stark results with more interesting images from the original paper linked above from Cem Yuksel.'
      },
    ],
    null,
    'Spring 2022',
    'https://github.com/cool-cat-archie/GraphicsWindows/tree/master'
  )
  allProjects.set('alpha', alpha)

  const distributed = new ProjectClass(
    'Distributed KDC',
    <p>
      Content Delivery Networks are an important part of quickly distributing media. We would like to apply this same principle to key distribution centers which are a vital part of the Extended Needham Schroeder protocol. We believe that there is a substantial burden that anyone that has to talk to "Bob", must have the Key Distribution Center (KDC) generate keys as well as a ticket. To alleviate this burden, we propose to have a distributed approach to KDC operations where multiple edge servers are distributing the work of a KDC.
      <br/><br/>
      To achieve this distribution of the KDC along the edge network, we utilize Cloudfare as a third-party infrastructure. Cloudflare's network is built with data privacy in mind. They supply end-to-end encryption and do not generate revenue from advertisement. As a result they are against the collection and retention of personal data that they process.
    </p>,
    'Typescript, Cloudflare Workers, Azure',
    [
      {
        link: 'kdc/protocol.jpg',
        caption: 'Extended Needham Schroeder protocol'
      },
      {
        link: 'kdc/distributedNS.png',
        caption: 'Our modification of the NS protocol'
      },
      {
        link: 'kdc/kdcOut.png',
        caption: 'Hard to see Key Distribution Center output in Distributed KDC'
      },
    ],
    null,
    'October 2023 - present',
    "https://github.com/dpnandkeshwar/NetworkSecurityProject"
  )
  allProjects.set('distributed', distributed)

  const beating = new ProjectClass(
    'Beating the Odds',
    <p>
      Check out the current project page <a className='text-blue-600 hover:text-blue-800 visited:text-purple-600' href='https://wilferd.github.io/BeatingTheOdds/'>here</a> (Chrome browser recommended)! There’s a saying when it comes to gambling that “the house always wins.” The motivation for our project was knowing how often Vegas predictions are right for the outcomes of NBA games. We were interested in sports betting and wanted to display the results for the NBA and compare actual outcomes to predicted outcomes. For every NBA game, there are countless statistics that oddsmakers come up with such as money lines, spreads, favorites, expected payouts, etc. Our goal was to distill this information into helpful visualizations that show how teams perform vs how they are expected to perform. 
    </p>,
    'Javascript, D3',
    [],
    "https://www.youtube.com/embed/a4xKcfkfQz0?si=JsaxLD4zHRD0l71s" ,
    'Spring 2022',
    'https://github.com/Wilferd/BeatingTheOdds'
  )
  allProjects.set('beating', beating)

  const connect = new ProjectClass(
    'Connect 4 Verification',
    <p>
      In 1988, the game Connect 4 was proven to be a solved game meaning that with perfect play the first player will always win. With only one non-optimal move by the first player, the second player can force a draw, and with two non-optimal moves, the second player can win. One common algorithm to solving Connect 4 is Minimax. A minimax algorithm computes a decision tree of all of the possible moves and countermoves by each player. The first player can simply make decisions that lead to a leaf node of a victory. My motivation for this project was to take this idea and do a similar approach with a verification tool. Like Minimax, a model checker does a similar approach by traversing the state space non-deterministically according to some rules and invariants. My goal was to use a model checker to traverse the space of Connect 4 games for optimal play.
    </p>,
    'Murphi, Rumur',
    [
      {
        link: 'c4/rules.png',
        caption: 'Each possible move (ie dropping a token) is accomplished by a rule'
      },
      {
        link: 'c4/long.png',
        caption: 'State explosion made this problem challenging'
      },
    ],
    null,
    'Spring 2022',
    'https://github.com/cool-cat-archie/Connect4Verification/tree/main'
  )
  allProjects.set('connect', connect)
  return allProjects;
}
export default App;
