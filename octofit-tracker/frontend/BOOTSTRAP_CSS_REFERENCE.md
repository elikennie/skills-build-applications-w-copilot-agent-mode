# Bootstrap CSS Classes Reference for OctoFit Tracker

## Quick Reference Guide

### Navigation & Layout
```css
.navbar                    /* Main navigation bar */
.navbar-brand              /* Logo/brand text */
.nav-link                  /* Navigation links */
.sticky-top                /* Sticky navbar */
.container-fluid           /* Full-width container */
.main-content              /* Main content area */
```

### Typography
```css
.display-4                 /* Extra large heading (2.5rem) */
h1, h2, h3, h4, h5, h6    /* Heading levels */
.lead                      /* Lead text (larger, lighter) */
.text-center               /* Center align text */
.text-muted                /* Gray text for secondary info */
.fw-bold                   /* Font weight bold */
.section-title             /* Section heading with underline */
```

### Spacing Utilities
```css
.mt-5                      /* Margin-top: 3rem */
.mb-4                      /* Margin-bottom: 1.5rem */
.p-4                       /* Padding: 1.5rem all sides */
.px-3                      /* Padding-left/right: 1rem */
.py-2                      /* Padding-top/bottom: 0.5rem */
.gap-3                     /* Gap between flex/grid items */
.me-2                      /* Margin-right: 0.5rem */
.ms-auto                   /* Margin-left: auto (push right) */
```

### Containers & Cards
```css
.container                 /* Main content container */
.card                      /* Card component */
.card-header               /* Card header section */
.card-body                 /* Card content section */
.card-text                 /* Card text content */
.data-grid                 /* Responsive grid for cards */
```

### Tables
```css
.table                     /* Base table style */
.table-hover               /* Highlight row on hover */
.table-striped             /* Alternating row colors */
.table-responsive          /* Horizontal scroll on mobile */
table-sm                   /* Smaller table */
thead                      /* Table header */
tbody                      /* Table body */
scope="col"                /* Column scope (accessibility) */
scope="row"                /* Row scope (accessibility) */
```

### Buttons
```css
.btn                       /* Base button style */
.btn-primary               /* Blue gradient primary button */
.btn-secondary             /* Gray secondary button */
.btn-success               /* Green success button */
.btn-danger                /* Red danger button */
.btn-warning               /* Yellow warning button */
.btn-info                  /* Teal info button */
.btn-outline-primary       /* Outlined primary button */
.btn-lg                    /* Large button */
.btn-sm                    /* Small button */
.btn-group                 /* Button group container */
```

### Badges
```css
.badge                     /* Base badge */
.badge-primary             /* Blue badge */
.badge-success             /* Green badge */
.badge-danger              /* Red badge */
.badge-warning             /* Yellow badge */
.badge-info                /* Teal badge */
.bg-success                /* Background success color */
.bg-danger                 /* Background danger color */
.bg-warning                /* Background warning color */
.text-dark                 /* Dark text color */
```

### Forms
```css
.form-group                /* Form field wrapper */
.form-label                /* Form label */
.form-control              /* Text input, textarea */
.form-select               /* Select dropdown */
.form-check                /* Checkbox/radio wrapper */
.form-check-input          /* Checkbox/radio input */
```

### Alerts
```css
.alert                     /* Base alert */
.alert-success             /* Green success alert */
.alert-danger              /* Red error alert */
.alert-warning             /* Yellow warning alert */
.alert-info                /* Blue info alert */
.alert-heading             /* Alert heading */
```

### Loading & Empty States
```css
.loading-spinner           /* Loading container */
.spinner-border            /* Spinner animation */
.empty-state               /* Empty state container */
.empty-state-icon          /* Large emoji icon */
```

### Colors
```css
.text-primary              /* Primary blue text */
.text-secondary            /* Gray text */
.text-success              /* Green text */
.text-danger               /* Red text */
.text-warning              /* Yellow text */
.text-info                 /* Teal text */
.text-muted                /* Muted gray text */
```

### Flexbox Utilities
```css
.d-flex                    /* Display: flex */
.justify-content-between   /* Space-between alignment */
.align-items-center        /* Vertical center alignment */
.flex-column               /* Column direction */
.flex-wrap                 /* Wrap items */
```

### Display & Visibility
```css
.visually-hidden           /* Screen reader only */
.d-none                    /* Display: none */
.d-block                   /* Display: block */
.d-inline                  /* Display: inline */
.d-inline-block            /* Display: inline-block */
```

### Borders & Shadows
```css
.border                    /* Add border */
.border-top                /* Top border only */
.rounded                   /* Rounded corners */
.shadow                    /* Box shadow */
.shadow-sm                 /* Small shadow */
.shadow-lg                 /* Large shadow */
```

### Text Alignment
```css
.text-start                /* Text align left */
.text-center               /* Text align center */
.text-end                  /* Text align right */
.text-justify              /* Text align justify */
```

### Responsive Classes
```css
.d-md-none                 /* Hide on medium+ screens */
.d-lg-block                /* Show on large+ screens */
.ms-md-auto                /* Margin on medium+ screens */
```

---

## Component-Specific Classes

### Navigation
```jsx
<nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Logo</Link>
    <ul className="navbar-nav ms-auto">
      <li className="nav-item">
        <Link className="nav-link" to="/page">Link</Link>
      </li>
    </ul>
  </div>
</nav>
```

### Table
```jsx
<div className="table-responsive">
  <table className="table table-hover table-striped">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Data</td>
      </tr>
    </tbody>
  </table>
</div>
```

### Card
```jsx
<div className="card">
  <div className="card-header">
    <h5 className="mb-0">Header</h5>
  </div>
  <div className="card-body">
    <p className="card-text">Content</p>
    <button className="btn btn-primary">Action</button>
  </div>
</div>
```

### Badge
```jsx
<span className="badge badge-primary">Text</span>
<span className="badge bg-success">Success</span>
```

### Alert
```jsx
<div className="alert alert-danger" role="alert">
  <strong>Error:</strong> Message text
</div>
```

### Button
```jsx
<button className="btn btn-primary">Primary</button>
<button className="btn btn-outline-primary btn-sm">Small Outline</button>
```

### Loading State
```jsx
<div className="loading-spinner">
  <div className="spinner-border text-primary" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
  <p>Loading...</p>
</div>
```

### Empty State
```jsx
<div className="empty-state">
  <div className="empty-state-icon">🔍</div>
  <h4>No Data</h4>
  <p className="text-muted">Help text</p>
</div>
```

---

## Color Values

| Variable | Value | Usage |
|----------|-------|-------|
| Primary | #0d47a1 | Main brand color |
| Secondary | #1565c0 | Accents, hover |
| Success | #28a745 | Positive actions |
| Danger | #dc3545 | Delete, errors |
| Warning | #ffc107 | Cautions, alerts |
| Info | #17a2b8 | Information |
| Light | #f8f9fa | Backgrounds |
| Dark | #343a40 | Dark elements |
| Muted | #6c757d | Secondary text |

---

## Common Patterns

### Header with Button
```jsx
<div className="d-flex justify-content-between align-items-center mb-4">
  <h2 className="section-title mb-0">Title</h2>
  <button className="btn btn-primary">Add New</button>
</div>
```

### Card Grid
```jsx
<div className="data-grid">
  <div className="card">
    {/* Card content */}
  </div>
</div>
```

### Table with Badges
```jsx
<td>
  <span className="badge badge-primary">{value}</span>
</td>
```

### Error Handling
```jsx
{error && (
  <div className="alert alert-danger" role="alert">
    <strong>Error:</strong> {error}
  </div>
)}
```

### Action Buttons
```jsx
<td className="text-center">
  <button className="btn btn-sm btn-outline-primary me-2">View</button>
  <button className="btn btn-sm btn-outline-danger">Delete</button>
</td>
```

---

## Responsive Utilities

### Hide/Show by Breakpoint
```css
.d-md-none       /* Hide on medium+ */
.d-none d-md-block /* Show only on medium+ */
.d-lg-flex       /* Flex only on large+ */
```

### Spacing by Breakpoint
```css
.mt-md-5         /* Margin-top on medium+ */
.px-lg-3         /* Padding-left/right on large+ */
```

### Grid Columns
```css
.col             /* Automatic width */
.col-12          /* Full width */
.col-md-6        /* 50% on medium+ */
.col-lg-4        /* 33.33% on large+ */
```

---

## Customization Hooks

Edit `App.css` to modify:

### Colors
```css
/* Change primary color */
.btn-primary { background: #your-color; }
.btn-primary:hover { background: #darker-color; }
```

### Spacing
```css
/* Increase container padding */
.container { padding: 40px; }
```

### Fonts
```css
/* Change font family */
body { font-family: 'Your Font', sans-serif; }
```

### Shadows
```css
/* Custom shadow effect */
.card { box-shadow: 0 8px 16px rgba(0,0,0,0.1); }
```

---

## Performance Tips

- ✅ Use utility classes instead of custom CSS
- ✅ Combine classes efficiently
- ✅ Avoid inline styles
- ✅ Use Bootstrap's grid system
- ✅ Leverage responsive utilities
- ✅ Keep CSS specificity low

---

## Browser Support

| Browser | Supported |
|---------|-----------|
| Chrome | ✅ Latest |
| Firefox | ✅ Latest |
| Safari | ✅ Latest |
| Edge | ✅ Latest |
| Mobile | ✅ All modern |

---

## Additional Resources

- Bootstrap Documentation: https://getbootstrap.com/docs/
- CSS Reference: https://developer.mozilla.org/en-US/docs/Web/CSS/
- Accessibility: https://www.w3.org/WAI/

---

## Class Combinations (Examples)

### Large Bold Title
```html
<h1 class="display-4 fw-bold text-primary">Title</h1>
```

### Active Button
```html
<button class="btn btn-primary btn-lg active">Active</button>
```

### Highlighted Row
```html
<tr class="table-active">
  <td>Highlighted</td>
</tr>
```

### Disabled Button
```html
<button class="btn btn-primary" disabled>Disabled</button>
```

### Responsive Image
```html
<img src="..." class="img-fluid rounded" alt="...">
```

### Text Truncation
```html
<p class="text-truncate">Long text...</p>
```

### Loading with Text
```html
<div class="spinner-border me-2" role="status"></div>
<span>Loading...</span>
```
