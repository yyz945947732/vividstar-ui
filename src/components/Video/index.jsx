/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/Video.scss';

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

function Video(props) {
    const { src, type, bakeupText, ...others } = props

    const [ext, pureSrc, otherSource] = getExt(src, type)

    return (
        <div className="Video">
            <video controls autoPlay loop preload='auto' {...others}>
                <source src={`${pureSrc}.${ext}`} type={`video/${ext}`} />
                {
                    otherSource.map(
                        item =>
                            <source src={`${pureSrc}.${item}`} type={`video/${item}`} />
                    )
                }
                <p className='backup'>{bakeupText}</p>
            </video>
        </div>
    );
}

Video.PropTypes = {
    src: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['mp4', 'ogg', 'webm']),
    bakeupText: PropTypes.string
};

Video.defaultProps = {
    type: 'mp4',
    bakeupText: '您的浏览器暂不支持播放此视频'
};

export default Video;
