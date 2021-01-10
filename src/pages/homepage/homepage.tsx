/* React Imports */
import React, { useState } from 'react'

/* Third party Imports */
import { Spinner } from 'reactstrap'

/* Local Imports */
import MusicInfo from '../../components/musicInfo/musicInfo'
import { HomepageWrapper, ButtonWrapper, Button, Error, HeaderBrand } from './styles'
import { searchMusic } from '../../services/api'
import { Track } from '../../models/track'
import { useLocalStorage } from '../../hooks/useLocalStorage'

const Homepage = () => {
    const [error, setError] = useState<string>();
    const [loading, setLoading] = useState<boolean>(false);
    const [track, setTrack] = useState<Track>();
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