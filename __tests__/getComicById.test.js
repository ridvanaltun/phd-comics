const comics = require('../index');

describe('Comic Test', () => {
  test('Getting Comic by ID', () => {
    return comics.getComicById(1)
        .then((data) => {
          expect(data.id).toBe(1);
          expect(data.image_url).toBe('http://www.phdcomics.com/comics/archive/phd1027.gif');
          expect(data.publish_date).toBe('10/27/1997');
          expect(data.title).toBe('Very Close - First Phd strip!');
          expect(data.orginal_url).toBe('http://phdcomics.com/comics/archive.php?comicid=1');
        });
  });
});
