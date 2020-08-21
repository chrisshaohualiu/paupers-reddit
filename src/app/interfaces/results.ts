export interface SingleResult {
  title: string;
  thumbnail: string;
  url: string;
}

export interface Data {
  data: Results;
}

export interface Results {
  children: SingleResult[];
}
