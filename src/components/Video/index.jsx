import React, { useRef, useEffect } from 'react';
import { getExt, addEvent, removeEvent } from './utils'
import PropTypes from 'prop-types';
import '../../styles/Video.scss';


function Video(props) {
    const { src, type, bakeupText, pause, ...others } = props;

    const [ext, pureSrc, otherSource] = getExt(src, type);

    const videoRef = useRef();

    const playRef = useRef();

    let els = {}

    useEffect(() => {
        console.log(els)
        els = { video: videoRef.current, play: playRef.current }
        videoRef.current && addEvent(els)
        return () => removeEvent(els)
    }, [videoRef])

    useEffect(() => {
        pause ? videoRef.current.pause() : videoRef.current.play()
    }, [pause])


    return (
        <div className="Video">
            <video controls autoPlay loop ref={videoRef} {...others}>
                <source src={`${pureSrc}.${ext}`} type={`video/${ext}`} />
                {
                    otherSource.map(
                        (item, index) =>
                            <source src={`${pureSrc}.${item}`} type={`video/${item}`} key={index} />
                    )
                }
                <p className='backup'>{bakeupText}</p>
            </video>
            <div className='bt' ref={playRef}>
                <i className='play'></i>
            </div>
        </div>
    );
}

Video.propTypes = {
    src: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['mp4', 'ogg', 'webm']),
    bakeupText: PropTypes.string,
    pause: PropTypes.bool
};

Video.defaultProps = {
    type: 'mp4',
    bakeupText: '您的浏览器暂不支持播放此视频',
    pause: false
};

export default Video;
