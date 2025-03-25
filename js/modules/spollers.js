function initSpollers() {
    if (!document.querySelector('[data-spollers]')) return
    document.querySelectorAll('[data-spollers]').forEach(spoller => initSpoller(spoller))
}

function initSpoller(spoller) {
    const spollerButton = spoller.querySelector('[data-spoller-button]')
    const spollerBody = spoller.querySelector('[data-spoller-body]')
    const spollerIcon = spoller.querySelector('[data-spoller-icon]')

    if (!spollerButton || !spollerBody) return

    // starting styles
    spollerBody.style.maxHeight = '0'
    spollerBody.style.overflow = 'hidden'
    spollerBody.style.display = 'none'
    spollerBody.style.transition = 'max-height 0.5s ease-in-out'

    spollerButton.addEventListener('click', () => {
        if (spollerBody.style.maxHeight === '0px' || spollerBody.style.maxHeight === '') {
            // open
            spollerBody.style.display = 'block'
            spollerBody.style.maxHeight = spollerBody.scrollHeight + 'px'
            spollerButton.classList.add('_active')
            spollerIcon.classList.add('_active')
        } else {
            // close
            spollerBody.style.maxHeight = '0px'
            spollerButton.classList.remove('_active')
            spollerIcon.classList.remove('_active')
            setTimeout(() => spollerBody.style.display = 'none', 500)
        }
    })
}

export { initSpollers, initSpoller }