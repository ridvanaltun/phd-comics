```javascript
const comics = require('phd-comics');

comics
    .getLatestComic()
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
  "image_url": "http://www.phdcomics.com/comics/archive/phd122419s.gif",
  "publish_date": "12/24/2018",
  "title": "North Pole Facts"
}
```
