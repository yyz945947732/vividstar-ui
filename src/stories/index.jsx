import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '@storybook/react/demo';
import { Video } from '../components'

storiesOf('Button', module)
    .add('with text', () => (
        <Button>Hello Button</Button>
    ))
    .add('with some emoji', () => (
        <Button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
    ));

storiesOf('Video', module)
    .add('mp4', () => (
        <Video
            src='http://video.699pic.com/videos/56/39/80/Gex0D1hxZxUR1512563980.mp4'
            muted
            width='1600'
            height='800'
        />
    ))