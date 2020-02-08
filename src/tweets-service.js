class TweetsService {
  getTrending() {
    const retVal = [];
    
    const trending = [
      { text: "#FishAreFriendsNotFood", type: "hashtag" },
      { text: "#MarmotsArePeopleToo", type: "hashtag" },
      { text: "#JustInfSciThings", type: "hashtag" },
      { text: "Colonel Vindman", type: "topic" },
      { text: "My Brother, My Brother, and Me", type: "topic" },
      { text: "Jeopardy!", type: "topic" },
      { text: "#DontStopBelieving", type: "hashtag" },
      { text: "#OopsIDidItAgain", type: "hashtag" },
      { text: "Bulbasaur", type: "topic" },
      { text: "Persona 5", type: "topic" },
      { text: "Monster Hunter: World", type: "topic" },
    ];
    
    while (retVal.length < 5) {
      const randomItem = trending[Math.floor(Math.random() * trending.length)];
      if (!retVal.some((item) => item.text === randomItem.text)) {
        retVal.push(randomItem);
        randomItem.tweetCount = this.getRandomTweetCount();
      }
    }
    
    return retVal;
  }
  
  getRandomTweetCount() {
    return Math.floor(Math.random() * 5000);
  }
}

export { TweetsService };