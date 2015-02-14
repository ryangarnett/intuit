<video src="/media/primary-button.mp4" width="700" autoplay="true"></video>
## Using custom attributes in HTML

Galaxy uses the **g** attribute instead of styling with **class** in order to write modular code while maintaining its semantic nature.

Most frameworks you've come across have used the [Smacss](https://smacss.com/) naming convention. 

It's best practice to use the **class** attribute only for toggling states.

## Styling with custom attributes

Galaxy uses the **g** attribute to style elements and **class** attribute to toggle states. The purpose of this is to eliminate the need for prefixing while creating modular and more semantic code.

#### Example Button

<pre class="language-markup"><code>
&lt;button g="centered primary">Create Page&lt;/button>		
</code></pre>

Imagine you were creating a button for an app for Facebook.com:
<pre class="language-markup"><code>
&lt;button g="centered primary" fb="sign_up">Create Page&lt;/button>
</code></pre>
In this example, `centered primary` pertains to the Galaxy framework, while `create_page` describes the role of the button specific to Facebook.com.

It's not recommended to use class to style components, as this can create a redundant pile of 

#### Styling custom attributes
It's just as easy styling custom attributes 


<pre class="language-css"><code>
[myapp~="error"] {
	color: #c82829;
}
</code></pre>


<!-- ## Compiling Sass and Javascript
### Installing Grunt

Galaxy uses Grunt as its task runner. To install Grunt you first need <a href="http://nodejs.org/download/" data-tooltip="sudo brew install nodejs">Node.js</a> installed (which includes Node Package Manager).

Then, from the command line:

- Install Grunt <pre class="language-bash"><code>sudo npm install -g grunt-cli</code></pre>
- Navigate to the <strong>/galaxy/</strong> directory and run <strong>sudo npm install</strong> to look for the <strong>package.json</strong> and install all dependencies.

#### Then simply run <strong>grunt</strong> to watch all SASS and Javascript files.

## Toggling States with HTML

You can create state-toggling with with <strong>galaxy.js</strong> and the <strong>class</strong> attribute. Below is a simple example of a div that is applied the active class when a corresponding button is clicked: -->

<pre><code class="language-markup">
&lt;!-- The element being interacted with (the trigger)
&lt;button st-role="trigger" st-state="active" st-group="example1">&lt;/button>
&lt;!-- The element that is getting the `st-state` appled to (the target): -->
&lt;div st-role="target" st-group="example1">
</code></pre>

In the above example, <strong>st-role</strong> defines whether the element is being interacted with or getting applied classes. In this case the button is the <strong>trigger</strong> and the div is the <strong>target</strong> being applied a class of <strong>.active</strong>.

<strong>st-state</strong> is the class that is going to be applied to <strong>st-role="target"</strong> when the <strong>st-role="trigger"</strong> is clicked.

Finally, in order for Galaxy to establish a relationship between these two elements they need to be within the same <strong>st-group</strong>. In this case a relationship is created as both elements have an <strong>st-group</strong> of <strong>example1</strong>.

## Browser and Device Support

Galaxy supports all modern browsers, but to remain cutting edge, Galaxy does not guarantee to support on legacy browsers such as Internet Explorer 9 and below.

| | Chrome | Firefox | Internet Explorer | Safari | Opera |
|:-:|---|---|---|---|---|
| Mac | ✓ | ✓  | Never | ✓ | × | 
| Windows | ✓  | ✓  | Never | ✓ | × |
| Linux | ✓ | ✓ | Never | N/A | × |
| Android | ✓ | ✓ | Never  | N/A | × |
| iOS | ✓ | ✓ | N/A | N/A | × |
