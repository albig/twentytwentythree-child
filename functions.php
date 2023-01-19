<?php

/* enqueue scripts and style from parent theme */
function twentytwentythree_styles() {
	wp_enqueue_style( 'twentytwentythree-child-style', get_stylesheet_uri() );

	wp_enqueue_script( 'twentytwentythree-child-js-pagetotop',  get_stylesheet_directory_uri() . '/assets/js/pagetotop.js', array(), false, true );
}

add_action( 'wp_enqueue_scripts', 'twentytwentythree_styles');
