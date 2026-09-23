---
layout: academic
permalink: /research.html
title: Research
section: research
lede: Research directions and selected publications in nonlinear PDEs and mathematical physics.
---
{% include page-hero.html %}
<section class="content"><div class="shell content-grid">
  <aside class="side-index" aria-label="On this page">
    <span>On this page</span>
    <a href="#blowup">Singularity formation</a><a href="#fluids">Fluid mechanics</a><a href="#complex">Complex equations</a><a href="#quantum">Mathematical physics</a><a href="#publications">Publications</a><a href="#earlier-publications">Earlier publications</a>
  </aside>
  <div class="detail-stack">
    <article class="detail-block" id="blowup"><h2>Singularity formation and blow-up</h2><p>Construction and classification of finite-time singularities, including Type I and Type II dynamics, refined asymptotic profiles, stability, and finite-dimensional reduction.</p><div class="tags"><span class="tag">Blow-up profiles</span><span class="tag">Modulation</span><span class="tag">Spectral analysis</span><span class="tag">Semilinear heat equations</span></div></article>
    <article class="detail-block" id="fluids"><h2>Fluid mechanics</h2><p>Boundary-layer separation for stationary Prandtl equations and singularity mechanisms in active scalar models, with current emphasis on local profile construction and multi-region control.</p><div class="tags"><span class="tag">Prandtl</span><span class="tag">SQG</span><span class="tag">Boundary layers</span><span class="tag">Matched asymptotics</span></div></article>
    <article class="detail-block" id="complex"><h2>Complex evolution equations</h2><p>Finite-time blow-up for complex Ginzburg–Landau equations and related non-variational systems, including flat profiles and regimes beyond standard self-similar scaling.</p><div class="tags"><span class="tag">Complex Ginzburg–Landau</span><span class="tag">Flat blow-up</span><span class="tag">Non-variational flows</span></div></article>
    <article class="detail-block" id="quantum"><h2>Mathematical physics</h2><p>Functional and spectral inequalities for Hardy–Schrödinger operators and large quantum systems, including Cwikel–Lieb–Rozenblum and Lieb–Thirring type estimates.</p><div class="tags"><span class="tag">Lieb–Thirring</span><span class="tag">Hardy operators</span><span class="tag">Many-body theory</span></div></article>
    <article class="detail-block" id="publications"><h2>Selected publications</h2><div class="publication-list">
      {% for item in site.data.selected_publications %}
      <a class="publication" href="{{ item.url }}" target="_blank" rel="noopener noreferrer"><span class="pub-year">{{ item.year }}</span><span><span class="pub-title">{{ item.title | escape }}</span><span class="pub-meta">{{ item.authors | escape }} · {{ item.venue | escape }}</span></span><span class="pub-arrow" aria-hidden="true">↗</span></a>
      {% endfor %}
    </div></article>
    <article class="detail-block" id="earlier-publications"><h2>Earlier publications</h2>
      <ul class="archive-list">
      {% for item in site.data.research %}
        {% unless item.article contains 'Yang-Mills' %}
        <li><strong>{{ item.author | escape }}</strong>. {{ item.article | strip | escape }}. <em>{{ item.editor | escape }}</em>.
          {% assign reference = item.more | remove: 'Doi:' | strip %}
          {% if reference contains 'http' %}<a href="{{ reference | escape }}" target="_blank" rel="noopener noreferrer">Publication link ↗</a>{% elsif reference != '' %}<span class="pub-meta">{{ reference | escape }}</span>{% endif %}
          {% if item.arxiv %}<a href="https://arxiv.org/abs/{{ item.arxiv | escape }}" target="_blank" rel="noopener noreferrer">arXiv:{{ item.arxiv | escape }} ↗</a>{% endif %}
          {% if item.pdf %}<a href="{{ '/files/pdf/' | append: item.pdf | relative_url }}">PDF</a>{% endif %}
        </li>
        {% endunless %}
      {% endfor %}
      </ul>
    </article>
  </div>
</div></section>
