window.addEventListener('load', async function () {
    await document.fonts.ready;

    document.body.classList.add('loaded');
});