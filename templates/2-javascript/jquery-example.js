var list = $('<ul></ul>');
$.each(team.players, function(i, player) {
	list.append($('<li></li>').append(player.fullName + ' (' + player.number + ')'));
});
($('<h4>' + team.name + '</h4>')).appendTo($('#code-jquery-render'));
list.appendTo($('#code-jquery-render'));