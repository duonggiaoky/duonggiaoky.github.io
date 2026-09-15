# Giao Ky DUONG — academic website

Jekyll website for <https://duonggiaoky.github.io>, matching the supplied [academic demo](https://ky-duong-academic-demo.kydeptrai-ag.chatgpt.site/).

## Development

Use Ruby 3.3 or later. Install the dependencies with `bundle install`, then run `bundle exec jekyll serve --destination ../site` or `bundle exec jekyll build --strict_front_matter --destination ../site`. The separate destination preserves the historical `_site/index.html` snapshot already tracked by this repository.
GitHub Pages builds the site from the repository's `master` branch. The site needs no frontend package manager.

## Content

- `_layouts/academic.html` and `_includes/academic-*.html`: shared page structure and navigation.
- `assets/site.css`, `assets/site.js`: demo styling, accessible mobile navigation, and optional saved color theme.
- `_data/selected_publications.yml`: the demo's selected publications. Publication statuses are copied from the demo, not automatically refreshed.
- `_data/research.yml` and `_data/teaching.yml`: preserved original academic records, shown on the Research and Teaching pages. The old Yang–Mills preprint entry is superseded in the displayed list by the demo's published entry; its source record remains intact.
- `files/pdf/CV-Giao-Ky-Duong.pdf`: the existing CV, now linked from the CV page. Both original copies are preserved unchanged.
- `notes.html`, `dan-ca-tai-tu.html`, `blog.md`: personal sections. Posts marked `legacy_sample: true` retain their original content and URLs but are excluded from the public Blog listing.
- `*-redirect.html`: compatibility for extensionless page URLs.

The portrait, river photos, and stylesheet were copied from the user-provided demo. All pre-existing PDFs, images, data files, and example posts are retained. Main content and navigation remain available without JavaScript. No deployment service credentials or demo hosting scripts are included.

## Original theme attribution

# Much-Worse jekyll theme

This theme is avaiable under [MIT License](https://opensource.org/licenses/MIT).

This is a modified version of [Steve Miller's NGVM theme](http://jekyllthemes.org/themes/svm-ngvb/). Since this work is a derivative of Prof. Miller's, therefore it is only fair that I honour his self-deprecating spirit and name this **much-worse**. I prefer large seriff fonts and minimal coloring and styling. Apart form the typography, color scheme and layout,
this theme has two useful changes:

- It allows you to maintain your website as a subdirectory on your university of company domain (e.g. http://university.edu/department/people/your-website). Most Jekyll blogs are
designed to be hosted at custom domain names.

- Most jekyll themes are blog-centric, or single page websites. This theme lets you create multi-page website with a blog if you want.

Both the above are not seminal achievements in science, but they are useful. This theme also supports site analytics including [Statcounter](http://statcounter.com) and major comment providers for blogs.

See it in action [here](http://people.csail.mit.edu/gchauras).

Feel free to send me pull requests with better responsive performance or cleaner HTML/CSS.
