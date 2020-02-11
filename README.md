# A ittle in-class React activity

In this project, the main `App` component contains a component called `MySpecialComponent`. We're going to
spruce it up a little.

Do the following!

- The component is being passed a string **property** called `imgSrc` from the `App` component. (If you want, you can see this on line 21 
of `App.js`). Change the component so that the `img` tag below has its `src` attribute set to the value of the propery.
- Change the component so that it now **renders** a new HTML element that can contain text. A div or a p might be good.
- This component has a special power. Whenever you click your mouse inside it, a property in the `state` of the component increases. Change the element
you added in the previous step so that the `clickCount` property of the component's state gets displayed inside it.
          