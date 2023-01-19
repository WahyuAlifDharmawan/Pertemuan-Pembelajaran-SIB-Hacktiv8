import ExternalCSS from './components/ExternalCSS';
import ExternalModuleCSS from './components/ExternalModule';
import ExternalObjectVariableCSS from './components/ExternalObjectVariable';
import InlineCSS from './components/InlineCSS';
import ObjectVariableCSS from './components/ObjectVariableCSS';
import StyledComponents from './components/StyledComponents';

const App = () => {
  return (
    <div className="App">
      <InlineCSS />
      <ObjectVariableCSS />
      <ExternalCSS />
      <ExternalModuleCSS />
      <ExternalObjectVariableCSS />
      <StyledComponents />
    </div>
  );
}

export default App;