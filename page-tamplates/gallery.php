<?php

/**
 * Template Name: Gallery
 */

get_header(); ?>


<main id="gallery">

	<div class="container">

		<h1 class="section-header text-center">Φωτογραφείες Ιατρείου</h1>
		<div class="row row-gap-100">
			<?php //Get the images ids from the post_metadata
			$images = acf_photo_gallery('gallery', $post->ID);
			//Check if return array has anything in it
			if (count($images)) :
				//Cool, we got some data so now let's loop over it
				foreach ($images as $image) :
					$id = $image['id']; // The attachment id of the media
					$title = $image['title']; //The title
					$caption = $image['caption']; //The caption
					$full_image_url = $image['full_image_url']; //Full size image url
					$thumbnail_image_url = $image['thumbnail_image_url']; //Get the thumbnail size image url 150px by 150px
					$url = $image['url']; //Goto any link when clicked
					$target = $image['target']; //Open normal or new tab
					$alt = get_field('photo_gallery_alt', $id); //Get the alt which is a extra field (See below how to add extra fields)
					$class = get_field('photo_gallery_class', $id); //Get the class which is a extra field (See below how to add extra fields)
			?>
					<div class="col-lg-6">
						<?php if (!empty($full_image_url)) { ?><a href="<?php echo $full_image_url; ?>" <?php echo ($target == 'true') ? 'target="_blank"' : ''; ?>><?php } ?>
							<img src="<?php echo $full_image_url; ?>" alt="<?php echo $title; ?>" title="<?php echo $title; ?>">
							<?php if (!empty($full_image_url)) { ?></a><?php } ?>
					</div>

			<?php endforeach;
			endif; ?>
		</div>

	</div>



</main>
<?php get_footer(); ?>