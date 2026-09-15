---
layout: academic
permalink: /teaching.html
title: Teaching
section: teaching
lede: Selected university courses and instructional activities.
---
{% include page-hero.html %}
<section class="content"><div class="shell content-grid">
  <aside class="side-index" aria-label="Courses"><span>Courses</span><a href="#lmu">LMU Munich</a><a href="#paris">Université Paris 13</a></aside>
  <div class="detail-stack">
    <article class="detail-block" id="lmu"><h2>LMU Munich</h2><p><a href="https://www.math.lmu.de/~nam/Numerics24.php" target="_blank" rel="noopener noreferrer"><strong>Numerics II, Summer 2024</strong></a> — taught with Prof. Phan Thành Nam. The course focused on finite element methods and applications to PDEs.</p></article>
    <article class="detail-block" id="paris"><h2>Université Paris 13</h2><p>Mathematical Tools (2018–2019); Mathematics for Engineers (2018–2019); Probability and Statistics (2017–2018); Analysis 3 (2017–2018).</p>
      <details class="course-details"><summary>Course history and teaching roles</summary><ul class="archive-list">
      {% for item in site.data.teaching %}
        <li><strong>{{ item.course | escape }}</strong> · {{ item.place | escape }}<br>{{ item.time | strip | escape }} · {{ item.more | escape }}{% if item.pdf %} · <a href="{{ '/files/pdf/' | append: item.pdf | relative_url }}">PDF</a>{% endif %}</li>
      {% endfor %}
      </ul></details>
    </article>
  </div>
</div></section>
