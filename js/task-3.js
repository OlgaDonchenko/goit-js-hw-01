function getElementWidth(content, padding, border) {
     return Number.parseFloat(content) + (Number.parseFloat(padding)  + Number.parseFloat(border))*2;
    

}

console.log(getElementWidth("50px", "8px", "4px")); // Поверне: 74
console.log(getElementWidth("60px", "12px", "8.5px")); // Поверне: 101
console.log(getElementWidth("200px", "0px", "0px")); // Поверне: 200