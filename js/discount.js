document.getElementById('discount-button').addEventListener('click', function(){
    const getInputValue = getValue ('discount-box');
    const getPopMessage = document.getElementById('pop-message');
    const getRedPopMessage = document.getElementById('pop-message-red');
    const shoeValue = document.getElementById('discount-display');
    const getShoeValue = parseInt(shoeValue.innerText);
    if (getInputValue === 'DOM') {
        const discountResult = getShoeValue - ((getShoeValue * 30) / 100);
        valueDisplay ('discount-display', discountResult);
        getPopMessage.removeAttribute('hidden');
        document.getElementById("discount-box").hidden = true;
        document.getElementById("discount-button").disabled = true;
        return;
    } else {
        getRedPopMessage.removeAttribute('hidden');
        document.getElementById("discount-box").hidden = true;
        document.getElementById("discount-button").disabled = true;
        return;
    }
})