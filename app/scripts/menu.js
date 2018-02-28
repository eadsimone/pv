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
      // '          <li class="nav-item active"> ' +
      // '            <a class="nav-link mx-3" data-l10n-id="ABOUTWWEPC" href="#about"></a> ' +
      // '          </li> ' +
      // '          <li class="nav-item mx-3"> ' +
      // '            <a class="nav-link" href="#" data-l10n-id="JOURNEY"></a> ' +
      // '          </li> ' +
      // '          <li class="nav-item mx-3"> ' +
      // '            <a class="nav-link" href="#" data-l10n-id="TRYOUT"></a> ' +
      // '          </li> ' +
      // '          <li class="nav-item mx-3"> ' +
      // '            <a class="nav-link" href="#" data-l10n-id="APPLY"></a> ' +
      // '          </li> ' +
      // '          <li class="nav-item mx-3 divider"> ' +
      // '            <a class="nav-link" href="#">/</a> ' +
      // '          </li> ' +
      '          <li class="nav-item mx-3 wwepc-grid"> ' +
      '            <a class="nav-link grid-icon" href="#" onclick="openNav()"> ' +
      '              <!--<img src={menuGridIcon}>--> ' +
      '              <img src=../images/grid_icon.png> ' +
      '            </a> ' +
      '          </li> ' +
      '        </ul> ' +
      '      </div> ' +
      '    </nav> ' +
      '    <div id="wwepc_nav_overlay" class="overlay"> ' +
      '      <ul class="nav language-bar"> ' +
      '        <li class="nav-item"> ' +
      '          <a class="nav-link active" href="#" data-l10n-id="OVERLAY-LANG-EN"></a> ' +
      '        </li> ' +
      '        <li class="nav-item"> ' +
      '          <a class="nav-link" href="#" data-l10n-id="OVERLAY-LANG-ES"></a> ' +
      '        </li> ' +
      '        <li class="nav-item"> ' +
      '          <a class="nav-link" href="#" data-l10n-id="OVERLAY-LANG-HI"></a> ' +
      '        </li> ' +
      '        <li class="nav-item"> ' +
      '          <a class="nav-link" href="#" data-l10n-id="OVERLAY-LANG-ZH"></a> <!--TODO we have 3 chinese for this:zh, Chinese (Simplified)\tzh-Hans, Chinese (Traditional)\tzh-Hant --> ' +
      '        </li> ' +
      '        <li class="nav-item"> ' +
      '          <a class="nav-link" href="#" data-l10n-id="OVERLAY-LANG-AR"></a> ' +
      '        </li> ' +
      '        <li class="nav-item close-item"> ' +
      '          <a href="javascript:void(0)" class="closebtn nav-link " onclick="closeNav()"><img src="../images/icons/x.svg"></a> ' +
      '        </li> ' +
      '      </ul> ' +
      '      <div id="selectLanguage" class="mobile-menu dropdown"> ' +
      '        <button class="dropdown-toggle" id="dropdownMenuLang" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" > ' +
      '          <span data-l10n-id="OVERLAY-LANG-EN"></span><img src="../images/icons/triangle.svg"> ' +
      '        </button> ' +
      '        <ul id="sortby" class="dropdown-menu" aria-labelledby="dropdownMenuLang"> ' +
      '          <li class="TITLE_A_Z" data-sort-type="TITLE_A_Z" style="display: none;"> ' +
      '            <a class="dropdown-item" href="#" data-l10n-id="OVERLAY-LANG-EN"> ' +
      '            </a> ' +
      '          </li> ' +
      '          <li class="RELEASE_DATE" data-sort-type="RELEASE_DATE" style=""> ' +
      '            <a class="dropdown-item" href="#" data-l10n-id="OVERLAY-LANG-ES"> ' +
      '            </a> ' +
      '          </li> ' +
      '          <li class="TITLE_A_Z" data-sort-type="TITLE_A_Z" style=""> ' +
      '            <a class="dropdown-item" href="#" data-l10n-id="OVERLAY-LANG-HI"> ' +
      '            </a> ' +
      '          </li> ' +
      '          <li class="RELEASE_DATE" data-sort-type="RELEASE_DATE" style=""> ' +
      '            <a class="dropdown-item" href="#" data-l10n-id="OVERLAY-LANG-ZH"> ' +
      '            </a> ' +
      '          </li> ' +
      '          <li class="RELEASE_DATE" data-sort-type="RELEASE_DATE" style=""> ' +
      '            <a class="dropdown-item" href="#" data-l10n-id="OVERLAY-LANG-AR"> ' +
      '            </a> ' +
      '          </li> ' +
      '        </ul> ' +
      '        <a href="javascript:void(0)" class="closebtn nav-link " onclick="closeNav()"><img src="../images/icons/x.svg"></a> ' +
      '      </div> ' +
      '      <div class="overlay-content m-3"> ' +
      '        <div class="row"> ' +
      '          <div class="col-12 col-sm-2"> ' +
      '            <div class="row"> ' +
      '              <div class="col-12 col-sm-12 title"  onclick="collapseFunc(\'1\')"> ' +
      '                <a class="btn title" data-toggle="collapse" data-parent="#accordion" href="#collapse1" role="button" aria-expanded="false" aria-controls="collapse1" data-l10n-id="OVERLAY-CONT-HOME"></a> ' +
      '                <img id="mobile-arrow1" class="mobile" width="14px" height="8px" src="../images/icons/arrow.png"> ' +
      '              </div> ' +
      '                <ul class="nav flex-column collapse panel-collapse in" id="collapse1" role="tabpanel"> ' +
      '                  <li class="nav-item"> ' +
      '                    <a class="nav-link" href="#" data-l10n-id="OVERLAY-CONT-WELCOME"></a> ' +
      '                  </li> ' +
      '                  <li class="nav-item"> ' +
      '                    <a class="nav-link" href="#" data-l10n-id="OVERLAY-CONT-WWEPC"></a> ' +
      '                  </li> ' +
      '                  <li class="nav-item"> ' +
      '                    <a class="nav-link" href="#" data-l10n-id="OVERLAY-CONT-STRENGTHCONDITION"></a> ' +
      '                  </li> ' +
      '                  <li class="nav-item"> ' +
      '                    <a class="nav-link" href="#" data-l10n-id="OVERLAY-CONT-LOOKCANDITATES"></a> ' +
      '                  </li> ' +
      '                  <li class="nav-item"> ' +
      '                    <a class="nav-link" href="#" data-l10n-id="OVERLAY-CONT-TRYOUPROC"></a> ' +
      '                  </li> ' +
      '                </ul> ' +
      '            </div> ' +
      '          </div> ' +
      '          <div class="col-12 col-sm-2" onclick="collapseFunc(\'2\')"> ' +
      '            <div class="row"> ' +
      '              <div class="col-12 col-sm-12 title"> ' +
      '                <a class="btn title" data-toggle="collapse" href="#collapse2" role="button" aria-expanded="false" aria-controls="collapseExample" data-l10n-id="ABOUTWWEPC"></a> ' +
      '                <img id="mobile-arrow2" class="mobile" width="14px" height="8px" src="../images/icons/arrow.png"> ' +
      '              </div> ' +
      '              <ul class="nav flex-column collapse" id="collapse2"> ' +
      '                <li class="nav-item"> ' +
      '                  <a class="nav-link" href="#" data-l10n-id="OVERLAY-CONT-FACILITIES"></a> ' +
      '                </li> ' +
      '                <li class="nav-item"> ' +
      '                  <a class="nav-link" href="#" data-l10n-id="OVERLAY-CONT-IN-RING-TRAI-PRO"></a> ' +
      '                </li> ' +
      '                <li class="nav-item"> ' +
      '                  <a class="nav-link" href="#" data-l10n-id="OVERLAY-CONT-STRENGTHCONDITION"></a> ' +
      '                </li> ' +
      '                <li class="nav-item"> ' +
      '                  <a class="nav-link" href="#" data-l10n-id="OVERLAY-CONT-PROF-DEVELOPMENT"></a> ' +
      '                </li> ' +
      '                <li class="nav-item"> ' +
      '                  <a class="nav-link" href="#" data-l10n-id="OVERLAY-CONT-SPORTS-MEDICINE"></a> ' +
      '                </li> ' +
      '                <li class="nav-item"> ' +
      '                  <a class="nav-link" href="#" data-l10n-id="OVERLAY-CONT-COACHES"></a> ' +
      '                </li> ' +
      '                <li class="nav-item"> ' +
      '                  <a class="nav-link" href="#" data-l10n-id="OVERLAY-CONT-WWEPC-ROSTER"></a> ' +
      '                </li> ' +
      '                <li class="nav-item"> ' +
      '                  <a class="nav-link" href="#" data-l10n-id="OVERLAY-CONT-COMUNITY-OUTREACH" ></a> ' +
      '                </li> ' +
      '              </ul> ' +
      '            </div> ' +
      '          </div> ' +
      '          <div class="col-12 col-sm-2"> ' +
      '            <div class="row"> ' +
      '              <div class="col-12 col-sm-12 title" onclick="collapseFunc(\'3\')"> ' +
      '                <a class="btn title" data-toggle="collapse" href="#collapse3" role="button" aria-expanded="false" aria-controls="collapseExample" data-l10n-id="JOURNEY"></a> ' +
      '                <img id="mobile-arrow3" class="mobile" width="14px" height="8px" src="../images/icons/arrow.png"> ' +
      '              </div> ' +
      '              <ul class="nav flex-column collapse" id="collapse3"> ' +
      '                <li class="nav-item"> ' +
      '                  <a class="nav-link" href="#" data-l10n-id="OVERLAY-CONT-SUPERSTAR-JOURNEY"></a> ' +
      '                </li> ' +
      '                <li class="nav-item"> ' +
      '                  <a class="nav-link" href="#" data-l10n-id="OVERLAY-CONT-SUPERSTAR-JOURNEY"> </a> ' +
      '                </li> ' +
      '                <li class="nav-item"> ' +
      '                  <a class="nav-link" href="#" data-l10n-id="OVERLAY-CONT-ALUMNI-TESTIMONIALS"></a> ' +
      '                </li> ' +
      '              </ul> ' +
      '            </div> ' +
      '          </div> ' +
      '          <div class="col-12 col-sm-2"> ' +
      '            <div class="row"> ' +
      '              <div class="col-12 col-sm-12 title" onclick="collapseFunc(\'4\')"> ' +
      '                <a class="btn title" data-toggle="collapse" href="#collapse4" role="button" aria-expanded="false" aria-controls="collapseExample" data-l10n-id="TRYOUT"></a> ' +
      '                <img id="mobile-arrow4" class="mobile" width="14px" height="8px" src="/images/icons/arrow.png"> ' +
      '              </div> ' +
      '              <ul class="nav flex-column collapse" id="collapse4"> ' +
      '                <li class="nav-item"> ' +
      '                  <a class="nav-link" href="#" data-l10n-id="OVERLAY-CONT-ABOUT-TRYOUTS"></a> ' +
      '                </li> ' +
      '                <li class="nav-item"> ' +
      '                  <a class="nav-link" href="#" data-l10n-id="OVERLAY-CONT-PAST-TRYOUTS"></a> ' +
      '                </li> ' +
      '              </ul> ' +
      '            </div> ' +
      '          </div> ' +
      '          <div class="col-12 col-sm-2"> ' +
      '            <div class="row"> ' +
      '              <div class="col-12 col-sm-12 title"> ' +
      '                <a class="btn title apply" data-toggle="collapse" href="#collapse5" role="button" aria-expanded="false" aria-controls="collapseExample"> ' +
      '                  <span data-l10n-id="APPLY"> </span>&nbsp;<img class="apply" src="../images/icons/apply_link.svg"> ' +
      '                </a> ' +
      '              </div> ' +
      '            </div> ' +
      '          </div> ' +
      '        </div> ' +
      '      </div> ' +
      '    </div> ' +
      '  </header>';
    return html;
  }
};
