<?php

/**
 * Template Name: About
 */



get_header(); ?>

<main id="about">

	<section class="container">

		<div class="row">
			<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
					<div class="col-lg-5">
						<img class="about-img" src="<?php the_field('image') ?>" alt="<?php the_title(); ?>">
						<?php get_template_part('template-parts/about', 'details'); ?>
					</div>

					<div class="col-lg-1 text-center divider">

						<img src="<?php echo get_template_directory_uri() . '/assets/about-divider.png' ?>">

					</div>

					<div class="col-lg-6">
						<p class="about-text"><?php the_field('text'); ?></p>
					</div>
			<?php endwhile;
			else : echo 'Configure Page From Admin Panel Please.';
			endif; ?>
		</div>

	</section>

</main>

<?php get_footer(); ?>