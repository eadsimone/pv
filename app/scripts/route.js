$(window).on('hashchange', (e)=> {

  e.preventDefault();
  // On every hash change the render function is called with the new hash.
  // This is how the navigation of our app happens.
  var currentURL = window.location.hash;
  var previousPage = localStorage.getItem('previous_page');

  return render(decodeURI(window.location.hash));

});

var putMainContent = (page) => {

  const mainContent = document.getElementById('main');
  var home = new Home();


  switch (page) {
    case 'home':
      let htmlContentHome = home.render();
      break;
    case 'about':
      //$('.coaches').before( about.render() );//todo just for demo
      // $('.coaches').show();//todo just for demo
      // document.getElementById('todemo').innerHTML = htmlabout;//todo just for demo
      break;
    default:
      break;
  }

};


/**
 * This function decides what type of page to show
 * depending on the current url hash value.
 * @param url
 */
const render = (url) => {
  // Get the keyword from the url.
  var arrayUrl = url.split('/');
  var reseturl = arrayUrl[0].split('?');

  var temp = (arrayUrl[0]).substring(1);
  var allowedResets = ['#resetpassword', '#resetparentalcontrolpin', '#updateparentalcontrols', '#unsubscribe', '#standalone-error', '#login-error'];
  if (reseturl && allowedResets.indexOf(reseturl[0]) > -1) {
    temp = reseturl[0].split('#')[1];
  }

  // if the user is going deep, the URL will contains the content_id on the second param
  // except if the user is on the home page
  var secondParam = (arrayUrl[1] ? arrayUrl[1] : '');

  if (temp == '') {
    temp = 'home';
  }

  return putMainContent(temp);

};




