const logoutBtn = document.getElementById("logout");

logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("isAuthenticated");
  localStorage.removeItem("user");

  window.location.href = "./Login.html";
});


const chips = document.querySelectorAll(".chip");
const title = document.getElementById("courseTitle");
const careerPath = document.getElementById("careerPath");
const tutorials = document.getElementById("tutorials");


const courses = {
  frontend: {
    path: ["HTML", "CSS", "JavaScript", "TypeScript", "React"],

    tutorials: ["FreeCodeCamp", "SuperSimpleDev", "Traversy Media"],
  },

  python: {
    path: ["Python Basics", "OOP", "Flask", "Django"],

    tutorials: ["Corey Schafer", "FreeCodeCamp"],
  },
};


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
    const courseName = chip.dataset.course;
    renderCourse(courseName);
  });
});
