const logoutBtn = document.getElementById("logout");

logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("isAuthenticated");
  localStorage.removeItem("user");

  window.location.href = "./Login.html";
});
const courses = {
  frontend: {
    path: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "System Design",
    ],
    tutorials: [
      "FreeCodeCamp",
      "SuperSimpleDev",
      "Traversy Media",
      "Codevolution",
    ],
  },

  backend: {
    path: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Databases",
      "Authentication",
      "Deployment",
    ],
    tutorials: ["CodeWithMosh", "Traversy Media", "FreeCodeCamp"],
  },

  python: {
    path: [
      "Python Basics",
      "OOP",
      "File Handling",
      "Flask",
      "Django",
      "FastAPI",
    ],
    tutorials: ["Corey Schafer", "FreeCodeCamp", "Programming with Mosh"],
  },

  java: {
    path: ["Core Java", "Collections", "JDBC", "Spring Boot", "Microservices"],
    tutorials: ["Telusko", "Java Brains", "Amigoscode"],
  },

  "ui/ux": {
    path: [
      "Design Principles",
      "Color Theory",
      "Typography",
      "Wireframing",
      "Figma",
      "Prototyping",
      "Design Systems",
    ],
    tutorials: ["DesignCourse", "Figma YouTube Channel", "Flux Academy"],
  },

  "ai/ml": {
    path: [
      "Python",
      "NumPy",
      "Pandas",
      "Data Visualization",
      "Machine Learning",
      "Deep Learning",
      "Projects",
    ],
    tutorials: ["Andrew Ng", "FreeCodeCamp", "Krish Naik"],
  },
};

const chips = document.querySelectorAll(".chip");
const title = document.getElementById("courseTitle");
const careerPath = document.getElementById("careerPath");
const tutorials = document.getElementById("tutorials");

function renderCourse(courseName) {
  const course = courses[courseName];

  if (!course) return;

  title.textContent =
    courseName.charAt(0).toUpperCase() + courseName.slice(1) + " Development";

  careerPath.innerHTML = "";
  tutorials.innerHTML = "";

  course.path.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    careerPath.appendChild(li);
  });

  course.tutorials.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    tutorials.appendChild(li);
  });
}

chips.forEach((chip) => {
  chip.addEventListener("click", () => {
    const courseName = chip.textContent.toLowerCase();

    renderCourse(courseName);
  });
});
renderCourse("frontend");

const courseSearch = document.getElementById("courseSearch");
courseSearch.addEventListener("input", (e) => {
  const value = e.target.value.trim().toLowerCase();
  if (courses[value]) {
    renderCourse(value);
  }
});
const isAuthenticated = localStorage.getItem("isAuthenticated");

if (isAuthenticated !== "true") {
  window.location.href = "./Login.html";
}