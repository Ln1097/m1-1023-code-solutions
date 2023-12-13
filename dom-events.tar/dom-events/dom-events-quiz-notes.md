# dom-events-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
For debuggin purposes
- What is the purpose of events and event handling?
Events are signals inside brower window, that notifies of changes in browser or the os environment. Event handling is using code to allow webpage to respond to change.
- Are all possible parameters required to use a JavaScript method or function?
No
- What method of element objects lets you set up a function to be called when a specific type of event occurs?
addEventListender()
- What is a callback function?
A function passed into another function as an argument, which is invoked inside of outer function to comeplete an action
- What object is passed into an event listener callback when the event fires?
Te event object
- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?
property of an event object that refers to the element that triggered the event.
- What is the difference between these two snippets of code?
    ```js
    element.addEventListener('click', handleClick)
    ```
    ```js
    element.addEventListener('click', handleClick())
    ```
  One is a function and the other is not

## Notes

All student notes should be written here.


How to write `Code Examples` in markdown

for JS:

```javascript
const data = "Howdy";
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
