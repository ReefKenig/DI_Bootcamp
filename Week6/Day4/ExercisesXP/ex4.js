(function (username) {
  let navbar = document.querySelector(".navbar");
  let welcomeDiv = document.createElement("div");
  let profilePic = document.createElement("a");
  profilePic.href = "#";
  profilePic.classList.add("navbar-brand");
  let pic = document.createElement("img");
  pic.src = "./Deadpool (7).jpg";
  pic.alt = "Profile Pic";
  pic.style.height = "36px";
  pic.style.width = "36px";
  profilePic.appendChild(pic);
  welcomeDiv.innerHTML = username;
  welcomeDiv.appendChild(profilePic);
  navbar.appendChild(welcomeDiv);
})("John");
