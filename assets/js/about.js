function loaded() {
    document.getElementById("alert-button").addEventListener("click", () => {
        alert("Hi")
    });
}

window.onload = loaded;
