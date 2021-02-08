<?php

/**
 * Query for Blog Posts
 */

$args = array(
	"post_type" => 'post',
	"posts_per_page" => "3"
);

$query = new WP_Query($args);
?>



<section id="blog" class="blog section-margin">

	<div class="container">

		<h2 class="text-center section-header">Blog</h2>

		<div class="blog-posts-wrapper">

			<div class="d-flex flex-wrap _flex-gap">

				<?php if ($query->have_posts()) : while ($query->have_posts()) : $query->the_post() ?>

						<div class="d-flex flex-column single-blog-item-wrapper">

							<?php the_post_thumbnail(); ?>

							<div class="single-blog-item-text">

								<h4 class="font-size-21 font-bold">

									<a class="color-dark-gray" href="<?php the_permalink(); ?>">
										<?php the_title(); ?>
									</a>

								</h4>

								<p class="font-size-text color-primary"><?php echo get_the_excerpt(); ?></p>

							</div>

							<a class="color-dark-gray text-right mr-5 pb-4" href="<?php the_permalink(); ?>"><i class="fas fa-arrow-right"></i></a>

							<div class="date">

								<p><span><?php echo get_the_date('d') ?></span>.<span><?php echo get_the_date('m') ?></span></p>

								<p><?php echo get_the_date('Y') ?></p>

							</div>

						</div>

				<?php endwhile;

				endif;

				wp_reset_query() ?>

			</div>

		</div>

		<div class="cta-blog-wrapper">

			<a href="/blog" class="cta-more cta-blog font-size-text">Περισσότερα &nbsp;<span class="fas fa-arrow-right"></span></a>

		</div>

	</div>

</section>