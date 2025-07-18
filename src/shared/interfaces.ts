import { Layer } from '@/entities/Layer';

export type LayerId = number;
export type PixelRatio = number;

export type Point = Pick<DOMRect, 'x' | 'y'>;
export type Dimension = Pick<DOMRect, 'width' | 'height'>;
export type RectPosition = Pick<DOMRect, 'top' | 'bottom' | 'left' | 'right'>;
export type RectDimension = Point & Dimension;
export type RectBounds = { x0: number; y0: number; x1: number; y1: number };

export type BBox = {
  minX: number;
  minY: number;
  maxX: number;
  maxY: number;
};

export type RectCorners = {
  topLeft: Point;
  topRight: Point;
  bottomLeft: Point;
  bottomRight: Point;
};

export type CanvasOptions = {
  width: number;
  height: number;
  initialPixelRatio: PixelRatio;
  pixelRatio: PixelRatio;
};

export type OriginalEvent = MouseEvent | TouchEvent;

export interface RectDrawOptions {
  x: number;
  y: number;
  width: number;
  height: number;
  color?: string;
  shadowColor?: string;
  shadowOffsetY?: number;
  shadowOffsetX?: number;
  shadowBlur?: number;
}

export interface RoundedRectDrawOptions {
  x: number;
  y: number;
  width: number;
  height: number;
  radius: number;
  color: string;
  shadowColor?: string;
  shadowOffsetY?: number;
  shadowOffsetX?: number;
  shadowBlur?: number;
}

export interface StrokeDrawOptions {
  x: number;
  y: number;
  width: number;
  height: number;
  lineWidth: number;
  color: string;
  scale: PixelRatio;
}

export interface CircleDrawOptions {
  x: number;
  y: number;
  radius: number;
  color: string;
}

export interface QuadraticCurveDrawOptions {
  start: Point;
  control: Point;
  end: Point;
  color: string;
  lineWidth: number;
}

export interface BezierCurveDrawOptions {
  start: Point;
  cp1: Point;
  cp2: Point;
  end: Point;
  color: string;
  lineWidth: number;
}

export interface ImageDrawOptions {
  image: CanvasImageSource;
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface TextDrawOptions {
  text: string;
  fontSize: number;
  fontStyle: string;
  textAlign: CanvasTextAlign;
  textDecoration: string;
  x: number;
  y: number;
  width: number;
  height: number;
  scale: number;
}

export interface TransformationMatrix {
  translationX: number;
  translationY: number;
  scaleX: number;
  scaleY: number;
  skewY: number;
  skewX: number;
  initialScale: number;
}

export const enum Tools {
  STICKER = 'STICKER',
  AREA = 'AREA',
  TEXT = 'TEXT',
  HAND = 'HAND',
  SELECT = 'SELECT',
  CONNECT = 'CONNECT',
  DELETE = 'DELETE',
  RESIZER = 'RESIZER',
}

export const enum ShapeType {
  NOTE = 'NOTE',
  AREA = 'AREA',
  TEXT = 'TEXT',
}

export const enum TextAlign {
  LEFT = 'left',
  CENTER = 'center',
  RIGHT = 'right',
}

export const enum TextDecoration {
  UNDERLINE = 'underline',
  NONE = '',
}

export const enum FontStyle {
  BOLD = 'bold',
  ITALIC = 'italic',
}

export type Tool = keyof typeof Tools;

export interface TextEditorData {
  anchorId: string;
  position: Point;
  text: string;
  bold: boolean;
  underline: boolean;
  italic: boolean;
  font: string;
  fontSize: number;
  textAlign: TextAlign;
  isEditable: boolean;
}

export interface Color {
  value: string;
  label: string;
}

export const enum CustomEvents {
  DOUBLE_CLICK = 'double-click',
  OUT_CLICK = 'out-click',
  ZOOMING_STOPPED = 'zooming-stopped',
}

export interface DoubleClickCustomEvent {
  pageX: number;
  pageY: number;
  transformedPageX: number;
  transformedPageY: number;
  layer: Layer;
}
