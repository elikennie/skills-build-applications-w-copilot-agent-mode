# OctoFit Tracker - Bootstrap Styling Guide

## Overview
All React components have been updated to use consistent Bootstrap 5 styling for a professional, cohesive user experience.

## Styling Features Implemented

### 1. Navigation Bar
- **Sticky Top Navigation**: Stays visible while scrolling
- **Dark Theme**: Professional gradient background
- **Emoji Icons**: Visual indicators for each section
- **Responsive Collapse**: Mobile-friendly hamburger menu
- **Active Links**: Clear visual feedback for current section

```jsx
<nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
```

### 2. Tables
- **Consistent Headers**: Blue gradient background with white text
- **Hover Effects**: Row highlighting on mouse over
- **Striped Rows**: Alternating row colors for readability
- **Badges**: Color-coded data display
- **Responsive**: Horizontal scrolling on mobile

```jsx
<table className="table table-hover table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Column Name</th>
    </tr>
  </thead>
</table>
```

### 3. Buttons
- **Primary Button** (Blue Gradient)
  - Main actions like "Create", "Add", "Start"
  - Full color with shadow on hover
  
- **Secondary Buttons**
  - Gray buttons for less important actions
  
- **Outline Buttons**
  - Light background with colored border
  - Used for secondary actions like "View", "Edit"
  
- **Danger Buttons** (Red)
  - Delete operations
  
- **Success Buttons** (Green)
  - Positive actions like "Sign Up"

```jsx
<button className="btn btn-primary">Primary Action</button>
<button className="btn btn-outline-primary">Secondary Action</button>
```

### 4. Cards
- **Attractive Header**: Blue gradient background
- **Hover Effect**: Lifts up with shadow
- **Consistent Spacing**: Proper padding and margins
- **Description Text**: Clear, readable card body
- **Call-to-Action**: Button within each card

```jsx
<div className="card">
  <div className="card-header">
    <h5 className="mb-0">Header Title</h5>
  </div>
  <div className="card-body">
    <p className="card-text">Description</p>
    <button className="btn btn-sm btn-primary">Action</button>
  </div>
</div>
```

### 5. Headings
- **H1**: Large display heading for main titles (2.5rem)
- **H2**: Section titles with underline accent
- **H3-H6**: Hierarchical heading levels
- **Section Title Class**: Special styling with border accent

```jsx
<h1>Main Title</h1>
<h2 className="section-title">📋 Section</h2>
```

### 6. Badges
- **Color Coding**: Different colors for different meanings
  - `badge-primary` (Blue): Main information
  - `badge-success` (Green): Success/Positive
  - `badge-danger` (Red): Important/Delete
  - `badge-warning` (Yellow): Caution
  - `badge-info` (Teal): Informational

```jsx
<span className="badge badge-primary">Primary Info</span>
<span className="badge bg-success">Success</span>
```

### 7. Loading States
- **Spinner**: Bootstrap spinner with text
- **Loading Message**: Clear feedback to user

```jsx
<div className="loading-spinner">
  <div className="spinner-border text-primary" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
  <p>Loading data...</p>
</div>
```

### 8. Empty States
- **Icon Emoji**: Visual representation
- **Heading**: Clear message
- **Description**: Helpful text
- **Optional Button**: Call to action

```jsx
<div className="empty-state">
  <div className="empty-state-icon">🔍</div>
  <h4>No Data Found</h4>
  <p className="text-muted">Description text</p>
</div>
```

### 9. Alerts
- **Success Alert** (Green): For positive messages
- **Danger Alert** (Red): For errors
- **Warning Alert** (Yellow): For cautions
- **Info Alert** (Blue): For general information

```jsx
<div className="alert alert-danger" role="alert">
  <strong>Error:</strong> Something went wrong
</div>
```

### 10. Forms
- **Labels**: Bold, colored headings
- **Form Controls**: Blue border on focus
- **Consistent Styling**: Rounded corners, proper padding
- **Focus States**: Clear visual feedback

```jsx
<div className="form-group">
  <label className="form-label">Input Label</label>
  <input className="form-control" type="text" />
</div>
```

### 11. Color Scheme
- **Primary Blue**: `#0d47a1` - Main brand color
- **Secondary Blue**: `#1565c0` - Hover/Accent
- **Success Green**: `#28a745` - Success actions
- **Danger Red**: `#dc3545` - Delete/Error
- **Warning Yellow**: `#ffc107` - Caution
- **Info Teal**: `#17a2b8` - Information
- **Light Gray**: `#f8f9fa` - Backgrounds
- **Dark Gray**: `#6c757d` - Secondary text

### 12. Spacing & Layout
- **Main Content Background**: Gradient from light to medium blue
- **Container**: White background with shadow, rounded corners
- **Padding**: 30px for main containers, adjusts on mobile
- **Gap**: 20px between grid items

### 13. Responsive Design
- **Desktop**: Full-size tables, grid layout
- **Tablet (768px)**: Adjusted padding, font sizes
- **Mobile (480px)**: Single column layout, smaller buttons

## Component Structure

### Activities Component
```
Header (📋 Activities)
├── Table
│   ├── Activity Name (badge)
│   ├── Description
│   └── Calories Burned (success badge)
└── Empty State (if needed)
```

### Leaderboard Component
```
Header (🏆 Leaderboard)
├── Table
│   ├── Rank (medal emoji + info badge)
│   ├── User
│   ├── Points (warning badge)
│   └── Workouts (success badge)
└── Empty State (if needed)
```

### Teams Component
```
Header (👥 Teams)
├── Card Grid
│   ├── Card Header (team name)
│   ├── Description
│   ├── Member Count (info badge)
│   └── View Button (outline-primary)
└── Empty State (if needed)
```

### Users Component
```
Header (👤 Users)
├── Add New User Button
├── Table
│   ├── Username (badge)
│   ├── Email
│   ├── First/Last Name
│   └── Actions (View/Delete buttons)
└── Empty State (if needed)
```

### Workouts Component
```
Header (💪 Workouts)
├── Create Workout Button
├── Table
│   ├── Workout Name (badge)
│   ├── Description
│   ├── Duration (info badge)
│   ├── Difficulty (color-coded badge)
│   └── Start Button (outline-primary)
└── Empty State (if needed)
```

## Key CSS Classes

| Class | Purpose |
|-------|---------|
| `.container` | Main content wrapper with white background |
| `.section-title` | Section headers with blue underline |
| `.table-hover` | Highlight rows on hover |
| `.table-striped` | Alternating row colors |
| `.btn-primary` | Primary action buttons |
| `.btn-outline-primary` | Secondary action buttons |
| `.badge` | Data highlights |
| `.card` | Content cards with hover effect |
| `.alert` | Alert messages |
| `.empty-state` | No data state |
| `.loading-spinner` | Loading indicator |
| `.data-grid` | Responsive card layout |

## Accessibility Features

✅ **ARIA Labels**: All interactive elements have proper labels
✅ **Color Contrast**: Text readable on all backgrounds
✅ **Keyboard Navigation**: Full keyboard support
✅ **Screen Readers**: Semantic HTML and labels
✅ **Focus States**: Clear visual feedback on focus
✅ **Mobile Friendly**: Touch-friendly button sizes

## Animations & Transitions

- **Button Hover**: Transform translateY(-2px) with shadow
- **Card Hover**: translateY(-5px) with enhanced shadow
- **Link Hover**: Color change with underline
- **Navbar**: Smooth collapse/expand animation
- **Transitions**: All 0.3s ease for smooth movement

## Usage Examples

### Basic Table with Badges
```jsx
<table className="table table-hover table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td><span className="badge badge-primary">Data</span></td>
    </tr>
  </tbody>
</table>
```

### Card with Action
```jsx
<div className="card">
  <div className="card-header">
    <h5>Title</h5>
  </div>
  <div className="card-body">
    <p>Description</p>
    <button className="btn btn-primary">Action</button>
  </div>
</div>
```

### Loading & Empty States
```jsx
// Loading
<div className="spinner-border text-primary"></div>

// Empty
<div className="empty-state">
  <div className="empty-state-icon">📭</div>
  <h4>No Data</h4>
</div>
```

## Mobile Optimization

All components are responsive:
- **Desktop**: Full 2-column card grid
- **Tablet**: 1-2 columns
- **Mobile**: Single column with adjusted sizing
- **Extra Small**: Minimal padding, scaled buttons

## Customization

To modify colors, edit these in `App.css`:
```css
--primary-color: #0d47a1;
--secondary-color: #1565c0;
--success-color: #28a745;
```

## Browser Support

✅ Chrome (latest)
✅ Firefox (latest)
✅ Safari (latest)
✅ Edge (latest)
✅ Mobile browsers (iOS Safari, Chrome Mobile)
