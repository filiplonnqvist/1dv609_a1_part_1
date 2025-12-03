//You will be given a class that you need to test here. 

export class MusicTrack {
    /**
     * @param {String} title
     * @param {String} artist
     * @param {String} duration
     */
    constructor(title, artist, duration) {
        if (title.length === 0) {
            throw new Error('Title cannot be empty');
        }
        if (artist.length === 0) {
            throw new Error('artist cannot be empty');
        }
        if (duration.length === 0) {
            throw new Error('duration cannot be empty');
        }
        this.title = title;
        this.artist = artist;
        this.duration = duration; // duration in seconds
    }
}