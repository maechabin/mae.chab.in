<!doctype html>

<html lang="ja">
  <?php get_header(); ?>

  <body id="TOP">
    <?php include('include/content_header.php'); ?>
    <div class="content">
      <main class="main">
        <?php if(have_posts()): ?>
          <?php
            while(have_posts()):the_post();
          ?>
            <!-- ▼article▼ -->
            <article class="article">
              <header class="article__header">
                <h1 class="article__title" id="post-<?php the_ID(); ?>"><?php the_title(); ?></h1>
                <ul class="article__meta">
                  <li class="article__meta-li"><i class="fa fa-calendar" aria-hidden="true"></i> <time pubdate><?php the_date('Y年m月d日'); ?></time></li>
                  <li class="article__meta-li"><i class="fa fa-pencil" aria-hidden="true"></i> <a rel="author noopener" href="<?php echo get_page_link(5); ?>"><?php the_author(); ?></a> <a rel="author noopener" title="⇒Google+プロフィールへ" href="https://plus.google.com/u/0/105642680110503345013/posts" target="_blank"><i class="fa fa-google-plus" style="color: #db4437;"></i></a></li>
                </ul>
              </header>

              <div class="entry">
                <?php the_content(); ?>
                <div class="ad__space ad__space_bottom">
                  <!-- maesblog（Page用） -->
                  <ins class="adsbygoogle"
                      style="display:inline-block;width:468px;height:60px"
                      data-ad-client="ca-pub-6331923403728737"
                      data-ad-slot="8443865971"></ins>
                </div>
              </div>
            </article>
            <!-- ▲article▲ -->
          <?php endwhile; ?>
        <?php else : ?>
          <?php include('include/notfound.php'); ?>
        <?php endif; ?>
      </main>

      <?php get_sidebar(); ?>
    </div>

    <?php include('include/content_footer.php'); ?>
    <?php get_footer(); ?>
  </body>
</html>
