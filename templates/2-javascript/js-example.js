var testJS = document.getElementById('code-js-render');
var innerHTML = '<h1>' + team.name + '</h1>';
innerHTML += '<ul>';
for(var i = 0; i < team.players.length; i++) {
	innerHTML += '<li>' + team.players[i].fullName + ' (' + team.players[i].number + ')</li>';
}
innerHTML += '</ul>';
testJS.innerHTML = innerHTML;