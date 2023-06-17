const replyareaInput = document.querySelector('#replyareaInput');
const replySubmitBtn = document.querySelector('#replySubmitBtn');
const replyErrorMsg = document.querySelector('#replyErrorMsg');
const replyMaxLength = 140;

replyareaInput.addEventListener('input', function () {
    const replyareaValue = replyareaInput.value.trim();

    if (replyareaValue.length >= 1 && replyareaValue.length <= maxLength) {
      replyErrorMsg.textContent = `${replyareaValue.length}/140`
<<<<<<< HEAD
      replySubmitBtn.disabled = false
=======
      replySubmitBtn.disabled = false;
>>>>>>> 05ae5aeb1e74e8173bc8a1a124fc3d7a0e88bc05
    } else if (replyareaValue.length > replyMaxLength) {
        replyareaInput.value = replyareaValue.slice(0, replyMaxLength);
        replyErrorMsg.textContent = '字數不可超過140字';
    } else if (replyareaValue.length < 1) {
        replyErrorMsg.textContent = '內容不可空白';
        replySubmitBtn.disabled = true;
    } else {
        replyErrorMsg.textContent = '';
        replySubmitBtn.disabled = false;
    }
})