
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
const collapseFunc = (e) => {
  if (detectmob()){

    var colapse = 'collapse'+e;
    var colapseimg = 'mobile-arrow'+e;

    var x = document.getElementById(colapse);
    var imgcolapse = document.getElementById(colapseimg);

    if (x.style.display === 'none') {
      x.style.display = 'block';
      //arrow down
      imgcolapse.src = '../images/icons/arrow.png';
    } else {
      x.style.display = 'none';
      imgcolapse.src = '../images/icons/arrowdown.png';
    }
  }
};

const resetcontainers = () => {
  var numberofcontainer = 4;
  var currentActive = 0;
  for (let i=1; i <= numberofcontainer; i++ ) {
    var contId = '#container-' + i;
    if ($(contId).hasClass('active')) {
      currentActive = i;
      $(contId).removeClass('active');
    }
  }
};

const getNumberActive = (activeElement)=> {
  let arrayOfStrings = activeElement.split('-'),
    numberActive = parseInt(arrayOfStrings[1]);
  return numberActive;
};

const setReadmoreMobile= ()=> {
  if (detectmob(380)) {
    $('.readmore').css('display', 'block');
  } else {
    $('.readmore').css('display', 'none');
  }
  $('#aboutus .content p').removeClass('hidden');
};

const changeSrcImage = (activeElement) => {

  var numberActive = getNumberActive(activeElement);

  let oldImage = 'previousimage cimg-'+(numberActive-1).toString();
  let newImage = 'currentimage cimg-'+numberActive.toString();


  $('#aboutusContImg-1').removeClass().addClass( oldImage );
  $('#aboutusContImg-2').removeClass().addClass( newImage );
};

const executeSliderAboutus = (activeElement = null)=> {

  if(activeElement === null){
    cont = (cont == 5) ? 1 : cont;
    activeElement = '#container-'+cont;
    cont++;
  } else {
    clearInterval(automaticInterval);
  }

  setReadmoreMobile();
  resetcontainers();
  $(activeElement).addClass('active');
  changeSrcImage(activeElement);

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

const resetCollapse = ()=> {
  var cch = '10.94rem';
  var bimg = '50rem';

  if(detectmob(400)){
    //for small devices
  } else if (detectmob()){
    var cch = '10.94rem';
    var bimg = '70rem';
  }

  $('.readmore-coaches' ).show();
  $('.collapse-coaches' ).hide();
  $('#coaches .content p').removeClass('hidden');
  $('#coaches .content').css({ height: cch });//todo that is fixed
  $('.background-image').css({ height: bimg});
  $('.bgdfilter').css({ height: bimg});
  $('.container-coach').css({ height: bimg});
};

$(document).on('click','.readmore-coaches ,.collapse-coaches', function(e){
  e.preventDefault(); // Prevent a page reload when a link is pressed
  $('.readmore-coaches' ).toggle();
  $('.collapse-coaches' ).toggle();
  if ($(this).hasClass('readmore-coaches')){
    $('#coaches .content p').addClass('hidden');
    var nameperson = $(this).data( 'name' );
    var pbellowtoperson = $( '.'+nameperson+' p.begin-text');
    var heightCollapse = parseInt(pbellowtoperson.data( 'tall' ));

    if(detectmob(400)){
      heightCollapse = heightCollapse - 200;
    } else if (detectmob()){
      heightCollapse = heightCollapse - 180;
    } else {
      heightCollapse = heightCollapse + 50;
    }

    var especifictall = $('#coaches .content.'+ nameperson).height(heightCollapse);

    $('.container-coach').css({ height: 'auto'});    //
    //
     $('.background-image').css({ height: $('.container-coach').height()});
     $('.bgdfilter').css({ height: $('.background-image').height()});

  } else {
    resetCollapse();
  }
});

var cont = 2 ;
var automaticInterval = setInterval(executeSliderAboutus, 4000);

var m = new Menu();
var footer = new Footer();

//*****************RENDER THE MAIN PAGE*****************************
document.getElementById('header_container').innerHTML = m.render();
//document.getElementById('main').innerHTML = putContent('home');//should be router
$(window).trigger('hashchange');
//document.getElementById('footer').innerHTML= footer.render();

//*****************END RENDER THE MAIN PAGE*****************************

//Slider things
const clearli = () => {
  console.log('clearli function');
  $('#coachesslider li').each(function(i,e)
  {
    let classOfLi = $(this).attr('class'); // This is your rel value
    let isClone = (classOfLi.search('bx-clone') !==-1)? true : false ;
    if (isClone){
      $(this).removeClass().addClass('smalli bx-clone');
    }
  });
};

const displayContentSlider = (num) => {
  num = num+1;
  let el='.content-slider div:nth-child('+num+')';
  var count = $('.content-slider div').length;
  $('.content-slider div').removeClass('active-content');
  $(el).addClass('active-content');
};

const existEmpty = () => {
  $('#coachesslider li').each(function(i,e)
  {
    let classOfLi = $(this).attr('class'); // This is your rel value
    if((classOfLi=='')|| (classOfLi=='bx-clone')){
      $(this).addClass('smalli');
    }
  });
};
