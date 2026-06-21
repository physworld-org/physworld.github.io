export const workshop = {
  acronym: "PhysWorldAI",
  title: "1st Workshop on Physical World AI",
  name: "Physical World AI: Geometry, Characteristics, and Multimodal Sensing",
  shortName: "PhysWorldAI",
  tagline:
    "Beyond pixels: understanding the physical world through geometry, characteristics, and multimodal sensing.",
  edition: "1st",
  format: "Half day",
  expectedAttendees: "200-300 attendees",
  posterBoards: "20 poster boards",
  locations: "Atlanta, Paris, Sydney",
  specialRequests: "Streaming and recording",
  submissions: "Long papers up to 8 pages and extended abstracts up to 4 pages, in NeurIPS 2026 style.",
  review: "Double-blind review via OpenReview with at least 3 reviewers per paper.",
  archivalStatus: "Non-archival; accepted papers are posted on the workshop website.",
  dates: [
    { label: "Submission deadline", value: "2026-08-29", display: "August 29, 2026" },
    { label: "Notification", value: "2026-09-26", display: "September 26, 2026" },
    { label: "Camera-ready", value: "2026-10-26", display: "October 26, 2026" },
  ],
};

export const topics = [
  {
    title: "Physical Geometry",
    body:
      "3D/4D reconstruction, articulated and deformable scene understanding, geometry-aware world models, and physically grounded view synthesis.",
  },
  {
    title: "Physical Characteristics",
    body:
      "Material and physical property estimation, mass, friction, stiffness, elasticity, deformability, affordances, contact-rich interaction, differentiable simulation, and generative models of physical dynamics.",
  },
  {
    title: "Physical Sensors",
    body:
      "Multimodal sensing and fusion with tactile, force/torque, proprioceptive, RF, audio, depth, IMU, and event-based signals.",
  },
  {
    title: "Cross-cutting",
    body:
      "Embodied world models, robot manipulation, sim-to-real transfer, multimodal simulators, benchmarks, datasets, evaluation protocols, and responsible deployment.",
  },
];

export const organizers = [
  {
    name: "Kaichen Zhou",
    affiliation: "Massachusetts Institute of Technology / Harvard University",
    tag: "Lead organizer",
    focus: "Physical world AI, 3D/4D vision, multimodal sensing, embodied intelligence, and robotic world models.",
    image: "assets/profile_organizer/kaichen-zhou.jpg",
    url: "https://kaichen-z.github.io/",
  },
  {
    name: "Ruojin Cai",
    affiliation: "Harvard University",
    tag: "Organizer",
    focus: "3D computer vision, spatial intelligence, and world models grounded in the real world.",
    image: "assets/profile_organizer/ruojin-cai.jpg",
    url: "https://ruojincai.github.io/",
  },
  {
    name: "Jianqing Zheng",
    affiliation: "University of Oxford",
    tag: "Organizer",
    focus: "3D/4D reconstruction, deformation modelling, multimodal sensor fusion, and surgical robotics.",
    image: "assets/profile_organizer/jianqing-zheng.jpg",
    url: "https://jianqingzheng.github.io/",
  },
  {
    name: "Congyue Deng",
    affiliation: "Massachusetts Institute of Technology",
    tag: "Organizer",
    focus: "3D computer vision, geometric deep learning, and physical representation learning.",
    image: "assets/profile_organizer/congyue-deng.jpg",
    url: "https://congyue-deng.github.io/",
  },
  {
    name: "Amir Jamaludin",
    affiliation: "University of Oxford",
    tag: "Organizer",
    focus: "Multimodal learning, foundation models, medical image understanding, and large-scale biomedical datasets.",
    image: "assets/profile_organizer/amir-jamaludin.jpg",
    url: "https://www.robots.ox.ac.uk/~vgg/people.html",
  },
  {
    name: "Yining Hong",
    affiliation: "Stanford University",
    tag: "Organizer",
    focus: "Computer vision, multimodal learning, physical and commonsense reasoning, and embodied agents.",
    image: "assets/profile_organizer/yining-hong.jpg",
    url: "https://evelinehong.github.io/",
  },
  {
    name: "Shangzhe Wu",
    affiliation: "University of Cambridge",
    tag: "Organizer",
    focus: "3D computer vision, inverse graphics, dynamic 3D world modeling, and multimodal observations.",
    image: "assets/profile_organizer/shangzhe-wu.jpg",
    url: "https://www.elliottwu.com/",
  },
  {
    name: "Mengyu Wang",
    affiliation: "Harvard Medical School",
    tag: "Organizer",
    focus: "Generative AI, multimodal models, AI for robotics, AI for genomics, and medical AI applications.",
    image: "assets/profile_organizer/mengyu-wang.jpg",
    url: "https://wang.hms.harvard.edu/team/dr-wang/",
  },
];

export const speakers = [
  {
    name: "Anima Anandkumar",
    affiliation: "Caltech",
    title: "Bren Professor of Computing and Mathematical Sciences",
    pillar: "Physical simulation and world models",
    image: "assets/profile_speaker/anima-anandkumar.jpg",
    url: "https://www.eas.caltech.edu/people/anima",
    bio:
      "Her work on neural operators and AI for scientific computing connects physical simulation, multiscale phenomena, and scalable world modeling.",
  },
  {
    name: "Noah Snavely",
    affiliation: "Cornell University / Cornell Tech / Google DeepMind",
    title: "Professor of Computer Science",
    pillar: "Physical geometry",
    image: "assets/profile_speaker/noah-snavely.jpg",
    url: "https://www.cs.cornell.edu/~snavely/",
    bio:
      "His research spans 3D understanding, scene reconstruction, neural rendering, and large-scale visual collections.",
  },
  {
    name: "Chelsea Finn",
    affiliation: "Stanford University",
    title: "Assistant Professor in Computer Science and Electrical Engineering",
    pillar: "Embodied intelligence",
    image: "assets/profile_speaker/chelsea-finn.jpg",
    url: "https://ai.stanford.edu/~cbfinn/",
    bio:
      "Her work advances robot learning, reinforcement learning, meta-learning, and generalizable policies for embodied agents.",
  },
  {
    name: "William T. Freeman",
    affiliation: "Massachusetts Institute of Technology",
    title: "Thomas and Gerd Perkins Professor of EECS",
    pillar: "Cross-cutting physical signals",
    image: "assets/profile_speaker/william-freeman.jpg",
    url: "https://www.csail.mit.edu/person/william-freeman",
    bio:
      "His research spans computer vision, computational photography, motion understanding, and audio-visual perception.",
  },
];

export const schedule = [
  { time: "8:45", title: "Introduction and Opening Remarks" },
  { time: "9:00", title: "Invited Talk 1 + Q&A", detail: "Geometry" },
  { time: "9:35", title: "Invited Talk 2 + Q&A", detail: "Characteristics" },
  { time: "10:10", title: "Coffee Break" },
  { time: "10:25", title: "Invited Talk 3 + Q&A", detail: "Sensors" },
  { time: "11:00", title: "Invited Talk 4 + Q&A", detail: "Cross-cutting" },
  { time: "11:35", title: "Contributed Paper Spotlights" },
  { time: "11:55", title: "Posters + Live Demos" },
  { time: "12:40", title: "Synthesis Panel + Closing Remarks" },
];

export const sponsors = [
  {
    name: "2077AI",
    commitment: "$3,000",
    image: "assets/sponsor/2077ai.png",
    url: "https://www.2077ai.com/",
  },
  {
    name: "CyberBrain",
    commitment: "$1,000",
    image: "assets/sponsor/cyberbrain_new.png",
    url: "https://www.cyberbrain.ai/",
  },
];
