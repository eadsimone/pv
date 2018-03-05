const Menu = class Menu {
  // constructor(height, width) {
  //   this.height = height;
  //   this.width = width;
  // }
  // Method
  render() {
    let html= '<header class="header_wpc"> ' +
      '    <nav class="navbar navbar-expand-sm"> ' +
      '      <a id="logo" class="navbar-brand logo" href="#"> ' +
      '        <img src="../images/logopodes.png" class="d-inline-block align-top" alt=""></img> ' +
      '      </a> ' +
      '      <div class="navbar-collapse justify-content-end" id="navbarText"> ' +
      '        <ul class="navbar-nav"> ' +
      '          <li class="nav-item mx-3 wwepc-grid"> ' +
      '            <a class="nav-link grid-icon" href="#" onclick="openNav()"> ' +
      '              <img src=../images/grid_icon.png> ' +
      '              <span class="qty"> 0 </span>' +
      '            </a> ' +
      '          </li> ' +
      '        </ul> ' +
      '      </div> ' +
      '    </nav> ' +
      '    <div id="wwepc_nav_overlay" class="overlay"> ' +
      '      <ul class="nav language-bar"> ' +
      '        <li class="nav-item"> ' +
      '          <a class="nav-link active" href="#"></a> ' +
      '        </li> ' +
      '        <li class="nav-item"> ' +
      '          <a class="nav-link" href="#">CUPONES</a> ' +
      '        </li> ' +
      '      </ul> ' +
      '      <div id="selectLanguage" class="mobile-menu dropdown"> ' +
      '        <button class="dropdown-toggle" id="dropdownMenuLang" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" > ' +
      '          <span>CUPONES</span><img src="../images/icons/triangle.svg"> ' +
      '        </button> ' +
      '        <a href="javascript:void(0)" class="closebtn nav-link " onclick="closeNav()"><img src="../images/icons/x.svg"></a> ' +
      '      </div> ' +
      '      <div class="overlay-content m-3"> ' +
      '        <div class="row"> ' +
      '          <div class="col-12 col-sm-2"> ' +
      '            <div class="row"> ' +
      '              <div class="col-12 col-sm-12 title"  onclick="collapseFunc(\'1\')"> ' +
      '                <a class="btn title" data-toggle="collapse" data-parent="#accordion" href="#collapse1" role="button" aria-expanded="false" aria-controls="collapse1">Paseos turisticos</a> ' +
      '                <img id="mobile-arrow1" class="mobile" width="14px" height="8px" src="../images/icons/arrow.png"> ' +
      '              </div> ' +
      '                <ul class="nav flex-column collapse panel-collapse in" id="collapse1" role="tabpanel"> ' +
      '                  <li class="nav-item"> ' +
      '                    <a class="nav-link" href="#" >10% off Museo Fangio</a> ' +
      '                  </li> ' +
      '                  <li class="nav-item"> ' +
      '                    <a class="nav-link" href="#" >15% off Autodromo Balcarce</a> ' +
      '                  </li> ' +
      // '                  <li class="nav-item"> ' +
      // '                    <a class="nav-link" href="#" ></a> ' +
      // '                  </li> ' +
      // '                  <li class="nav-item"> ' +
      // '                    <a class="nav-link" href="#" ></a> ' +
      // '                  </li> ' +
      // '                  <li class="nav-item"> ' +
      // '                    <a class="nav-link" href="#" data-l10n-id="OVERLAY-CONT-TRYOUPROC"></a> ' +
      // '                  </li> ' +
      '                </ul> ' +
      '            </div> ' +
      '          </div> ' +
      '          <div class="col-12 col-sm-2"> ' +
      '            <div class="row"> ' +
      '              <div class="col-12 col-sm-12 title"  onclick="collapseFunc(\'2\')"> ' +
      '                <a class="btn title" data-toggle="collapse" href="#collapse2" role="button" aria-expanded="false" aria-controls="collapseExample" >Restaurantes</a> ' +
      '                <img id="mobile-arrow2" class="mobile" width="14px" height="8px" src="../images/icons/arrow.png"> ' +
      '              </div> ' +
      '              <ul class="nav flex-column collapse" id="collapse2"> ' +
      '                <li class="nav-item"> ' +
      '                  <a class="nav-link" href="#" > 10% off Parrilla la Rueda</a> ' +
      '                </li> ' +
      '                <li class="nav-item"> ' +
      '                  <a class="nav-link" href="#" >10% off Guolis cafe</a> ' +
      '                </li> ' +
      '                <li class="nav-item"> ' +
      '                  <a class="nav-link cupon" href="#" >50% off MC donals</a> ' +
      '                  <img src="../images/cupones/mcdonals.jpeg" alt="" class="mw-50 img-fluid cuopon ">' +
      '                </li> ' +
      // '                <li class="nav-item"> ' +
      // '                  <a class="nav-link" href="#" data-l10n-id="OVERLAY-CONT-STRENGTHCONDITION"></a> ' +
      // '                </li> ' +
      // '                <li class="nav-item"> ' +
      // '                  <a class="nav-link" href="#" data-l10n-id="OVERLAY-CONT-PROF-DEVELOPMENT"></a> ' +
      // '                </li> ' +
      // '                <li class="nav-item"> ' +
      // '                  <a class="nav-link" href="#" data-l10n-id="OVERLAY-CONT-SPORTS-MEDICINE"></a> ' +
      // '                </li> ' +
      // '                <li class="nav-item"> ' +
      // '                  <a class="nav-link" href="#" data-l10n-id="OVERLAY-CONT-COACHES"></a> ' +
      // '                </li> ' +
      // '                <li class="nav-item"> ' +
      // '                  <a class="nav-link" href="#" data-l10n-id="OVERLAY-CONT-WWEPC-ROSTER"></a> ' +
      // '                </li> ' +
      // '                <li class="nav-item"> ' +
      // '                  <a class="nav-link" href="#" data-l10n-id="OVERLAY-CONT-COMUNITY-OUTREACH" ></a> ' +
      // '                </li> ' +
      '              </ul> ' +
      '            </div> ' +
      '          </div> ' +
      '          <div class="col-12 col-sm-2"> ' +
      '            <div class="row"> ' +
      '              <div class="col-12 col-sm-12 title" onclick="collapseFunc(\'3\')"> ' +
      '                <a class="btn title" data-toggle="collapse" href="#collapse3" role="button" aria-expanded="false" aria-controls="collapseExample" >Regalos</a> ' +
      '                <img id="mobile-arrow3" class="mobile" width="14px" height="8px" src="../images/icons/arrow.png"> ' +
      '              </div> ' +
      '              <ul class="nav flex-column collapse" id="collapse3"> ' +
      '                <li class="nav-item"> ' +
      '                  <a class="nav-link" href="#" >10% off casa balcarce</a> ' +
      '                </li> ' +
      '                <li class="nav-item"> ' +
      '                  <a class="nav-link" href="#" >10% off Regalitos Juana </a> ' +
      '                </li> ' +
      '              </ul> ' +
      '            </div> ' +
      '          </div> ' +
      // '          <div class="col-12 col-sm-2"> ' +
      // '            <div class="row"> ' +
      // '              <div class="col-12 col-sm-12 title" onclick="collapseFunc(\'4\')"> ' +
      // '                <a class="btn title" data-toggle="collapse" href="#collapse4" role="button" aria-expanded="false" aria-controls="collapseExample" data-l10n-id="TRYOUT"></a> ' +
      // '                <img id="mobile-arrow4" class="mobile" width="14px" height="8px" src="/images/icons/arrow.png"> ' +
      // '              </div> ' +
      // '              <ul class="nav flex-column collapse" id="collapse4"> ' +
      // '                <li class="nav-item"> ' +
      // '                  <a class="nav-link" href="#" data-l10n-id="OVERLAY-CONT-ABOUT-TRYOUTS"></a> ' +
      // '                </li> ' +
      // '                <li class="nav-item"> ' +
      // '                  <a class="nav-link" href="#" data-l10n-id="OVERLAY-CONT-PAST-TRYOUTS"></a> ' +
      // '                </li> ' +
      // '              </ul> ' +
      // '            </div> ' +
      // '          </div> ' +
      // '          <div class="col-12 col-sm-2"> ' +
      // '            <div class="row"> ' +
      // '              <div class="col-12 col-sm-12 title"> ' +
      // '                <a class="btn title apply" data-toggle="collapse" href="#collapse5" role="button" aria-expanded="false" aria-controls="collapseExample"> ' +
      // '                  <span data-l10n-id="APPLY"> </span>&nbsp;<img class="apply" src="../images/icons/apply_link.svg"> ' +
      // '                </a> ' +
      // '              </div> ' +
      // '            </div> ' +
      // '          </div> ' +
      '        </div> ' +
      '      </div> ' +
      '    </div> ' +
      '  </header>';
    return html;
  }
};
