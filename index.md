---
layout: default
title: Ky Duong
permalink: /
---

<div class="about">
  <div class="info">
    <h1>{{ site.author.name }}</h1>
    <p>
      Hello everyone, I'm Ky, a Vietnamese guy who loves eating very much. I have just married, I love my wife so much (please let her know about it). I'm very fat and I rarely smile or laugh when I take a photo. I passionate with Maths and the way it works. I am working on a blow-up problem, my supervisor is Mr. Hatem Zaag. Nice to meet you all.
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
  - <strong>{{ item.author }}</strong>. "{{ item.article }}". *{{ item.editor }}*. {{ item.more }} <br />
{% endfor %}
{% if looplenght > 5 %}
  - [_See more_...](/research)
{% endif %}


## <i class="fas fa-chalkboard-teacher"></i> Teaching


{% for item in site.data.teaching %}
  {% assign looplenght = forloop.length %}
{% endfor %}

{% for item in site.data.teaching limit: 5 %}
  - <strong>{{ item.course }}</strong>. _{{ item.place }}_. {{ item.time }}. {{ item.more }} <br />
{% endfor %}
{% if looplenght > 5 %}
  - [_See more_...](/research)
{% endif %}


## <i class="fas fa-mail-bulk"></i> Contact

- **Website**: [duonggiaoky.github.io](duonggiaoky.github.io)
- **Office**: Bureau A401, LAGA, University Paris 13
- **Email**: [{{site.author.email}}](mailto:{{site.author.email}})
