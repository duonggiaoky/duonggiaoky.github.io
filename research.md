---
layout: page
permalink: /research
title: Research
icon: "fas fa-university"
---

{% for item in site.data.research %}
  - <strong>{{ item.author }}</strong>. "{{ item.article }}". *{{ item.editor }}*. {{ item.more }} <br />
{% endfor %}