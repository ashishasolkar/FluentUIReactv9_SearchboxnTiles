import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import { Default as Example } from './example';
import GoogleSearch from './GoogleSearchBox';

const App = () => {
  let tiles = [
    {
      title: 'Lab & Office Safety',
      image: '',
    },
    {
      title: 'Barrier Breakers',
      image: '',
    },
    {
      title: 'Human Resources',
      image: '',
    },
    {
      title: 'Employee Spotlight',
      image: '',
    },
    {
      title: 'Voyager Events',
      image: '',
    },
    {
      title: 'All Company',
      image: '',
    },
    {
      title: 'Voyager Events',
      image: '',
    },
    {
      title: 'All Company',
      image: '',
    },
  ];

  return (
    <FluentProvider theme={webLightTheme}>
      <div style={{ margin: '0 auto', width: '100%' }}>
        <div style={{ margin: '0 auto', width: '720px' }}>
          <GoogleSearch />
        </div>
        <div>
          {tiles.map((tile) => (
            <Example {...tile} />
          ))}
        </div>
      </div>
    </FluentProvider>
  );
};

export default App;
