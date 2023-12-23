<?php
/*
Plugin Name: My Custom Block
Description: Adds a custom Gutenberg block.
Version: 1.0
Author: Your Name
*/
function my_custom_block_enqueue() {
    wp_enqueue_script(
        'my-custom-block-editor-script',
        plugins_url('build/index.js', __FILE__),
        array('wp-blocks', 'wp-editor', 'wp-element'),
        filemtime(plugin_dir_path(__FILE__) . 'build/index.js')
    );
    wp_enqueue_style(
        'my-custom-block-editor-style',
        plugins_url('css/editor.css', __FILE__),
        array(),
        filemtime(plugin_dir_path(__FILE__) . 'css/editor.css')
    );
}
add_action('enqueue_block_editor_assets', 'my_custom_block_enqueue');
