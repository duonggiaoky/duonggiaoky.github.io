---
layout: page
permalink: /teaching
title: Teaching
icon: "fas fa-chalkboard-teacher"
---

{% for item in site.data.teaching %}
  - <strong>{{ item.course }}</strong>. _{{ item.place }}_. {{ item.time }}. {{ item.more }} <br />
{% endfor %}