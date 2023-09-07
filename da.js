document.addEventListener("DOMContentLoaded", (event) => {
    var i = document.querySelector(".da-widget--" + __da_widget_id);
    const infoButton = i.querySelectorAll(".da-list__item .da-list__erir-btn");
    const infoErir = i.querySelectorAll(".da-list__item .da-list__erir");
    if (typeof infoButton !== undefined && typeof infoErir !== undefined) {
        for (let i = 0; i < infoButton.length; i++) {
            infoButton[i].addEventListener("click", () => {
                infoErir[i].classList.toggle("show");
            });
        }
    }
});
