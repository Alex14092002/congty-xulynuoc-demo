(async ()=>{
    const param = new URLSearchParams(window.location.search)
    const key = param.get('key')

    const res = await fetch(`https://congtyxulynuoc-1fb58-default-rtdb.firebaseio.com/post/${key}.json`)
    const data = await res.json()
    console.log(data);
    const detail_product = document.querySelector('#detail_product')
    if(data){
        detail_product.innerHTML += data.detail
    }

})()