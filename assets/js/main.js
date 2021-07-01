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
list.forEach((item, index) => {
    let html = `
        <li>
            <div class="item">
                <div class="thumb">
                    <img src="${item.imgSrc}" alt="">
                </div>
                <div class="info">
                    <h4 class="name">${item.name}</h4>
                    <span>
                        <b class="price">${item.price}</b>
                        <b class="symbol">Vnđ</b>
                    </span>
                </div>
                <div>
                    <button class="add-cart" data-index="${index}">+add</button>
                </div>
            </div>
        </li>
    `;
    // in ra html 
    $('.wrapper-item').append(html);
});

$('.add-cart').click(() => {
    let i = $(this).data('index');
    console.log(i);
});




