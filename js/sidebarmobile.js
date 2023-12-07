(async () => {
    const catemenu = document.querySelector("#catemenu");
    const res = await fetch(`https://congtyxulynuoc-1fb58-default-rtdb.firebaseio.com/category.json`);
    const data = await res.json();

    // Lặp qua mỗi phần tử trong dữ liệu để tạo menu
    data.forEach((item) => {
        // Tạo phần tử menu chính
        let menuItem = document.createElement("li");
        menuItem.classList.add("menu-item");

        // Tạo liên kết cho menu chính
        let menuLink = document.createElement("a");
        menuLink.classList.add("nav-top-link");
        menuLink.textContent = item.name + " ";

        // Thêm icon chỉ mục xuống
        let icon = document.createElement("i");
        icon.classList.add("fa", "fa-chevron-down");
        menuLink.appendChild(icon);

        // Tạo submenu
        let submenu = document.createElement("ul");
        submenu.classList.add("submenu");

        // Lặp qua mỗi phần tử submenu
        item.sub.forEach((subItem) => {
            let subMenuItem = document.createElement("li");
            let submenuLink = document.createElement("a");
            submenuLink.href = `maincategory.html?key=${subItem.key}`; // Hoặc bất kỳ URL nào mà bạn muốn liên kết đến
            submenuLink.textContent = subItem.namesub;
            subMenuItem.appendChild(submenuLink);
            submenu.appendChild(subMenuItem);
        });

        // Thêm submenu vào menu chính
        menuItem.appendChild(menuLink);
        menuItem.appendChild(submenu);

        // Thêm menu chính vào catemenu
        catemenu.appendChild(menuItem);
    });

    // Gắn sự kiện click cho từng nav-top-link để mở và đóng submenu
    var navLinks = document.querySelectorAll(".menu-item .nav-top-link");
    navLinks.forEach(function (navLink) {
        navLink.addEventListener("click", function (event) {
            var submenu = this.nextElementSibling;
            if (submenu && submenu.classList.contains("submenu")) {
                event.preventDefault(); // Chỉ ngăn chặn hành động mặc định nếu có submenu
                submenu.classList.toggle("open-submenu");
            }
        });

    });
})();
