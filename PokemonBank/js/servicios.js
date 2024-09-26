$(document).ready(function() {
	$("#espacioInfoNpe").hide();
	
	$("#btnConsultarInfo").click(function(event) {
		event.preventDefault();
		
		var servicio 	= $("#servicio").val();
		var npe			= $("#npe").val();
		
		if((servicio != "") && (npe != "")){
			$("#espacioInfoNpe").show();
			$("#espacioConsultar").hide();
			
			$('#servicio').prop('disabled', true);
			$('#npe').prop('disabled', true);

		}else{
			Swal.fire('Falta informacion','Por favor rellene todos los campos.','error');
		}
		
		console.log(servicio);
	});
	
	$("#servicioFormulario").submit(function(event) {
		 event.preventDefault();
		 
		 var textServicio = $('#servicio option:selected').text();

		 Swal.fire({
			 title: '¿Desea realizar esta transferencia?',
			 text: "Desea realizar el pago de "+textServicio+" con monto $26.69",
			 icon: 'warning',
			 showCancelButton: true,
			 confirmButtonColor: '#3085d6',
			 cancelButtonColor: '#d33',
			 confirmButtonText: 'Confirmar',
			 cancelButtonText: 'Cancelar'
		}).then((result) => {
			if (result.isConfirmed) {
            	// El usuario confirma la transaccion
                this.submit();
			} else {
				// El usuario rechaza la transaccion
				Swal.fire('Cancelado','La transaccion no se ha realizado.','error');
			}
		});
	});
});