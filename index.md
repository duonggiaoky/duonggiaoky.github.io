---
layout: default
title: G. K. Duong
permalink: /
---

<div class="about">
  <div class="info">
    <h1>{{Dương Giao Kỵ   }}</h1>
    <p>
   
  I studied my Bachelor at  An Giang Universityfrom 2009 to 2013 in Maths Pedagogy, earned my Master's degree at Sorbonne Paris Nord University in 2016. I completed my PhD in 2019 at Sorbonne Paris Nord University under the supervision of Pr. Hatem Zaag. I did a two-year postdoctoral position at New York Abu Dhabi University under Dr. Tej-Eddine Ghoul. Currently, I am working as a postdoc at LMU Munich under the supervision of Prof. Phan Thanh Nam.

  My interests: Analysis of PDEs, many-body interactions. 
    </p>
  </div>
  <div class="captioned-img">
    <img src="images/Photo-DGK.jpg" alt="My avatar" />
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

- **Office**: Office 321,  LMU Munich: Department of Mathematics 
- **Email**: [duong@math.lmu.de](mailto:duong@math.lmu.de)
