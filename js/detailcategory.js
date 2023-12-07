(async ()=>{
    const main_cate = document.querySelector('#main-cate')
    const param = new URLSearchParams(window.location.search)
    const keyParam = param.get('key')

    const res = await fetch(`https://congtyxulynuoc-1fb58-default-rtdb.firebaseio.com/post.json`)
    const data = await res.json()
    if(data) {
        Object.entries(data).map(([key , value]) =>{
            if(value != null && value.idcate == keyParam){
               
                main_cate.innerHTML += `
                <div class="col post-item">
                <div class="col-inner">
                  <a href="detailpost.html?key=${key}" class="plain">
                    <div
                      class="box box-normal box-text-bottom box-blog-post has-hover">
                      <div class="box-image">
                        <div class="image-cover" style="padding-top: 56.25%">
                          <img
                            width="600"
                            height="400"
                            src="${value.avt}"
                            class="attachment-medium size-medium wp-post-image"
                            alt=""
                           
                            sizes="(max-width: 600px) 100vw, 600px" />
                        </div>
                      </div>
                      <!-- .box-image -->
                      <div class="box-text text-center">
                        <div class="box-text-inner blog-post-inner">
                          <h5 class="post-title is-large">
                            ${value.titleSEO}
                          </h5>
                          <div class="is-divider"></div>
                          <p class="from_the_blog_excerpt">
                            ${value.des}
                          </p>
                        </div>
                        <!-- .box-text-inner -->
                      </div>
                   
                    </div>
                    <!-- .box --> </a
                  ><!-- .link -->
                </div>
                <!-- .col-inner -->
              </div>
                `
            }
        })
    }
})()