/* Third party Imports */
import axios, { AxiosResponse } from 'axios';

/* Local Imports */
import { Track, TrackResponse } from '../models/track';
import { randomLetter, randomMusicSelection } from '../utils/randomGenerator'

async function searchMusic() {
	const API_BASE_ADDRESS: string = 'https://itunes.apple.com/';

	const parameter: string = randomLetter()

	const uri: string = `${API_BASE_ADDRESS}search?term=${parameter}&limit=200&entity=musicTrack`

	try {	
		const result: AxiosResponse<TrackResponse> = await axios.get(uri);
		const track: Track = randomMusicSelection(result?.data)
		return track
	} catch (error) {
		console.log(error)
	}
}

export {
	searchMusic
}