---
layout: default
title: Ky Duong
permalink: /
---

<div class="about">
  <div class="info">
    <h1>{{ Dương Giao Kỵ  }}</h1>
    <p>
   
 My name is  Duong Giao Ky, I graduated in Mathematics Teacher Education from An Giang University-Vietnam National University HCMC from 2009-to 2013. He obtained my Master's degree in 2016 at Sorbonne Paris Nord University (supervisor Pr. Hatem Zaag) through the Master of Mathematics program in collaboration with international universities at the Vietnam Institute of Mathematics. Later, I finished my PhD in 2019 at Sorbonne Paris Nord University under the  supervision of  Pr. Hatem Zaag to study Singularity formation in finite time for nonsymmetric or nonvariational partial differential equations. Then, I received a two years postdoc position  at New York Abu Dhabi University under Dr. Tej-Eddine Ghoul. Now, he is a lecturer at  An Giang University. The main interests focus on blowup phenomena for PDEs  and fluid dynamics. 
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
