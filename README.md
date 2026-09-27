# Blossom_Flower_landscaping

try me:
https://apsar7004.github.io/Blossom_Flower_landscaping/

## Editing "Project Highlight"

The Project Highlight section on the home page is built from [data/project-highlights.json](data/project-highlights.json).
Projects appear in the order they are listed, and each project's photos/videos appear in the order of its `media` list.

```json
{
    "title": "Project name",
    "description": "Short description",
    "link": { "text": "View project", "href": "project.html" },
    "media": [
        { "type": "video", "src": "asserts/video/example.mp4" },
        { "type": "image", "src": "asserts/img/example.png", "alt": "Photo description" }
    ]
}
```

`link` and `alt` are optional. To preview locally, run `python3 -m http.server` in the repo root and open http://localhost:8000
(opening `index.html` directly from disk won't load the JSON).
