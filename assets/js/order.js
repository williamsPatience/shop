var productDetails = new URLSearchParams(window.location.search);
var productName = productDetails.get('name')
var img = productDetails.get('img')
var price = productDetails.get('price')

let product_content = `<div class="row">
<div class="col-lg-7 mb-7 mb-lg-0">
  <div class="pr-lg-4">
  <div class="card p-10">
  <img class="img-fluid w-100 rounded-lg" src="${img}" alt="Image Description">
    
  </div>
  </div>
</div>

<!-- Product Description -->
<div class="col-lg-5">
  <!-- Rating -->
  <div class="d-flex align-items-center small mb-2">
    <div class="text-warning mr-2">
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
    </div>
    <a class="link-underline" href="#reviewSection">Read all 287 reviews</a>
  </div>
  <!-- End Rating -->

  <!-- Title -->
  <div class="mb-5">
    <h1 class="h2">${productName}</h1>
    <p>(36gb)</p>
  </div>
  <!-- End Title -->

  <!-- Price -->
  <div class="mb-5">
    <h2 class="font-size-1 text-body mb-0">98,000:</h2>
    <span class="text-dark font-size-2 font-weight-bold">${price}</span>
    <span class="text-body ml-2"><del>$179.99</del></span>
  </div>
  <!-- End Price -->

  <!-- Quantity -->
  <div class="border rounded-lg py-2 px-3 mb-3">
    <div class="js-quantity-counter row align-items-center">
      <div class="col-7">
        <small class="d-block text-body font-weight-bold">Select quantity</small>
        <input class="js-result form-control h-auto border-0 rounded-lg p-0" type="text" value="1">
      </div>
      <div class="col-5 text-right">
        <a class="js-minus btn btn-xs btn-icon btn-outline-secondary rounded-circle" href="javascript:;">
          <i class="fas fa-minus"></i>
        </a>
        <a class="js-plus btn btn-xs btn-icon btn-outline-secondary rounded-circle" href="javascript:;">
          <i class="fas fa-plus"></i>
        </a>
      </div>
    </div>
  </div>
  <!-- End Quantity -->

  <!-- Accordion -->
  <div id="shopCartAccordion" class="accordion mb-5">
    <!-- Card -->
    <div class="card card-bordered shadow-none">
      <div class="card-body card-collapse" id="shopCardHeadingOne">
        <a class="btn btn-link btn-block card-btn collapsed" href="javascript:;" role="button"
                data-toggle="collapse"
                data-target="#shopCardOne"
                aria-expanded="false"
                aria-controls="shopCardOne">
          <span class="row align-items-center">
            <span class="col-9">
              <span class="media align-items-center">
                <span class="w-100 max-w-6rem mr-3">
                  <img class="img-fluid" src="assets/svg/icons/icon-65.svg" alt="SVG">
                </span>
                <span class="media-body">
                  <span class="d-block font-size-1 font-weight-bold">Free shipping</span>
                </span>
              </span>
            </span>
            <span class="col-3 text-right">
              <span class="card-btn-toggle">
                <span class="card-btn-toggle-default">&plus;</span>
                <span class="card-btn-toggle-active">&minus;</span>
              </span>
            </span>
          </span>
        </a>
      </div>
      <div id="shopCardOne" class="collapse" aria-labelledby="shopCardHeadingOne" data-parent="#shopCartAccordion">
        <div class="card-body">
          <p class="small mb-0">We offer free shipping anywhere in the U.S. A skilled delivery team will bring the boxes into your office.</p>
        </div>
      </div>
    </div>
    <!-- End Card -->

    <!-- Card -->
    <div class="card card-bordered shadow-none">
      <div class="card-body card-collapse" id="shopCardHeadingTwo">
        <a class="btn btn-link btn-block card-btn collapsed" href="javascript:;" role="button"
                data-toggle="collapse"
                data-target="#shopCardTwo"
                aria-expanded="false"
                aria-controls="shopCardTwo">
          <span class="row align-items-center">
            <span class="col-9">
              <span class="media align-items-center">
                <span class="w-100 max-w-6rem mr-3">
                  <img class="img-fluid" src="assets/svg/icons/icon-64.svg" alt="SVG">
                </span>
                <span class="media-body">
                  <span class="d-block font-size-1 font-weight-bold">30 Days return</span>
                </span>
              </span>
            </span>
            <span class="col-3 text-right">
              <span class="card-btn-toggle">
                <span class="card-btn-toggle-default">&plus;</span>
                <span class="card-btn-toggle-active">&minus;</span>
              </span>
            </span>
          </span>
        </a>
      </div>
      <div id="shopCardTwo" class="collapse" aria-labelledby="shopCardHeadingTwo" data-parent="#shopCartAccordion">
        <div class="card-body">
          <p class="small mb-0">If you're not satisfied, return it for a full refund. We'll take care of disassembly and return shipping.</p>
        </div>
      </div>
    </div>
    <!-- End Card -->
  </div>
  <!-- End Accordion -->

  <div class="mb-4">
    <button type="button" class="btn btn-block btn-primary btn-pill transition-3d-hover">CHECKOUT</button>
  </div>

  <!-- Help Link -->
  <div class="media align-items-center">
    <span class="w-100 max-w-6rem mr-2">
      <img class="img-fluid" src="assets/svg/icons/icon-4.svg" alt="SVG">
    </span>
    <div class="media-body text-body small">
      <span class="font-weight-bold mr-1">Need Help?</span>
      <a class="link-underline" href="#">Chat now</a>
    </div>
  </div>
  <!-- End Help Link -->
</div>
<!-- End Product Description -->
</div>`

window.addEventListener('load', () => {
    product_wrapper.innerHTML = product_content

})


console.log(productName + img + price)



