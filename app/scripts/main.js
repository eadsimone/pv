
const openNav = () => {
  document.getElementById('wwepc_nav_overlay').style.width = '100%';
};

const closeNav = () => {
  document.getElementById('wwepc_nav_overlay').style.width = '0%';
};

const detectmob = (max = 800 ) =>{
  // if(window.innerWidth <= max ) && window.innerHeight <= 800) {
  if(window.innerWidth <= max ) {
    return true;
  } else {
    return false;
  }
};

// $(document).on('click','#main-tourist-row div',function(e){
//   alert($(this).data('itemid'));
//   e.preventDefault(); // Prevent a page reload when a link is pressed
//
//   getInfoItem();
//   $( '#main-tourist' ).html('');//reset content
//
//   const htmlinfo= '<div class="row">' +
//     '<section id="info-details" class="col-12">' +
//     '<div id="image_description" class="p-3">' +
//     '<img src="https://www.welcomeargentina.com/paseos/recorrido_balcarce/balcarce-city-tour-1.jpg" class="img-fluid">' +
//     '<div id="description" class="p-3">Como en la mayoría de los pueblos bonaerenses, la ciudad de Balcarce se mueve al compás de su plaza principal, que en este caso ocupa nada más y nada menos que cuatro formidables manzanas. Los tilos aportan la sombra adecuada para descansar bajo sus ramas y las pérgolas cubiertas de enredaderas añaden estilo romántico a este paraje, ubicado a 407 kilómetros de la Capital Federal.' +
//     '<br />' +
//     '<div id="collapseExample">' +
//     '<div class="">En el centro de la Plaza Libertad se encuentra el monumento a la República, erigido sobre la Pirámide de Mayo. Diversas estatuas y canteros de flores invitan a un apacible recorrido a pie. La plaza es el eje de la vida balcarceña, donde se llevan a cabo las principales festividades de la ciudad y se instalan algunos puestos de artesanías, inspirados mayormente en la temática automovilística.     Alrededor de la Plaza Libertad se concentra el conjunto de los edificios destacados de la población, como el Palacio Municipal -un edificio del año 1929-, la fuente con el monumento al brigadier general Antonio González Balcarce, quien fue Segundo Jefe del Ejército de los Andes, el Banco de la Nación Argentina, el Museo del Automovilismo Juan Manuel Fangio y la Iglesia San José, de estilo romano, que data del año 1886.</div>' +
//     '</div>' +
//     '<a class="btn btn-primary-wwepc readmore" role="button">Read More</a> ' +
//     '</div>' +
//     '</div>' +
//     '<div id="desafio" class="p-3"></div>' +
//     // '<div id="location" class="p-3">' +
//     //     '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3150.592766012663!2d-58.257691784680304!3d-37.8464184797465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959aaf15b0657f65%3A0xbd1f381ba07edf7!2sPlaza+Libertad!5e0!3m2!1sen!2sar!4v1516214484703" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>' +
//     // '</div>' +
//     '</section>' +
//     '</div>';
//
//   $("#main-tourist" ).html(htmlinfo);//reset content
//   e.preventDefault();
//
//
//
// });

$(document).on('click','.readmoreinfo', function(e){

  $('#collapseExample').toggle();
  e.preventDefault(); // Prevent a page reload when a link is pressed
});


var cont = 2 ;
var m = new Menu();
var footer = new Footer();

//*****************RENDER THE MAIN PAGE*****************************
document.getElementById('header_container').innerHTML = m.render();
//document.getElementById('main').innerHTML = putContent('home');//should be router
$(window).trigger('hashchange');
//document.getElementById('footer').innerHTML= footer.render();

//*****************END RENDER THE MAIN PAGE*****************************
