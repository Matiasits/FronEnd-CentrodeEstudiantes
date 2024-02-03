const btnDarkMode = document.getElementById('btn_dark');

btnDarkMode.addEventListener('click', () => {
    const modo = document.body.classList.contains("light") ? "dark" : "light";

    if (modo === "dark"){
        document.body.classList.remove("light");
        document.body.classList.add("dark");
        btnDarkMode.innerText = "MODO CLARO";
        localStorage.setItem("modo", "dark");
    } else {
        document.body.classList.remove("dark");
        document.body.classList.add("light");
        btnDarkMode.innerText = "MODO OSCURO";
        localStorage.setItem("modo", "light");
    }
});

const modo = localStorage.getItem("modo");

if (modo === "dark") {
    document.body.classList.add("dark");
    document.body.classList.remove("light"); // Asegúrate de remover la clase opuesta
} else {
    document.body.classList.add("light");
    document.body.classList.remove("dark"); // Asegúrate de remover la clase opuesta
}

const config = {
    lang: "Es",
    mode: modo || "light"
}

localStorage.setItem("obj", JSON.stringify(config));
