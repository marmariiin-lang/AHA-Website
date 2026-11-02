import { useState, type FormEvent, type ReactNode } from 'react';
import { Link, useLocation } from 'wouter';
import { BookOpen, GraduationCap, Users, Menu, X, Mail, MapPin, Info, Linkedin, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { highSchoolFall2025Research, informalResearch, undergraduateResearch } from './research-data-supplied';

const img = (path: string) => `${import.meta.env.BASE_URL}images/${path}`;
const pathways = [
  { name: 'Undergraduate Curriculum', short: 'Undergraduate', description: 'Digital electronics, circuit design, IoT applications, and AI.', icon: GraduationCap, root: 'undergraduate' },
  { name: 'Informal / Middle School Curriculum', short: 'Informal / Middle School', description: 'Hands-on embedded systems, sensing, and edge AI for community and museum settings.', icon: Users, root: 'informal' },
  { name: 'High School Curriculum', short: 'High School', description: 'Microelectronics, edge intelligence, and social-good design challenges.', icon: BookOpen, root: 'high-school-current' },
];
const routeSets = {
  undergraduate: { curriculum: '/undergraduate-curriculum', implementations: '/undergraduate-implementations', team: '/undergraduate-team' },
  informal: { curriculum: '/informal-curriculum', implementations: '/informal-implementations', team: '/informal-team' },
  'high-school-current': { curriculum: '/high-school-current-curriculum', implementations: '/high-school-implementations', team: '/high-school-current-team' },
  'high-school-fall-2025': { curriculum: '/high-school-fall-2025-curriculum', implementations: '/high-school-implementations', team: '/high-school-fall-2025-team' },
};
type Module = { label: string; title: string; intro?: string; body?: string; objectives?: string[] };
const modules: Record<string, Module[]> = {
  undergraduate: [
    { label: 'MODULE 1', title: 'Mathematical Models in Digital Electronics', body: 'Learning Objectives: Design combinational and sequential circuits by applying knowledge about the mathematical models used in digital electronics.', objectives: ['Illustrate binary and decimal numbers and apply their conversion techniques using push buttons and switches in hardware.', 'Apply knowledge about Boolean logic to design combinational circuits using logic gates.', 'Design sequential circuits (Finite State Machines) and implement them on a programmable chip in the hardware platform.'] },
    { label: 'MODULE 2', title: 'Digital Circuit Design and Implementation', body: 'Learning Objectives: Design and implement circuits to perform basic computer operations, sense data, and store information.', objectives: ['Implement circuits to read and write from memory by differentiating between memory devices.', 'Create a basic model of a computer capable of doing arithmetic and logical operations.', 'Evaluate the uses of sensors by analyzing and modifying software codes that operate them to acquire sensed data.'] },
    { label: 'MODULE 3', title: 'IoT Applications', body: 'Learning Objectives: Experiment with hardware sensors in IoT applications for monitoring and controlling devices in real-time.', objectives: ['Create a web server to provide an interface through which a user can send control commands to interact remotely with microcontrollers.', 'Extract motion telemetry from an Inertial Measurement Unit (IMU) and relay the information to a visualization panel.', 'Measure the temperature and humidity parameters of the environment and visualize the data captured on a dashboard hosted on a server.', 'Measure temperature and humidity parameters in an environment and control connected devices using a smart voice assistant.'] },
    { label: 'MODULE 4', title: 'Artificial Intelligence in IoT Applications', body: 'Learning Objectives: Make predictions using data from sensor hardware modules using AI algorithms.', objectives: ['Utilize RGB sensor modules to create logic tables that allow making predictions about object characteristics.', 'Utilize different methods to measure distances and apply those methods to appropriate situations.'] },
  ],
  informal: [
    { label: 'MODULE 1', title: 'Introduction to Embedded Systems', intro: 'Learners explore embedded systems as the technology behind many everyday devices. Through hands-on activities with the AHA! board, they examine real-world applications and develop an understanding of the input-processing-output process.', body: 'Learning objectives:', objectives: ['Identify common examples of embedded systems in our society.', 'Explain how embedded systems and computers work.', 'Describe the components of the AHA! Board and how they work together as an embedded system.'] },
    { label: 'MODULE 2', title: 'Data Acquisition and Conversion', intro: 'How do smart devices make decisions? In this module, learners use the AHA board and sensors to explore how embedded systems collect and process real-world data. Through interactive activities, they investigate digital signals, binary numbers, and sensing technologies used in applications like health monitoring and obstacle detection.', body: 'Learning objectives:', objectives: ['Differentiate between digital and analog data by examining how real-world signals are represented and processed in sensing devices.', 'Explain the process of analog-to-digital conversion (ADC).', 'Describe the role of binary representation and transistors in digital systems.', 'Evaluate the limits and constraints of different sensing methods.'] },
    { label: 'MODULE 3', title: 'Multimodal Sensing', intro: 'Learners investigate how multimodal sensing enables smart systems to interpret and respond to the world more effectively. Through hands-on exploration with the AHA board, they compare single- and multi-sensor approaches and examine applications that rely on integrated sensor data for intelligent decision-making.', body: 'Learning objectives:', objectives: ['Understand the concept of multimodal sensing and its relevance in real-world applications.', 'Explain how to collect data using various sensors on the AHA board.', 'Discuss scenarios where multimodal sensors are implemented.', 'Describe the comparison between sensor-based multimodal sensing and human multimodal sensing.', 'Identify common examples of when we use more than one sensor at a time in our society.', 'Explain how data from each sensor can be analyzed together to form a cohesive narrative.', 'Describe the different applications and pairings of sensors one can construct to suit different relevant problems.'] },
    { label: 'MODULE 4', title: 'AI and Edge AI', intro: 'This module introduces Artificial Intelligence (AI) and edge computing through hands-on experiences. Learners explore the differences between cloud and edge computing, use Edge Impulse to develop and deploy AI models, and investigate how AI can be applied to solve real-world problems.', body: 'Learning objectives:', objectives: ['Define AI, including types of tasks and learning.', 'Distinguish between AI, IoT, AIoT, and Edge AI.', 'Describe the role of data in AI systems, including how data is collected, labeled, processed, and used to make decisions locally or in the cloud.', 'Compare cloud-based and edge-based AI systems, evaluating their benefits, challenges, and use cases in areas like healthcare, agriculture, disaster response, and space exploration.', 'Apply the AI development process using Edge Impulse, from data collection to model deployment on embedded hardware, and reflect on how embedded intelligence enables adaptive and context-aware applications.'] },
    { label: 'MODULE 5', title: 'Edge AI for Social Good', intro: 'This module introduces Artificial Intelligence (AI) and edge computing through hands-on experiences. Learners explore the differences between cloud and edge computing, use Edge Impulse to develop and deploy AI models, and investigate how AI can be applied to solve real-world problems.', body: 'Learning objectives:', objectives: ['Develop skills in conceptualizing altruistic engineering applications that address community needs.', 'Prototype an edge AI application using the AHA board, Arduino IDE, and Edge Impulse.'] },
  ],
  'high-school-fall-2025': [
    { label: 'UNIT A', title: 'Introduction to Embedded Systems and IoT', intro: 'Discover how smart devices sense, process, and respond to the world around them. Through hands-on exploration of the AHA board, learners investigate embedded systems, IoT, and the input-processing-output model while gaining experience with sensors and Arduino programming.', body: 'Learning objectives:', objectives: ['Define key terms: Internet of Things (IoT), embedded systems, input-processing-output.', 'Explore AHA! Board and its sensors.'] },
    { label: 'UNIT B', title: 'AI Integration', intro: 'Explore how artificial intelligence transforms sensor data into intelligent decisions. Using Edge Impulse and the AHA board, learners experience the complete AI workflow, from data collection and model training to deploying edge AI applications such as fruit ripeness and water leak detection.', body: 'Learning objectives:', objectives: ['Detect fruit ripeness using Edge Impulse and Arduino.', 'Explain the differences between embedded systems with and without AI.'] },
    { label: 'UNIT C', title: 'Extension With Other Sensors', intro: 'Expand your understanding of edge AI through hands-on experiences with motion, weather, heart rate, oximeter, and time-of-flight sensors. Learners compare AI-enabled and non-AI applications while exploring how sensor data powers real-world intelligent systems.', body: 'Learning objectives:', objectives: ['Explore other applications of AHA! board.'] },
  ],
  'high-school-current': [
    { label: 'MODULE 1', title: 'Discover the World of Smart Devices', intro: 'Explore how everyday technology senses and shares information.', body: 'Students explore how smart devices work and how technologies such as smartwatches, thermostats, air-quality monitors, and other IoT systems collect and share data. They examine how sensors support real-world applications in health, environmental monitoring, and community problem solving.' },
    { label: 'MODULE 2', title: 'Inside the AHA! Board', intro: 'Flash the AHA! Board and explore how light sensors detect color.', body: 'Students learn how the AHA! Board works by investigating the RGB light sensor. They explore how the sensor measures reflected red, green, and blue light and converts this information into data. This module introduces how light sensors can be used in agriculture, recycling, environmental monitoring, and health technologies.' },
    { label: 'MODULE 3', title: 'From Cloud AI to Edge Intelligence', intro: 'Use the AHA! Board and Edge Impulse to explore hardware-integrated AI.', body: 'Students learn that AI is not only cloud-based tools such as ChatGPT. They explore edge intelligence, where AI models run directly on or near a device. Students compare systems with and without AI, then use Edge Impulse and the AHA! Board to investigate fruit ripeness and water leak detection.' },
    { label: 'MODULE 4', title: 'Edge Explorers', intro: 'Level up your skills with games for logic, data, and problem solving.', body: 'Students learn how to read simple pseudocode, interpret sensor data, and understand how computers make decisions. They also explore multimodal intelligence and end the module with AI Hardware AdventureLand, a challenge-based board game using the five AHA! Board sensors.' },
    { label: 'MODULE 5', title: 'Edge Intelligence for Real-World Impact', intro: 'Design an edge intelligence solution for a real-world problem.', body: 'Students apply what they learned across the AHA! modules to design a solution for a societal or community problem. Working in teams, they use Engineering Design and Design Thinking to identify a need, imagine solutions, test ideas, and present their final concept to peer investors.' },
  ],
};

function Header({ path }: { path: string }) {
  const [open, setOpen] = useState(false);
  const isCurriculum = path.includes('curriculum') || path.includes('implementations') || path.includes('team') || path.startsWith('/implementation/');
  const nav = [['Home', '/'], ['Curriculum', '/curriculum'], ['Research', '/research'], ['Contact', '/contact']];
  return <header className="site-header">
    <Link href="/" className="brand" aria-label="AHA! Home"><img src={img('branding/aha-logo.png')} alt="" /><span className="brand-name">AI Hardware<br/>Adventures</span></Link>
    <button className="menu-toggle" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X size={20}/> : <Menu size={20}/>}</button>
    <nav className={`primary-nav ${open ? 'open' : ''}`} aria-label="Primary navigation">
      {nav.map(([name, href]) => <Link key={name} href={href} className={(href === path || (name === 'Curriculum' && isCurriculum)) ? 'active' : ''} aria-current={(href === path || (name === 'Curriculum' && isCurriculum)) ? 'page' : undefined} onClick={() => setOpen(false)}>{name}</Link>)}
    </nav>
  </header>;
}

function Footer() {
  return <footer className="site-footer">
    <Link href="/" className="footer-brand" aria-label="AHA! Home"><img src={img('branding/aha-logo.png')} alt="" /><span className="brand-name">AI Hardware<br/>Adventures</span></Link>
    <div className="footer-ack">The AI Hardware Adventure (AHA!) Project is supported by the Discovery Research K–12 program of the <a href="https://www.nsf.gov/" target="_blank" rel="noreferrer">National Science Foundation</a> under award #2405373. Any opinions, findings, and conclusions or recommendations expressed in this material are those of the author(s) and do not necessarily reflect the views of the National Science Foundation. Learn more about the <a href="https://www.nsf.gov/funding/opportunities/drk-12-discovery-research-prek-12" target="_blank" rel="noreferrer">Discovery Research K–12 program</a>.</div>
    <div className="institution-grid" aria-label="Partner institutions">
      <img src={img('branding/uf-college-education-white.png')} alt="University of Florida College of Education" />
      <img src={img('branding/uf-engineering-white.png')} alt="UF Herbert Wertheim College of Engineering" />
      <img src={img('branding/unt-logo-white.png')} alt="University of North Texas" />
      <img src={img('branding/ku-logo-white.png')} alt="The University of Kansas" />
    </div>
  </footer>;
}
function Shell({ path, children }: { path: string; children: ReactNode }) {
  return <div className="site-shell"><Header path={path}/><main className="main-content">{children}</main><Footer/></div>;
}
function ResourcesSection() {
  return <section className="section">
    <h2 className="section-title">Resources</h2>
    <p className="section-lede">Explore our open-source materials and educational videos for hands-on AI hardware learning.</p>
    <div className="resource-grid">
      <article className="resource-card"><h3>GitHub Repositories</h3><p>Explore curriculum-related code, activities, and technical resources.</p><a href="https://github.com/AHA-Projects" target="_blank" rel="noreferrer">Explore GitHub <ArrowRight size={15}/></a></article>
      <article className="resource-card"><h3>AHA! Videos</h3><p>Watch videos demonstrating AHA! activities and hardware concepts.</p><a href="https://vimeo.com/user/63828926/folder/25546287?isPrivate=false" target="_blank" rel="noreferrer">Watch Videos <ArrowRight size={15}/></a></article>
    </div>
  </section>;
}
function HomePage() {
  const [galleryCenter,setGalleryCenter]=useState(0);
  const gallery = [
    {src:'home/gallery-3.webp',caption:'AHA! board exploration'},
    {src:'home/gallery-1.webp',caption:'Curriculum materials and project kits'},
    {src:'home/gallery-2.webp',caption:'Activity sheets and teacher notes'},
  ];
  const visibleGallery=[-1,0,1].map(offset=>gallery[(galleryCenter+offset+gallery.length)%gallery.length]);
  const shiftGallery=(direction:number)=>setGalleryCenter(current=>(current+direction+gallery.length)%gallery.length);
  return <div className="page-width">
    <section className="hero">
      <div><h1>AI Hardware<br/>Adventures</h1><h2>Hands-on learning in microelectronics, embedded systems, and AI.</h2><p>AI Hardware Adventures brings together curriculum design, hands-on learning, educator support, and research to broaden access to microelectronics and artificial intelligence education.</p><p>Our work spans university, community and museum, and high-school settings.</p></div>
      <img className="hero-photo" src={img('home/hero.webp')} alt="AI Hardware Adventures team gathered at the June 2026 project meeting" />
    </section>
    <section className="section">
      <h2 className="section-title">Explore Our Curricula</h2>
      <p className="section-lede">Our AI hardware education work spans three curriculum areas: undergraduate courses, community and museum learning, and high-school classrooms.</p>
      <div className="pathway-grid">{pathways.map((p) => { const Icon=p.icon; return <article className="pathway-card" key={p.root}><div className="pathway-top"><Icon className="icon"/><strong>{p.short.toUpperCase()}</strong></div><div className="pathway-body"><h3>{p.name}</h3><p>{p.description}</p><Link className="text-link" href="/curriculum">Explore more <ArrowRight size={15}/></Link></div></article>; })}</div>
    </section>
    <section className="section">
      <h2 className="section-title gallery-title">Photo Gallery</h2>
      <div className="gallery-frame">
        <div className="gallery-grid" aria-live="polite">{visibleGallery.map((item,index)=><figure className={`gallery-item ${index===1?'featured':''}`} tabIndex={0} key={item.src}>
          <img src={img(item.src)} alt=""/><figcaption>{item.caption}</figcaption>
        </figure>)}</div>
        <button className="gallery-nav gallery-previous" type="button" aria-label="Previous photos" onClick={()=>shiftGallery(-1)}><ChevronLeft size={20}/></button>
        <button className="gallery-nav gallery-next" type="button" aria-label="Next photos" onClick={()=>shiftGallery(1)}><ChevronRight size={20}/></button>
      </div>
    </section>
    <ResourcesSection/>
  </div>;
}
function CurriculumOverview() {
  return <div className="page-width">
    <div className="page-intro center-intro"><h1>Our Curricula</h1><h2>Hands-On Learning in Microelectronics, Embedded Systems, and AI</h2><p>Our curricula introduce learners to microelectronics, embedded systems, and artificial intelligence through hands-on activities. Designed for different educational settings, they support learning from undergraduate engineering courses to informal middle-school programs and high-school classrooms.</p></div>
    <section className="pathway-grid section">{pathways.map((p) => {const set=routeSets[p.root as keyof typeof routeSets]; const Icon=p.icon; return <article className="pathway-card" key={p.root}><div className="pathway-top"><Icon className="icon"/><h3>{p.short}</h3></div><div className="pathway-body"><p>{p.description}</p><div className="pathway-buttons"><Link href={set.curriculum}>Curriculum</Link>{'implementations' in set && <Link href={set.implementations}>Implementations</Link>}<Link href={set.team}>Team</Link></div></div></article>;})}
    </section>
    <ResourcesSection/>
  </div>;
}
function Cta() { return <section className="contact-cta"><h2>Interested in implementing AHA!?</h2><p>Contact the project team to learn more about curriculum access, classroom implementation, or outreach opportunities.</p><Link href="/contact" className="yellow-button">Contact the AHA! Team <ArrowRight size={15}/></Link></section>; }
function CurriculumPage({ kind }: { kind: string }) {
  const hs25 = kind === 'high-school-fall-2025';
  const current = kind === 'high-school-current';
  const title = kind === 'undergraduate' ? 'Undergraduate Curriculum' : kind === 'informal' ? 'Informal / Middle School Curriculum' : hs25 ? 'The AHA! Curriculum for High School Students' : 'The AHA! Curriculum';
  return <div className="page-width">
    <header className={`page-intro ${kind === 'undergraduate' ? 'undergraduate-intro' : ''}`}>
      <div className="curriculum-intro-copy">
        <h1>{title}</h1>
        {kind === 'undergraduate' && <p>The equity-centered AI hardware curriculum is designed based on principles of Universal Design for Learning (UDL) and Culturally Responsive Pedagogy (CRP). The curriculum is divided into two parts. During the first two modules, students are encouraged to participate in various activities to strengthen their understanding of hardware concepts, mainly centered around FPGAs and circuits. During the last two modules, students are encouraged to engage with IoT board applications and its integration with machine learning algorithms.</p>}
        {kind === 'informal' && <><p>Embedded systems, sensors, and edge AI in informal learning settings.</p><p>The curriculum introduces key concepts in embedded systems, data acquisition, multimodal sensing, AI, and edge AI through hands-on, real-world activities.</p></>}
        {hs25 && <><h2>Discover AI Beyond Chatbots Through Hands-On Engineering and Edge Intelligence</h2><h3>Making AI Tangible Through Microelectronics and Real-World Applications</h3><p>This AHA (AI Hardware Adventures) curriculum integrates applications and practices from Computer Engineering and Computer Science to help high school students explore exciting applications of AI beyond chatbots. Designed as a hands-on, 3-hour learning experience for STEM teachers in Florida, the curriculum strengthens students’ AI literacy and STEM knowledge through engaging activities focused on microelectronics and edge intelligence, where AI operates directly on a device rather than in the cloud. Using the University of Florida's AHA board, students investigate how intelligent technologies sense, process, and respond to the world around them. The curriculum is organized into three interactive sessions that provide educators with flexible, ready-to-use materials for introducing real-world AI and engineering concepts in the classroom.</p></>}
        {current && <><h2>Be the Change You Want to See in the World</h2><h3>Building Solutions with Edge Intelligence to Address Real-World Problems</h3><p>Artificial Intelligence can be more than chatbots. It can help protect the environment, improve public health, reduce food waste, and support communities. The AI Hardware Adventures (AHA!) curriculum helps students explore how sensors, microelectronics, embedded systems, and edge intelligence can work together to solve real-world problems.</p><p>Students begin by investigating how smart devices sense and respond to the world. Then, they use the AHA! Board to collect data, explore sensors, train AI models, and design socially meaningful solutions. The curriculum is designed for high school learners and does not require prior programming or hardware experience.</p></>}
      </div>
      {kind === 'undergraduate' && <div className="curriculum-video">
        <iframe
          src="https://www.youtube-nocookie.com/embed/VFADtCPIVPU?rel=0"
          title="AI Across the Curriculum: Andrea Ramirez Salgado"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>}
    </header>
    <h2 className="section-title" style={{textAlign:'left',fontSize:28}}>Curriculum Modules</h2>
    <div className="curriculum-grid">{modules[kind].map((mod,i)=><article className={`module-card ${modules[kind].length===5&&i===4?'wide':''}`} key={mod.label}><span className="module-label">{mod.label}</span><h3>{mod.title}</h3>{mod.intro&&<p><em>{mod.intro}</em></p>}{mod.body&&<p>{mod.body}</p>}{mod.objectives&&<ul>{mod.objectives.map(x=><li key={x}>{x}</li>)}</ul>}</article>)}</div>
    {(kind !== 'undergraduate' || true) && <Cta/>}
  </div>;
}
type Impl = {slug:string; date:string; title:string; description:string; image:string};
const undergraduateImpl: Impl[] = [
  {slug:'fall-2023-undergraduate-courses',date:'Fall 2023',title:'Undergraduate courses at the University of Florida and the University of Kansas.',description:'During the Fall semester of 2023, we implemented our curriculum as an undergraduate elective course within the Electrical and Computer Engineering (ECE) department at the University of Florida and the University of Kansas. In this cycle, we expanded the curriculum to include digital electronics, FPGA-based design, IoT applications, and artificial intelligence.',image:'undergraduate/fall-2023.webp'},
  {slug:'summer-2023-honors-seminar',date:'Summer 2023',title:'Honors seminar in the Student Science Training Program (SSTP) at the University of Florida',description:'In this seminar, we offered an honors seminar to ten high school students in the SSTP summer program. Our activities aimed at balancing simulations, real-life circuit design, FPGA-based games, and collaboration to develop FPGA-based projects to address real-world challenges.',image:'undergraduate/summer-2023-sstp.webp'},
  {slug:'summer-2023-kansas-camp',date:'Summer 2023',title:'Summer camp at the University of Kansas',description:'We organized the Computer Science Summer Camp 2023 at the University of Kansas with 34 enthusiastic high school participants from different states. The camp offered a unique opportunity to get introduced to the intricate world of computer hardware.',image:'undergraduate/summer-2023-ku.webp'},
  {slug:'pilot-test-jan-2023',date:'Pilot test · Jan 2023',title:'After school activity',description:'In this pilot test, 7 high school students were engaged with the initial two games from the curriculum utilizing a Digilent Artyx-7 FPGA. The games covered topics on binary numbers and Boolean logic. During the activity, students uploaded necessary files onto the FPGA.',image:'undergraduate/pilot-test-jan-2023.webp'},
];
const informalImpl: Impl[] = [
  {slug:'cade-teacher-pilot-study',date:'July 2025',title:'CADE Teacher Pilot Study',description:'In July 2025, the project team facilitated teacher pilot study connected to the CADE implementation. Teachers explored AI hardware activities, discussed classroom use, and provided feedback to refine curriculum materials and teaching practice.',image:'informal/cade-teacher-pilot.webp'},
  {slug:'cade-museum-summer-camp',date:'July 2025',title:'CADE Museum Summer Camp',description:'In July 2025, the project team implemented AI hardware activities with middle school students during the CADE Museum Summer Camp. Students participated in hands-on activities that introduced hardware, sensors, and AI-related ideas in an accessible learning environment.',image:'informal/cade-museum-camp.webp'},
];
function ImplementationsPage({ kind }: {kind:'undergraduate'|'informal'}) {
  const data=kind==='undergraduate'?undergraduateImpl:informalImpl;
  return <div className="page-width"><header className="page-intro"><h1>{kind==='informal'?'Implementation – Middle School':'Curriculum Implementations'}</h1><p>{kind==='informal'?'We have implemented the informal curriculum in museum and teacher settings. These implementations provide hands-on experiences with AI hardware, sensors, and edge AI and informed ongoing refinements to the curriculum.':'We have implemented the undergraduate curriculum in a variety of educational settings, including university courses, workshops, and outreach programs. These implementations provide hands-on learning experiences that introduce students to digital electronics, FPGA-based design, IoT applications, and artificial intelligence. Each implementation helps us refine the curriculum and expand its impact to diverse learners.'}</p></header><div className="implementation-grid">{data.map(item=><article className="implementation-card" key={item.slug}><img src={img(item.image)} alt={`${item.date}: ${item.title}`}/><h2>{item.date}. {item.title}</h2><p>{item.description}</p><Link className="text-link" href={`/implementation/${item.slug}`}>Read More <ArrowRight size={14}/></Link></article>)}</div></div>;
}
function HighSchoolImplementationsPage() {
  const photos=[
    {group:'High School — Fall 2025',label:'Implementation photo',image:'high-school-2025/implementation.webp',alt:'Photo supplied in the Fall 2025 high school implementation assets'},
    {group:'High School — Fall 2025',label:'Professional-development photo',image:'high-school-2025/pd.webp',alt:'Photo supplied in the Fall 2025 high school PD assets'},
    {group:'High School — Current AHA!',label:'Professional-development photo 1',image:'high-school-current/pd.webp',alt:'First photo supplied in the current AHA! high school PD assets'},
    {group:'High School — Current AHA!',label:'Professional-development photo 2',image:'high-school-current/pd-2.webp',alt:'Second photo supplied in the current AHA! high school PD assets'},
  ];
  return <div className="page-width"><header className="page-intro"><h1>High School Implementations</h1><p>The supplied files include photographs for the Fall 2025 and current AHA! high-school pathways, but not verified implementation dates, titles, or full descriptions. The photos are shown without invented event details.</p></header>{['High School — Fall 2025','High School — Current AHA!'].map(group=><section className="research-project" key={group}><h2>{group}</h2><div className="implementation-grid">{photos.filter(photo=>photo.group===group).map(photo=><article className="implementation-card" key={photo.image}><img src={img(photo.image)} alt={photo.alt}/><h2>{photo.label}</h2></article>)}</div></section>)}</div>;
}
const peopleData: Record<string,{title:string; sections:{title:string; people:{name:string;role:string;institution:string;photo?:string}[]}[]}> = {
  undergraduate:{title:'Undergraduate Team',sections:[
    {title:'Project Leadership',people:[
      {name:'Dr. Pavlo “Pasha” Antonenko',role:'Principal Investigator',institution:'University of Florida, College of Education',photo:'pashaai.webp'},
      {name:'Dr. Swarup Bhunia',role:'Co-Principal Investigator',institution:'University of Florida, College of Engineering',photo:'swarup.webp'},
      {name:'Dr. Lauren Eutsler',role:'Co-Principal Investigator',institution:'University of North Texas, College of Education',photo:'lauren.webp'},
      {name:'Dr. Tamzidul Hoque',role:'Co-Principal Investigator',institution:'University of Kansas, College of Engineering',photo:'tamzidul.webp'},
      {name:'Dr. Mary Jo Koroly',role:'Co-Principal Investigator',institution:'University of Florida, Center for Precollegiate Education and Training',photo:'mary-j-ai.webp'},
      {name:'Dr. Andrea Ramirez-Salgado',role:'Co-Principal Investigator',institution:'University of Florida, College of Engineering',photo:'andreaai.webp'},
      {name:'Dr. Bradford Davey',role:'External Evaluator',institution:'University of Florida',photo:'brad.webp'},
    ]},
    {title:'Graduate Students',people:[
      {name:'Tanvir Hossain',role:'Graduate Student',institution:'University of Kansas, College of Engineering',photo:'tanvirai.webp'},
      {name:'Woorin Hwang',role:'Graduate Student',institution:'University of Florida, College of Education',photo:'woorinai.webp'},
      {name:'Yessy Eka Ambarwati',role:'Graduate Student',institution:'University of Florida, College of Education',photo:'yessyai.webp'},
    ]},
  ]},
  informal:{title:'Team',sections:[
    {title:'Project Leadership',people:[
      {name:'Dr. Pavlo “Pasha” Antonenko',role:'Principal Investigator',institution:'University of Florida, College of Education',photo:'pashaai.webp'},
      {name:'Dr. Swarup Bhunia',role:'Co-Principal Investigator',institution:'University of Florida, College of Engineering',photo:'swarup.webp'},
      {name:'Dr. Baibhab Chatterjee',role:'Co-Principal Investigator',institution:'University of Florida, College of Engineering'},
      {name:'Dr. Tamzidul Hoque',role:'Co-Principal Investigator',institution:'University of Kansas, College of Engineering',photo:'tamzidul.webp'},
      {name:'Dr. Mary Jo Koroly',role:'Co-Principal Investigator',institution:'University of Florida, Center for Precollegiate Education and Training',photo:'mary-j-ai.webp'},
      {name:'Dr. Lauren Eutsler',role:'Co-Principal Investigator',institution:'University of North Texas, College of Education',photo:'lauren.webp'},
      {name:'Dr. Andrea Ramirez-Salgado',role:'Co-Principal Investigator',institution:'University of Florida, College of Engineering',photo:'andreaai.webp'},
      {name:'Dr. Bradford Davey',role:'External Evaluator',institution:'University of Florida',photo:'brad.webp'},
    ]},
    {title:'Graduate Students',people:[
      {name:'Anany Sharma',role:'Graduate Student',institution:'University of Florida, College of Engineering',photo:'ananyai.webp'},
      {name:'Yessy Eka Ambarwati',role:'Graduate Student',institution:'University of Florida, College of Education',photo:'yessyai.webp'},
      {name:'Woorin Hwang',role:'Graduate Student',institution:'University of Florida, College of Education',photo:'woorinai.webp'},
      {name:'Talar Terzian',role:'Graduate Student',institution:'University of Florida, College of Education',photo:'talarai.webp'},
    ]},
  ]},
  'high-school-fall-2025':{title:'Fall 2025 AHA! High School Implementation Team',sections:[
    {title:'Project Leadership',people:[
      {name:'Dr. Pavlo “Pasha” Antonenko',role:'Principal Investigator',institution:'University of Florida, College of Education',photo:'pashaai.webp'},
      {name:'Dr. Swarup Bhunia',role:'Co-Principal Investigator',institution:'University of Florida, College of Engineering',photo:'swarup.webp'},
      {name:'Dr. Lauren Eutsler',role:'Co-Principal Investigator',institution:'University of North Texas, College of Education',photo:'lauren.webp'},
      {name:'Dr. Tamzidul Hoque',role:'Co-Principal Investigator',institution:'University of Kansas, College of Engineering',photo:'tamzidul.webp'},
      {name:'Dr. Bradford Davey',role:'External Evaluator',institution:'Independent Evaluator',photo:'brad.webp'},
      {name:'Dr. Andrea Ramirez-Salgado',role:'Co-Principal Investigator',institution:'University of Florida, College of Engineering',photo:'andreaai.webp'},
    ]},
    {title:'Graduate Students',people:[
      {name:'Anany Sharma',role:'Graduate Student',institution:'University of Florida, College of Engineering',photo:'ananyai.webp'},
      {name:'Celia Perez-Medina',role:'Graduate Student',institution:'University of Florida, College of Education',photo:'cleliaai.webp'},
      {name:'Megan Barnes',role:'Graduate Student',institution:'University of North Texas, College of Education',photo:'meganai.webp'},
      {name:'Talar Terzian',role:'Graduate Student',institution:'University of Florida, College of Education',photo:'talarai.webp'},
      {name:'Woorin Hwang',role:'Graduate Student',institution:'University of Florida, College of Education',photo:'woorinai.webp'},
      {name:'Yessy Eka Ambarwati',role:'Graduate Student',institution:'University of Florida, College of Education',photo:'yessyai.webp'},
    ]},
  ]},
  'high-school-current':{title:'Our Team',sections:[
    {title:'Project Leadership',people:[
      {name:'Dr. Pavlo “Pasha” Antonenko',role:'Principal Investigator',institution:'University of Florida, College of Education',photo:'pashaai.webp'},
      {name:'Dr. Swarup Bhunia',role:'Co-Principal Investigator',institution:'University of Florida, College of Engineering',photo:'swarup.webp'},
      {name:'Dr. Bradford Davey',role:'External Evaluator',institution:'University of Florida',photo:'brad.webp'},
      {name:'Dr. Lauren Eutsler',role:'Co-Principal Investigator',institution:'University of North Texas, College of Education',photo:'lauren.webp'},
      {name:'Dr. Tamzidul Hoque',role:'Co-Principal Investigator',institution:'University of Kansas, College of Engineering',photo:'tamzidul.webp'},
      {name:'Dr. Andrea Ramirez-Salgado',role:'Co-Principal Investigator',institution:'University of Florida, College of Engineering',photo:'andreaai.webp'},
    ]},
    {title:'Graduate Students',people:[
      {name:'Anany Sharma',role:'Graduate Student',institution:'University of Florida, College of Engineering',photo:'ananyai.webp'},
      {name:'Celia Perez-Medina',role:'Graduate Student',institution:'University of Florida, College of Education',photo:'cleliaai.webp'},
      {name:'Megan Barnes',role:'Graduate Student',institution:'University of North Texas, College of Education',photo:'meganai.webp'},
      {name:'Maryam Babaee',role:'Graduate Student',institution:'University of Florida, College of Education',photo:'maryamai.webp'},
      {name:'Woorin Hwang',role:'Graduate Student',institution:'University of Florida, College of Education',photo:'woorinai.webp'},
      {name:'Yessy Eka Ambarwati',role:'Graduate Student',institution:'University of Florida, College of Education',photo:'yessyai.webp'},
    ]},
  ]},
};
const teamContacts:Record<string,{email?:string;linkedin?:string}> = {
  'Dr. Pavlo “Pasha” Antonenko':{email:'p.antonenko@coe.ufl.edu',linkedin:'https://linkedin.com/in/pasha-ant'},
  'Dr. Swarup Bhunia':{email:'swarup@ece.ufl.edu',linkedin:'https://linkedin.com/in/swarup-bhunia-1281825'},
  'Dr. Lauren Eutsler':{email:'Lauren.eutsler@unt.edu',linkedin:'https://linkedin.com/in/leutsler/'},
  'Dr. Bradford Davey':{email:'bdavey01@gmail.com',linkedin:'https://linkedin.com/in/bradford-davey-27243b5'},
  'Dr. Andrea Ramirez-Salgado':{email:'aramirezsalgado@ufl.edu',linkedin:'https://linkedin.com/in/andrea-ramirez-salgado-phd-045057273'},
  'Anany Sharma':{email:'anany.sharma@ufl.edu'},
  'Celia Perez-Medina':{email:'cperezmedina@ufl.edu'},
  'Megan Barnes':{email:'MeganBarnes2@my.unt.edu',linkedin:'https://linkedin.com/in/meganlibrarian/'},
  'Woorin Hwang':{email:'hwangwoorin@ufl.edu',linkedin:'https://linkedin.com/in/woorin-h/'},
  'Talar Terzian':{email:'tterzian@ufl.edu'},
  'Yessy Eka Ambarwati':{email:'yambarwati@ufl.edu',linkedin:'https://linkedin.com/in/yessy-eka-ambarwati/'},
};
function PersonCard({person}:{person:{name:string;role:string;institution:string;photo?:string}}) {
  const contacts=teamContacts[person.name]??{};
  const icon=(href:string|undefined,label:string,Icon:typeof Mail)=>
    href?<a href={label==='Email'?`mailto:${href}`:href} aria-label={`${label} for ${person.name}`} target={label==='Email'?undefined:'_blank'} rel={label==='Email'?undefined:'noreferrer'}><Icon aria-hidden="true"/></a>:<span role="img" aria-label={`${label} not supplied for ${person.name}`}><Icon aria-hidden="true"/></span>;
  return <article className="person-card">{person.photo&&<img src={img(`team/${person.photo}`)} alt={`${person.name} portrait`}/>}<span className="role">{person.role}</span><h3>{person.name}</h3><p>{person.institution}</p><div className="profile-links" aria-label={`${person.name} contact links`}>
    {icon(contacts.email,'Email',Mail)}{icon(contacts.linkedin,'LinkedIn',Linkedin)}{icon(undefined,'Google Scholar',GraduationCap)}
  </div></article>;
}
function TeamPage({kind}:{kind:string}) {
  const data=peopleData[kind];
  return <div className="page-width"><header className="page-intro"><h1>{data.title}</h1>{kind==='informal'&&<p>Meet the project team leading AI Hardware Adventures (AHA!), including faculty investigators, graduate students, and our valued collaborators.</p>}</header>
    {data.sections.map(section=><section className="team-section" key={section.title}><h2>{section.title}</h2><div className="team-grid">{[...section.people].sort((a,b)=>{
      const externalEvaluatorOrder=(person:typeof a)=>person.role==='External Evaluator'?1:0;
      return externalEvaluatorOrder(a)-externalEvaluatorOrder(b) || a.name.split(' ').at(-1)!.localeCompare(b.name.split(' ').at(-1)!);
    }).map(person=><PersonCard key={person.name} person={person}/>)}</div></section>)}
    {kind==='undergraduate'&&<section className="special-box"><h2>Special Thanks To</h2><ul>{Array.from({length:4},(_,i)=><li key={i}>Name and role to be added</li>)}</ul></section>}
    {kind==='informal'&&<section className="special-box"><h2>Special Thanks To</h2><p><strong>Nicole Dominguez</strong> · Education Program Manager · Cade Museum, Gainesville, Florida</p><p><strong>Dilon Donihue</strong> · Facilitator · Cade Museum, Gainesville, Florida</p></section>}
    {kind==='high-school-current'&&<><section className="special-box"><h2>Previous Contributors</h2><ul>{Array.from({length:4},(_,i)=><li key={i}>Name and role to be added</li>)}</ul></section><section className="special-box"><h2>Special Thanks To</h2><ul>{Array.from({length:2},(_,i)=><li key={i}>Name and role to be added</li>)}</ul></section></>}
  </div>;
}
function ImplementationDetail({slug}:{slug:string}) {
  const item=[...undergraduateImpl,...informalImpl].find(x=>x.slug===slug);
  if(!item) return <NotFound/>;
  return <div className="page-width"><header className="page-intro"><Link className="text-link" href={slug.startsWith('cade-')?'/informal-implementations':'/undergraduate-implementations'}>← Back to implementations</Link><h1>{item.date}. {item.title}</h1></header><article className="detail-copy"><img src={img(item.image)} alt={`${item.date}: ${item.title}`} style={{width:'100%',maxHeight:430,objectFit:'cover',borderRadius:10,marginBottom:18}}/><p>{item.description}</p></article></div>;
}
const projectNames=['High School — Fall 2025','Informal / Middle School','Undergraduate','High School — Current AHA!'];
function ResearchPage() {
  return <div className="page-width">
    <header className="page-intro center-intro"><h1>Research</h1><p>Publications and presentations from our AI hardware education projects.</p></header>
    <nav className="research-tabs" aria-label="Research projects">{projectNames.map((name,i)=><a key={name} href={`#research-${i}`}>{name}</a>)}</nav>
    {projectNames.map((name,i)=>{
      const groups=i===0?highSchoolFall2025Research:i===1?informalResearch:i===2?undergraduateResearch:null;
      return <section id={`research-${i}`} className="research-project" key={name}>
        <h2>{name}</h2>
        {groups?<div className="research-categories">{groups.map(group=><section className="research-category" key={group.category}>
          <h3>{group.category}</h3>
          {group.items.map((item,index)=><article className="citation" key={`${group.category}-${index}`}>
            <p>{item.citation}</p>{(item.links??(item.href?[{label:'Read More',href:item.href}]:[])).map(link=><a href={link.href} target="_blank" rel="noreferrer" key={link.href}>{link.label} <ArrowRight size={13}/></a>)}
          </article>)}
        </section>)}</div>:<div className="missing-note"><strong>Research records not supplied.</strong> No citations or publication details for this project group were included in the supplied source materials.</div>}
      </section>;
    })}
  </div>;
}
function ContactPage() {
  const [notice,setNotice]=useState('');
  function submit(event:FormEvent<HTMLFormElement>) { event.preventDefault(); const form=event.currentTarget; if(!form.reportValidity()) return; setNotice('Your information has not been sent. A message delivery service must be configured before this form can deliver inquiries.'); }
  return <div className="page-width contact-layout"><section><h1>Contact Us</h1><p className="invite">Reach out if you are interested in the AHA curriculum, classroom implementation, research collaboration, a project demo, or general questions about AI hardware education.</p><div className="info-grid"><article className="info-card"><div className="round-icon"><Info size={19}/></div><h2>Project inquiries</h2><p>Curriculum access, demos, implementation, and collaboration requests.</p></article><article className="info-card"><div className="round-icon"><MapPin size={19}/></div><h2>University of Florida</h2><p>College of Education, Gainesville, Florida.</p></article></div></section>
    <form className="contact-form" onSubmit={submit}><h2><Mail size={18} color="#28d5d8" style={{verticalAlign:'-3px',marginRight:9}}/>Send us a message</h2><p className="form-note">Required fields are marked with an asterisk.</p>
      <label htmlFor="name">Your name *</label><input id="name" name="name" autoComplete="name" required/>
      <label htmlFor="email">Your email *</label><input id="email" name="email" type="email" autoComplete="email" required/>
      <label htmlFor="reason">Reason for contacting us *</label><select id="reason" name="reason" required defaultValue=""><option value="" disabled>Select an option</option><option>Curriculum access</option><option>Classroom implementation</option><option>Research collaboration</option><option>Project demo</option><option>General question</option></select>
      <label htmlFor="subject">Subject *</label><input id="subject" name="subject" required/>
      <label htmlFor="message">Your message *</label><textarea id="message" name="message" required/>
      <button className="yellow-button form-submit" type="submit">Submit message <ArrowRight size={15}/></button>
      <p className="form-disclosure">Your information will only be used to respond to your inquiry. Message delivery is not configured; this form will not send or store your message.</p>
      {notice&&<p role="status" className="form-disclosure">{notice}</p>}
    </form></div>;
}
function NotFound() { return <div className="page-width page-intro"><h1>Page not found</h1><p>This page is not available.</p><Link href="/" className="text-link">Return home <ArrowRight size={15}/></Link></div>; }
function App() {
  const [path]=useLocation();
  let body:ReactNode;
  if(path==='/') body=<HomePage/>;
  else if(path==='/curriculum') body=<CurriculumOverview/>;
  else if(path==='/undergraduate-curriculum') body=<CurriculumPage kind="undergraduate"/>;
  else if(path==='/informal-curriculum') body=<CurriculumPage kind="informal"/>;
  else if(path==='/high-school-fall-2025-curriculum') body=<CurriculumPage kind="high-school-fall-2025"/>;
  else if(path==='/high-school-current-curriculum') body=<CurriculumPage kind="high-school-current"/>;
  else if(path==='/undergraduate-implementations') body=<ImplementationsPage kind="undergraduate"/>;
  else if(path==='/informal-implementations') body=<ImplementationsPage kind="informal"/>;
   else if(path==='/high-school-implementations') body=<HighSchoolImplementationsPage/>;
  else if(path==='/undergraduate-team') body=<TeamPage kind="undergraduate"/>;
  else if(path==='/informal-team') body=<TeamPage kind="informal"/>;
  else if(path==='/high-school-fall-2025-team') body=<TeamPage kind="high-school-fall-2025"/>;
  else if(path==='/high-school-current-team') body=<TeamPage kind="high-school-current"/>;
  else if(path==='/research') body=<ResearchPage/>;
  else if(path==='/contact') body=<ContactPage/>;
  else if(path.startsWith('/implementation/')) body=<ImplementationDetail slug={path.replace('/implementation/','')}/>;
  else body=<NotFound/>;
  return <Shell path={path}>{body}</Shell>;
}
export default App;
