function calcularPrecio2() {
    const precioPorLibra = parseFloat(document.getElementById('price').value);
    const rayitas = parseInt(document.getElementById('rayitas').value);

    // Validar entradas
    if (isNaN(precioPorLibra) || isNaN(rayitas) || rayitas <= 0) {
        document.getElementById('resultado').innerText = "Por favor, ingresa valores válidos.";
        return;
    }

    // Convertir rayitas a libras (16 rayitas = 1.6 libras)
    const pesoEnLibras = (rayitas / 16) * 1.6;

    // Calcular precio final
    const precioFinal = pesoEnLibras * precioPorLibra;

    // Mostrar resultado en tiempo real
    document.getElementById('resultado').innerText = 
        `El precio final es: ${precioFinal.toFixed(2)}`;
}