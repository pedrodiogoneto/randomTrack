const randomLetter = () => Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 1);

const randomMusicSelection = (res: any) => res?.results?.[Math.floor(Math.random()*200)]

export {
    randomLetter, 
    randomMusicSelection
}