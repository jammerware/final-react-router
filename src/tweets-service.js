class TweetsService {
  getTrending() {
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
  }
}

export { TweetsService };