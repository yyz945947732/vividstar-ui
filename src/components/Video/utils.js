const types = ['mp4', 'ogg', 'webm'];

const getExt = function (src, type) {
    let ext = type, pureSrc = src, otherSource = [];
    types.forEach(item => {
        if (String(src).endsWith(`.${item}`)) {
            ext = item
            pureSrc = src.split('.')
            pureSrc.pop()
            pureSrc = pureSrc.join('.')
        } else {
            otherSource.push(item)
        }
    })
    return [ext, pureSrc, otherSource]
}

const videoClick = function (e) {
    if (!e.target.paused) {
        console.log('暂停了')
    }
}

const addEvent = function ({ video, play }) {
    video.addEventListener('click', videoClick)
    play.addEventListener('click', videoClick)
}

const removeEvent = function ({ video, play }) {
    video.removeEventListener('click', videoClick)
    play.removeEventListener('click', videoClick)
}

export {
    getExt,
    addEvent,
    removeEvent
}