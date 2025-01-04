# WikiMaps Development Plan

## Core Features

### 1. Map Integration
- React Native Maps implementation:
  - Interactive map with customizable tiles
  - Dynamic marker placement and clustering
  - Custom callouts for article previews
  - Gestures (pan, zoom, tap)
  - Geolocation support

### 2. Wikipedia API Integration
- API Endpoints:
  - Geosearch: `/w/api.php?action=query&list=geosearch`
  - Article Details: `/w/api.php?action=query&prop=extracts|categories|pageimages|coordinates`
  - Article Search: `/w/api.php?action=opensearch`
- Data Handling:
  - Article extraction & summarization
  - Coordinate mapping & validation
  - Category classification
  - Distance calculations (Haversine formula)

### 3. UI Components

#### Main Screen (WikiMapsScreen)
- Navigation: React Navigation (Stack/Tab)
- State: Zustand (articles, loading, filters, search, location)
- Components:
  - MapView (React Native Maps)
  - SearchBar (Location, Article)
  - FilterPanel (Category, Radius, Limit)
  - ArticleCardList

#### SearchBar
- Location Search:
  - Input field
  - Geolocation button
  - Autocomplete suggestions
- Article Search:
  - Input field
  - Debounced search
  - Results dropdown

#### FilterPanel
- Category filters (checkboxes/toggles)
- Radius slider (with visual feedback)
- Results limit slider

#### ArticleCard
- Image (if available)
- Title
- Distance
- Excerpt
- "Read More" button

### 4. Screens
- ArticleDetailsScreen:
  - Full article content
  - Images/Media
  - Related articles
- SettingsScreen (Optional):
  - Theme selection
  - Map style options
  - Units preference

## Technical Considerations

### 1. Performance
- API Rate Limits:
  - Implement throttling/caching
  - Handle API errors gracefully
- Map Performance:
  - Marker clustering
  - Viewport optimization

### 2. User Experience
- Loading states
- Error handling
- Offline support
- Accessibility

