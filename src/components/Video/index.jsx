import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/Video.scss';

const types = ['mp4', 'ogg', 'webm'];

const getExt = function (src) {
    let ext = 'mp4', pureSrc = src, otherSource = [];
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

function Video(props) {
    const { src, type, ...others } = props

    const [ext, pureSrc, otherSource] = getExt(src)

    return (
        <div className="Video">
            <video src={src} autoPlay loop preload='auto' {...others}>
                <source src={`${pureSrc}${ext}`} type={`video/${ext}`} />
                {
                    otherSource.map(
                        item =>
                            <source src={`${pureSrc}${item}`} type={`video/${item}`} />
                    )
                }
                <p>您的浏览器暂不支持播放此视频</p>
            </video>
        </div>
    );
}

Video.PropTypes = {
    src: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['mp4', 'ogg', 'webm'])
};

Video.defaultProps = {
    type: 'mp4'
};

export default Video;
