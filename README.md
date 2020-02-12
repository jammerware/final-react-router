 # Activity 6 | INFSCI 2560: Web Technologies & Standards

Now that you're a React expert, you're going to do build your own little mini-twitter. Jack Dorsey did it, and he 
[only eats one meal a day](https://www.businessinsider.com/twitter-ceo-jack-dorsey-only-eats-7-meals-per-week-2020-1). So you've totally got this.

## TASKS

Start off by remixing this project. Don't forget to give it a more descriptive name (not that Glitch's random names aren't adorable).
Then do the following!

### Task 1

Some absent-minded engineer (who will go unnamed) seems to have gotten sidetracked in the middle of a task. If you look at `App.js`, you'll see that an
attribute of the `SiteBanner` component suggests that the header at the top of the page should say "The BEST Twitter". When we look at the page, however,
we see that it says "Decent Twitter". 

**Change** `site-banner.js` so that the component within honors the value passed into it by `App.js`. If you feel like it, once you've accomplished this task, 
you can modify the appropriate attribute in`App.js` to choose a title more suitable for your vision of your new Twitter competitor. You don't have to, though.

### Task 2

There are three tweets in local storage being displayed by the `ViewTweet` component. However, you may have noticed that it has some interesting bugs. 

- No matter what text you enter for each tweet, the component always just displays "The text of the tweet" _(rather than the actual text)_.
- There seems to be a Like button in this component, and the component is displaying the number of likes the tweet has received. However, this count never
seems to increase when the button is clicked.

**Your job is to fix these bugs.** You'll be able to fix both without touching any code other than the `view-tweet.js` file, and if you open your console, you
might just get a little push in the right direction...

### Task 3

For this task, you can **choose one** of several options. These vary in difficulty, so choose whichever makes the most sense to you.

- Modify the `ViewTweet` component so that it displays the date/time of the last like (when you click the like button). You should be able to do this without using
`document.getElementById` or similar functions.
- Modify the `ViewTweet` component so that it doesn't display the like count on the tweet unless the number of likes it has received is greater than 0.
- Create a brand-new component and add it to this app! Your component can do anything, even if it's simple - just show me that you know how to make one 
and how to display it somewhere. If you choose this option and don't quite make it to maximum score on the activity, I'll give you a small boost if your 
component makes use of `state`, `props`, or both.

## NOTES

1. The top portion of the page is just a form you can use to create your own tweets if you want. When the page loads, it automatically creates three tweets 
so that you can see and work with the components. You don't have to create any additional tweets if you don't want to, but you can. You can also
learn a little about how to make forms in React by looking at this component, which can be found in `new-tweet.js`.

2. As you've already discovered in this class, there are many ways to reach a goal in web development (which is why it's so cool!)
However, to make sure you're learning what we want to help you learn, try to really utilize what we've talked in class rather than resorting to the
tricks we've used previously (like `document.getElementById`). In general, you're welcome to look at any files in the project, but to accomplish the 
tasks in this assignment, you'll never need to change:
    - `index.html`
    - `index.js`
    - `new-tweet.js`
    - `App.js` (unless you want to modify it as described in **Task 1** above)
    
You're welcome to change any of the css files to make your activity a more zen place, but you don't have to.