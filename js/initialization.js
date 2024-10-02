//Khoi tao danh sach san pham
function createProduct() {
    if (localStorage.getItem('products') == null) {
        let products = [{
            id: 1,
            status: 1, 
            title: 'Samba OG Sporty & Rich White Black',
            img: './assets/img/products/adidas1.png',
            category: 'Adidas',
            price: 3300000,
            desc: 'Thiết kế của giày dép adidas Samba OG Sporty & Rich White Black được đặc trưng bởi con lăn 3-Stripes có màu navy tương phản chạy dọc trên phần trên. Đây là một đặc điểm nổi bật của thiết kế adidas và cung cấp một điểm nhấn màu sắc dịu dàng trên nền da trắng. Bên cạnh con lăn 3-Stripes, vè mũi được chế tác từ vải suede tonal thêm mộtcontrast textural.'
        },
        {
            id: 2,
            status: 1, 
            title: 'Giày Nike Air Max Excee - Trắng',
            img: './assets/img/products/Nike.png',
            category: 'Nike',
            price: 3559000,
            desc: 'Làm mới phong cách của bạn với Giày Sneaker Nữ Nike Air Max Excee! Thiết kế họa tiết paisley nổi bật kết hợp với các tông màu trung tính cổ điển, tạo nên vẻ ngoài vượt thời gian. Lấy cảm hứng từ Nike Air Max 90, đôi giày này mang đến một biến tấu mới cho biểu tượng - với các đường nét thiết kế kéo dài và tỷ lệ khác biệt.'
        },
        {
            id: 3,
            status: 1, 
            title: 'Giày  Nike Air Zoom Pegasus 41 ',
            img: './assets/img/products/Nike2.png',
            category: 'Nike',
            price: 4209000,
            desc: 'Giày Chạy Bộ Nữ Nike Air Zoom Pegasus 41 sở hữu bọt ReactX - phản hồi năng lượng cao hơn 13% so với công nghệ React trước đây, cho bạn trải nghiệm chạy đường dài đầy năng lượng! Thêm vào đó, lưới kỹ thuật cải tiến ở phần thân giày giúp giảm trọng lượng và tăng độ thoáng khí.'
        },
        {
            id: 4,
            status: 1, title: 'Giày Nike Air Max Portal - Be',
            img: './assets/img/products/Nike3.png',
            category: 'Nike',
            price: 3559000,
            desc: 'Nâng tầm phong cách của bạn với Giày Sneaker Nữ Nike Air Max Portal! Thiết kế là sự kết hợp hoàn hảo giữa phong cách "bụi bặm" và sự thanh thoát, kết hợp đế giày to từ thập niên 2000 với phần thân giày tối giản của thiết kế hiện đại. Đệm giữa siêu êm ái để bạn có thể diện hàng ngày.'
        },
        {
            id: 5,
            status: 1, 
            title: 'Giày adilette 22',
            img: './assets/img/products/adidas3.png',
            category: 'Adidas',
            price: 1400000,
            desc: 'Xuyên suốt quá trình thiết kế, dép adilette 22 sử dụng chất liệu EVA làm từ bã mía sinh học tự nhiên tạo nên lớp đệm êm ái và ôm theo hình dáng bàn chân bạn cho cảm giác cực kỳ thoải mái. Thiết kế nhấp nhô độc đáo lấy cảm hứng từ bản đồ địa hình 3D, cải biên mẫu dép adilette classic trở thành item thường ngày dành cho những nhà tiên phong du hành liên sao.'
        },

        {
            id: 6,
            status: 1, 
            title: 'Giày Samba OG',
            img: './assets/img/products/adidas4.png',
            category: 'Adidas',
            price: 2700000,
            desc: 'Ra mắt vào thập niên 1950 là một mẫu giày trainer bóng đá trong nhà, giày adidas Samba từ đó đã trở thành một item classic. Đôi giày Samba OG này tôn vinh thiết kế kinh điển ấy với đế gum bằng cao su và 3 Sọc răng cưa. Các chi tiết thiết kế tinh tế như lớp lót đầy màu sắc và kết cấu đục lỗ nâng tầm outfit của bạn.'
        },

        {
            id: 7,
            status: 1, 
            title: ' Em Nike Flex Plus 2 Se - Hồng',
            category: 'Nike',
            img: './assets/img/products/Nike4.png',
            price: 979440,
            desc: 'Nike Flex Plus 2 được thiết kế để trẻ em có thể chạy nhảy và vui chơi một cách thoải mái. Hệ thống dây giày cải tiến giúp các bé mang vào một cách dễ dàng. Cấu tạo thoáng khí và siêu bền bỉ được thiết kế riêng biệt cho những bàn chân nhỏ. Bên cạnh đó, các nhà thiết kế còn bổ sung lớp đệm siêu linh hoạt giúp cho mọi chuyển động của bé đều có cảm giác tốt nhất và tự nhiên nhất.'
        },

        {
            id: 8,
            status: 1, 
            title: 'Dép Quai Ngang Nữ Nike Victori One Osaka - Đen',
            img: './assets/img/products/Nike5.png',
            category: 'Nike',
            price: 593600,
            desc: 'Từ bãi biển đến khán đài, Nike Victori One hoàn thiện một thiết kế cổ điển, là đôi dép mà bạn không thể nào bỏ qua. Mang đến sự nhẹ nhàng và dễ phối hợp với mọi trang phục, dép có lớp đệm mới mềm hơn tạo cảm giác thoải mái cho cả ngày dài.'
        },

        {
            id: 9,
            status: 1, 
            title: 'Giày Chạy Bộ Nam Nike Air Zoom Pegasus 40 - Xám',
            img: './assets/img/products/Nike6.png',
            category: "Nike",
            price: 2423400,
            desc: 'Tận hưởng những bước chạy nhẹ nhàng, thoải mái để giúp bạn hoàn thành mục tiêu của mình. Phiên bản này của Nike vẫn giữ nguyên độ đàn hồi vừa vặn nhưng tăng cường sự thoải mái hơn ở những khu vực như vòm và ngón chân.',
        },   
        ]
        localStorage.setItem('products', JSON.stringify(products));
    }
}

// Create admin account 
function createAdminAccount() {
    let accounts = localStorage.getItem("accounts");
    if (!accounts) {
        accounts = [];
        accounts.push({
            fullname: "Mã Đức Minh",
            phone: "hgbaodev",
            password: "123456",
            email: 'musicanime2501@gmail.com',
            status: 1,
            join: new Date(),
            cart: [],
            userType: 1
        })
        accounts.push({
            fullname: "Trần Thanh Hiếu",
            phone: "0123456789",
            password: "123456",
            address: '',
            email: '',
            status: 1,
            join: new Date(),
            cart: [],
            userType: 1
        })
        localStorage.setItem('accounts', JSON.stringify(accounts));
    }
}

window.onload = createProduct();
window.onload = createAdminAccount();