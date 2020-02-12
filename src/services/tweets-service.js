class TweetsService {
  constructor() {
    this._init();
  }
  
  getTweets() {
    const tweetsString = window.localStorage.getItem("tweets") || '[]';
    return JSON.parse(tweetsString);
  }
  
  postTweet(tweet) {
    // make a random id just for funsies
    const tweetId = Math.floor(Math.random() * Math.floor(99999));
    const tweets = this.getTweets();
    tweets.push({
      id: tweetId,
      author: tweet.author,
      text: tweet.text,
    });
    
    this._saveTweets(tweets);
  }
  
  _init() {
    const STOCK_TWEETS = [
      {
        id: 1,
        text: "I have deep and meaningful feelings and these are the feelings I have.",
        author: "bensstein",
      },
      {
        id: 2,
        text: "Check out my new Glitch profile! https://glitch.com/@mcburton",
        author: "mcburton",
      },
      {
        id: 3,
        text: "Kids. I don't just start watching in October. #wow",
        author: "theRealSanta"
      }
    ];
    
    let tweets = this.getTweets();
    
    if (tweets.length < 3) {
      tweets = tweets.concat(STOCK_TWEETS);
      this._saveTweets(tweets);
    }
  }
  
  _saveTweets(tweets) {
    window.localStorage.setItem("tweets", JSON.stringify(tweets));
  }
}

export { TweetsService }