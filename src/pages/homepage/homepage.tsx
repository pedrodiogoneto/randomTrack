import React, { useState } from 'react'

import { Spinner } from 'reactstrap'

import MusicInfo from '../../components/musicInfo/musicInfo'
import { searchMusic } from '../../services/api'
import { Track } from '../../models/track'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { HomepageWrapper, ButtonWrapper, Button, Error, HeaderBrand } from './styles'

const Homepage = () => {
    const [track, setTrack] = useState<Track>();
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>();
    const [storedValue, setValue] = useLocalStorage('tracks', [1])

    const requestMusic = async () => {
        setLoading(true)
        const resultTrack: Track | undefined = await searchMusic()

        if(storedValue.includes(resultTrack?.collectionId) || !resultTrack) {
            setError('UPS... please try again')
        } else {
            setValue([...storedValue, track?.collectionId])
            setError(undefined)
            setTrack(resultTrack)
        }
        setLoading(false)
    }

    return (
        <HomepageWrapper>
            <HeaderBrand>SOMETHINGNEW</HeaderBrand>
            {track && !error && <MusicInfo track={track}/>}
            <ButtonWrapper track={track?.trackId}>
                {!loading && <Button onClick={requestMusic}>SHOW ME SOMETHING NEW</Button>}
                {loading && <Spinner color="primary" />}
            </ButtonWrapper>
            {error && <Error>{error}</Error>}
        </HomepageWrapper>
    )
}

export default Homepage