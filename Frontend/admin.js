const adminToken = localStorage.getItem("token");

if (!adminToken) {
  alert("Unauthorized! Please login as admin.");
  window.location.href = "signin.html";
}

// ---------- Add Blog ----------
document.getElementById("blog-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const title = document.getElementById("blog-title").value;
  const content = document.getElementById("blog-content").value;

  try {
    const res = await fetch("http://localhost:5000/api/admin/blog", {
      method: "POST",
      headers: { "Content-Type": "application/json", "Authorization": `Bearer ${adminToken}` },
      body: JSON.stringify({ title, content })
    });
    const data = await res.json();
    if (res.ok) {
      alert("Blog added successfully!");
    } else {
      alert(data.msg || "Error adding blog");
    }
  } catch (err) {
    console.error(err);
  }
});

// ---------- Add Student Story ----------
document.getElementById("story-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const studentName = document.getElementById("student-name").value;
  const story = document.getElementById("student-story").value;
  const image = document.getElementById("student-image").value;

  try {
    const res = await fetch("http://localhost:5000/api/admin/story", {
      method: "POST",
      headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` },
      body: JSON.stringify({ studentName, story, image })
    });
    const data = await res.json();
    if (res.ok) {
      alert("Student story added successfully!");
    } else {
      alert(data.msg || "Error adding story");
    }
  } catch (err) {
    console.error(err);
  }
});

const user = JSON.parse(localStorage.getItem("user"));
const token = localStorage.getItem("token");

if (!token || !user || user.role !== "admin") {
  alert("Unauthorized! Admins only.");
  window.location.href = "signin.html";
}
