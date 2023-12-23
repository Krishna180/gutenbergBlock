import { registerBlockType } from '@wordpress/blocks';
import { RichText } from '@wordpress/block-editor';

registerBlockType('gutenberg-block/hello-world', {
   title: 'Hello World',
    icon: 'smiley',
    category: 'common',
    attributes: {
        content: {
            type: 'string',
            source: 'html',
            selector: 'div', // Using a div tag
        },
    },
    edit: ({ attributes, setAttributes }) => {
        return (
            <RichText
                tagName="div" // Using div instead of p
                className="wp-block-my-custom-block-hello-world" // Custom class for styling
                value={ attributes.content }
                onChange={ ( content ) => setAttributes({ content }) }
                placeholder="Hello World" // Default text
            />
        );
    },
    save: ({ attributes }) => {
        return (
            <RichText.Content
                tagName="div"
                className="wp-block-my-custom-block-hello-world"
                value={ attributes.content }
            />
        );
    },    
});


