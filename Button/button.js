var button = document.querySelector('.btn')

button.addEventListener('mouseover', function (e) {
    const x = e.clientX - button.offsetLeft;
    const y = e.clientY - button.offsetTop;

    //element.style.setPorperty是用于设置css的属性
    button.style.setProperty('--xPos', x + 'px');
    button.style.setProperty('--yPos', y + 'px');
    //element.setAttribute可以用于设置document元素的style属性，但是会覆盖style

})