document.onkeydown = function(e) {
    if (e.ctrlKey && (e.keyCode === 85 || e.keyCode === 83)) {
        return false; // Ctrl + U или Ctrl + S
    }
};

document.oncontextmenu = function() {
    return false;
};

document.addEventListener('contextmenu', event => event.preventDefault());
