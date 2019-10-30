import { IBase } from '@antv/g-base/lib/interfaces';
import { Point } from '@antv/g-base/lib/types';

import { BBox, ListItem, LocationCfg, LocationType, Range } from './types';

export interface IList {
  getItems(): ListItem[];
  setItems(items: ListItem[]);
  updateItem(item: ListItem, cfg);
  clearItems();
  setItemState(item: ListItem, state: string, value: any);
}

export interface ISlider {
  setRange(min, max);
  getRange(): Range;
  setValue(value: number | number[]);
  getValue(): number | number[];
}

export interface ILocation<T extends LocationCfg = LocationCfg> {
  getLocationType(): LocationType;
  getLocation(): T;
  setLocation(cfg: T);
  setOffset(offsetX: number, offsetY: number);
  getOffset(): Point;
}

// export interface IPointLocation extends ILocation<PointLocationCfg> {
//   getPoint(): Point;
//   setPoint(x, y);
// }

// export interface IRegionLocation extends ILocation<RegionLocationCfg> {
//   getRegion(): Region;
//   setRegion(start: Point, end: Point);
// }

// export interface IPointsLocation extends ILocation<PointsLocationCfg> {
//   getPoints(): Point[];
//   setPoints(points: Point[]);
// }

// export interface ICircleLocation extends ILocation<CircleLocationCfg> {
//   setCenter(center);
//   setRadius(radius);
//   setAngle(startAngle, endAngle);
//   getCenter(): Point;
//   getRadius(): number;
//   getStartAngle(): number;
//   getEndAngle(): number;
// }

export interface IComponent extends IBase {
  render();
  update(cfg: object);
  clear();
  getBBox(): BBox;
  show();
  hide();
}
