const GOOGLE_API_KEY = 'AIzaSyDIIDuses5BZMKvx2mVeFiaZU9MWaVAYBc';

export const YOUTUBE_VIDEO_LIST_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=In&maxResults=50&key=${GOOGLE_API_KEY}`;

// export const YOUTUBE_SEARCH_API =
//   'http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=';
export const YOUTUBE_SEARCH_API =
  'https://clients1.google.com/complete/search?client=youtube&gs_ri=youtube&ds=yt&q=';
