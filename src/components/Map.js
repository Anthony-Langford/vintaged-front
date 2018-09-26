import React from 'react'
import PropTypes from 'prop-types'
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';

export default class Map extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lon: props.coords.lon,
      lat: props.coords.lat,
      zoom: 11.2
    };
  }

  componentDidMount() {
    const { lon, lat, zoom } = this.state;

    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [lon, lat],
      zoom
    });

    map.on('move', () => {
      const { lng, lat } = map.getCenter();

      console.log(lng, lat);

      this.setState({
        lon: lng.toFixed(4),
        lat: lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      });
    });
  }

  render() {
    const { lon, lat, zoom } = this.state;

    return (
      <div>
        <div className="mt12 ml12 bg-darken75 color-white z1 py6 px12 round-full txt-s txt-bold">
          <div>{`Longitude: ${lon} Latitude: ${lat} Zoom: ${zoom}`}</div>
        </div>
        <div
          ref={el => this.mapContainer = el}
          css={`
            height: 100%;
          `}
        />
      </div>
    );
  }
}

// Static type checking for props
Map.propTypes = {
  coords: PropTypes.object,
  geolocation: PropTypes.bool,
}

// Set default value for prop if not required and not present
Map.defaultProps = {
  coords: {
    lat: 43.6601,
    lon: -79.4609
  },
  geolocation: false
}