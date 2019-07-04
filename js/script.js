var linkFeedback = document.querySelector('.feedback');
var popupFeedback = document.querySelector('.modal-feedback');
var closeFeedback = popupFeedback.querySelector('.modal-close');
var formFeedback = popupFeedback.querySelector('.feedback-form');
var nameFeedback = popupFeedback.querySelector('.feedback-name');
var mailFeedback = popupFeedback.querySelector('.feedback-mail');
var bodyFeedback = popupFeedback.querySelector('.feedback-body');
var isStorageSupport = true;
var storage = '';
            
try {
    storage = localStorage.getItem('mail');
} catch (err) {
    isStorageSupport = false;
}

linkFeedback.addEventListener('click', function (evt) {
    evt.preventDefault();
    popupFeedback.classList.add('modal-show');
    nameFeedback.focus();
    if (storage) {
      mailFeedback.value = storage;
    }
});

closeFeedback.addEventListener('click', function (evt) {
    evt.preventDefault();
    popupFeedback.classList.remove('modal-show');
    popupFeedback.classList.remove('modal-error');
});

formFeedback.addEventListener('submit', function (evt) {
    if (!mailFeedback.value || !bodyFeedback.value) {
        evt.preventDefault();
        popupFeedback.classList.remove("modal-error");
        popupFeedback.offsetWidth = popupFeedback.offsetWidth;
        popupFeedback.classList.add('modal-error');
    } else {
        if (isStorageSupport) {
            localStorage.setItem('mail', mailFeedback.value);
        }
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popupFeedback.classList.contains("modal-show")) {
            popupFeedback.classList.remove("modal-show");
            popupFeedback.classList.remove('modal-error');
        }
    }
});


var linkMap = document.querySelector('.map');
var popupMap = document.querySelector('.modal-map');
var closeMap = popupMap.querySelector('.modal-close');

linkMap.addEventListener('click', function (evt) {
    evt.preventDefault();
    popupMap.classList.add('modal-show-map');
});

closeMap.addEventListener('click', function (evt) {
    evt.preventDefault();
    popupMap.classList.remove('modal-show-map');
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popupMap.classList.contains("modal-show-map")) {
            popupMap.classList.remove("modal-show-map");
        }
    }
});