## Styling with custom attributes

Galaxy uses the `g` attribute to style elements and `class` attribute to toggle states. The purpose of this is to eliminate the need for prefixing while creating modular and more semantic code.

#### Example Button

```
<button g="centered primary">Create Page</button>
```
Imagine you were creating a button for Facebook.com:
```
<button g="centered primary" fb="create_page">Create Page</button>
```
In this example, `centered primary` pertains to the Galaxy framework, while `create_page` describes the role of the button specific to Facebook.com.

It's not recommended to use class to style components, as this can create a redundant pile of 

#### Styling custom attributes
It's just as easy styling custom attributes 

```
[my-custom-attribute~="error"] {
	color: #c82829;
}
```

