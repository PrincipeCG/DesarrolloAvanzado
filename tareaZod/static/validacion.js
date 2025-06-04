const { z } = window.Zod;

// 1. Definir el esquema de validación con Zod
const registerSchema = z.object({
    name: z.string().nonempty("El nombre no puede estar vacío"),
    email: z.string().email("Correo electrónico inválido"),
    password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
});

// 2. Agregar el evento al formulario
document.getElementById("registerForm").addEventListener("submit", (event) => {
    event.preventDefault();

    // 3. Capturar datos del formulario
    const formData = {
        name: document.getElementById("name").value.trim(),
        email: document.getElementById("email").value.trim(),
        password: document.getElementById("password").value,
    };

    const errorsElement = document.getElementById("errors");
    errorsElement.textContent = "";

    try {
        // 4. Validar con Zod
        registerSchema.parse(formData);
        alert("¡Registro exitoso!");
    } catch (error) {
        // 5. Mostrar mensajes de error
        if (error.errors) {
            const messages = error.errors.map((e) => e.message).join(" | ");
            errorsElement.textContent = messages;
        } else {
            errorsElement.textContent = "Ocurrió un error desconocido.";
        }
    }
});
