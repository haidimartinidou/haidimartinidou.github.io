---
layout: page
title: CV
permalink: /cv/
---

{% assign cv = site.data.cv %}
<div class="cv-header">
  <h1 class="cv-print-name">{{ cv.personal_info.name }}</h1>
  <p class="cv-print-contact">
    <a href="mailto:{{ cv.personal_info.email }}">{{ cv.personal_info.email }}</a>
    {%- if cv.personal_info.phone %} | {{ cv.personal_info.phone }}{% endif -%}
    {% for link in cv.personal_info.links %} | <a href="{{ link.url }}">{{ link.label }}</a>{% endfor %}
  </p>
  <p class="cv-print-intro">{{ cv.personal_info.tagline }} {{ cv.personal_info.summary }}</p>
  <p class="cv-tagline">{{ cv.personal_info.tagline }}</p>
  {% if cv.personal_info.summary %}<p class="cv-summary">{{ cv.personal_info.summary }}</p>{% endif %}
  {% if cv.personal_info.aside %}<p class="cv-aside">{{ cv.personal_info.aside }}</p>{% endif %}
  <div class="cv-links">
    <a href="mailto:{{ cv.personal_info.email }}">{{ cv.personal_info.email }}</a>
    {%- if cv.personal_info.phone %}<span>{{ cv.personal_info.phone }}</span>{% endif -%}
    {% for link in cv.personal_info.links %}<a href="{{ link.url }}">{{ link.label }}</a>{% endfor %}
  </div>
  <a class="cv-download" href="{{ '/assets/cv/Haidi_Martinidou_CV.pdf' | relative_url }}" download>Download CV (PDF)</a>
</div>

{% if cv.personal_info.interests %}
<section class="cv-section">
  <h2>Research Interests</h2>
  <p class="cv-interests">{{ cv.personal_info.interests }}</p>
</section>
{% endif %}

{% if cv.education and cv.education.size > 0 %}
<section class="cv-section">
  <h2>Education</h2>
  {% for item in cv.education %}
  <div class="cv-entry">
    <div class="cv-entry-head">
      <h3>{{ item.degree }}</h3>
      <span class="cv-dates">{{ item.dates }}</span>
    </div>
    {% if item.institution %}<p class="cv-org">{{ item.institution }}</p>{% endif %}
    {% if item.note %}<p class="cv-note">{{ item.note }}</p>{% endif %}
  </div>
  {% endfor %}
</section>
{% endif %}

{% if cv.experience and cv.experience.size > 0 %}
<section class="cv-section">
  <h2>Experience</h2>
  {% for item in cv.experience %}
  <div class="cv-entry">
    <div class="cv-entry-head">
      <h3>{{ item.title }}</h3>
      <span class="cv-dates">{{ item.dates }}</span>
    </div>
    {% if item.organization %}<p class="cv-org">{{ item.organization }}</p>{% endif %}
    {% if item.subtitle %}<p class="cv-note">{{ item.subtitle }}</p>{% endif %}
    {% if item.bullets and item.bullets.size > 0 %}
    <ul class="cv-bullets">
      {% for bullet in item.bullets %}<li>{{ bullet }}</li>{% endfor %}
    </ul>
    {% endif %}
  </div>
  {% endfor %}
</section>
{% endif %}

{% if cv.skills and cv.skills.size > 0 %}
<section class="cv-section">
  <h2>Skills</h2>
  {% for group in cv.skills %}
  <p class="cv-skill-group"><strong>{{ group.category }}:</strong> {{ group.items }}</p>
  {% endfor %}
</section>
{% endif %}

{% assign active_courses = cv.courses | where_exp: "c", "c.date != 'Paused'" %}
{% if cv.courses and cv.courses.size > 0 %}
<section class="cv-section{% if active_courses.size == 0 %} cv-print-hide{% endif %}">
  <h2>Courses</h2>
  <ul class="cv-bullets">
    {% for course in cv.courses %}
    <li{% if course.date == "Paused" %} class="cv-print-hide"{% endif %}>
      {% if course.certificate_url %}<a href="{{ course.certificate_url }}">{{ course.name }}</a>{% else %}{{ course.name }}{% endif %}
      &mdash; {{ course.provider }}{% if course.date %}, {{ course.date }}{% endif %}{% if course.note %} ({{ course.note }}){% endif %}
    </li>
    {% endfor %}
  </ul>
</section>
{% endif %}

{% if cv.publications and cv.publications.size > 0 %}
<section class="cv-section">
  <h2>Publications</h2>
  <ul class="cv-bullets">
    {% for pub in cv.publications %}<li>{{ pub.citation }}</li>{% endfor %}
  </ul>
</section>
{% endif %}

{% if cv.conferences and cv.conferences.size > 0 %}
<section class="cv-section">
  <h2>Conferences</h2>
  <ul class="cv-bullets">
    {% for conf in cv.conferences %}
    <li>
      {% if conf.url %}<a href="{{ conf.url }}">{{ conf.name }}</a>{% else %}{{ conf.name }}{% endif %}
      &mdash; {{ conf.location }}, {{ conf.date }}
      {%- if conf.highlights and conf.highlights.size > 0 %}
      <ul class="cv-bullets cv-bullets--nested">
        {% for highlight in conf.highlights %}
        <li>{% if highlight.url %}<a href="{{ highlight.url }}">{{ highlight.title }}</a>{% else %}{{ highlight.title }}{% endif %}</li>
        {% endfor %}
      </ul>
      {%- endif %}
    </li>
    {% endfor %}
  </ul>
</section>
{% endif %}

{% if cv.references and cv.references.size > 0 %}
<section class="cv-section">
  <h2>References</h2>
  <ul class="cv-bullets">
    {% for ref in cv.references %}<li><strong>{{ ref.name }}</strong> &mdash; {{ ref.affiliation }}. {{ ref.note }}</li>{% endfor %}
  </ul>
</section>
{% endif %}
