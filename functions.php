<?php

/* enqueue scripts and style from parent theme */
function twentytwentythree_styles() {
	wp_enqueue_style( 'twentytwentythree-child-style', get_stylesheet_uri() );

	wp_enqueue_script( 'twentytwentythree-child-js-pagetotop',  get_stylesheet_directory_uri() . '/assets/js/pagetotop.js', array(), false, true );
	wp_enqueue_script( 'twentytwentythree-child-js-navigation',  get_stylesheet_directory_uri() . '/assets/js/navigation.js', array(), false, true );
	wp_enqueue_script( 'twentytwentythree-child-js-search-modal',  get_stylesheet_directory_uri() . '/assets/js/search-modal.js', array(), false, true );
}

add_action( 'wp_enqueue_scripts', 'twentytwentythree_styles');


/**
 * Enqueue block stylesheets.
 */

 if ( ! function_exists( 'twentytwentythree_block_stylesheets' ) ) :
	/**
	 * Enqueue custom block stylesheets
	 *
	 * @since Twenty Twenty-Four 1.0
	 * @return void
	 */
	function twentytwentythree_block_stylesheets() {
		/**
		 * The wp_enqueue_block_style() function allows us to enqueue a stylesheet
		 * for a specific block. These will only get loaded when the block is rendered
		 * (both in the editor and on the front end), improving performance
		 * and reducing the amount of data requested by visitors.
		 *
		 * See https://make.wordpress.org/core/2021/12/15/using-multiple-stylesheets-per-block/ for more info.
		 */
		wp_enqueue_block_style(
			'core/button',
			array(
				'handle' => 'twentytwentythree-button-style-outline',
				'src'    => get_stylesheet_directory_uri() . '/assets/css/buttons.css',
				'ver'    => wp_get_theme( get_template() )->get( 'Version' ),
				'path'   => get_stylesheet_directory_uri() . '/assets/css/buttons.css',
			)
		);
	}
endif;

add_action( 'init', 'twentytwentythree_block_stylesheets' );
