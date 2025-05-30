// Aquí tienes un código incompleto para tomar como base. Cada función está definida, pero los pasos cruciales aún no están implementados.

// Simulando una base de datos de mesas
const mesasDisponibles = 5;  // Número de mesas disponibles para reservar

// Función que simula la verificación de disponibilidad de mesas
function verificarDisponibilidad(mesasSolicitadas) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(mesasSolicitadas <= mesasDisponibles){
                resolve("Mesas disponibles. Reserva confirmada.");
            } else {
                reject("No hay suficientes mesas disponibles.");
            }
        }, 2000);  // Simula un retraso en la verificación (2 segundos)
    });
}

// Función que simula el envío de un correo de confirmación
function enviarConfirmacionReserva(nombreCliente) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const exito = Math.random() > 0.3;  
            if (exito) {
                resolve(`Correo de confirmación enviado a ${nombreCliente}.`);
            } else {
                reject("Error al enviar el correo de confirmación.");
            }
        }, 1500);  // Simula el envío de un correo (1.5 segundos)
    });
}

// Función principal para manejar una reserva
async function hacerReserva(nombreCliente, mesasSolicitadas) {
    try {
        console.log("Verificando disponibilidad de mesas...");
        const disponibilidad = await verificarDisponibilidad(mesasSolicitadas);  // Llama a la función de verificación
        console.log(disponibilidad);
        
        console.log("Enviando correo de confirmación...");
        const confirmacion = await enviarConfirmacionReserva(nombreCliente);  // Llama a la función de envío de correo
        console.log(confirmacion);
    } catch (error) {
        console.log("Error:", error);  // Maneja los errores en la promesa
    }
}

// Llamada de prueba
hacerReserva("Juan Pérez", 3);  // Intenta hacer una reserva para 3 personas