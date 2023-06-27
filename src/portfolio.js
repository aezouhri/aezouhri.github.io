/* Change this file to get your personal Porfolio */
import resume from "./assests/images/Adnane Ezouhri Resume.pdf";
// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Adnane's Portfolio",
  description: "A passionate Software Engineer eager to take on new challenges",
  og: {
    title: "Adnane Ezouhri Portfolio",
    type: "website",
    url: "https://aezouhri.github.io/",
  },
};

//Home Page
const greeting = {
  title: "Adnane Ezouhri",
  // logo_name: "AshutoshHathidara",
  // nickname: "layman_brother",
  subTitle:
    "A passionate individual always eager to take on new challenges and explore new horizons.",
  portfolio_repository: "https://github.com/aezouhri/aezouhri.github.io",
  githubProfile: "https://github.com/aezouhri",
  resumeLink: resume,
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/aezouhri",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/adnane-ezouhri/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:ezouhriadnane@outlook.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/adnane971/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React Native",
        "⚡ Developing mobile applications using React Native Node.js and Expo Go",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#430098",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/adnane_ezouhri/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/ezouhriadnane",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of Iowa College of Engineering",
      subtitle: "B.S.E in Electrical and Computer Science Engineering",
      logo_path: "uiowa_logo.png",
      alt_name: "Uiowa Engineering",
      duration: "2019 - 2023",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, AR/VR, Software Security etc...",
        "⚡ I also leanred about robotics, embedded systems, how software and hardware work together and Computer Architecture",
        "⚡ I focused on software engineering by taking complex software project classes involving Agile set up and Client interaction",
        "⚡ Finally, I earned myself a Computer Science and a Mathematics minor",
      ],
      website_link: "https://engineering.uiowa.edu/",
    },
    {
      title: "University of Iowa College of Engineering",
      subtitle: "M.S. in Computer Science Engineering",
      logo_path: "MS_logo.png",
      alt_name: "University of Iowa College of Engineering",
      duration: "2022 - 2024",
      descriptions: [
        "⚡ I have taken varity of courses related to Artificial Intelligence and Machine Learning which correspond to Explainable AI, Computer Vision, Pattern Finding etc...",
        "⚡ Apart from this, I have also done teaching assistantship. As part of it, I have worked guiding students through the development of SaaS application",
        "⚡ During my time at university, I also enrolled in discovery classes where orginal topics where thought such as Augmented and Virtual",
      ],
      website_link: "https://engineering.uiowa.edu/",
    },
  ],
};

const certifications = {
  certifications: [],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with different size companies ranging from start ups to leaders in their field, I have mainly been entitled with software responsibilites in my technical employment. While also being trusted with leadership and responsibility of team management",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Teaching Assistant",
          company: "University of Iowa College of Engineering",
          company_url: "https://ece.engineering.uiowa.edu/",
          logo_path: "uiowa_logo.png",
          duration: "Aug 2023 - Dec 2023",
          location: "Iowa City, IA",
          description:
            "Taught ECE:5800 Software Engineering Language and Tools, assisting students in their understanding of SaaS application and industry level coding practices, held office hours to assist students with weekly coding assignements",
          color: "#fc1f20",
        },
        {
          title: "Teaching Assistant",
          company: "University of Iowa College of Engineering",
          company_url: "https://ece.engineering.uiowa.edu/",
          logo_path: "uiowa_logo.png",
          duration: "Aug 2021 - May 2023",
          location: "Davenport, IA",
          description:
            "Taught ECE:2220 Electrical Circuits, assisting over 120 students in their understanding of RCL circuits in AC and DC, conducted peer reviews and held office hours to help students assimialte and practice the material taught in class",
          color: "#fc1f20",
        },
        {
          title: "Safety Ambassador",
          company: "University of Iowa Hospital and Clinic",
          company_url:
            "https://medcom.uiowa.edu/theloop/news/the-first-contact-why-safety-ambassadors-are-important",
          logo_path: "uihc_logo.jpg",
          duration: "May 2020 - May 2021",
          location: "Iowa City, IA",
          description:
            "First line of defense at the UIHC during the Covid-19 Pandemic. Screened and assisted patients throughout their visit at the hospital and clinics. Elected one of the best safety amabassador thanks to being polyglote",
          color: "#fc1f20",
        },
        {
          title: "Student IT",
          company: "University of Iowa Colleg of Public Health",
          company_url: "https://www.public-health.uiowa.edu/it/",
          logo_path: "uiowacph_logo.png",
          duration: "May 2020 - May 2021",
          location: "Iowa City, IA",
          description:
            "First line of defense at the UIHC during the Covid-19 Pandemic. Screened and assisted patients throughout their visit at the hospital and clinics. Elected one of the best safety amabassador thanks to being polyglote",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Internships",
      work: true,
      experiences: [
        {
          title: "Software Engineer",
          company: "RTX Collins Aerospace",
          company_url: "https://www.linkedin.com/company/collins-aerospace/",
          logo_path: "collins_logo.png",
          duration: "May 2023 - Aug 2023",
          location: "Cedar Rapids, IA",
          description:
            "I contributed to the development of a critical Information Management On-Board (IMO) system for an Airbus A350, actively participated in Agile Scrum meetings, demonstrated proficiency in Python, conducted thorough testing, and delivered high-quality software solutions as an independent member of a skilled team.",
          color: "#0879bf",
        },
        {
          title: "Software Engineer",
          company: "Farrpro",
          company_url: "https://www.linkedin.com/company/farrpro/",
          logo_path: "farrpro_logo.png",
          duration: "Aug 2022 - Dec 2022",
          location: "Iowa City, IA",
          description:
            "I optimized database efficiency, solved bugs by restructuring data, and showcased prototyping and testing skills, using Android Studio, Java, Android, and XML, while creating a monitoring system for piglets and swine.",
          color: "#9b1578",
        },
        {
          title: "Electrical Engineer",
          company: "Arconic Inc.",
          company_url: "https://www.linkedin.com/company/arconic/",
          logo_path: "arconic_logo.png",
          duration: "May 2022 - Aug 2022",
          location: "Davenport, IA",
          description:
            "Completed a capital project within the company over the summer to reduce the cost of scrap and waste produced a the factory level. In addition to completing daily data collection and analyses to ensure the operations of the plant",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "International Student Ambassador",
          company: "University of Iowa",
          company_url:
            "https://admissions.uiowa.edu/international-student-ambassadors",
          logo_path: "uiowa_logo.png",
          duration: "Aug 2019 - May 2020",
          location: "Iowa City, IA",
          description:
            "Represented the University of Iowa on the international scene to assist prospective international students with any of their inquiries",
          color: "#181717",
        },
        {
          title: "Country Delegate",
          company: "Model United Nations",
          company_url: "https://www.numad.eu/",
          logo_path: "MUN_logo.png",
          location: "Madrid, Spain",
          description:
            "International Politic Affairs: Delegate of Nigeria covering globalization and it's impact and cultural appropriation",
          color: "#0C9D58",
        },
        {
          title: "Country Delegate",
          company: "Model United Nations",
          company_url: "https://fermun.org/en/fermun-2019-",
          logo_path: "MUN_logo.png",
          location: "Geneva, Switzerland",
          description:
            "AI & Ethics: Delegate of Belgium debating over the ethical implications of AI technologies and their legal rights",
          color: "#0C9D58",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create fun and entertaining programs and web applications",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "uiowa_logo.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours!",
  },
  phoneSection: {
    title: "Let's hop on a call!",
    subtitle: "(847)-219-8966",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
