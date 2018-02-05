<head>
  <meta charset="utf-8">
  <title><?php site_title() ?></title>
  <meta http-equiv="default-style" content="<?php bloginfo('stylesheet_url'); ?>">
  <meta name="description" content="JavaScript、Reactなどのフロントエンド関連のWeb技術の話題から、Apple製品のこと、音楽（ピアノ、作曲）のことなどを書いています。">
  <meta name="keywords" content="JavaScript, Raect, HTML5, wordpress, apple">
  <meta name="viewport" content="width=device-width, minimum-scale=1, maximum-scale=1">
  <meta name="google-site-verification" content="auMacOLlBwYsiL4oZPE_McmHLAHEb6_T8FnBMaC69Dw">

  <!-- OGP -->
  <?php if(is_home()): ?>
  <meta property="og:type" content="website">
  <meta property="og:title" content="<?php bloginfo('name'); ?>">
  <meta property="og:url" content="http://mae.chab.in/">
  <meta property="og:description" content="<?php bloginfo('description'); ?>">
  <meta property="og:image" content="/wp-content/uploads/2015/11/maechabin_400.png">

  <?php elseif(is_page()): ?>
  <meta property="og:type" content="website">
  <meta property="og:title" content="<?php the_title(); ?>">
  <meta property="og:url" content="<?php echo get_permalink(); ?>">
  <meta property="og:description" content="<?php bloginfo('description'); ?>">
  <meta property="og:image" content="/wp-content/uploads/2015/11/maechabin_400.png">

  <?php else: ?>
  <meta property="og:type" content="article">
  <meta property="og:title" content="<?php the_title(); ?>">
  <meta property="og:url" content="<?php echo get_permalink(); ?>">
  <meta property="og:description" content="<?php echo mb_substr(str_replace(array("rn", "r", "n"), '', strip_tags($post-> post_content)), 0, 100).'...'; ?>">
  <?php endif; ?>
  <?php $image_url = wp_get_attachment_image_src(get_post_thumbnail_id($post->ID),'large'); ?>
  <?php if(is_single() && has_post_thumbnail() ): ?>
  <meta property="og:image" content="<?php echo $image_url[0] ?>">
  <?php elseif(!is_home() && !is_page() ): ?>
  <meta property="og:image" content="/wp-content/uploads/2015/11/maechabin_400.png">
  <?php endif; ?>
  <!-- OGP -->

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image"> <!-- ←Twitterカードの種類 -->
  <meta name="twitter:site" content="@maechabin"> <!-- ←Twitterアカウント -->
  <?php if(is_home()): ?>  <!-- ←でブログのトップページを判定 -->
  <meta name="twitter:title" content="<?php bloginfo('name'); ?>">
  <meta name="twitter:description" content="<?php bloginfo('description'); ?>">
  <meta name="twitter:image:src" content="/wp-content/uploads/2015/11/maechabin_400.png">
  <?php elseif(is_page()): ?> <!-- ←で固定ページを判定 -->
  <meta name="twitter:title" content="<?php the_title(); ?>">
  <meta name="twitter:description" content="<?php bloginfo('description'); ?>">
  <meta name="twitter:image:src" content="/wp-content/uploads/2015/11/maechabin_400.png">
  <?php else: ?> <!-- ←上記の条件にもれたページ（記事ページ） -->
  <meta name="twitter:title" content="<?php the_title(); ?>">
  <meta name="twitter:description" content="<?php echo mb_substr(str_replace(array("rn", "r", "n"), '', strip_tags($post-> post_content)), 0, 100).'...'; ?>">
  <?php endif; ?>
  <?php $image_url = wp_get_attachment_image_src(get_post_thumbnail_id($post->ID),'large'); ?>
  <?php if(is_single() && has_post_thumbnail() ): ?>
  <meta name="twitter:image:src" content="<?php echo $image_url[0] ?>">
  <?php elseif(!is_home() && !is_page() ): ?>
  <meta name="twitter:image:src" content="http://mae.chab.in/wp-content/uploads/2015/11/maechabin_400.png">
  <?php endif; ?>
  <!-- Twitter Card -->

  <?php $path = htmlspecialchars($_SERVER['REQUEST_URI'], ENT_QUOTES); ?>
  <link rel="canonical" href="https://mae.chab.in<?php echo $path ?>">
  <link rel="shortcut icon" type="image/vnd.microsoft.icon" href="/wp-content/themes/chabin/favicon.ico">
  <link rel="icon" type="image/vnd.microsoft.icon" href="/wp-content/themes/chabin/favicon.ico">
  <link rel="stylesheet" href="/wp-content/themes/chabin/assets/style-ff00acf700c97506f32175023661b6dc.css" media="all">
  <link rel="alternate" type="application/rss+xml" title="RSS" href="<?php bloginfo('rdf_url'); ?>">
  <?php wp_head(); ?>
</head>
