const carrosselWrapper = document.getElementById('carrosselWrapper');
let isDown = false;
let startX;
let scrollLeft;

carrosselWrapper.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - carrosselWrapper.offsetLeft;
    scrollLeft = carrosselWrapper.scrollLeft;
    carrosselWrapper.style.cursor = 'grabbing';
});

carrosselWrapper.addEventListener('mouseleave', () => {
    if (isDown) {
        isDown = false;
        carrosselWrapper.style.cursor = 'grab';
    }
});

carrosselWrapper.addEventListener('mouseup', () => {
    if (isDown) {
        isDown = false;
        carrosselWrapper.style.cursor = 'grab';
    }
});

carrosselWrapper.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - carrosselWrapper.offsetLeft;
    const walk = (x - startX) * 3; // Multiplicador para ajustar a velocidade do scroll
    carrosselWrapper.scrollLeft = scrollLeft - walk;
});











const item_1_1 = document.getElementById('item-1-1');
const item_1_2 = document.getElementById('item-1-2');
const item_1_3 = document.getElementById('item-1-3');
const item_1_4 = document.getElementById('item-1-4');
const item_1_5 = document.getElementById('item-1-5');
const item_1_6 = document.getElementById('item-1-6');
const item_1_7 = document.getElementById('item-1-7');
const item_1_8 = document.getElementById('item-1-8');
const item_1_9 = document.getElementById('item-1-9');
const item_1_10 = document.getElementById('item-1-10');
const item_1_11 = document.getElementById('item-1-11');
const item_1_12 = document.getElementById('item-1-12');
const bgass1 = document.getElementById('bgass');
const bgass2 = document.getElementById('bgass2');
const bgass3 = document.getElementById('bgass3');
const bgass4 = document.getElementById('bgass4');
const bgass5 = document.getElementById('bgass5');
const bgass6 = document.getElementById('bgass6');
const bgass7 = document.getElementById('bgass7');
const bgass8 = document.getElementById('bgass8');
const bgass9 = document.getElementById('bgass9');
const bgass10 = document.getElementById('bgass10');
const bgass11 = document.getElementById('bgass11');
const bgass12 = document.getElementById('bgass12');
const ffasff1 = document.getElementById('ffasff1-1');
const ffasff2 = document.getElementById('ffasff1-2');
const ffasff3 = document.getElementById('ffasff1-3');
const ffasff4 = document.getElementById('ffasff1-4');
const ffasff5 = document.getElementById('ffasff1-5');
const ffasff6 = document.getElementById('ffasff1-6');
const ffasff7 = document.getElementById('ffasff1-7');
const ffasff8 = document.getElementById('ffasff1-8');
const ffasff9 = document.getElementById('ffasff1-9');
const ffasff10 = document.getElementById('ffasff1-10');
const ffasff11 = document.getElementById('ffasff1-11');
const ffasff12 = document.getElementById('ffasff1-12');
const menuasd1 = document.getElementById('menuasd1-1');
const menuasd2 = document.getElementById('menuasd1-2');
const menuasd3 = document.getElementById('menuasd1-3');
const menuasd4 = document.getElementById('menuasd1-4');
const menuasd5 = document.getElementById('menuasd1-5');
const menuasd6 = document.getElementById('menuasd1-6');
const menuasd7 = document.getElementById('menuasd1-7');
const menuasd8 = document.getElementById('menuasd1-8');
const menuasd9 = document.getElementById('menuasd1-9');
const menuasd10 = document.getElementById('menuasd1-10');
const menuasd11 = document.getElementById('menuasd1-11');
const menuasd12 = document.getElementById('menuasd1-12');

item_1_1.addEventListener('mouseover', () => {
    bgass1.style.zIndex = '2';
    bgass1.style.opacity = '1';
    bgass1.style.position = 'relative';

    menuasd1.style.zIndex = '-2';
    menuasd1.style.opacity = '0';
    menuasd1.style.position = 'absolute';

    ffasff1.style.zIndex = '-2';
    ffasff1.style.opacity = '0';
    ffasff1.style.position = 'absolute';
})
item_1_1.addEventListener('mouseout', () => {
    bgass1.style.zIndex = '-2';
    bgass1.style.opacity = '0';
    bgass1.style.position = 'absolute';

    menuasd1.style.zIndex = '2';
    menuasd1.style.opacity = '1';
    menuasd1.style.position = 'relative';

    ffasff1.style.zIndex = '2';
    ffasff1.style.opacity = '1';
    ffasff1.style.position = 'relative';
})

item_1_2.addEventListener('mouseover', () => {
    bgass2.style.zIndex = '2';
    bgass2.style.opacity = '1';
    bgass2.style.position = 'relative';

    menuasd2.style.zIndex = '-2';
    menuasd2.style.opacity = '0';
    menuasd2.style.position = 'absolute';

    ffasff2.style.zIndex = '-2';
    ffasff2.style.opacity = '0';
    ffasff2.style.position = 'absolute';
})
item_1_2.addEventListener('mouseout', () => {
    bgass2.style.zIndex = '-2';
    bgass2.style.opacity = '0';
    bgass2.style.position = 'absolute';

    menuasd2.style.zIndex = '2';
    menuasd2.style.opacity = '1';
    menuasd2.style.position = 'relative';

    ffasff2.style.zIndex = '2';
    ffasff2.style.opacity = '1';
    ffasff2.style.position = 'relative';
})
item_1_3.addEventListener('mouseover', () => {
    bgass3.style.zIndex = '2';
    bgass3.style.opacity = '1';
    bgass3.style.position = 'relative';

    menuasd3.style.zIndex = '-2';
    menuasd3.style.opacity = '0';
    menuasd3.style.position = 'absolute';

    ffasff3.style.zIndex = '-2';
    ffasff3.style.opacity = '0';
    ffasff3.style.position = 'absolute';
})
item_1_3.addEventListener('mouseout', () => {
    bgass3.style.zIndex = '-2';
    bgass3.style.opacity = '0';
    bgass3.style.position = 'absolute';

    menuasd3.style.zIndex = '2';
    menuasd3.style.opacity = '1';
    menuasd3.style.position = 'relative';

    ffasff3.style.zIndex = '2';
    ffasff3.style.opacity = '1';
    ffasff3.style.position = 'relative';
})


item_1_4.addEventListener('mouseover', () => {
    bgass4.style.zIndex = '2';
    bgass4.style.opacity = '1';
    bgass4.style.position = 'relative';

    menuasd4.style.zIndex = '-2';
    menuasd4.style.opacity = '0';
    menuasd4.style.position = 'absolute';

    ffasff4.style.zIndex = '-2';
    ffasff4.style.opacity = '0';
    ffasff4.style.position = 'absolute';
})
item_1_4.addEventListener('mouseout', () => {
    bgass4.style.zIndex = '-2';
    bgass4.style.opacity = '0';
    bgass4.style.position = 'absolute';

    menuasd4.style.zIndex = '2';
    menuasd4.style.opacity = '1';
    menuasd4.style.position = 'relative';

    ffasff4.style.zIndex = '2';
    ffasff4.style.opacity = '1';
    ffasff4.style.position = 'relative';
})

item_1_5.addEventListener('mouseover', () => {
    bgass5.style.zIndex = '2';
    bgass5.style.opacity = '1';
    bgass5.style.position = 'relative';

    menuasd5.style.zIndex = '-2';
    menuasd5.style.opacity = '0';
    menuasd5.style.position = 'absolute';

    ffasff5.style.zIndex = '-2';
    ffasff5.style.opacity = '0';
    ffasff5.style.position = 'absolute';
})
item_1_5.addEventListener('mouseout', () => {
    bgass5.style.zIndex = '-2';
    bgass5.style.opacity = '0';
    bgass5.style.position = 'absolute';

    menuasd5.style.zIndex = '2';
    menuasd5.style.opacity = '1';
    menuasd5.style.position = 'relative';

    ffasff5.style.zIndex = '2';
    ffasff5.style.opacity = '1';
    ffasff5.style.position = 'relative';
})

item_1_6.addEventListener('mouseover', () => {
    bgass6.style.zIndex = '2';
    bgass6.style.opacity = '1';
    bgass6.style.position = 'relative';

    menuasd6.style.zIndex = '-2';
    menuasd6.style.opacity = '0';
    menuasd6.style.position = 'absolute';

    ffasff6.style.zIndex = '-2';
    ffasff6.style.opacity = '0';
    ffasff6.style.position = 'absolute';
})
item_1_6.addEventListener('mouseout', () => {
    bgass6.style.zIndex = '-2';
    bgass6.style.opacity = '0';
    bgass6.style.position = 'absolute';

    menuasd6.style.zIndex = '2';
    menuasd6.style.opacity = '1';
    menuasd6.style.position = 'relative';

    ffasff6.style.zIndex = '2';
    ffasff6.style.opacity = '1';
    ffasff6.style.position = 'relative';
})
item_1_7.addEventListener('mouseover', () => {
    bgass7.style.zIndex = '2';
    bgass7.style.opacity = '1';
    bgass7.style.position = 'relative';

    menuasd7.style.zIndex = '-2';
    menuasd7.style.opacity = '0';
    menuasd7.style.position = 'absolute';

    ffasff7.style.zIndex = '-2';
    ffasff7.style.opacity = '0';
    ffasff7.style.position = 'absolute';
})
item_1_8.addEventListener('mouseout', () => {
    bgass8.style.zIndex = '-2';
    bgass8.style.opacity = '0';
    bgass8.style.position = 'absolute';

    menuasd8.style.zIndex = '2';
    menuasd8.style.opacity = '1';
    menuasd8.style.position = 'relative';

    ffasff8.style.zIndex = '2';
    ffasff8.style.opacity = '1';
    ffasff8.style.position = 'relative';
})
item_1_9.addEventListener('mouseover', () => {
    bgass9.style.zIndex = '2';
    bgass9.style.opacity = '1';
    bgass9.style.position = 'relative';

    menuasd9.style.zIndex = '-2';
    menuasd9.style.opacity = '0';
    menuasd9.style.position = 'absolute';

    ffasff9.style.zIndex = '-2';
    ffasff9.style.opacity = '0';
    ffasff9.style.position = 'absolute';
})
item_1_10.addEventListener('mouseout', () => {
    bgass10.style.zIndex = '-2';
    bgass10.style.opacity = '0';
    bgass10.style.position = 'absolute';

    menuasd10.style.zIndex = '2';
    menuasd10.style.opacity = '1';
    menuasd10.style.position = 'relative';

    ffasff10.style.zIndex = '2';
    ffasff10.style.opacity = '1';
    ffasff10.style.position = 'relative';
})
item_1_11.addEventListener('mouseover', () => {
    bgass11.style.zIndex = '2';
    bgass11.style.opacity = '1';
    bgass11.style.position = 'relative';

    menuasd11.style.zIndex = '-2';
    menuasd11.style.opacity = '0';
    menuasd11.style.position = 'absolute';

    ffasff11.style.zIndex = '-2';
    ffasff11.style.opacity = '0';
    ffasff11.style.position = 'absolute';
})
item_1_12.addEventListener('mouseout', () => {
    bgass12.style.zIndex = '-2';
    bgass12.style.opacity = '0';
    bgass12.style.position = 'absolute';

    menuasd12.style.zIndex = '2';
    menuasd12.style.opacity = '1';
    menuasd12.style.position = 'relative';

    ffasff12.style.zIndex = '2';
    ffasff12.style.opacity = '1';
    ffasff12.style.position = 'relative';
})


document.querySelectorAll('#bgass, #menuasd1-1, #ffasff1-1').forEach(element => {
    element.style.transition = 'opacity 0.5s ease-in-out';
});

document.querySelectorAll('#bgass2, #menuasd1-2, #ffasff1-2').forEach(element => {
    element.style.transition = 'opacity 0.5s ease-in-out';
});

document.querySelectorAll('#bgass3, #menuasd1-3, #ffasff1-3').forEach(element => {
    element.style.transition = 'opacity 0.5s ease-in-out';
});
document.querySelectorAll('#bgass5, #menuasd1-5, #ffasff1-5').forEach(element => {
    element.style.transition = 'opacity 0.5s ease-in-out';
});
document.querySelectorAll('#bgass6, #menuasd1-6, #ffasff1-6').forEach(element => {
    element.style.transition = 'opacity 0.5s ease-in-out';
});
document.querySelectorAll('#bgass7, #menuasd1-7, #ffasff1-7').forEach(element => {
    element.style.transition = 'opacity 0.5s ease-in-out';
});
document.querySelectorAll('#bgass8, #menuasd1-8, #ffasff1-8').forEach(element => {
    element.style.transition = 'opacity 0.5s ease-in-out';
});
document.querySelectorAll('#bgass9, #menuasd1-9, #ffasff1-9').forEach(element => {
    element.style.transition = 'opacity 0.5s ease-in-out';
});
document.querySelectorAll('#bgass10, #menuasd1-10, #ffasff1-10').forEach(element => {
    element.style.transition = 'opacity 0.5s ease-in-out';
});
document.querySelectorAll('#bgass11, #menuasd1-11, #ffasff1-11').forEach(element => {
    element.style.transition = 'opacity 0.5s ease-in-out';
});


















