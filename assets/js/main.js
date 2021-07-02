var list = [
    {
        name: 'Áo sơ mi xanh kẻ dọc',
        price: '100000',
        imgSrc: './assets/img/1.jpg',
    },
    {
        name: 'Áo sơ thun trắng cộc tay',
        price: '80000',
        imgSrc: './assets/img/2.jpg',
    },
    {
        name: 'Váy vàng chấm bi',
        price: '150000',
        imgSrc: './assets/img/3.jpg',
    },
    {
        name: 'Váy đen chấm bi',
        price: '150000',
        imgSrc: './assets/img/4.jpg',
    },
    {
        name: 'Áo sơ mi',
        price: '200000',
        imgSrc: './assets/img/5.jpg',
    },
];

// Lấy ra giá trị trong mảng
for (let i = 0; i < list.length; i++) {
    let html = `
        <li>
            <div class="item">
                <div class="thumb">
                    <img src="${list[i].imgSrc}" alt="">
                </div>
                <div class="info">
                    <h4 class="name">${list[i].name}</h4>
                    <span>
                        <b class="price">${list[i].price}</b>
                        <b class="symbol">Vnđ</b>
                    </span>
                </div>
                <div>
                    <button class="add-cart" data-index="${i}">+add</button>
                </div>
            </div>
        </li>
    `;
    // in ra html 
    $('.wrapper-item').append(html);

};


var cart = [];

// Xử lý khi ấn nút +add
$('.add-cart').click(function() {
    let i =  $(this).data("index");
    let check = false;

    cart.filter((itemCart) => {
        if (itemCart.name == list[i].name) {
            itemCart.quantity += 1;
            check = true;
        }
    });

    if (check == false) {  
        list[i].quantity = 1;
        cart.push(list[i]);
    }
    handleRender();
});

function handleRender() {
    $('.list-cart').empty();

    var totalPrice = 0;

    for (let i = 0; i < cart.length; i++) {
        totalPrice = totalPrice + Number(cart[i].quantity) * Number(cart[i].price);
        let html = `
            <div class="item" data-index="${i}">
                <button class="remove">X</button>
                <div class="thumb">
                    <img src="${cart[i].imgSrc}" alt="">
                </div>
                <div class="info">
                    <h4 class="name">${cart[i].name}</h4>
                    <span>
                        <b class="price">${Number(cart[i].quantity) * Number(cart[i].price)}</b>
                        <b class="symbol">Vnđ</b>
                    </span>
                </div>
                <div class="quantity">
                    <button class="minus">-</button>
                    <input type="number" name="" value="${cart[i].quantity}" id="">
                    <button class="plus">+</button>
                </div>
            </div>
        `;
        $('.list-cart').append(html);
    }

    $('.total-item').html(cart.length);
    $('.total-price').html(totalPrice);
    $('.tax').html((totalPrice / 100) * 10);
    let totalPay = totalPrice + ((totalPrice / 100) * 10) + Number($('.ship').html());
    $('.total-pay').html(totalPay);
}

$(".list-cart").on('click', '.remove', function() {
    let c = confirm("Bạn có muốn xoá sản phẩm này không?");
    if (c == true) {
        let index = $(this).closest('.item').data('index');
        cart.splice(index, 1);
        handleRender();
    }
})

$('.list-cart').on('click', '.minus', function() {
    let i = $(this).closest('.item').data('index');
    if(cart[i].quantity > 1) {
        cart[i].quantity -= 1;
    }
    handleRender();
})

$('.list-cart').on('change', 'input', function() {
    let i = $(this).closest('.item').data('index');
    let val = $(this).val();
    if(val > 999) {
        val = 999;
    } if (val < 1) {
        val = 1;
    }
    cart[i].quantity = val;
    handleRender();
})

$('.list-cart').on('click', '.plus', function() {
    let i = $(this).closest('.item').data('index');
    if(cart[i].quantity <= 999) {
        cart[i].quantity += 1;
    }
    handleRender();
})
