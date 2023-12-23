
Creates a custom Gutenberg block using WordPress.

This code demonstrates how to create a custom Gutenberg block in WordPress. 
Gutenberg is the new block editor introduced in WordPress 5.0. 
Custom blocks allow you to extend the editor's functionality by adding your blocks with custom content and settings.
 
@link https://developer.wordpress.org/block-editor/

@since 1.0.0

# gutenbergBlock
Creating a basic Gutenberg Block

This repository contains the code for a basic Gutenberg Block in WordPress.


## Project Structure
List of major frameworks/tools to bootstrap your project : 
Nodes.js (npm modules needed for project)
A Local Server to run wordpress
Code Editor
Basic understanding of javascript, HTML, CSS, php and wordpress

## Getting Started
Clone this repository in your WordPress Installation Directory for example inside the Plugins folder : 
```
\wordpress\wp-content\plugins(Clone the repo here)
```

1. Install Dependencies
   ```
   npm install @wordpress/scripts
   ```
3. Build the plugin
   ```
   npm run build
   ```
## Validate the Plugin
1. Navigate to the WordPress application and search for plugins
2. Activate the new Plugin
3. Create a New Post, and try to insert the newly created Gutenberg custom block.

### Note : 
If you face issues regarding plugin or not able to see the new added plugin, try to check your WordPress installation, here is a sample link to install Wordpress : 

https://developer.wordpress.org/advanced-administration/before-install/howto-install/
