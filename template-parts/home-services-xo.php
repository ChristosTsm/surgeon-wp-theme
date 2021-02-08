<?php

/**
 * Query for Services CPT
 */
$query = new WP_Query(array(
	'post_type' => 'services',
	'orderby' => 'date',
	'order'   => 'ASC',
	'tax_query' => array(
		array(
			'taxonomy' => 'categories',   // taxonomy name
			'field' => 'term_id',           // term_id, slug or name
			'terms' => 3,                  // term id, term slug or term name
		)
	)
));
?>

<section id="services-xo" class="services xo ">
	<div class="container">
		<h2 class="text-center section-header">Χειρουργική Ογκολογία</h2>
		<div class="services-wrapper">
			<div class="tab-content">
				<?php while ($query->have_posts()) : $query->the_post(); ?>
					<div id="<?php echo strtolower(str_replace(' ', '', get_the_title())); ?>" data-tab-content-xo>
						<div class="row tabs-content-row">
							<div class="col-lg-7 service-text-ox">
								<h2 class="color-primary service-title font-size-sub-heading"><?php the_title(); ?></h2>
								<p class="color-dark-gray service-description font-size-text"><?php the_field('description') ?></p>
							</div>
							<div class="col-lg-5">
								<?php if (has_post_thumbnail()) : ?>
									<?php the_post_thumbnail(); ?>
								<?php else : ?>
									<img class="service-image" src="<?php echo get_template_directory_uri() . '/assets/ox.png' ?>" alt="<?php the_title(); ?>">
								<?php endif; ?>
							</div>
						</div>
					</div>
				<?php endwhile; ?>
			</div>
			<img class="services-line" src="<?php echo get_template_directory_uri() . '/assets/services-line.png' ?>" alt="Services decorational devider">
			<div class="tabs">
				<?php while ($query->have_posts()) : $query->the_post(); ?>
					<div data-tab-targetxo="#<?php echo strtolower(str_replace(' ', '', get_the_title())); ?>" class="tab">
						<img src="<?php echo esc_url(get_field('icon')); ?>" alt="<?php the_title(); ?>">
						<p class="font-size-text tab-text"><?php the_title(); ?></p>
					</div>
				<?php endwhile; ?>
				<?php wp_reset_query(); ?>
			</div>
		</div>
	</div>
</section>