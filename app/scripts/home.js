class Home {


  // Method
  constructor() {
    this.visitados = 0;
    this.share = ['../images/fotoshare/balcarce.jpeg','','../images/fotoshare/Barrosa.jpeg','','','','../images/fotoshare/fangio.jpeg'];
    this.currentItem=0;
    this.itemTourist = '[' +
      '  {' +
      '    "userId": 1,' +
      '    "id": 1,' +
      '    "visited": 0,' +
      '    "title": "Plaza libertad",' +
      '    "info": "Como en la mayoría de los pueblos bonaerenses, la ciudad de Balcarce se mueve al compás de su plaza principal, que en este caso ocupa nada más y nada menos que cuatro formidables manzanas. Los tilos aportan la sombra adecuada para descansar bajo sus ramas y las pérgolas cubiertas de enredaderas añaden estilo romántico a este paraje, ubicado a 407 kilómetros de la Capital Federal.",' +
      '    "moreinfo" : "En el centro de la Plaza Libertad se encuentra el monumento a la República, erigido sobre la Pirámide de Mayo. Diversas estatuas y canteros de flores invitan a un apacible recorrido a pie. La plaza es el eje de la vida balcarceña, donde se llevan a cabo las principales festividades de la ciudad y se instalan algunos puestos de artesanías, inspirados mayormente en la temática automovilística.     Alrededor de la Plaza Libertad se concentra el conjunto de los edificios destacados de la población, como el Palacio Municipal -un edificio del año 1929-, la fuente con el monumento al brigadier general Antonio González Balcarce, quien fue Segundo Jefe del Ejército de los Andes, el Banco de la Nación Argentina, el Museo del Automovilismo Juan Manuel Fangio y la Iglesia San José, de estilo romano, que data del año 1886.",'+
      '    "image": "/images/fotositems/Plaza Libertad.jpg"' +
      '  },' +
      '  {' +
      '    "userId": 1,' +
      '    "id": 2,' +
      '    "visited": 0,' +
      '    "title": "El auténtico postre Balcarce",' +
      '    "info": "est rerum tempore vitae\\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\\nqui aperiam non debitis possimus qui neque nisi nulla",' +
      '    "moreinfo": "Lorem ipsum dolor sit amet, nam legimus explicari eu, eam cu posse torquatos persecuti, nominati sadipscing eu vel. In tale prompta vituperatoribus pro. Mandamus consetetur dissentias ut sit, an est viris recteque. Ubique indoctum mel no, magna sanctus definitiones ne quo. Solum intellegam duo ne, sea oblique disputationi ne, duo an dolor ubique. Cu eius lucilius definiebas eum.",'+
      '    "image": "/images/fotositems/PostreBalcarce.jpg"' +
      '  },' +
      '  {' +
      '    "userId": 1,' +
      '    "id": 3,' +
      '    "visited": 0,' +
      '    "title": "Senderos en la sierra",' +
      '    "info": "et iusto sed quo iure\\nvoluptatem occaecati omnis eligendi aut ad\\nvoluptatem doloribus vel accusantium quis pariatur\\nmolestiae porro eius odio et labore et velit aut",' +
      '    "moreinfo": "Lorem ipsum dolor sit amet, nam legimus explicari eu, eam cu posse torquatos persecuti, nominati sadipscing eu vel. In tale prompta vituperatoribus pro. Mandamus consetetur dissentias ut sit, an est viris recteque. Ubique indoctum mel no, magna sanctus definitiones ne quo. Solum intellegam duo ne, sea oblique disputationi ne, duo an dolor ubique. Cu eius lucilius definiebas eum.",'+
      '    "image": "/images/fotositems/SenderosenlasSierras.jpg"' +
      '  },' +
      '  {' +
      '    "userId": 1,' +
      '    "id": 4,' +
      '    "visited": 0,' +
      '    "title": "Museo Historico",' +
      '    "info": "ullam et saepe reiciendis voluptatem adipisci\\nsit amet autem assumenda provident rerum culpa\\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\\nquis sunt voluptatem rerum illo velit",' +
      '    "moreinfo": "Lorem ipsum dolor sit amet, nam legimus explicari eu, eam cu posse torquatos persecuti, nominati sadipscing eu vel. In tale prompta vituperatoribus pro. Mandamus consetetur dissentias ut sit, an est viris recteque. Ubique indoctum mel no, magna sanctus definitiones ne quo. Solum intellegam duo ne, sea oblique disputationi ne, duo an dolor ubique. Cu eius lucilius definiebas eum.",'+
      '    "image": "/images/fotositems/museohistorico.jpg"' +
      '  },' +
      '  {' +
      '    "userId": 1,' +
      '    "id": 5,' +
      '    "visited": 0,' +
      '    "title": "Laguna La Brava y sus sierras milenarias",' +
      '    "info": "repudiandae veniam quaerat sunt sed\\nalias aut fugiat sit autem sed est\\nvoluptatem omnis possimus esse voluptatibus quis\\nest aut tenetur dolor neque",' +
      '    "moreinfo": "Lorem ipsum dolor sit amet, nam legimus explicari eu, eam cu posse torquatos persecuti, nominati sadipscing eu vel. In tale prompta vituperatoribus pro. Mandamus consetetur dissentias ut sit, an est viris recteque. Ubique indoctum mel no, magna sanctus definitiones ne quo. Solum intellegam duo ne, sea oblique disputationi ne, duo an dolor ubique. Cu eius lucilius definiebas eum.",'+
      '    "image": "https://www.welcomeargentina.com/paseos/laguna_labrava/laguna-la-brava-1.jpg"' +
      '  },' +
      '  {' +
      '    "userId": 1,' +
      '    "id": 6,' +
      '    "visited": 0,' +
      '    "title": "Museo Fangio",' +
      '    "info": "ut aspernatur corporis harum nihil quis provident sequi\\nmollitia nobis aliquid molestiae\\nperspiciatis et ea nemo ab reprehenderit accusantium quas\\nvoluptate dolores velit et doloremque molestiae",' +
      '    "moreinfo": "Lorem ipsum dolor sit amet, nam legimus explicari eu, eam cu posse torquatos persecuti, nominati sadipscing eu vel. In tale prompta vituperatoribus pro. Mandamus consetetur dissentias ut sit, an est viris recteque. Ubique indoctum mel no, magna sanctus definitiones ne quo. Solum intellegam duo ne, sea oblique disputationi ne, duo an dolor ubique. Cu eius lucilius definiebas eum.",'+
      '    "image": "/images/fotositems/museofangio.jpg"' +
      '  }' +
      ']';
  }

  rendercoupon() {

    // $(document).on('click','.cupon',function(e){
    //
    //   //alert('cupon de descuento');
    //   console.log('entra coupon');
    //   $('.cuopon').toggle();
    //   e.preventDefault();
    // });


  }



  // Method
  renderTourist() {
    console.log('render turism');
    $('main').html('');
    var html= '';
    var data = JSON.parse(this.itemTourist);


    html+='<section class="main-section wwen-height text-center overly">' +
      '     <div class="container mt-3 py-3" id="main-tourist">' +
      '       <div id="main-tourist-row" class="row">';
            for (var i=0;i < data.length; i++ ){
              html+='<div class="col-6 col-sm-4 col-md-4 item-tourist-btn" data-itemid="'+ data[i].id +'">' +
                '<img src="'+ data[i].image +'" alt="" id="'+ data[i].id +'" class="mw-50 img-fluid pv-rounded">' +
                '<p>'+ data[i].title +'</p></div>';

              if (data[i].visited != 0){
                this.visitados++;
              }
            }

    $('.qty').html(this.visitados);


    html+='</div></div></section>';

    const mainContent = document.getElementById('main');
    mainContent.innerHTML = html;
    //return html;
    this.rendercoupon();
  }

  renderItem (){
    var infodata = JSON.parse(this.itemTourist);
    var selfthis= this;
    $(document).on('click','#main-tourist-row div',function(e){

      var ii =   $(this).data('itemid');
      selfthis.currentItem = ii;

      var itemId= parseInt(ii)-1;
      var obj = infodata[itemId];
      $( '#main-tourist' ).html('');//reset content

      const htmlinfo= '<div class="row">' +
        '<section id="info-details" class="col-12">' +
        '   <h1>'+ obj.title +'</h1>'+
        '   <div id="image_description" class="p-3">' +
        '     <img src="'+ obj.image +'" class="img-fluid">' +
        '     <div id="description" class="p-3">'+ obj.info +'<br />' +
        '       <div id="collapseExample">' +
        '         <div class="">'+ obj.info +'</div>' +
        '       </div>' +
        // '       <a class="btn btn-primary-wwepc readmore readmoreinfo" role="button">Read More</a> ' +
        '<button type="button" class="btn btn-primary-pv readmore readmoreinfo">Leer más</button>'+
        '     </div>' +
        '   </div>' +
        '   <div id="desafio" class="p-3">' +
        // '     <a class="btn btn-primary-wwepc readmore discount" role="button">Comparte tu foto y obten tu descuento!!!</a> ' +
        '     <button type="button" class="btn btn-primary-pv readmore discount">Comparte tu foto y obten tu descuento!!!</button>'+
        '   </div>' +
        '   <div id="location" class="google-maps">' +
             '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3150.592766012663!2d-58.257691784680304!3d-37.8464184797465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959aaf15b0657f65%3A0xbd1f381ba07edf7!2sPlaza+Libertad!5e0!3m2!1sen!2sar!4v1516214484703" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>' +
        '   </div>' +
        '</section>' +
        '</div>';

      $('#main-tourist' ).html(htmlinfo);//reset content
      e.preventDefault();
    });
  }

  clickShare() {

    var selfthis= this;
    var selfthisdata = JSON.parse(this.itemTourist);
    $(document).on('click','#share-buttons a',function(e){

      let citem = selfthis.currentItem-1;
      selfthisdata[citem].visited = 1;
      selfthis.itemTourist = JSON.stringify(selfthisdata);
      selfthis.renderTourist();
      e.preventDefault();
    });
  }

  renderSocialSharing (){

    var selfthis = this;

    $(document).on('click','#info-details .discount',function(e){

      var image = selfthis.share[selfthis.currentItem];

      $( '#main-tourist' ).html('');//reset content

      const htmlinfo= '<div class="row">' +
        '<section id="social-share" class="col-12">' +
        // '   <h1>'+ obj.title +'</h1>'+
        '   <div id="image_description" class="p-3">' +
        '     <img src="'+ image+'" class="img-fluid">' +
        '   </div>' +
        '   <div id="button-share" class="p-3">' +
        '<div id="share-buttons"> ' +

        // '    <!-- Buffer --> ' +
        // '    <a href="https://bufferapp.com/add?url=https://simplesharebuttons.com&amp;text=Simple Share Buttons"  > ' +
        // '        <img src="https://simplesharebuttons.com/images/somacro/buffer.png" alt="Buffer" /> ' +
        // '    </a> ' +

        // '    <!-- Digg --> ' +
        // '    <a href="http://www.digg.com/submit?url=https://simplesharebuttons.com"  > ' +
        // '        <img src="https://simplesharebuttons.com/images/somacro/diggit.png" alt="Digg" /> ' +
        // '    </a> ' +

        '    <!-- Email --> ' +
        '    <a href="#"> ' +
        '        <img src="https://simplesharebuttons.com/images/somacro/email.png" alt="Email" /> ' +
        '    </a> ' +
        '  ' +
        '    <!-- Facebook --> ' +
        '    <a href="#"  > ' +
        '        <img src="https://simplesharebuttons.com/images/somacro/facebook.png" alt="Facebook" /> ' +
        '    </a> ' +

        '    <!-- Google+ --> ' +
        '    <a href="#"  > ' +
        '        <img src="https://simplesharebuttons.com/images/somacro/google.png" alt="Google" /> ' +
        '    </a> ' +

        '    <!-- LinkedIn --> ' +
        '    <a href="#"  > ' +
        '        <img src="https://simplesharebuttons.com/images/somacro/linkedin.png" alt="LinkedIn" /> ' +
        '    </a> ' +

        '    <!-- Pinterest --> ' +
        '    <a href="#"  > ' +
        '        <img src="https://simplesharebuttons.com/images/somacro/pinterest.png" alt="Pinterest" /> ' +
        '    </a> ' +

        // '    <!-- Print --> ' +
        // '    <a href="javascript:;" onclick="window.print()"> ' +
        // '        <img src="https://simplesharebuttons.com/images/somacro/print.png" alt="Print" /> ' +
        // '    </a> ' +

        '    <!-- Reddit --> ' +
        '    <a href="http://reddit.com/submit?url=https://simplesharebuttons.com&amp;title=Simple Share Buttons"  > ' +
        '        <img src="https://simplesharebuttons.com/images/somacro/reddit.png" alt="Reddit" /> ' +
        '    </a> ' +

        '    <!-- StumbleUpon--> ' +
        '    <a href="#"  > ' +
        '        <img src="https://simplesharebuttons.com/images/somacro/stumbleupon.png" alt="StumbleUpon" /> ' +
        '    </a> ' +

        '    <!-- Tumblr--> ' +
        '    <a href="#"  > ' +
        '        <img src="https://simplesharebuttons.com/images/somacro/tumblr.png" alt="Tumblr" /> ' +
        '    </a> ' +
        '      ' +
        '    <!-- Twitter --> ' +
        '    <a href="#"  > ' +
        '        <img src="https://simplesharebuttons.com/images/somacro/twitter.png" alt="Twitter" /> ' +
        '    </a> ' +

        '    <!-- VK --> ' +
        '    <a href="#"  > ' +
        '        <img src="https://simplesharebuttons.com/images/somacro/vk.png" alt="VK" /> ' +
        '    </a> ' +

        '    <!-- Yummly --> ' +
        '    <a href="#"  > ' +
        '        <img src="https://simplesharebuttons.com/images/somacro/yummly.png" alt="Yummly" /> ' +
        '    </a> ' +
        '</div>' +
        '   </div>' +
        '</section>' +
        '</div>';

      $('#main-tourist' ).html(htmlinfo);//reset content
      e.preventDefault();
    });
  }


  // requestTouristItems(){
  //   var html='';
  //   $.ajax({
  //     url: 'http://localhost:7800/touristitems.json#',
  //     method: 'GET'
  //   }).then(function(data) {
  //     console.log(data);
  //     return data;
  //     //html = this.renderTourist(data);
  //   });
  // };
  render() {
    this.renderItem();
    this.renderSocialSharing();
    this.clickShare();
    return this.renderTourist();
  }
}
//export default Menu;

