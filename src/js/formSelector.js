var form = 'tokenAirdrop';
var template = form === 'tokenAirdrop' ? Handlebars.templates.airdrop : Handlebars.templates.newsletter;
$.when($.ready).then(function(){
    document.getElementById('form').innerHTML = template();
});