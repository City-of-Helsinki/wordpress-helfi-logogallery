<?php
/**
 * Plugin Name:       Logo Gallery
 * Description:       Add block for Helsinki Theme that allows to create logo gallery with links
 * Requires at least: 5.9
 * Requires PHP:      7.0
 * Version:           1.2.1
 * Author:            Ambientia
 * License:           GPLv3
 * Text Domain:       logo-gallery
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_logo_gallery_block_init() {
	register_block_type( __DIR__ . '/build/logogallery-container' );
	register_block_type( __DIR__ . '/build/logogallery-item' );
}
add_action( 'init', 'create_block_logo_gallery_block_init' );
