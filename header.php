<?php

/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package circus_d
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>

<head>
	<meta charset="<?php bloginfo('charset'); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
	<?php wp_body_open(); ?>
	<div id="page" class="site">
		<a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e('Skip to content', 'circus_d'); ?></a>
		<div class="header-wrapper">
			<header id="masthead" class="site-header container">
				<div class="site-branding">
					<div class="mobile-hidden">
						<?php the_custom_logo(); ?>
					</div>
					<div class="desktop-hidden mobile-logo">
						<a href="/">
							<img src="<?php echo get_template_directory_uri() . '/assets/contact-name-logo.png' ?>" alt="Logo">
						</a>
					</div>
					<?php if (is_front_page() && is_home()) :
					?>
						<h1 class="site-title"><a href="<?php echo esc_url(home_url('/')); ?>" rel="home"><?php bloginfo('name'); ?></a></h1>
					<?php
					else :
					?>
						<p class="site-title"><a href="<?php echo esc_url(home_url('/')); ?>" rel="home"><?php bloginfo('name'); ?></a></p>
					<?php
					endif;
					$circus_d_description = get_bloginfo('description', 'display');
					if ($circus_d_description || is_customize_preview()) :
					?>
						<p class="site-description"><?php echo $circus_d_description; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped 
													?></p>
					<?php endif; ?>
				</div><!-- .site-branding -->

				<nav id="site-navigation" class="main-navigation mobile-hidden">
					<!-- <button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false"><php esc_html_e('Primary Menu', 'circus_d'); ?></button> -->
					<?php
					wp_nav_menu(
						array(
							'theme_location' => 'menu-1',
							'menu_id'        => 'primary-menu',
						)
					);
					?>


				</nav><!-- #site-navigation -->
				<div class="desktop-hidden burger-menu">
					<?php get_template_part('template-parts/mobile', 'menu'); ?>
					<?php echo file_get_contents(get_template_directory_uri() . '/assets/burger.svg'); ?>
				</div>
			</header><!-- #masthead -->
		</div><!-- .header-wrapper -->