---
layout: page
title: "Reviews"
description: "공개 가능한 논문 리뷰를 시간순으로 모읍니다."
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
