## Building Components
Galaxy uses HTML and their attributes rather than classes for styling elements. In doing so, each attribute effectively declares a separate namespace for encapsulating style information, resulting in more readable and maintainable HTML & CSS.
For example, a button might have the following markup:

`<button g="centered large primary" id="send">Submit Form</button>`

## Using Galaxy.js to Toggle States

Galaxy uses CSS to transition, but requires `galaxy.js` to toggle between states. With `galaxy.js`, you can create versatile interactions all without touching any Javascript.

### st-group

The `st-group` attribute groups unique components together, and this creates a "connection" between them. For example, two dropdown buttons might be connected with different st-groups:

### st-role (target/ trigger)
`st-role` has two options: As a `trigger`, it will apply a class of `st-state` to the `target`. The `target` is simply the element that is being appended the class. The following example would apply a class of `active` on the parent div when the button is clicked:

With that, you can build interactions for virtually any state.

## Contributing

Galaxy is currently in Beta, so this means you might run into the ocassional bug. If this is the case, [create an issue](https://github.com/Magmoz/galaxy/issues/new) with the problem and your markup so we can fix it asap.

### Submitting a pull request
There's probably [an open issue right now](https://github.com/Magmoz/galaxy/issues). If you think you've found a solution, please submit a pull request and reference it in the issue. If it hasn't been reported before, just a pull request is necessary.

## License
Galaxy was created by [Andy Fang](//twitter.com/andyfang98) and licensed under the [MIT](//tldrlegal.com/license/mit-license). Basically, you can do whatever you want with it as long as the original license stays intact.