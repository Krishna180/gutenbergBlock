import { registerBlockType } from '@wordpress/blocks';

registerBlockType('gutenberg-block/hello-world', {
   title: 'Hello World',
    icon: 'smiley',
    category: 'common',
    edit: () => <div class = "wp-block-my-custom-block-hello-world">Hello World</div>
    // save: () => <div class = "wp-block-my-custom-block-hello-world">A simple test block</div>,
    
});


