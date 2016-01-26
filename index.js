$('#modal_container').show().append(
[
	'<header>',
		'<h2 id="ModalTitle">Bulk Edit image alt text -- MAZER Hack</h2>',
		'<a href="#" class="close-modal" role="button" aria-label="Close dialog">×</a>',
	'</header>',
	'<p>I work.</p>'
].join("")
); 
$("#modal_backdrop").addClass("visible").attr("tabindex",0);