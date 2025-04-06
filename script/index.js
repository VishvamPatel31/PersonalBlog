import data from "/script/data.js";

const viewbtn = document.getElementById("viewbtn");
const blogs = document.getElementById("blog");
let extraBlogsVisible = false;

viewbtn.addEventListener("click", function () {
    if (!extraBlogsVisible) {
        data.forEach(function (blogData) {
            const blogDiv = document.createElement("div");
            blogDiv.className = "blogs extra-blog";
            blogDiv.innerHTML = `
                <img src="${blogData.image}" class="blogimage" alt="${blogData.title}">
                <div id="blogdate">${blogData.date}</div>
                <div id="blogtitle">${blogData.title}</div>
                <div id="blogdesc">${blogData.desc}</div>
            `;
            blogs.appendChild(blogDiv);
        });
        viewbtn.textContent = "View Less";
        extraBlogsVisible = true;
    } else {
        document.querySelectorAll(".extra-blog").forEach(blog => blog.remove());
        viewbtn.textContent = "View More";
        extraBlogsVisible = false;
    }
});

// Smooth scroll for nav links
document.getElementById("homeLink").addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
});
