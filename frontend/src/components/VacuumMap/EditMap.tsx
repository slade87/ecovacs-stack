import '../../../node_modules/ol/ol.css';

import Projection from 'ol/proj/Projection';

import { getActiveTool } from '../../store/vacuum/editMapSlice';
import Map from '../UI/Map/Map';
import SelectNoGoWallsInteraction from './Interactions/SelectNoGoWallsInteraction';
import SelectNoGoZonesInteraction from './Interactions/SelectNoGoZonesInteraction';
import SelectNoMopWallsInteraction from './Interactions/SelectNoMopWallsInteraction';
import SelectNoMopZonesInteraction from './Interactions/SelectNoMopZonesInteraction';
import SelectRoomInteraction from './Interactions/SelectRoomInteraction';
import SplitRoomInteraction from './Interactions/SplitRoomInteraction';
import LabelsLayer from './Layers/LabelsLayer';
import MainLayer from './Layers/MainLayer';
import NoGoWallsLayer from './Layers/NoGoWallsLayer';
import NoGoZonesLayer from './Layers/NoGoZonesLayer';
import NoMopWallsLayer from './Layers/NoMopWallsLayer';
import NoMopZonesLayer from './Layers/NoMopZonesLayer';
import RoomsLayer from './Layers/RoomsLayer';
import { mapHeight, mapWidth } from './Map.utils';

const EditMap = () => {
  const projection = new Projection({
    code: 'custom-base64-image',
    units: 'pixels',
    extent: [0, 0, mapWidth, mapHeight],
  });
  const selectionType = getActiveTool();

  return (
    <Map zoom={3} minZoom={3} maxZoom={4} projection={projection}>
      {selectionType === 'split' && <SplitRoomInteraction />}
      {(selectionType === 'split' || selectionType === 'none' || selectionType === 'merge') && (
        <SelectRoomInteraction />
      )}
      {selectionType === 'noGoZone' && <SelectNoGoZonesInteraction />}
      {selectionType === 'noMopZone' && <SelectNoMopZonesInteraction />}
      {selectionType === 'noGoWall' && <SelectNoGoWallsInteraction />}
      {selectionType === 'noMopWall' && <SelectNoMopWallsInteraction />}

      <LabelsLayer />
      <NoGoWallsLayer />
      <NoMopZonesLayer />
      <NoGoZonesLayer />
      <NoMopWallsLayer />
      <RoomsLayer />
      <MainLayer />
    </Map>
  );
};

export default EditMap;