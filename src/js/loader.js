const loaderEl = document.querySelector('.loader') // loader

export const loaderToggle = () => {
    loaderEl.classList.toggle("loader-on");
    loaderEl.classList.toggle("loader-off");
}