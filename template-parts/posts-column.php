<?php

/**
 * More Posts - Display in Single.php
 */

$args = array(
	"post_type" => 'post',
	"posts_per_page" => "3",
	'post__not_in' => array($post->ID)
);

$query = new WP_Query($args);

?>

<section id="posts-column">

	<div class="row row-gap-100">

		<?php if ($query->have_posts()) : while ($query->have_posts()) : $query->the_post() ?>

				<div class="col-lg-12">

					<div class="d-flex flex-column single-blog-item-wrapper column-posts-height">

						<?php the_post_thumbnail(); ?>

						<div class="single-blog-item-text column-post-title">

							<h4 class="font-size-21 font-bold ">
								<a class="color-dark-gray" href="<?php the_permalink(); ?>">
									<?php the_title(); ?>
								</a>
							</h4>

							<a class="color-dark-gray text-right mr-5 pb-4" href="<?php the_permalink(); ?>"><i class="fas fa-arrow-right"></i></a>

						</div>


						<div class="date">

							<p><span><?php echo get_the_date('d') ?></span>.<span><?php echo get_the_date('m') ?></span></p>

							<p><?php echo get_the_date('Y') ?></p>

						</div>

					</div>

				</div>

			<?php endwhile; ?>
		<?php

		endif;

		wp_reset_query()

		?>

	</div>

</section>