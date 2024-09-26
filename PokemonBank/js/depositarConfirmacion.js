$(document).ready(function() {
	
    $("#descargarComprobante").click(function(event) {
        event.preventDefault();

        const { jsPDF } = window.jspdf; // Asegúrate de que jsPDF está cargado
        const doc = new jsPDF();

        // Obtener los valores del depósito
        const accountNumber = document.getElementById("accountNumber").textContent;
        const referenceNumber = document.getElementById("referenceNumber").textContent;
        const depositAmount = document.getElementById("depositAmount").textContent;
        const depositDate = document.getElementById("depositDate").textContent;

        // Agregar contenido al PDF
        doc.setFontSize(20);
        doc.text("Confirmación de Depósito", 105, 20, { align: "center" });

        doc.setFontSize(12);
        doc.text(`Número de Cuenta: ${accountNumber}`, 20, 40);
        doc.text(`Número referencia: ${referenceNumber}`, 20, 50);
        doc.text(`Monto Depositado: ${depositAmount}`, 20, 60);
        doc.text(`Fecha: ${depositDate}`, 20, 70);

        // Guardar el PDF con un nombre
        doc.save("confirmacion_deposito.pdf");
    });
    
});
