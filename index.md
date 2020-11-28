---
layout: default
title: Ky Duong
permalink: /
---

<div class="about">
  <div class="info">
    <h1>{{ site.author.name }}</h1>
    <p>
  My research mainly concentrates  on  Partial Differential Equations. I am interested in  the finite time singulairty formations for Differential partial equations. In particular, I am focusing on the finite blowup and touching down analysis for parabolic PDEs. In addition to that, I am also interested in fluid mechanics  such  as SQG equation that remains open if a $C^{1,\alpha}$ solution may  develop singularities in fnite time.  Now, I am a postdoctoral associate at New York University in Abu Dhabi, supevisor is Tej Eddine GHOUL.
    </p>
  </div>
  <div class="captioned-img">
    <img src="images/avatar.jpg" alt="My avatar" />
  </div>
</div>

## <i class="fas fa-university"></i> Research

{% for item in site.data.research %}
  {% assign looplenght = forloop.length %}
{% endfor %}

{% for item in site.data.research limit: 5 %}
  - <strong>{{ item.author }}</strong>. "{{ item.article }}". *{{ item.editor }}*. {{ item.more }}. {% if item.pdf %}<a href="files/pdf/{{ item.pdf }}" target="_blank">pdf</a>.{% endif %} <br />
{% endfor %}
{% if looplenght > 5 %}
  - [_See more_...](/research)
{% endif %}


## <i class="fas fa-chalkboard-teacher"></i> Teaching


{% for item in site.data.teaching %}
  {% assign looplenght = forloop.length %}
{% endfor %}

{% for item in site.data.teaching limit: 5 %}
  - <strong>{{ item.course }}</strong>. _{{ item.place }}_. {{ item.time }}. {{ item.more }}. {% if item.pdf %}<a href="files/pdf/{{ item.pdf }}" target="_blank">pdf</a>.{% endif %} <br />
{% endfor %}
{% if looplenght > 5 %}
  - [_See more_...](/research)
{% endif %}


## <i class="fas fa-mail-bulk"></i> Contact

- **Website**: [duonggiaoky.github.io](https://duonggiaoky.github.io)
- **Office**: Office 1100A,  Bulding A2,  Department of mathematics, NYU in Abu Dhabi 
- **Email**: [{{site.author.email}}](mailto:{{site.author.email}})
