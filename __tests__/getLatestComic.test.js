const comics = require('../index');

describe('Comic Test', () => {
  test('Getting Latest Comic', () => {
    return comics.getLatestComic(1)
        .then((data) => {
          expect(typeof data.image_url).toBe('string');
          expect(typeof data.publish_date).toBe('string');
          expect(typeof data.title).toBe('string');
        });
  });
});
