import { StyleSheetManager } from 'styled-components';

// Custom shouldForwardProp function to filter specific props
const shouldForwardProp = prop => 
  !['hsl', 'hsv', 'pointer'].includes(prop);

function App() {
  return (
    <StyleSheetManager shouldForwardProp={shouldForwardProp}>
      {/* Your app content */}
    </StyleSheetManager>
  );
}

export default App; 