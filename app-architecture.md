// WikiMaps Architecture Overview (Refined for React Native & Electron)

// Purpose: 
// - Explore Wikipedia articles geographically.
// - Search by location, title, and filter by category.
// - Display articles on an interactive map.

// Technologies:
// - React Native (Primary)
// - Electron (Desktop)
// - React Navigation (Navigation)
// - Zustand (State Management)
// - React Native Maps (Map Integration)
// - Tailwind CSS (Styling)

// Core Functionality:

// 1. Map Integration
//   - React Native Maps:
//     - Interactive map with customizable tiles.
//     - Dynamic marker placement and clustering.
//     - Custom callouts for article previews.
//     - Gestures (pan, zoom, tap).
//     - Geolocation support.

// 2. Wikipedia API
//   - Geosearch: `/w/api.php?action=query&list=geosearch`
//   - Article Details: `/w/api.php?action=query&prop=extracts|categories|pageimages|coordinates`
//   - Article Search: `/w/api.php?action=opensearch`
//   - Data Handling:
//     - Article extraction & summarization.
//     - Coordinate mapping & validation.
//     - Category classification.
//     - Distance calculations (Haversine formula).

// 3. Location Services
//   - React Native Geolocation:
//     - User location tracking.
//     - Permission handling.
//   - OpenStreetMap Nominatim (API):
//     - Geocoding (address to coordinates).
//     - Reverse geocoding (coordinates to address).

// UI Components:

// 1. Main Screen (WikiMapsScreen)
//   - Navigation: React Navigation (Stack/Tab).
//   - State: Zustand (articles, loading, filters, search, location).
//   - Components:
//     - MapView (React Native Maps).
//     - SearchBar (Location, Article).
//     - FilterPanel (Category, Radius, Limit).
//     - ArticleCardList.

// 2. SearchBar
//   - Location Search:
//     - Input field.
//     - Geolocation button.
//     - Autocomplete suggestions.
//   - Article Search:
//     - Input field.
//     - Debounced search.
//     - Results dropdown.

// 3. FilterPanel
//   - Category filters (checkboxes/toggles).
//   - Radius slider (with visual feedback).
//   - Results limit slider.

// 4. ArticleCard
//   - Image (if available).
//   - Title.
//   - Distance.
//   - Excerpt.
//   - "Read More" button (navigates to ArticleDetails screen).

// 5. ArticleDetailsScreen
//   - Full article content.
//   - Images/Media.
//   - Related articles.

// 6. SettingsScreen (Optional)
//   - Theme selection (light/dark).
//   - Map style options.
//   - Units (metric/imperial).

// Technical Considerations:

// 1. API Rate Limits:
//   - Implement throttling/caching.
//   - Handle API errors gracefully.

// 2. Performance Optimization:
//   - Offscreen rendering for map.
//   - Image optimization (lazy loading, caching).
//   - Efficient state updates (useMemo, useCallback).

// 3. Accessibility:
//   - Screen reader support.
//   - VoiceOver integration.
//   - Keyboard navigation.

// 4. Electron Integration:
//   - IPC communication between main and renderer processes.
//   - Native menus and dialogs.
//   - File system access.

// 5. Testing:
//   - Unit tests for components and utility functions.
//   - Integration tests for API interactions.
//   - End-to-end tests for user flows.

// Key Improvements:

// - **Modern Stack:** React Native, React Navigation, Zustand.
// - **Clarity:** More concise and focused language.
// - **Structure:** Improved component breakdown.
// - **Platform Focus:** Explicitly addresses React Native and Electron.
// - **Testing:** Emphasizes the importance of testing.

This refined architecture provides a solid foundation for building your WikiMaps app. Remember to break down the project into smaller, manageable tasks and focus on writing clean, well-tested code.