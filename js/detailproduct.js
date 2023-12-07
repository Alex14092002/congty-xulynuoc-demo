function formatToVND(number) {
    return number.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });
  }
(async () => {
  const params = new URLSearchParams(window.location.search);
  const key = params.get("key");
  const cate = params.get("cate");
  const res = await fetch(
    `https://congtyxulynuoc-1fb58-default-rtdb.firebaseio.com/${cate}/${key}.json`
  );
  const data = await res.json();
  console.log(data);
  const main = document.querySelector("#main");
  if(data){
    main.innerHTML += `
    <div class="shop-container">
    <div id="product-97"
        class="post-97 product type-product status-publish has-post-thumbnail product_cat-noi-that-phong-ngu first instock sale shipping-taxable purchasable product-type-simple">
    
        <div class="product-main">
            <div class="row content-row row-divided row-large row-reverse">
                <div class="col large-9">
                    <div class="row">
                        <div class="large-6 col">

                            <div class="product-images relative mb-half has-hover woocommerce-product-gallery woocommerce-product-gallery--with-images woocommerce-product-gallery--columns-4 images"
                                data-columns="4">

                                <div class="badge-container is-larger absolute left top z-1">
                                    <div class="callout badge badge-circle">
                                        <div class="badge-inner secondary on-sale"><span
                                                class="onsale">-${data.percentSale}</span></div>
                                    </div>
                                </div>
                                <div class="image-tools absolute top show-on-hover right z-3">
                                </div>

                                <figure
                                    class="woocommerce-product-gallery__wrapper product-gallery-slider slider slider-nav-small mb-half"
                                    data-flickity-options='{
    "cellAlign": "center",
    "wrapAround": true,
    "autoPlay": false,
    "prevNextButtons":true,
    "adaptiveHeight": true,
    "imagesLoaded": true,
    "lazyLoad": 1,
    "dragThreshold" : 15,
    "pageDots": false,
    "rightToLeft": false       }'>
                                    <div 
                                        class="first slide woocommerce-product-gallery__image"><a
                                               href="${data.image}"><img width="600"
                                                height="600"
                                                src="${data.image}"
                                                class="attachment-shop_single size-shop_single wp-post-image"
                                                alt="" title=""
                                            
                                            /></a></div>
                                </figure>

                                <div class="image-tools absolute bottom left z-3">
                                    <a href="index.html%3Fp=97.html#product-zoom"
                                        class="zoom-button button is-outline circle icon tooltip hide-for-small"
                                        title="Zoom">
                                        <i class="icon-expand"></i> </a>
                                </div>
                            </div>


                        </div>


                        <div class="product-info summary entry-summary col col-fit product-summary">
                            <h1 class="product-title entry-title">
                               ${data.name}</h1>

                            <div class="is-divider small"></div>
                            <div class="price-wrapper">
                                <p class="price product-page-price price-on-sale">
                                    <del><span class="woocommerce-Price-amount amount">${formatToVND(data.priceNormal)}</span></del>
                                    <ins><span class="woocommerce-Price-amount amount">${formatToVND(data.priceSale)}<span
                                                class="woocommerce-Price-currencySymbol"</span></span></ins>
                                </p>
                            </div>
                            <div class="hotline-single">
                                <p>Quý khách đặt hàng vui lòng liên hệ</p>
                                <p><a href="tel:0941792255"><i class="fa fa-phone" aria-hidden="true"></i>
                                        Hotline: 0987.313.246</a></p>
                            </div>
                            

                        


                        </div><!-- .summary -->


                    </div><!-- .row -->
                    <div class="product-footer">

                        <div class="woocommerce-tabs tabbed-content">
                            <ul
                                class="product-tabs nav small-nav-collapse tabs nav nav-uppercase nav-line nav-left">
                                <li class="description_tab  active">
                                    <a href="#">Mô tả chi tiết</a>
                                </li>
                               
                            </ul>
                            <div class="tab-panels">

                                <div class="panel entry-content active" id="tab-description">


                                   ${data.des ? data.des : ""}
                                </div>


                            </div><!-- .tab-panels -->
                        </div><!-- .tabbed-content -->


                        <div class="related related-products-wrapper product-section">

                           



                            <div class="row large-columns-4 medium-columns- small-columns-2 row-small">



                                <div
                                    class="product-small col has-hover post-95 product type-product status-publish has-post-thumbnail product_cat-noi-that-phong-ngu  instock sale shipping-taxable purchasable product-type-simple">
                                    <div class="col-inner">

                               
                                      
                                    </div><!-- .col-inner -->
                                </div><!-- col -->



                                <div
                                    class="product-small col has-hover post-91 product type-product status-publish has-post-thumbnail product_cat-noi-that-phong-ngu  instock sale shipping-taxable purchasable product-type-simple">
                                    <div class="col-inner">

                                  
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                </div><!-- col large-9 -->

                <div id="product-sidebar" class="col large-3 hide-for-medium shop-sidebar ">
                    <aside id="text-4" class="widget widget_text">
                        <div class="textwidget">
                            <div class="title-danh-muc">
                                <p> <i class="fa fa-cubes" aria-hidden="true"></i> DANH MỤC TIN TỨC</p>
                            </div>
                            <div
                            id="mega_main_menu"
                            class="mega_main_sidebar_menu primary_style-flat icons-left first-lvl-align-left first-lvl-separator-smooth direction-vertical fullwidth-disable pushing_content-disable mobile_minimized-enable dropdowns_trigger-hover dropdowns_animation-none no-logo no-search no-woo_cart no-buddypress responsive-enable coercive_styles-disable indefinite_location_mode-disable language_direction-ltr version-2-1-5 mega_main mega_main_menu">
                            <div class="menu_holder">
                              <div class="mmm_fullwidth_container"></div>
                              <!-- class="fullwidth_container" -->
                              <div class="menu_inner">
                                <span class="nav_logo">
                                  <a class="mobile_toggle">
                                    <span class="mobile_button">
                                      Menu &nbsp;
                                      <span class="symbol_menu">&equiv;</span>
                                      <span class="symbol_cross"
                                        >&#x2573;</span
                                      > </span
                                    ><!-- class="mobile_button" -->
                                  </a> </span
                                ><!-- /class="nav_logo" -->
                                <ul id="mega_main_menu_ul" class="mega_main_menu_ul">
                                  
                                </ul>
                              </div>
                              <!-- /class="menu_inner" -->
                            </div>
                            <!-- /class="menu_holder" -->
                          </div>
                        
                        </div>
                    </aside>
               
                </div><!-- col large-3 -->

            </div><!-- .row -->
        </div><!-- .product-main -->
    </div>


</div>

    `;
  }

})();
