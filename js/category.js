document.addEventListener('DOMContentLoaded', function() {
    fetch('https://congtyxulynuoc-1fb58-default-rtdb.firebaseio.com/category.json') // Thay 'URL_API_CỦA_BẠN' bằng URL thực tế của API
        .then(response => response.json())
        .then(data => {
            const menuHtml = buildMenu(data);
            document.getElementById('mega_main_menu_ul').innerHTML = menuHtml;
        })
        .catch(error => console.error('Error:', error));
});

function buildMenu(categories) {
    let menuHtml = '';
    for (let category of categories) {
        menuHtml += `
            <li id="menu-item-${category.id}" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-${category.id} default_dropdown default_style drop_to_right submenu_default_width columns1">
                <a href="#" class="item_link with_icon" tabindex="1">
                    <span class="link_content">
                        <span class="link_text">${category.name}</span>
                    </span>
                </a>
                <ul class="mega_dropdown">`;

        for (let sub of category.sub) {
            menuHtml += `
                <li id="menu-item-${sub.id}" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-${sub.id} default_dropdown default_style drop_to_right submenu_default_width columns1">
                    <a href="maincategory.html?key=${sub.key}" class="item_link disable_icon" tabindex="2">
                        <i class=""></i>
                        <span class="link_content">
                            <span class="link_text">${sub.namesub}</span>
                        </span>
                    </a>
                </li>`;
        }

        menuHtml += '</ul></li>';
    }
    return menuHtml;
}
