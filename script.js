const works = { 
    "task1": { "title": "Project 1", "url": "./works/task1/index.html" },
    "task2": { "title": "Project 2", "url": "works/task2/index.html" },
    "task3": { "title": "Project 3", "url": "works/task3/index.html" }
};


document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("projectsContainer");
    const frame = document.getElementById("displayFrame");

    Object.keys(works).forEach((key) => {
        const project = works[key];
        const projectElement = document.createElement("div");

        projectElement.textContent = project.title;
        projectElement.classList.add("project-item");

        projectElement.addEventListener("click", () => {
            frame.src = project.url;
            document.querySelectorAll(".project-item").forEach(item => item.classList.remove("active"));
            projectElement.classList.add("active");
        });

        container.appendChild(projectElement);
    });
});
