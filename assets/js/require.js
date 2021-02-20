let _header = document.querySelector('#header')
let _footer = document.querySelector('#footer')
let header_content = `<div id="searchPushTop" class="search-push-top">
<div class="container position-relative">
  <div class="search-push-top-content pt-3">
    <!-- Close Button -->
    <div class="search-push-top-close-btn">
      <div class="hs-unfold">
        <a class="js-hs-unfold-invoker btn btn-icon btn-xs btn-soft-secondary mt-2 mr-2" href="javascript:;"
           data-hs-unfold-options='{
                "target": "#searchPushTop",
                "type": "jquery-slide",
                "contentSelector": ".search-push-top"
               }'>
          <svg width="10" height="10" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="M11.5,9.5l5-5c0.2-0.2,0.2-0.6-0.1-0.9l-1-1c-0.3-0.3-0.7-0.3-0.9-0.1l-5,5l-5-5C4.3,2.3,3.9,2.4,3.6,2.6l-1,1 C2.4,3.9,2.3,4.3,2.5,4.5l5,5l-5,5c-0.2,0.2-0.2,0.6,0.1,0.9l1,1c0.3,0.3,0.7,0.3,0.9,0.1l5-5l5,5c0.2,0.2,0.6,0.2,0.9-0.1l1-1 c0.3-0.3,0.3-0.7,0.1-0.9L11.5,9.5z"/>
          </svg>
        </a>
      </div>
    </div>
    <!-- End Close Button -->

    <!-- Input -->
<form class="input-group">
      <input type="search" class="form-control" placeholder="Search Front" aria-label="Search Front">
      <div class="input-group-append">
        <button type="button" class="btn btn-primary">Search</button>
      </div>
    </form>
    <!-- End Input -->

    <!-- Content -->
    <div class="row d-none d-md-flex mt-7">
      <div class="col-sm-6">
        <span class="h5">sugestion</span>

        <div class="row">
          <!-- Nav Link -->
          <div class="col-6">
            <div class="nav nav-sm nav-x-0 flex-column">
              <a class="nav-link" href="#">
                <i class="fas fa-angle-right mr-1"></i> About Keonald
              </a>
              <a class="nav-link" href="#">
                <i class="fas fa-angle-right mr-1"></i> latest Phones
              </a>
              <a class="nav-link" href="#">
                <i class="fas fa-angle-right mr-1"></i> About
              </a>
              <a class="nav-link" href="#">
                <i class="fas fa-angle-right mr-1"></i> Services
              </a>
              <!-- <a class="nav-link" href="#">
                <i class="fas fa-angle-right mr-1"></i> Invoice
              </a> -->
            </div>
          </div>
          <!-- End Nav Link -->

          <!-- Nav Link -->
        
          <!-- End Nav Link -->
        </div>
      </div>

      <div class="col-sm-6">
        <!-- Banner -->
        <div class="rounded search-push-top-banner">
          <div class="d-flex align-items-center">
            <div class="search-push-top-banner-container">
              <img class="img-fluid search-push-top-banner-img" src="assets/img/mockups/img3.png" alt="Image Description">
              <img class="img-fluid search-push-top-banner-img" src="assets/img/mockups/img2.png" alt="Image Description">
            </div>

            <div>
              <div class="mb-4">
                <span class="h5">Featured Item</span>
                <p>Get an amazing Phones.</p>
              </div>
              <a class="btn btn-xs btn-soft-success transition-3d-hover" href="javascript:;">ORDER Now <i class="fas fa-angle-right fa-sm ml-1"></i></a>
            </div>
          </div>
        </div>
        <!-- End Banner -->
      </div>
    </div>
    <!-- End Content -->
  </div>
</div>
</div>
<!-- End Search -->

<div class="header-section">
<!-- Topbar -->
<div class="container header-hide-content pt-2">
  <div class="d-flex align-items-center">
    <!-- Language -->
    <div class="hs-unfold">
      <a class="js-hs-unfold-invoker dropdown-nav-link dropdown-toggle d-flex align-items-center" href="javascript:;"
         data-hs-unfold-options='{
          "target": "#languageDropdown",
          "type": "css-animation",
          "event": "hover",
          "hideOnScroll": "true"
         }'>
        <img class="dropdown-item-icon mr-2" src="/assets/vendor/flag-icon-css/flags/4x3/us.svg" alt="SVG">
        <span class="d-inline-block d-sm-none">US</span>
        <span class="d-none d-sm-inline-block">United States</span>
      </a>

      <div id="languageDropdown" class="hs-unfold-content dropdown-menu">
        <a class="dropdown-item active" href="#">English</a>
        <a class="dropdown-item" href="#">Deutsch</a>
        <a class="dropdown-item" href="#">Español‎</a>
      </div>
    </div>
    <!-- End Language -->

    <div class="ml-auto">
      <!-- Jump To -->
      <div class="hs-unfold d-sm-none mr-2">
        <a class="js-hs-unfold-invoker dropdown-nav-link dropdown-toggle d-flex align-items-center" href="javascript:;"
           data-hs-unfold-options='{
            "target": "#jumpToDropdown",
            "type": "css-animation",
            "event": "hover",
            "hideOnScroll": "true"
           }'>
          Jump to
        </a>

        <div id="jumpToDropdown" class="hs-unfold-content dropdown-menu">
          <a class="dropdown-item" href="page-faq.html">Help</a>
          <a class="dropdown-item" href="page-contacts-agency.html">Contacts</a>
        </div>
      </div>
      <!-- End Jump To -->

      <!-- Links -->
      <div class="nav nav-sm nav-y-0 d-none d-sm-flex ml-sm-auto">
        <a class="nav-link" href="page-faq.html">Help</a>
        <a class="nav-link" href="page-contacts-agency.html">Contacts</a>
      </div>
      <!-- End Links -->
    </div>

    <ul class="list-inline ml-2 mb-0">
      <!-- Search -->
      <li class="list-inline-item">
        <div class="hs-unfold">
          <a class="js-hs-unfold-invoker btn btn-xs btn-icon btn-ghost-secondary" href="javascript:;"
             data-hs-unfold-options='{
              "target": "#searchPushTop",
              "type": "jquery-slide",
              "contentSelector": ".search-push-top"
             }'>
            <i class="fas fa-search"></i>
          </a>
        </div>
      </li>
      <!-- End Search -->

      <!-- Shopping Cart -->
      <li class="list-inline-item">
        <div class="hs-unfold">
          <a class="js-hs-unfold-invoker btn btn-xs btn-icon btn-ghost-secondary" href="javascript:;"
             data-hs-unfold-options='{
              "target": "#shoppingCartDropdown",
              "type": "css-animation",
              "event": "hover",
              "hideOnScroll": "true"
             }'>
            <i class="fas fa-shopping-cart"></i>
          </a>

          <div id="shoppingCartDropdown" class="hs-unfold-content dropdown-menu dropdown-menu-right dropdown-card text-center" style="min-width: 275px;">
            <div class="card">
              <div class="card-body">
                <figure class="max-w-9rem mx-auto mb-3">
                  <img class="img-fluid" src="assets/svg/illustrations/empty-cart.svg" alt="SVG">
                </figure>
                <span class="d-block">Your cart is empty</span>
              </div>

              <div class="card-footer">
                <small>Free shipping on orders over <strong class="text-dark">$50</strong></small>
              </div>
            </div>
          </div>
        </div>
      </li>
      <!-- End Shopping Cart -->

      <!-- Account Login -->
      <li class="list-inline-item">
        <div class="hs-unfold">
          <a class="js-hs-unfold-invoker btn btn-icon btn-xs btn-ghost-secondary" href="javascript:;" data-toggle="modal" data-target="#signupModal">
            <i class="fas fa-user-circle"></i>
          </a>
        </div>
      </li>
      <!-- End Account Login -->
    </ul>
  </div>
</div>
<!-- End Topbar -->

<div id="logoAndNav" class="container">
  <!-- Nav -->
  <nav class="js-mega-menu navbar navbar-expand-lg">
    <!-- Logo -->
    <a class="navbar-brand" href="/" aria-label="Front">
      <img src="logo6.jpg" alt="Logo" style="width: 50px ;"/>
    </a><!-- End Logo -->

    <!-- Responsive Toggle Button -->
    <button type="button" class="navbar-toggler btn btn-icon btn-sm rounded-circle"
            aria-label="Toggle navigation"
            aria-expanded="false"
            aria-controls="navBar"
            data-toggle="collapse"
            data-target="#navBar">
      <span class="navbar-toggler-default">
        <svg width="14" height="14" viewBox="  18 18" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M17.4,6.2H0.6C0.3,6.2,,5.9,,5.5V4.1c0-0.4,0.3-0.7,0.6-0.7h16.9c0.3,0,0.6,0.3,0.6,0.7v1.4C18,5.9,17.7,6.2,17.4,6.2z M17.4,14.1H0.6c-0.3,0-0.6-0.3-0.6-0.7V12c0-0.4,0.3-0.7,0.6-0.7h16.9c0.3,0,0.6,0.3,0.6,0.7v1.4C18,13.7,17.7,14.1,17.4,14.1z"/>
        </svg>
      </span>
      <span class="navbar-toggler-toggled">
        <svg width="14" height="14" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M11.5,9.5l5-5c0.2-0.2,0.2-0.6-0.1-0.9l-1-1c-0.3-0.3-0.7-0.3-0.9-0.1l-5,5l-5-5C4.3,2.3,3.9,2.4,3.6,2.6l-1,1 C2.4,3.9,2.3,4.3,2.5,4.5l5,5l-5,5c-0.2,0.2-0.2,0.6,0.1,0.9l1,1c0.3,0.3,0.7,0.3,0.9,0.1l5-5l5,5c0.2,0.2,0.6,0.2,0.9-0.1l1-1 c0.3-0.3,0.3-0.7,0.1-0.9L11.5,9.5z"/>
        </svg>
      </span>
    </button>
    <!-- End Responsive Toggle Button -->

    <!-- Navigation -->
    <div id="navBar" class="collapse navbar-collapse">
      <div class="navbar-body header-abs-top-inner">
        <ul class="navbar-nav">
          

          <!-- Pages -->
          <li class="hs-has-sub-menu navbar-nav-item">
            <a id="pagesMegaMenu" class="hs-mega-menu-invoker nav-link nav-link-toggle " href="javascript:;" aria-haspopup="true" aria-expanded="false" aria-labelledby="pagesSubMenu">conatct</a>

            <!-- Pages - Submenu -->
            <div id="pagesSubMenu" class="hs-sub-menu dropdown-menu" aria-labelledby="pagesMegaMenu" style="min-width: 230px;">
              <!-- Account -->
              <div class="hs-has-sub-menu">
                <a id="navLinkPagesAccount" class="hs-mega-menu-invoker dropdown-item dropdown-item-toggle " href="javascript:;" aria-haspopup="true" aria-expanded="false" aria-controls="navSubmenuPagesAccount">Account <span class="badge badge-success badge-pill ml-2">New</span></a>

                <div id="navSubmenuPagesAccount" class="hs-sub-menu dropdown-menu" aria-labelledby="navLinkPagesAccount" style="min-width: 230px;">
                  <a class="dropdown-item " href="account-overview.html">Personal info</a>
                  <a class="dropdown-item " href="account-login-and-security.html">Login &amp; security</a>
                  <a class="dropdown-item " href="account-notifications.html">Notifications</a>
                  <a class="dropdown-item " href="account-preferences.html">Preferences</a>
                  <a class="dropdown-item " href="account-orders.html">Orders</a>
                  <a class="dropdown-item " href="account-wishlist.html">Wishlist</a>
                  <a class="dropdown-item " href="account-billing.html">Plans &amp; payment</a>
                  <a class="dropdown-item " href="account-address.html">Address</a>
                  <a class="dropdown-item " href="account-teams.html">Teams</a>
                </div>
              </div>
              <!-- Account -->

              <!-- Company -->
              <div class="hs-has-sub-menu">
                <a id="navLinkPagesCompany" class="hs-mega-menu-invoker dropdown-item dropdown-item-toggle " href="javascript:;" aria-haspopup="true" aria-expanded="false" aria-controls="navSubmenuPagesCompany">Company</a>

                <div id="navSubmenuPagesCompany" class="hs-sub-menu dropdown-menu" aria-labelledby="navLinkPagesCompany" style="min-width: 230px;">
                  <a class="dropdown-item " href="page-about-agency.html">About Agency</a>
                  <a class="dropdown-item " href="page-services-agency.html">Services Agency</a>
                  <a class="dropdown-item " href="page-customers.html">Customers</a>
                  <a class="dropdown-item " href="page-customer-story.html">Customer story</a>
                  <a class="dropdown-item " href="page-careers.html">Careers</a>
                  <a class="dropdown-item " href="page-careers-single.html">Careers Single</a>
                  <a class="dropdown-item " href="page-hire-us.html">Hire Us</a>
                </div>
              </div>
              <!-- Company -->

              <!-- Portfolio -->
              <div class="hs-has-sub-menu">
                <a id="navLinkPagesPortfolio" class="hs-mega-menu-invoker dropdown-item dropdown-item-toggle " href="javascript:;" aria-haspopup="true" aria-expanded="false" aria-controls="navSubmenuPagesPortfolio">Portfolio</a>

                <div id="navSubmenuPagesPortfolio" class="hs-sub-menu dropdown-menu" aria-labelledby="navLinkPagesPortfolio" style="min-width: 230px;">
                  <a class="dropdown-item " href="portfolio-grid.html">Grid</a>
                  <a class="dropdown-item " href="portfolio-masonry.html">Masonry</a>
                  <a class="dropdown-item " href="portfolio-modern.html">Modern</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item " href="portfolio-case-studies-branding.html">Case Studies Branding</a>
                  <a class="dropdown-item " href="portfolio-case-studies-product.html">Case Studies Product</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item " href="portfolio-single-page-list.html">Single Page List</a>
                  <a class="dropdown-item " href="portfolio-single-page-grid.html">Single Page Grid</a>
                  <a class="dropdown-item " href="portfolio-single-page-masonry.html">Single Page Masonry</a>
                </div>
              </div>
              <!-- End Portfolio -->

              <!-- Login -->
              <div class="hs-has-sub-menu">
                <a id="navLinkPagesLogin" class="hs-mega-menu-invoker dropdown-item dropdown-item-toggle " href="javascript:;" aria-haspopup="true" aria-expanded="false" aria-controls="navSubmenuPagesLogin">Login &amp; Signup</a>

                <div id="navSubmenuPagesLogin" class="hs-sub-menu dropdown-menu" aria-labelledby="navLinkPagesLogin" style="min-width: 230px;">
                  <a class="dropdown-item " href="page-login.html">Login</a>
                  <a class="dropdown-item " href="page-signup.html">Signup</a>
                  <a class="dropdown-item " href="page-recover-account.html">Recover Account</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item " href="page-login-simple.html">Login Simple</a>
                  <a class="dropdown-item " href="page-signup-simple.html">Signup Simple</a>
                  <a class="dropdown-item " href="page-recover-account-simple.html">Recover Account Simple</a>
                </div>
              </div>
              <!-- Signup -->

              <!-- Contacts -->
              <div class="hs-has-sub-menu">
                <a id="navLinkContactsServices" class="hs-mega-menu-invoker dropdown-item dropdown-item-toggle " href="javascript:;" aria-haspopup="true" aria-expanded="false" aria-controls="navSubmenuContactsServices">Contacts</a>

                <div id="navSubmenuContactsServices" class="hs-sub-menu dropdown-menu" aria-labelledby="navLinkContactsServices" style="min-width: 230px;">
                  <a class="dropdown-item " href="page-contacts-agency.html">Contacts Agency</a>
                  <a class="dropdown-item " href="page-contacts-start-up.html">Contacts Start-Up</a>
                </div>
              </div>
              <!-- Contacts -->

              <!-- Utilities -->
              <div class="hs-has-sub-menu">
                <a id="navLinkPagesUtilities" class="hs-mega-menu-invoker dropdown-item dropdown-item-toggle " href="javascript:;" aria-haspopup="true" aria-expanded="false" aria-controls="navSubmenuPagesUtilities">Utilities</a>

                <div id="navSubmenuPagesUtilities" class="hs-sub-menu dropdown-menu" aria-labelledby="navLinkPagesUtilities" style="min-width: 230px;">
                  <a class="dropdown-item " href="page-pricing.html">Pricing</a>
                  <a class="dropdown-item " href="page-faq.html">FAQ</a>
                  <a class="dropdown-item " href="page-terms.html">Terms &amp; Conditions</a>
                  <a class="dropdown-item " href="page-privacy.html">Privacy &amp; Policy</a>
                </div>
              </div>
              <!-- Utilities -->

              <!-- Specialty -->
              <div class="hs-has-sub-menu">
                <a id="navLinkPagesSpecialty" class="hs-mega-menu-invoker dropdown-item dropdown-item-toggle " href="javascript:;" aria-haspopup="true" aria-expanded="false" aria-controls="navSubmenuPagesSpecialty">Specialty</a>

                <div id="navSubmenuPagesSpecialty" class="hs-sub-menu dropdown-menu" aria-labelledby="navLinkPagesSpecialty" style="min-width: 230px;">
                  <a class="dropdown-item " href="page-cover-page.html">Cover Page</a>
                  <a class="dropdown-item " href="page-coming-soon.html">Coming Soon</a>
                  <a class="dropdown-item " href="page-maintenance-mode.html">Maintenance Mode</a>
                  <a class="dropdown-item " href="page-status.html">Status</a>
                  <a class="dropdown-item " href="page-invoice.html">Invoice</a>
                  <a class="dropdown-item " href="page-error-404.html">Error 404</a>
                </div>
              </div>
              <!-- Specialty -->
            </div>
            <!-- End Pages - Submenu -->
          </li>
          <!-- End Pages -->

         

          <!-- Shop -->
          <li class="hs-has-mega-menu navbar-nav-item"
              data-hs-mega-menu-item-options='{
                "desktop": {
                  "position": "right",
                  "maxWidth": "440px"
                }
              }'>
            <a id="shopMegaMenu" class="hs-mega-menu-invoker nav-link nav-link-toggle active" href="javascript:;" aria-haspopup="true" aria-expanded="false">Shop</a>

            <!-- Shop - Mega Menu -->
            <div class="hs-mega-menu dropdown-menu hs-position-right" aria-labelledby="shopMegaMenu">
              <div class="mega-menu-body">
                <span class="d-block h5">Shop Elements</span>

                <div class="row">
                  <div class="col-sm-6">
                    <a class="dropdown-item active" href="shop-classic.html">Classic</a>
                    <a class="dropdown-item " href="shop-categories.html">Categories</a>
                    <a class="dropdown-item " href="shop-categories-sidebar.html">Categories Sidebar</a>
                    <a class="dropdown-item " href="shop-products-grid.html">Products Grid</a>
                    <a class="dropdown-item " href="shop-products-list.html">Products List</a>
                  </div>

                  <div class="col-sm-6">
                    <a class="dropdown-item " href="shop-single-product.html">Single Product</a>
                    <a class="dropdown-item " href="shop-empty-cart.html">Empty Cart</a>
                    <a class="dropdown-item " href="shop-cart.html">Cart</a>
                    <a class="dropdown-item " href="shop-checkout.html">Checkout</a>
                    <a class="dropdown-item " href="shop-order-completed.html">Order Completed</a>
                  </div>
                </div>
              </div>

            

          <!-- Demos -->

          <!-- End Demos -->

          <!-- Docs -->

            <!-- Docs - Submenu -->
           
            <!-- End Docs - Submenu -->
          </li>
          <!-- End Docs -->

          <!-- Button -->
          <li class="navbar-nav-last-item">
            <a class="btn btn-sm btn-primary transition-3d-hover" href="https://themes.getbootstrap.com/product/front-multipurpose-responsive-template/" target="_blank">Buy Now</a>
          </li>
          <!-- End Button -->
        </ul>
      </div>
    </div>
    <!-- End Navigation -->
  </nav>
  <!-- End Nav -->
</div>
</div>`

let footer_content = `<div class="container">
      <div class="row justify-content-lg-between space-top-2 space-bottom-lg-2">
        <div class="col-lg-3 mb-5">
          <div class="d-flex align-items-start flex-column h-100">
            <a class="w-100 mb-3 mb-lg-auto" href="index-2.html" aria-label="Front">
              <img class="brand" src="logo5.jpg" alt="Logo">
            </a>
            <p class="small text-muted mb-0">fav-tech. 2020 .</p>
          </div>
        </div>

        <div class="col-6 col-md-4 col-lg-3 ml-lg-auto mb-5 mb-lg-0">
          <h5>About</h5>

          <!-- Nav Link -->
          <ul class="nav nav-sm nav-x-0 flex-column">
            <li class="nav-item"><a class="nav-link" href="#">About Company</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Shipping options</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Tracking a package</a></li>

          </ul>
          <!-- End Nav Link -->
        </div>

        <div class="col-6 col-md-4 col-lg-3 mb-5 mb-lg-0">
          <h5>Product/Brand</h5>

          <!-- Nav Link -->
          <ul class="nav nav-sm nav-x-0 flex-column">
            <li class="nav-item"><a class="nav-link" href="#">Infinix</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Tecno</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Itel</a></li>
          </ul>
          <!-- End Nav Link -->
        </div>

        <div class="col-md-4 col-lg-2 mb-5 mb-lg-0">
          <h5>Contact</h5>

          <!-- Nav Link -->
          <ul class="nav nav-sm nav-x-0 flex-column">
            <li class="nav-item">
              <a class="nav-link" href="demo-help-desk/index.html">
                  <span class="media align-items-center">
                    <i class="fas fa-info-circle mr-2"></i>
                    <span class="media-body">Help</span>
                  </span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                  <span class="media align-items-center">
                    <i class="fas fa-user-circle mr-2"></i>
                    <span class="media-body">Your Account</span>
                  </span>
              </a>
            </li>
            <li class="position-relative">
              <!-- Country -->
              <div class="hs-unfold position-static">
                <a class="js-hs-unfold-invoker nav-link" href="javascript:;"
                   data-hs-unfold-options='{
                      "target": "#footerCountry",
                      "type": "css-animation",
                      "animationIn": "slideInDown"
                     }'>
                  <img class="dropdown-item-icon" src="assets/vendor/flag-icon-css/flags/4x3/us.svg" alt="United States Flag">
                  <span>United States</span>
                </a>

                <div id="footerCountry" class="hs-unfold-content dropdown-menu dropdown-card dropdown-menu-md-right dropdown-menu-bottom w-100 w-sm-auto mb-0">
                  <div class="card">
                    <!-- Body -->
                    <div class="card-body">
                      <h5>Front available in</h5>

                      <div class="row">
                        <div class="col-6">
                          <!-- Nav Link -->
                          <a class="nav-link" href="#">
                            <img class="max-w-3rem mr-1" src="assets/vendor/flag-icon-css/flags/4x3/au.svg" alt="Australia Flag">
                            Australia
                          </a>
                          <a class="nav-link" href="#">
                            <img class="max-w-3rem mr-1" src="assets/vendor/flag-icon-css/flags/4x3/at.svg" alt="Austria Flag">
                            Austria
                          </a>
                          <a class="nav-link" href="#">
                            <img class="max-w-3rem mr-1" src="assets/vendor/flag-icon-css/flags/4x3/be.svg" alt="Belgium Flag">
                            Belgium
                          </a>
                          <a class="nav-link" href="#">
                            <img class="max-w-3rem mr-1" src="assets/vendor/flag-icon-css/flags/4x3/ca.svg" alt="Canada Flag">
                            Canada
                          </a>
                          <a class="nav-link" href="#">
                            <img class="max-w-3rem mr-1" src="assets/vendor/flag-icon-css/flags/4x3/dk.svg" alt="Denmark Flag">
                            Denmark
                          </a>
                          <a class="nav-link" href="#">
                            <img class="max-w-3rem mr-1" src="assets/vendor/flag-icon-css/flags/4x3/fi.svg" alt="Finland Flag">
                            Finland
                          </a>
                          <a class="nav-link" href="#">
                            <img class="max-w-3rem mr-1" src="assets/vendor/flag-icon-css/flags/4x3/fr.svg" alt="France Flag">
                            France
                          </a>
                          <a class="nav-link" href="#">
                            <img class="max-w-3rem mr-1" src="assets/vendor/flag-icon-css/flags/4x3/de.svg" alt="Germany Flag">
                            Germany
                          </a>
                          <a class="nav-link" href="#">
                            <img class="max-w-3rem mr-1" src="assets/vendor/flag-icon-css/flags/4x3/nl.svg" alt="Netherlands Flag">
                            Netherlands
                          </a>
                          <!-- End Nav Link -->
                        </div>

                        <div class="col-6">
                          <!-- Nav Link -->
                          <a class="nav-link" href="#">
                            <img class="max-w-3rem mr-1" src="assets/vendor/flag-icon-css/flags/4x3/nz.svg" alt="New Zealand Flag">
                            New Zealand
                          </a>
                          <a class="nav-link" href="#">
                            <img class="max-w-3rem mr-1" src="assets/vendor/flag-icon-css/flags/4x3/no.svg" alt="Norway Flag">
                            Norway
                          </a>
                          <a class="nav-link" href="#">
                            <img class="max-w-3rem mr-1" src="assets/vendor/flag-icon-css/flags/4x3/pt.svg" alt="PortugalPREVIEW Flag">
                            Portugal
                          </a>
                          <a class="nav-link" href="#">
                            <img class="max-w-3rem mr-1" src="assets/vendor/flag-icon-css/flags/4x3/sg.svg" alt="Singapore Flag">
                            Singapore
                          </a>
                          <a class="nav-link" href="#">
                            <img class="max-w-3rem mr-1" src="assets/vendor/flag-icon-css/flags/4x3/es.svg" alt="Spain Flag">
                            Spain
                          </a>
                          <a class="nav-link" href="#">
                            <img class="max-w-3rem mr-1" src="assets/vendor/flag-icon-css/flags/4x3/se.svg" alt="Sweden Flag">
                            Sweden
                          </a>
                          <a class="nav-link" href="#">
                            <img class="max-w-3rem mr-1" src="assets/vendor/flag-icon-css/flags/4x3/ch.svg" alt="Switzerland Flag">
                            Switzerland
                          </a>
                          <a class="nav-link" href="#">
                            <img class="max-w-3rem mr-1" src="assets/vendor/flag-icon-css/flags/4x3/gb.svg" alt="United Kingdom Flag">
                            UK
                          </a>
                          <a class="nav-link active " href="#">
                            <img class="max-w-3rem mr-1" src="assets/vendor/flag-icon-css/flags/4x3/us.svg" alt="United States Flag">
                            US
                          </a>
                          <!-- End Nav Link -->
                        </div>
                      </div>
                    </div>
                    <!-- End Body -->

                    <!-- Footer -->
                    <a class="card-footer border-0 card-bg-light" href="#">
                      <span class="d-block text-muted mb-1">More countries coming soon.</span>
                      <span class="d-block font-size-1">Signup to get notified <i class="fas fa-angle-right fa-sm ml-1"></i></span>
                    </a>
                    <!-- End Footer -->
                  </div>
                </div>
              </div>
              <!-- End Country -->
            </li>
          </ul>
          <!-- End Nav Link -->
        </div>
      </div>

      <hr class="my-0">

      <div class="row align-items-md-center space-1">
        <div class="col-md-4 mb-4 mb-md-0">
          <!-- Social Networks -->
          <ul class="list-inline mb-0">
            <li class="list-inline-item">
              <a class="btn btn-xs btn-icon btn-soft-secondary" href="#">
                <i class="fab fa-facebook-f"></i>
              </a>
            </li>
            <li class="list-inline-item">
              <a class="btn btn-xs btn-icon btn-soft-secondary" href="#">
                <i class="fab fa-google"></i>
              </a>
            </li>
            <li class="list-inline-item">
              <a class="btn btn-xs btn-icon btn-soft-secondary" href="#">
                <i class="fab fa-twitter"></i>
              </a>
            </li>
            <li class="list-inline-item">
              <a class="btn btn-xs btn-icon btn-soft-secondary" href="#">
                <i class="fab fa-github"></i>
              </a>
            </li>
          </ul>
          <!-- End Social Networks -->
        </div>

        <div class="col-md-8 text-md-right">
          <!-- Links -->
          <ul class="nav nav-sm justify-content-md-end">
            <li class="nav-item">
              <a class="nav-link pl-0" href="page-privacy.html">Privacy &amp; policy</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="page-terms.html">Terms &amp; conditions</a>
            </li>
            <li class="nav-item">
              <a class="nav-link pr-0" href="page-careers.html">Careers</a>
            </li>
          </ul>
          <!-- End Links -->
        </div>
      </div>
    </div>`
    
window.addEventListener('DOMContentLoaded', () => {
    _header.innerHTML = header_content
    _footer.innerHTML = footer_content



    // fetch('/components/header.html', {
    //     method: 'GET',
    //     header: ''
    // }
    
    // )
    // .then( async(response) =>  {
        
    // if (!response.ok) {
    //     throw Error(response.statusText);
    // }
    //     const responseText = await response.text()
    //     console.log(responseText)
    //     _header.innerHTML = responseText
    // })
    // .catch((error) => {
    //     console.log('Looks like there was a problem: \n', error);
    // });

    // footer

   

  
})
