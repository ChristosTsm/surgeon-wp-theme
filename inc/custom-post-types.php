<?php

/**
 * Services Custom Post Type
 *
 * @return void
 */

function create_posttype()
{

	register_post_type(
		'services',
		// CPT Options
		array(
			'labels' => array(
				'name' => __('Services'),
				'singular_name' => __('Service')
			),
			'rewrite' => array('slug' => 'services'),
			// 'taxonomies' => array(''),
			/* A hierarchical CPT is like Pages and can have
			* Parent and child items. A non-hierarchical CPT
			* is like Posts.
			*/
			'supports' => array('title', 'thumbnail', 'excerpt'),
			'hierarchical'        => false,
			'public'              => true,
			'show_ui'             => true,
			'show_in_menu'        => true,
			'show_in_nav_menus'   => true,
			'show_in_admin_bar'   => true,
			'menu_position'       => 2,
			'menu_icon'           => 'dashicons-businessman',
			'can_export'          => true,
			'has_archive'         => true,
			'exclude_from_search' => false,
			'publicly_queryable'  => true,
			'capability_type'     => 'post',
			'show_in_rest' => true,
		)
	);

	register_post_type(
		'testimonials',
		// CPT Options
		array(
			'labels' => array(
				'name' => __('Testimonials'),
				'singular_name' => __('Testimonial')
			),
			'rewrite' => array('slug' => 'testimonials'),
			// 'taxonomies' => array(''),
			/* A hierarchical CPT is like Pages and can have
			* Parent and child items. A non-hierarchical CPT
			* is like Posts.
			*/
			'supports' => array('title', 'thumbnail'),
			'hierarchical'        => false,
			'public'              => true,
			'show_ui'             => true,
			'show_in_menu'        => true,
			'show_in_nav_menus'   => true,
			'show_in_admin_bar'   => true,
			'menu_position'       => 3,
			'menu_icon'           => 'dashicons-money',
			'can_export'          => true,
			// 'has_archive'         => true,
			'exclude_from_search' => false,
			'publicly_queryable'  => true,
			'capability_type'     => 'post',
			'show_in_rest' => true,
		)
	);
}
// Hooking up our function to theme setup
add_action('init', 'create_posttype');
