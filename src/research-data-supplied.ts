export type ResearchCitation = {
  citation: string;
  href?: string;
  links?: { label: string; href: string }[];
};

export type ResearchCategory = {
  category: string;
  items: ResearchCitation[];
};

export const highSchoolFall2025Research: ResearchCategory[] = [
  {
    category: 'Demonstration',
    items: [
      { citation: 'Terzian, T., & Perez-Medina, C. (2025, October 24). The AHA project: Teaching with edge intelligence powered microelectronics [Demonstration]. 2025 AI Days, University of Florida, Gainesville, FL.' },
      { citation: 'Perez-Medina, C., Ambarwati, Y. E., Hwang, W. (2025, December 4–5). The AHA project: Teaching with edge intelligence powered microelectronics [Demonstration]. 2025 IoT Conference, Gainesville, FL, United States.' },
      { citation: 'Hwang, W., Ambarwati, Y. E., & Perez-Medina, C. The AHA project: Teaching with edge intelligence powered microelectronics [Demonstration]. 2025 AI Days, University of Florida, Gainesville, FL, United States.' },
      { citation: 'Babaee M., Hwang, W., Perez-Medina, C., Sharma, A., Ambarwati, Y., Terzian, T., Eutsler, L., Barnes, Bhunia, S., Ramirez-Salgado, A., Antonenko, P. (2026, March). The AHA project: Introducing AI and microelectronics for social good [Demonstration]. In National AI Literacy Day, Gainesville, FL, United States.' },
      { citation: 'Babaae, M. & Ambarwati, Y. E. (2026). Let’s meet AHA! Board! [Demonstration]. 2026 Norton STEAM Night, Norton Elementary School, Gainesville, FL, United States.' },
    ],
  },
  {
    category: 'Roundtable Presentation',
    items: [
      { citation: 'Eutsler, L., Barnes, M., Ramirez-Salgado, A., Ambarwati, Y., Hwang, W., Terzian, T., Sharma, A., Hoque, T., Bhunia, S., & Antonenko, P. (April 10, 2026). Listening to teachers: Adapting a microelectronics curriculum through participatory design [Roundtable presentation]. American Educational Research Association, Los Angeles, CA.' },
      { citation: 'Perez-Medina, M., Babaee M., Hwang, W., Ambarwati, Y., Terzian, T., Sharma, A., Eutsler, L., Barnes, Bhunia, S., Ramirez-Salgado, A., Antonenko, P. (2026, March). Integrating hardware-based edge intelligence into STEM classrooms [Roundtable presentation]. In National AI Literacy Day, Gainesville, FL, United States.' },
    ],
  },
  {
    category: 'Poster Presentation',
    items: [
      { citation: 'Terzian, T., Perez-Medina, C., Hwang, W., Ambarwati, Y. E., Sharma, A., Eutsler, L., Barnes, M., Koroly, M.J., Davey, B., Bhunia, S., Hossain, T., Hoque, T., Ramirez-Salgado, A., & Antonenko, P. (2025, October 24). The AHA project: AI hardware adventures [Poster presentation]. 2025 AI Days, University of Florida, Gainesville, FL.' },
      { citation: 'Hwang, W., Perez-Medina, C., Sharma, A., Ambarwati, Y., Terzian, T., Leya, J., Mary Jo K., Eutsler, L., Barnes, M., Bhunia, S., Ramirez-Salgado, A., & Antonenko, P. (2026, March). Beyond the blackbox of AI: Shifting high schoolers’ AI conceptions through hardware-based edge intelligence [Poster presentation]. In National AI Literacy Day, Gainesville, FL, United States. People’s Choice Award.' },
      { citation: 'Barnes, M., Perez, C., Hwang, W., Ambarwati, Y., Sharma, A., Terzian, T., Babaee, M., Eutsler, L., Salgado, A., Antonenko, P., Donihue, D., Bhunia, S., and Chatterjee, B. (2026, April 10-11). Pioneering a comprehensive AI and microelectronics curriculum in high school engineering classes [Poster]. InfoFORCE. Denton, TX.', href: 'https://ci.unt.edu/inforce/research-posters.html' },
    ],
  },
  {
    category: 'Paper Presentation',
    items: [
      { citation: 'Ramirez-Salgado, A., Eutsler, L., & Antonenko, P. (2025, December 2). Reimagining AI education: Local, tangible, and personally meaningful. NeurIPS-25, San Diego, CA, United States.' },
      { citation: 'Barnes, M., Perez, C., Hwang, W., Ambarwati, Y., Sharma, A., Terzian, T., Babaee, M., Eutsler, L., Salgado, A., Antonenko, P., Donihue, D., Bhunia, S., and Chatterjee, B. (2026, April 10-11). Pioneering a comprehensive AI and microelectronics curriculum in high school engineering classes [Lightening Talk]. InfoFORCE. Denton, TX.', href: 'https://ci.unt.edu/inforce/research-posters.html' },
      { citation: 'Hwang, W., Ramirez-Salgado, A., Perez-Medina, C., Ambarwati, Y., Terzian, T., Sharma, A., Joykutty, L., Koroly M. J., Bhunia, S., Hoque, T., & Antonenko, P. (In review). Edge AI Learning and High School Students’ Interest Development. At the Annual Meeting of the American Educational Research Association (AERA), Canada.' },
      { citation: 'Eutsler, L., Barnes, M., Ramirez-Salgado, A., Ambarwati, Y., Hwang, W., Terzian, T., Sharma, A., Hoque, T., Bhunia, S., & Antonenko, P. (2026, April 8-12). Listening to teachers: Adapting a microelectronics curriculum through participatory design. At the Annual Meeting of the American Educational Research Association (AERA), Los Angeles, CA, United States.', href: 'https://drive.google.com/file/d/1szOaLQr-vjayqMy_hWlkoZlnaP5W09FL/view?usp=sharing' },
    ],
  },
  {
    category: 'Conference Proceedings',
    items: [
      { citation: 'Hwang, W., Perez-Medina, C., Ambarwati, Y. E., Terzian, T., Sharma, A., Barnes, M., Ramirez-Salgado, A., Eutsler, L., Bhunia, S., & Antonenko, P. (2026, June). In-Service STEM teachers’ AI conceptual change through hardware-based edge intelligence activities. In 2026 American Society of Engineering Education (ASEE) Annual Conference & Exposition, Charlotte, NC, United States.', href: 'https://peer.asee.org/59956' },
      { citation: 'Hwang, W., Perez-Medina, C., Ambarwati, Y. E., Terzian, T., Sharma, A., Barnes, M., Ramirez-Salgado, A., Eutsler, L., Bhunia, S., & Antonenko, P. (2026, June). WIP: Leveraging embedded system and edge Intelligence to foster high school students’ AI conceptual change. In 2026 American Society of Engineering Education (ASEE) Annual Conference & Exposition, Charlotte, NC.', href: 'https://peer.asee.org/61056' },
      { citation: 'Ramirez-Salgado, A., Antonenko, P., Eutsler, L., Bhunia, S., & Hoque, T. (2026, June). NSF DRK 12: Cultivating engineering identities through altruistic applications of embedded intelligence and microelectronics. In 2026 American Society of Engineering Education (ASEE) Annual Conference & Exposition, Charlotte, NC.', href: 'https://peer.asee.org/60261' },
    ],
  },
];

export const informalResearch: ResearchCategory[] = [
  {
    category: 'Poster Presentation',
    items: [
      { citation: 'Ambarwati, Y. E., Ramirez-Salgado, A., Hwang, W., Terzian, T., Perez-Medina, C., Sharma, A., Eutsler, L., Barnes, M., Dominguez, N., Donihue, D., Bhunia, S., Chatterjee, B., & Antonenko, P. (2025, December 4–5). Fostering situational interest in microelectronics and edge AI among middle schoolers in a museum program [Poster presentation]. In 2025 IoT Conference, Gainesville, FL, United States.' },
      { citation: 'Ambarwati, Y. E., Ramirez-Salgado, A., Hwang, W., Terzian, T., Sharma, A., Eutsler, L., Barnes, M., Dominguez, N., Donihue, D., Bhunia, S., Chatterjee, B., & Antonenko, P. (2026, April 19–22). Scaffolding teenagers’ AI career aspirations in a microelectronics and edge intelligence museum summer program [Poster presentation]. In the National Association for Research in Science Teaching (NARST), Seattle, WA, United States.' },
      { citation: 'Ambarwati, Y. E., Ramirez-Salgado, A., Hwang, W., Terzian, T., Sharma, A., Eutsler, L., Barnes, M., Dominguez, N., Donihue, D., Bhunia, S., Chatterjee, B., & Antonenko, P. (2026, March). Exploring situational interest in microelectronics and edge AI among middle schoolers in a museum program [Poster presentation]. In National AI Literacy Day, Gainesville, FL, United States.' },
    ],
  },
  {
    category: 'Paper Presentation',
    items: [
      { citation: 'Ramirez-Salgado, A., Eutsler, L., Sharma, A., Hwang, W., Ambarwati, Y. E., Terzian, T., Barnes, M., Dominguez, N., Donihue, D., Bhunia, S., Hoque, T., & Antonenko, P. (2026, April 8-12). Engaging teenagers in community-centered edge AI projects. At the Annual Meeting of the American Educational Research Association (AERA), Los Angeles, CA, United States.' },
      { citation: 'Ambarwati, Y. E., Ramirez-Salgado, A., Hwang, W., Terzian, T., Sharma, A., Eutsler, L., Barnes, M., Dominguez, N., Donihue, D., Bhunia, S., Chatterjee, B., & Antonenko, P. (2026). Exploring gender dynamics and interest development in a museum-based microelectronics and edge AI program. In 2026 AECT International Convention, Chicago, IL, United States.' },
      { citation: 'Ambarwati, Y. E., Ramirez-Salgado, A., Hwang, W., Terzian, T., Sharma, A., Dominguez, N., Donihue, D., Bhunia, S., Chatterjee, B., & Antonenko, P. (In review). Exploring How Informal AI Learning Relates to Adolescents’ Career Aspiration: An SCCT Perspective. In Annual Meeting of the American Educational Research Association (AERA), Canada.' },
    ],
  },
  {
    category: 'Conference Proceedings',
    items: [
      { citation: 'Ambarwati, Y. E., Ramirez-Salgado, A., Hwang, W., Terzian, T., Sharma, A., Eutsler, L., Barnes, M., Dominguez, N., Donihue, D., Bhunia, S., Chatterjee, B., & Antonenko, P. (June 21–24, 2026). Exploring situational interest in microelectronics and edge AI among middle schoolers in a museum program. In 2026 American Society of Engineering Education (ASEE) Annual Conference & Exposition, Charlotte, NC, United States.', href: 'https://peer.asee.org/59988' },
      { citation: 'Ramirez-Salgado, A., Eutsler, L., Sharma, A., Hwang, W., Ambarwati, Y. E., Terzian, T., Barnes, M., Dominguez, N., Donihue, D., Bhunia, S., Hoque, T., & Antonenko, P. (2026, June). Fostering teenagers’ understanding of community centered edge AI systems. In 2026 American Society of Engineering Education (ASEE) Annual Conference & Exposition, Charlotte, NC.', href: 'https://peer.asee.org/58770' },
    ],
  },
];

export const undergraduateResearch: ResearchCategory[] = [
  {
    category: 'Research Presentations',
    items: [
      { citation: 'Hossain, T., Ramirez-Salgado, A., Bhunia, S., Koroly, M. J., Antonenko P., & Hoque, T. (2023). Peek Inside the Box: Gamified Learning of Computing Hardware Fundamentals. Capitol Graduate Research Summit (CGRS). Topeka, Kansas.' },
      { citation: 'Hossain, T., Ramirez-Salgado, A., Bhunia, S., Koroly, M. J., Antonenko P., & Hoque, T. (2023). Peek Inside the Box: Gamified Learning of Computing Hardware Fundamentals. Research Showcase organized by the Graduate Engineering Association of the University of Kansas.' },
    ],
  },
  {
    category: 'Paper Presentation',
    items: [
      { citation: 'Ramirez-Salgado, A., & Antonenko, P. (2024, June). Exploring Outcome Expectations in Artificial Intelligence Hardware Among First-Year Engineering Students. [Paper]. American Society for Engineering Education (ASEE) annual conference & exposition, Portland, Oregon.' },
      { citation: 'Ramírez-Salgado, A., Xu, Z., Wusylko, C., Abramowitz, B., & Antonenko, P. (2024, April). Understanding engineering identity in K-12 education: A systematic literature review. [Paper]. American Educational Research Association (AERA) annual meeting, Philadelphia, PA.' },
      { citation: 'Ramirez-Salgado, A., & Antonenko, P. (2023, October). Balancing Collaboration and Competition in Gamified Engineering Education. [Paper]. Association for Educational Communications and Technology (AECT) annual convention, Orlando, FL, United States.' },
    ],
  },
  {
    category: 'Poster Presentation',
    items: [
      { citation: 'Ramirez-Salgado, A., Hossain, T., Hoque, T., Bhunia, S., Koroly, M. J., Davey, B., & Antonenko, P. (2024, June). Supporting Hardware Engineering Career Choice in First-Year Engineering Students. [Poster]. American Society for Engineering Education (ASEE) annual conference & exposition, Portland, Oregon.' },
      { citation: 'Ramírez-Salgado, A., & Antonenko, P. (2024, March). Cultivating hardware engineering interest in high school students using hands-on learning. [Poster]. National Association for Research in Science Teaching (NARST) annual meeting, Denver, CO.', href: 'https://education.ufl.edu/aihardware/research/cultivating-hardware-engineering-interest-in-high-school-students-using-hands-on-learning/' },
      { citation: 'Ramírez-Salgado, A., & Antonenko, P. (2023, November). Exploring AI hardware applications in experiential learning environments. [Poster]. Shaping AI and Emerging Technologies to Empower Learning Communities Convening organized by the Center for Integrative Research in Computing and Learning Sciences (CIRCLS). Alexandria, VA.', href: 'https://education.ufl.edu/aihardware/exploring-ai-hardware-applications-in-experiential-learning-environments/' },
      { citation: 'Ramirez-Salgado, A., Hossain, T., Hoque, T., Bhunia, S., Koroly, M. J., Davey, B., & Antonenko, P. (2023, June). Board 265: Engaging Students in Exploring Computer Hardware Fundamentals Using FPGA Board Games. [Poster]. American Society for Engineering Education (ASEE) annual conference & exposition, Baltimore, Maryland.', links: [{ label: 'Project page', href: 'https://education.ufl.edu/aihardware/engaging-undergraduate-and-high-school-students-in-hands-on-computer-hardware-fundamentals-using-fpga-board-games/' }, { label: 'ASEE proceedings', href: 'https://peer.asee.org/42715' }] },
    ],
  },
];
