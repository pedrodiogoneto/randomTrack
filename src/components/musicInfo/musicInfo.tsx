import React, { Fragment, useState } from 'react'

import { Track } from '../../models/track'
import {CardWrapper, TrackCard, ImageWrapper, TextWrapper, ButtonWrapper, Button, Link} from './styles'

interface Props {
    track: Track
}

const MusicInfo = ({track}: Props) => {
    const [isPreview, setIsPreview] = useState<boolean>(false);

    return (
        <Fragment>
            <CardWrapper>
                {track ?
                    <TrackCard>
                        <ImageWrapper src={track.artworkUrl100} alt={track.trackName}/>
                        <TextWrapper>
                            <h3>{track.trackName}</h3>
                            <h4>{track.artistName}</h4>
                            <ButtonWrapper>
                                <Button onClick={() => setIsPreview(!isPreview)}>Preview</Button>
                                <Link><a href={`https://www.youtube.com/results?search_query=${track.trackName}`}>Youtube</a></Link>
                            </ButtonWrapper>
                        </TextWrapper>
                    </TrackCard> 
                    : <h1>UPS... try again!! you've found an easter egg :o</h1>
                }
            </CardWrapper>
            {isPreview && 
                <CardWrapper>
                    <Iframe title={track.previewUrl} src={track.previewUrl} width="400" height="100" />
                </CardWrapper>
            }
        </Fragment>
    )
}

export default MusicInfo