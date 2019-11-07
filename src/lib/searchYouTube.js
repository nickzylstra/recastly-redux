// var searchYouTube = ({key, query, max = 5}, callback) => {
//   $.get('https://www.googleapis.com/youtube/v3/search', {
//     part: 'snippet',
//     key: key,
//     q: query,
//     maxResults: max,
//     type: 'video',
//     videoEmbeddable: 'true'
//   })
//     .done(({items}) => {
//       if (callback) {
//         callback(items);
//       }
//     })
//     .fail(({responseJSON}) => {
//       responseJSON.error.errors.forEach((err) =>
//         console.error(err)
//       );
//     });
// };

var searchYouTube = function searchYouTube({key, query, max}, callback) {
  let url = 'https://www.googleapis.com/youtube/v3/search?part=snippet';
  let options = {
    key: key,
    q: query,
    maxResults: max || 5,
    type: 'video',
    videoEmbeddable: 'true'
  };
  _.forEach(options, (propVal, propKey) => {
    url += '&' + propKey + '=' + propVal;
  });

  const response = fetch(url);

  response.then(
    (({items}) => {
      if (callback) {
        callback(items);
      }
    }),
    (({responseJSON}) => {
      responseJSON.error.errors.forEach((err) =>
        console.error(err)
      );
    })
  )

  return response;
};

export default searchYouTube;
