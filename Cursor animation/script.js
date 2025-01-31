const cursor = document.querySelector(".cursor");
let timeout;

// follow cursor on mousemove
document.addEventListener("mousemove", (e) => {
    let x = e.pageX;
    let y = e.pageY;

    cursor.style.top = y + "px";
    cursor.style.left = x + "px";
    cursor.style.display = "block";

    // cursor effect when mouse stopped
    mouseStopped = () => {
        cursor.style.display = "none";
    }
    clearTimeout(timeout);
    timeout = setTimeout(mouseStopped, 1000);
});

// cursor effect on mouse out
document.addEventListener("mouseout", () => {
    cursor.style.display = "none";
});