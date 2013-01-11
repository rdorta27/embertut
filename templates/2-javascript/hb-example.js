var source = $('#test-template').html();
var template = Handlebars.compile(source);
$('#code-handlebars-render').html(template(team));