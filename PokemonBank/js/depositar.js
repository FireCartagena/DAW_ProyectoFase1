 $(document).ready(function() {
	 
	 $("#depositoFormulario").submit(function(event) {
		 event.preventDefault();
		 
		 Swal.fire({
			 title: '¿Desea realizar esta transferencia?',
			 text: "Desea realizar el deposito de $"+$("#depositoMonto").val(),
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