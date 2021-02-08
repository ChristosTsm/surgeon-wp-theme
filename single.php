<?php

/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package circus_d
 */

get_header();
?>

<main id="single-blog">

	<section class="container">

		<div class="row">

			<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
					<div class="col-lg-8">

						<div class="single-post-wrapper">

							<div class="img-container">

								<?php if (has_post_thumbnail()) : ?>

									<?php the_post_thumbnail(); ?>

								<?php endif; ?>

								<div class="single-date">

									<p><span><?php echo get_the_date('d') ?></span>.<span><?php echo get_the_date('m') ?></span></p>

									<p><?php echo get_the_date('Y') ?></p>

								</div>

							</div>

							<div class="content-wrapper">

								<h1 class="font-size-heading single-post-title"><?php the_title(); ?></h1>

								<p class="font-size-text single-post-content"><?php the_content(); ?></p>

							</div>

						</div>

					</div>


					<div class="col-lg-4">

						<?php get_template_part('template-parts/posts', 'column'); ?>

					</div>

			<?php endwhile;
			endif; ?>

		</div>

	</section>

</main><!-- #main -->

<?php
get_sidebar();
get_footer();
