<?php
/**
 * Plugin Name: CodePen Embed (Gutenberg Block)
 * Plugin URI: https://petr.in
 * Description: A tool for embedding CodePens without the need to deal with any code! (Made possible thanks to "create-guten-block" by mrahmadawais and maedahbatool)
 * Author: robpetrin
 * Author URI: https://petr.in
 * Version: 1.0.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
