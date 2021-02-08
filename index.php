<?php

/**
 * Query for Blog Posts
 */

if (get_query_var('paged')) {
	$paged = get_query_var('paged');
} elseif (get_query_var('page')) {
	$paged = get_query_var('page');
} else {
	$paged = 1;
}

$args = array(
	"post_type" => 'post',
	"posts_per_page" => "9",
	'paged'          => $paged,

);

$query = new WP_Query($args);

get_header();
?>



<main id="blog" class="blog-page">

	<div class="container">

		<h2 class="text-center section-header">Blog</h2>

		<div class="blog-posts-wrapper">

			<div class="row row-gap-100">

				<?php if ($query->have_posts()) : while ($query->have_posts()) : $query->the_post() ?>

						<div class="col-lg-4">

							<div class="d-flex flex-column single-blog-item-wrapper">

								<?php the_post_thumbnail(); ?>

								<div class="single-blog-item-text">

									<h4 class="font-size-21 font-bold ">
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

						</div>

					<?php endwhile; ?>

					<div class="nav-previous alignleft"><?php next_posts_link('Παλαιότερα άρθρα'); ?></div>

					<div class="nav-next alignright"><?php previous_posts_link('Νεότερα άρθρα'); ?></div>

				<?php

				endif;

				wp_reset_query()

				?>

			</div>

		</div>

	</div>

</main>

<?php get_footer(); ?>