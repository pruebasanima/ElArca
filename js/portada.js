$(document).ready(function() {
	// animation hover on "empezar" button
	$( ".btn_empezar").mouseover(function() {
		$( ".btn_empezar").addClass("animated pulse faster");
	});
	$( ".btn_empezar").mouseout(function() {
		$( ".btn_empezar").removeClass("animated pulse faster");
	});

	//redirection to index when press button "empezar"
	$( ".btn_empezar").click(function() {
		$( ".container_index").addClass("d-lg-block");
		$( ".container_portada").addClass("ocultar");
		$( ".container_mobile").removeClass("d-none");
	});
});