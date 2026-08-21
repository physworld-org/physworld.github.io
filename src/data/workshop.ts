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
  location: "Atlanta, Georgia",
  eventDates: "Dec 12 or 13, 2026 (TBD)",
  displayDates: "Dec 12 or 13 (TBD)",
  specialRequests: "Streaming and recording",
  submissions: "Long papers up to 8 pages and extended abstracts up to 4 pages, in NeurIPS 2026 style.",
  review: "Double-blind review via OpenReview.",
  archivalStatus: "Archival & Non-archival; accepted papers will also be posted on the workshop website.",
  submissionUrl:
    "https://openreview.net/group?id=NeurIPS.cc/2026/Workshop/PhysWorldAI#tab-recent-activity",
  dates: [
    { label: "Archival paper", value: "2026-09-09", display: "September 09, 2026" },
    { label: "Notification", value: "2026-10-09", display: "October 09, 2026" },
    { label: "Camera-ready", value: "2026-10-19", display: "October 19, 2026" },
    { label: "Non-archival paper", value: "2026-10-29", display: "October 29, 2026" },
    { label: "Notification", value: "2026-11-09", display: "November 09, 2026" },
    { label: "Camera-ready", value: "2026-11-19", display: "November 19, 2026" },
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
    tag: "Organizer (Contact person)",
    focus: "Physical world AI, multimodal sensing, and embodied intelligence.",
    image: "assets/profile_organizer/kaichen-zhou.jpg",
    url: "https://kaichen-z.github.io/",
  },
  {
    name: "Ruojin Cai",
    affiliation: "Harvard University",
    tag: "Organizer",
    focus: "3D vision, spatial intelligence, and real-world models.",
    image: "assets/profile_organizer/ruojin-cai.jpg",
    url: "https://ruojincai.github.io/",
  },
  {
    name: "Jianqing Zheng",
    affiliation: "University of Oxford",
    tag: "Organizer",
    focus: "3D/4D reconstruction, sensor fusion, and surgical robotics.",
    image: "assets/profile_organizer/jianqing-zheng.jpg",
    url: "https://jianqingzheng.github.io/",
  },
  {
    name: "Congyue Deng",
    affiliation: "Massachusetts Institute of Technology",
    tag: "Organizer",
    focus: "3D vision, geometric learning, and physical representations.",
    image: "assets/profile_organizer/congyue-deng.jpg",
    url: "https://congyue-deng.github.io/",
  },
  {
    name: "Amir Jamaludin",
    affiliation: "University of Oxford",
    tag: "Organizer",
    focus: "Multimodal foundation models and biomedical image understanding.",
    image: "assets/profile_organizer/amir-jamaludin.jpg",
    url: "https://www.robots.ox.ac.uk/~vgg/people.html",
  },
  {
    name: "Yining Hong",
    affiliation: "Stanford University",
    tag: "Organizer",
    focus: "Multimodal reasoning, computer vision, and embodied agents.",
    image: "assets/profile_organizer/yining-hong.jpg",
    url: "https://evelinehong.github.io/",
  },
  {
    name: "Shangzhe Wu",
    affiliation: "University of Cambridge",
    tag: "Organizer",
    focus: "3D vision, inverse graphics, and dynamic world modeling.",
    image: "assets/profile_organizer/shangzhe-wu.jpg",
    url: "https://www.elliottwu.com/",
  },
  {
    name: "Rao Fu",
    affiliation: "Brown University",
    tag: "Organizer",
    focus: "3D vision, tactile sensing, and dexterous robotics.",
    image: "assets/profile_organizer/rao-fu.jpg",
    url: "https://freddierao.github.io/",
  },
  {
    name: "Fangneng Zhan",
    affiliation: "Hong Kong University of Science and Technology",
    tag: "Organizer",
    focus: "Generative 3D modeling, neural rendering, and embodied robotics.",
    image: "assets/profile_organizer/fangneng-zhan.jpg",
    url: "https://fnzhan.com/",
  },
  {
    name: "Wei Dai",
    affiliation: "Massachusetts Institute of Technology",
    tag: "Organizer",
    focus: "Multimodal learning, foundation models, and healthcare AI.",
    image: "assets/profile_organizer/wei-dai.jpg",
    url: "https://dd.works/",
  },
  {
    name: "Tiange Xiang",
    affiliation: "Stanford University / Massachusetts Institute of Technology",
    tag: "Organizer",
    focus: "3D vision, generative models, and healthcare AI.",
    image: "assets/profile_organizer/tiange-xiang.jpg",
    url: "https://ai.stanford.edu/~xtiange/",
  },
  {
    name: "Zihan Wang",
    affiliation: "Abaka AI / 2077AI",
    tag: "Organizer",
    focus: "AI data infrastructure, benchmarks, and model evaluation.",
    image: "assets/profile_organizer/zihan-wang.jpg",
    url: "https://www.linkedin.com/in/zihanwanghms/",
  },
  {
    name: "Mengyu Wang",
    affiliation: "Harvard Medical School",
    tag: "Organizer",
    focus: "Generative and multimodal AI for robotics and medicine.",
    image: "assets/profile_organizer/mengyu-wang.jpg",
    url: "https://wang.hms.harvard.edu/team/dr-wang/",
  },
  {
    name: "Xinhai Chang",
    affiliation: "Peking University",
    tag: "Junior Organizer",
    focus: "Robot learning, digital twins, and real-sim-real systems.",
    image: "assets/profile_organizer/xinhai-chang.jpg",
    url: "https://chang-xinhai.github.io/",
  },
  {
    name: "Yuzhen Chen",
    affiliation: "Harvard Medical School",
    tag: "Junior Organizer",
    focus: "World models, robotic manipulation, and medical AI.",
    image: "assets/profile_organizer/yuzhen-chen.jpg",
    url: "https://wang.hms.harvard.edu/team/yuzhen-chen/",
  },
  {
    name: "Zeyang Bai",
    affiliation: "WorldMind Lab",
    tag: "Junior Organizer",
    focus: "3D generation, video world models, and embodied AI.",
    image: "assets/profile_organizer/zeyang-bai.jpg",
    url: "https://baizey.rvosuke.com/",
  },
  {
    name: "Yu Chen",
    affiliation: "University of Maryland",
    tag: "Junior Organizer",
    focus: "Robot learning, applied optimization, and robot manipulation.",
    image: "assets/profile_organizer/yu-chen.png",
    url: "https://neuling-jpg.github.io/yu.github.io/",
  },
  {
    name: "Zhiyan Li",
    affiliation: "Shanghai Jiao Tong University",
    tag: "Junior Organizer",
    focus: "Multimodal robot learning, tactile perception, and lifelong learning.",
    image: "assets/profile_organizer/zhiyan-li.jpg",
    url: "https://lzy001yuki.github.io/",
  },
];

export const awardCommittee = [
  {
    name: "Shangzhe Wu",
    affiliation: "University of Cambridge",
    tag: "Award Committee",
    focus: "3D vision, inverse graphics, and dynamic world modeling.",
    image: "assets/profile_organizer/shangzhe-wu.jpg",
    url: "https://www.elliottwu.com/",
  },
  {
    name: "Paul Pu Liang",
    affiliation: "Massachusetts Institute of Technology",
    tag: "Award Committee",
    focus: "Multimodal machine learning and foundation models.",
    image: "assets/profile_speaker/paul.jpg",
    url: "https://pliang279.github.io/",
  },
  {
    name: "Manling Li",
    affiliation: "Northwestern University",
    tag: "Award Committee",
    focus: "Multimodal and embodied reasoning, language-guided agents.",
    image: "assets/profile_organizer/manling-li.jpg",
    url: "https://limanling.github.io/",
  },
  {
    name: "Qianqian Wang",
    affiliation: "Harvard University",
    tag: "Award Committee",
    focus: "3D/4D reconstruction and persistent visual perception.",
    image: "assets/profile_organizer/qianqian-wang.jpg",
    url: "https://qianqianwang68.github.io/",
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
  { time: "12:40", title: "Closing Remarks" },
];

export const sponsors = [
  {
    name: "2077AI",
    commitment: "Workshop Sponsor",
    image: "assets/sponsor/2077ai.png",
    url: "https://www.2077ai.com/",
  },
  {
    name: "CyberBrain",
    commitment: "Workshop Sponsor",
    image: "assets/sponsor/cyberbrain_new.png",
    url: "https://www.cyberbrain.ai/",
  },
];
