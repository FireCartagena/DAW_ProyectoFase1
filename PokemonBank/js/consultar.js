$(document).ready(function() {
	let movimientosGrafica;
	
	var ini = [0, 0, 0];
	createChart(ini);
	
	$('#movimientosLista').DataTable({
		pageLength: 5,
		lengthChange: false,
		responsive: true 
	});
        
	$("#movimientosEspacio").hide();
    
    $("#consultar").click(function(event) {
		event.preventDefault();
		
		$("#movimientosEspacio").show();
		
		var datos = [50, 15, 35];
		destroyChart();
		createChart(datos);
	});
	
	function createChart(datos) {
		const data = {
			labels: ['Depositos', 'Retiros', 'Pagos'],
			datasets: [{
				label: 'Distribucion',
				data: datos,
				backgroundColor: ['rgb(40, 167, 69)','rgb(255, 205, 86)','rgb(54, 162, 235)'],
				hoverOffset: 4
			}]
		};
		
		const config = {
			type: 'pie',
			data: data,
		};
		
		const ctx = document.getElementById('movimientosChart').getContext('2d');
		movimientosGrafica = new Chart(ctx, config);
	}
	
	function destroyChart() {
    	movimientosGrafica.destroy();
    	movimientosGrafica = null;
    }
	
});
