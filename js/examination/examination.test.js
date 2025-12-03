import { beforeEach, expect, jest } from '@jest/globals';

import { MusicTrack } from "./examination.js"; // Uncomment when Password class is added
import { describe } from 'yargs';

describe('MusicTrack test', () => {

    test('Constructor should throw an error when title is empty', () => {
        const title = ''
        const artist = ''
        const duration = ''

        function createTrack() {
            new MusicTrack(title, artist, duration)
        }

        expect(createTrack).toThrow('Title cannot be empty')


    })
})