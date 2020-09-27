```javascript
const comics = require('phd-comics');

comics
    .getComicById(1)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
```

### Result

```json
{
  "id": 1,
  "image_url": "http://www.phdcomics.com/comics/archive/phd1027.gif",
  "publish_date": "10/27/1997",
  "title": "Very Close - First Phd strip!",
  "orginal_url": "http://phdcomics.com/comics/archive.php?comicid=1"
}
```
