document.addEventListener('DOMContentLoaded', function() {

    // Obtener los elementos del DOM
    formulario = document.getElementById('formulario');
    cantidadInput = document.getElementById('cantidad');
    categoriaSelect = document.getElementById('categoria');
    nombreInput = document.getElementById('nombre');
    apellidoInput = document.getElementById('apellido');
    emailInput = document.getElementById('email');
    totalMsg = document.getElementById('total');
    borrarBtn = document.getElementById('borrar-btn');
    resumenBtn = document.getElementById('resumen-btn');
  
    borrarBtn.addEventListener('click', function() {
        formulario.reset();
        totalMsg.textContent = 'Total a Pagar: $';
    });
  
    resumenBtn.addEventListener('click', function() {
        const cantidad = parseInt(cantidadInput.value);
        const categoria = categoriaSelect.value;
        const nombre = nombreInput.value.trim();
        const apellido = apellidoInput.value.trim();
        const email = emailInput.value.trim();

        // Validar los campos
        if (nombre === '') {
            alert('Por favor, ingresa tu nombre.');
            return;
        }
    
        if (apellido === '') {
            alert('Por favor, ingresa tu apellido.');
            return;
        }
    
        if (email === '') {
            alert('Por favor, ingresa tu correo electrónico.');
            return;
        }
    
        //Calculo descuento
        let descuento = 0;
    
        switch (categoria) {
            case 'estudiante':
                descuento = 0.8;
                break;
            case 'trainee':
                descuento = 0.5;
                break;
            case 'junior':
                descuento = 0.14;
                break;
            default:
                descuento = 0;
        }
    
        const total = (200 * cantidad * (1 - descuento)).toFixed(2);
        totalMsg.textContent = `Total a Pagar: $${total}`;
    });
  
  });
  