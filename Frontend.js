const toggle_btn = document.querySelector('#checkbox');
console.log(toggle_btn);
toggle_btn.addEventListener('change', () => {
    if (toggle_btn.checked) {
        console.log("toggle_btn checked");
        document.body.classList.add('dark-mode');
    } else {
        console.log("toggle_btn unchecked");
        document.body.classList.remove('dark-mode');
    }
});

