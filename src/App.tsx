import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import { Default as Example } from './example';
import GoogleSearch from './GoogleSearchBox';

const App = () => {
  let tiles = [
    {
      title: 'Lab & Office Safety',
      image: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      title: 'Barrier Breakers',
      image: 'https://images.pexels.com/photos/30579910/pexels-photo-30579910/free-photo-of-elegant-architectural-design-of-a-modern-bridge.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      title: 'Human Resources',
      image: 'https://images.pexels.com/photos/5598299/pexels-photo-5598299.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      title: 'Employee Spotlight',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      title: 'Voyager Events',
      image: 'https://images.pexels.com/photos/29546965/pexels-photo-29546965/free-photo-of-colorful-hot-air-balloons-in-clear-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      title: 'All Company',
      image: 'https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      title: 'Voyager Events',
      image: 'https://images.pexels.com/photos/29546965/pexels-photo-29546965/free-photo-of-colorful-hot-air-balloons-in-clear-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      title: 'All Company',
      image: 'https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
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
