document.addEventListener("DOMContentLoaded", () => {
        const preguntas = document.querySelectorAll(".foro__pregunta");
        const referenciaPregunta = document.querySelector(".foro__referencia-pregunta");
        const inputIdPregunta = document.querySelector("input[name='id_pregunta']");
        const respuestas = document.querySelector(".foro__respuestas");

        preguntas.forEach(pregunta => {
            pregunta.addEventListener("click", () => {
                const id = pregunta.getAttribute("data-id");
                const titulo = pregunta.getAttribute("data-titulo");

                // Actualiza referencia en el formulario
                referenciaPregunta.textContent = titulo;
                inputIdPregunta.value = id;

                // Reemplaza el contenido de respuestas con una plantilla vacía
                respuestas.innerHTML = `
                    <h2>Respuestas</h2>
                    
                    <h3 class="foro__respuesta-title">${titulo}</h3>
                    <p class="foro__respuesta-meta">Publicado por Usuario anónimo — Hoy</p>
                    <p class="foro__respuesta-body">
                        Esta pregunta aún no tiene respuestas. ¡Sé el primero en responder!
                    </p>
                    
                `;
            });
        });
});