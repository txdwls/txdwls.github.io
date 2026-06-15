---
layout: page
title: "Reviews"
permalink: /reviews/
---

<div class="archive-list">
{% for post in site.posts %}
  <a class="archive-item" href="{{ post.url | relative_url }}">
    <span>{{ post.date | date: "%Y-%m-%d" }}</span>
    <strong>{{ post.title }}</strong>
    <em>{{ post.category }}</em>
  </a>
{% endfor %}
</div>
