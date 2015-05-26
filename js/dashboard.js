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
window.onload = function() {
    
    var contInscritos = $("#contInscritos").html();
    var inscritos = new CountUp("contInscritos", 0, contInscritos);
    
    var contCurtidas = $("#contCurtidas").html();
    var curtidas = new CountUp("contCurtidas", 0, contCurtidas);
    
    var contSeguidores = $("#contSeguidores").html();
    var seguidores = new CountUp("contSeguidores", 0, contSeguidores);
    
    //setInterval(function(){
       inscritos.start(); 
       inscritos.start(); 
       seguidores.start(); 
    //}, 3000);
    
 
};





