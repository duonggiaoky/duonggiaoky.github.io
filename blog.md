---
layout: academic
title: Blog
permalink: /blog.html
section: blog
personal: true
body_class: personal-page
---
{% include page-hero.html %}
<section class="content"><div class="shell">
  {% assign posts = site.posts | where_exp: 'post', 'post.legacy_sample != true' %}
  {% if posts.size > 0 %}
  <ul class="archive-list">
    {% for post in posts %}<li><time datetime="{{ post.date | date: '%Y-%m-%d' }}">{{ post.date | date: '%B %-d, %Y' }}</time><br><a href="{{ post.url | relative_url }}">{{ post.title | escape }}</a></li>{% endfor %}
  </ul>
  {% else %}<p class="notice">No posts published yet.</p>{% endif %}
</div></section>
