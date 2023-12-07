function formatToVND(number) {
  return number.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });
}
(async () => {
  const productSale = document.querySelector("#productsale");
  const productNew = document.querySelector("#productnew");
  const res = await fetch(
    `https://congtyxulynuoc-1fb58-default-rtdb.firebaseio.com/productsale.json`
  );
  const data = await res.json();
  if (data) {
    Object.entries(data).map(([key, value]) => {
      if (value != null) {
        productSale.innerHTML += `
        <div class="col">
        <div class="col-inner">
          <div class="badge-container absolute left top z-1">
            <div class="callout badge badge-circle">
              <div class="badge-inner secondary on-sale">
                <span class="onsale">-${value.percentSale}</span>
              </div>
            </div>
          </div>
          <div
            class="product-small box has-hover box-normal box-text-bottom">
            <div class="box-image">
              <div class="">
                <a href="detailproduct.html?key=${key}&&cate=productsale">
                  <img
                    width="300"
                    height="300"
                    src="${value.image}"
                    class="attachment-shop_catalog size-shop_catalog wp-post-image"
                    alt=""
                    sizes="(max-width: 300px) 100vw, 300px" />
                </a>
              </div>
              <div
                class="image-tools z-top top right show-on-hover"></div>
              <div
                class="image-tools grid-tools text-center hide-for-small bottom hover-slide-in show-on-hover"></div>
            </div>
            <div class="box-text text-center">
              <div class="title-wrapper">
                <p class="name product-title">
                  <a href="detailproduct.html?key=${key}&&cate=productsale"
                    >${value.name}</a
                  >
                </p>
              </div>
              <div class="price-wrapper">
                <span class="price"
                  ><del
                    ><span class="woocommerce-Price-amount amount"
                      >${formatToVND(value.priceNormal)}&nbsp;<span
                        class="woocommerce-Price-currencySymbol"
                        >&#8363;</span
                      ></span
                    ></del
                  >
                  <ins
                    ><span class="woocommerce-Price-amount amount"
                      >${formatToVND(value.priceSale)}&nbsp;<span
                        class="woocommerce-Price-currencySymbol"
                        >&#8363;</span
                      ></span
                    ></ins
                  ></span
                >
              </div>
            </div>
            <!-- box-text -->
          </div>
          <!-- box -->
        </div>
        <!-- .col-inner -->
      </div>
              `;
      }
    });
  }

  const res2 = await fetch(
    `https://congtyxulynuoc-1fb58-default-rtdb.firebaseio.com/productnew.json`
  );
  const data2 = await res2.json();
  if (data2) {
    Object.entries(data).map(([key, value]) => {
      if (value != null) {
        productNew.innerHTML += `
        <div class="col">
        <div class="col-inner">
          <div class="badge-container absolute left top z-1">
            <div class="callout badge badge-circle">
              <div class="badge-inner secondary on-sale">
                <span class="onsale">-${value.percentSale}</span>
              </div>
            </div>
          </div>
          <div
            class="product-small box has-hover box-normal box-text-bottom">
            <div class="box-image">
              <div class="">
                <a href="detailproduct.html?key=${key}&&cate=productnew">
                  <img
                    width="300"
                    height="300"
                    src="${value.image}"
                    class="attachment-shop_catalog size-shop_catalog wp-post-image"
                    alt=""
                    sizes="(max-width: 300px) 100vw, 300px" />
                </a>
              </div>
              <div
                class="image-tools z-top top right show-on-hover"></div>
              <div
                class="image-tools grid-tools text-center hide-for-small bottom hover-slide-in show-on-hover"></div>
            </div>
            <!-- box-image -->

            <div class="box-text text-center">
              <div class="title-wrapper">
                <p class="name product-title">
                  <a href="detailproduct.html?key=${key}&&cate=productnew"
                    >${value.name}</a
                  >
                </p>
              </div>
              <div class="price-wrapper">
                <span class="price"
                  ><del
                    ><span class="woocommerce-Price-amount amount"
                      >${formatToVND(value.priceNormal)}&nbsp;<span
                        class="woocommerce-Price-currencySymbol"
                        >&#8363;</span
                      ></span
                    ></del
                  >
                  <ins
                    ><span class="woocommerce-Price-amount amount"
                      >${formatToVND(value.priceSale)}&nbsp;<span
                        class="woocommerce-Price-currencySymbol"
                        >&#8363;</span
                      ></span
                    ></ins
                  ></span
                >
              </div>
            </div>
            <!-- box-text -->
          </div>
          <!-- box -->
        </div>
        <!-- .col-inner -->
      </div>
   
        `;
      }
    });
  }
})();
