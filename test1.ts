const a: number = 2;
const b: string = "d";
const k: Object = {};
const c: number[] = [];
const d: number = 7 + a;

interface IPoint {
  name: string;
  position: [number, number];
}

interface IGoogleMapsResponce {
  markers: IPoint[];
}

// from Ajax comes response
// points: IGoogleMapsResponce = response;
const points: IGoogleMapsResponce;
points.markers[0].position[(1, 2)];

interface ICoords {
  lat: number;
  long: number;
}

interface IGoogleResponsce {
  coordinates: ICoords;
  name?: string;
}

const response: IGoogleResponsce = {
  coordinates: {
    lat: 124.152,
    long: 3462.23,
  },
  name: "Google Building",
};

function mult(a: number, b: number): number {
  return a * b;
}
const m: number = mult(7, 4);
c.push(7);

function get_distance(resp: IGoogleResponsce): number {
  return resp.coordinates.lat * resp.coordinates.long;
}
get_distance(response);
