<nav class="mobile-menu desktop-hidden" id="mobile-menu">

	<div class="d-flex mt-3 justify-content-between">
		<a href="/">
			<img src="<?php echo get_template_directory_uri() . '/assets/contact-name-logo.png' ?>" alt="Logo">
		</a>
		<div class="burger-menu">
			<img id="close-burger-menu" src="<?php echo get_template_directory_uri() . '/assets/burger-close.svg' ?>" alt="Close Menu">
		</div>
	</div>


	<img id="close-menu" class="burger-bg" src="<?php echo get_template_directory_uri() . '/assets/burger-bg.png' ?>" alt="Background of burger menu">

	<?php
	wp_nav_menu(
		array(
			'theme_location' => 'menu-1',
			'menu_id'        => 'primary-menu',
		)
	);
	?>
</nav>