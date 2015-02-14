### Step 1: Include Galaxy

#### via the CDN

The quickest way to use Galaxy is by including it in your project's `<head>` tag.

```
<link rel="stylesheet" href="https://galaxyui.com/galaxy/galaxy.css">
<script src="https://galaxyui.com/galaxy/galaxy.js"></script>
```

This will always link to the latest version of Galaxy.

#### clone a local copy

The advantage of having a local copy is that you can customize Galaxy simply by changing `_settings.scss`, and letting Grunt compile the core CSS.

##### Grab a local copy from the repo
Make sure you have [Node](http://nodejs.org/download/), <a data-tooltip="npm install git">Git</a> and <a data-tooltip="npm install grunt">Grunt</a> installed. Once you have, clone the latest version of Galaxy:
`git clone https://github.com/Magmoz/galaxy`

##### Setup grunt
Run the command below to install the `node_modules` needed in order to use Grunt

```
cd galaxy && npm install
```

##### Running Grunt to compile Sass
After running `grunt` on the CLI, any changes you make to `galaxy/_settings.scss` will get compiled to `galaxy.css`. You can also import/ remove Galaxy plugins by editing `galaxy.scss`.

### Customization

#### [galaxy.scss](https://github.com/Magmoz/galaxy/blob/master/galaxy.scss)

This is the file containing all the Sass imports. You can add or remove imports to change what is in the compiled `galaxy.css`.

#### [_settings.scss](https://github.com/Magmoz/galaxy/blob/master/galaxy/_settings.scss)

This is used to override Sass variables in [`_globals.scss`](https://github.com/Magmoz/galaxy/blob/master/galaxy/_globals.scss). You'll be able to change things like color, padding and borders to develop a consistent theme for your design.