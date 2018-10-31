<?php 
/**
 * Plugin Name: Gutenberg Block Demo
 * Plugin URI: https://github.com/oakwoodgates/gutenberg-block-demo/
 * Description: Testing development of custom blocks for WordPress's Gutenberg editor.
 * Author: oakwoodgates
 * Author URI: https://wpguru4u.com/
 * Version: 1.0.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$path = plugin_dir_path( __FILE__ );

/**
 * Block Initializer.
 */
require_once $path . 'cgb-demo-block/plugin.php';
require_once $path . 'my-block/plugin.php';
