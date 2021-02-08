<?php

/**
 * Query for Testimonials
 */

$args = array(
	"post_type" => 'testimonials',
	"posts_per_page" => "5"
);

$query = new WP_Query($args);
?>

<section class="section-margin" id="testimonials">

	<h2 class="text-center section-header">Κριτικές Ασθενών</h2>

	<div class="testimonials">

		<div class="swiper-container">

			<div class="swiper-wrapper">

				<?php if ($query->have_posts()) : while ($query->have_posts()) : $query->the_post() ?>

				<div class="swiper-slide">

					<div class="testimonial-box">

						<?php if( get_field('gender') == 'Άντρας' ) { ?>

							<img src="<?php echo get_template_directory_uri() . '/assets/testimonial-male.png' ?>" alt="testimonial male">

						<?php } else { ?>

							<img src="<?php echo get_template_directory_uri() . '/assets/testimonial-female.png' ?>" alt="testimonial male">

						<?php }?>

						<p><?php the_field('testimonial_text'); ?></p>

					</div>

				</div>

				<? endwhile; endif; wp_reset_query(); ?>
				
			</div>
			
			<!-- Add Pagination -->
			<div class="swiper-pagination"></div>

		</div>

	</div>

</section>