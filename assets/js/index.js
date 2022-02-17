const buyBtns = document.querySelectorAll('.js-buy-ticket');
const modal = document.querySelector('.js-modal');
const modalContainer = document.querySelector('.js-modal-container');
const modalClose = document.querySelector('.js-modal-close');
// HÀM HIỆN THỊ MODAL BUY TICKET.
function showBuyTickets() {
    modal.classList.add('open');
}

// HÀM ẨN MODAL BUY TICKET.
function hideBuyTickets() {
    modal.classList.remove('open');
}

for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showBuyTickets);
}

modalClose.addEventListener('click', hideBuyTickets);

modal.addEventListener('click', hideBuyTickets);

modalContainer.addEventListener('click', function(event) {
    event.stopPropagation();
});

// ĐÓNG MỞ MOBILE MENU
const header = document.getElementById('header');
const mobileMenuBtn = document.querySelector('.menu-mobile-btn-js')
var headerHight = header.clientHeight;

mobileMenuBtn.addEventListener('click', function(event) {
    let isClosed = header.clientHeight === headerHight;
    if (isClosed) {
        header.style.height = 'auto';
    } else {
        header.style.height = null;
    }
});

// TỰ ĐÓNG MOBILE MENU KHI CHỌN MENU
var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
for (let i = 0; i < menuItems.length; i++) {
    const menuItem = menuItems[i];
    menuItem.addEventListener('click', function(event) {
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
        if (isParentMenu) {
            event.preventDefault();
        } else {
            header.style.height = null;
        }
    });
}