---
layout: default
title: Ky Duong
permalink: /
---

<div class="about">
  <div class="info">
    <h1>{{ site.author.name }}</h1>
    <p>
  My research mainly concentrates  on the analysis of   Partial Differential Equations (PDEs). I received in 2019  my  Ph.D  from Sorbonne Paris Nord University,  under the supervision of Hatem Zaag.  The thesis  purely contributed on  the construction of   finite time singularity formations to PDEs which are non symmetric or non variational. In particular, I am focusing on the two phenomena:   finite time  blowup and touch down. Now, I am a postdoctoral associate at New York University in Abu Dhabi, under the supervision of  Tej-Eddine GHOUL. The study focus   on the  Type II blowup   and  construction  smooth    solutions  to  SQG equation which may develop  singularity in finite time.     Such  phenomenon  remains open until now.  
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
