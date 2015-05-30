/* 
 * Bootstrap
 */
$(function () {
  $('[data-toggle="tooltip"]').tooltip();

});

$('.glyphicon-plus').click(function(){
    //var item = $(this).parent('.link-menu-admin');
    //var item = 'teste';
    alert('teste');
});

/* 
 * CountUp
 */
function efeito() {
    
    var contInscritos = $("#contInscritos").html();
    var inscritos = new CountUp("contInscritos", 0, contInscritos);
    
    var contCurtidas = $("#contCurtidas").html();
    var curtidas = new CountUp("contCurtidas", 0, contCurtidas);
    
    var contSeguidores = $("#contSeguidores").html();
    var seguidores = new CountUp("contSeguidores", 0, contSeguidores);
    
    //setInterval(function(){
       inscritos.start(); 
       curtidas.start(); 
       seguidores.start(); 
    //}, 3000);

};

function alertMenu(){
  // var item = $(".glyphicon");
  alert("Esta fun é apenas um teste");
};

function init() {
  alertMenu();
  efeito();
}
window.addEventListener("load", init, false);