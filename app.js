// =====================================
// PORTFOLIO DIDÁCTICA II
// =====================================


// =====================================
// ELEMENTOS
// =====================================
const taskWrapper = document.getElementById("task-wrapper");

const contentWrapper = document.getElementById("content-wrapper");

const contentFrame = document.getElementById("content-frame");

const sectionTitle = document.getElementById("section-title");

const backButtonContainer = document.getElementById("back-button-container");

const backButton = document.getElementById("back-to-list");

const taskButtons = document.querySelectorAll(".task-button");

const navbar = document.querySelector(".navbar");

const clock = document.getElementById("live-clock");


// =====================================
// ABRIR ACTIVIDAD
// =====================================
taskButtons.forEach((button) => {

    button.addEventListener("click", (e) => {

        e.preventDefault();

        // Scroll arriba instantáneo
        window.scrollTo(0, 0);

        // Obtener datos
        const title = button.dataset.title;

        const link = button.dataset.link;

        // Cambiar título
        sectionTitle.textContent = title;

        // Ocultar actividades
        taskWrapper.classList.add("fade-out");

        setTimeout(() => {

            // Ocultar lista
            taskWrapper.classList.add("hidden");

            // Limpiar iframe anterior
            contentFrame.src = "";

            // Reset total del visor
            contentWrapper.classList.remove(
                "hidden",
                "fade-out",
                "show"
            );

            // Forzar reflow
            void contentWrapper.offsetHeight;

            // Esperar renderizado real
            requestAnimationFrame(() => {

                // Mostrar visor
                contentWrapper.classList.add("show");

                // Cargar iframe
                contentFrame.src = link;

                // Mostrar botón volver
                backButtonContainer.classList.add("visible");

                // Mantener arriba
                window.scrollTo(0, 0);

            });

        }, 250);

    });

});


// =====================================
// VOLVER AL PORTFOLIO
// =====================================
function goBack() {

    // Scroll arriba instantáneo
    //window.scrollTo(0, 0);

    // Ocultar visor
    contentWrapper.classList.remove("show");

    contentWrapper.classList.add("fade-out");

    setTimeout(() => {

        // Limpiar iframe
        contentFrame.src = "";

        // Reiniciar clases visor
        contentWrapper.classList.remove("fade-out");

        contentWrapper.classList.add("hidden");

        // Restaurar lista
        taskWrapper.classList.remove("hidden");

        taskWrapper.classList.remove("fade-out");

        taskWrapper.classList.remove("show");

        // Forzar reflow
        void taskWrapper.offsetHeight;

        // Esperar renderizado
        requestAnimationFrame(() => {

            // Mostrar lista
            taskWrapper.classList.add("show");

            // Restaurar título
            sectionTitle.textContent = "Actividades:";

            // Ocultar botón volver
            backButtonContainer.classList.remove("visible");

            // Mantener arriba
            //window.scrollTo(0, 0);

        });

    }, 250);

}


// =====================================
// BOTÓN VOLVER
// =====================================
backButton.addEventListener("click", goBack);


// =====================================
// ESC PARA VOLVER
// =====================================
document.addEventListener("keydown", (e) => {

    if (
        e.key === "Escape" &&
        !contentWrapper.classList.contains("hidden")
    ) {

        goBack();

    }

});


// =====================================
// ANIMACIÓN TARJETAS
// =====================================
const cards = document.querySelectorAll(".project-card");

cards.forEach((card, index) => {

    // Entrada escalonada
    card.style.animationDelay = `${index * 0.08}s`;

    // Hover
    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-4px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px)";

    });

});


// =====================================
// RELOJ
// =====================================
function updateClock() {

    if (!clock) return;

    const now = new Date();

    const time = now.toLocaleTimeString("es-UY", {

        hour: "2-digit",
        minute: "2-digit"

    });

    clock.textContent = time;

}

setInterval(updateClock, 1000);

updateClock();


// =====================================
// NAVBAR SCROLL
// =====================================
window.addEventListener("scroll", () => {

    if (!navbar) return;

    if (window.scrollY > 15) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


// =====================================
// ANIMACIÓN DE ENTRADA
// =====================================
window.addEventListener("load", () => {

    document.body.classList.add("loaded");

    // Asegurar inicio arriba
    window.scrollTo(0, 0);

});
