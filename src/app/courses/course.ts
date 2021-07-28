interface ICourse {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  code: string;
  duration: number;
  rating: number;
  releaseDate: string;
}

export class Course {

  constructor({id, name, imageUrl, price, duration, code, rating, releaseDate}: ICourse) {
    this.id = id;
    this.name = name;
    this.imageUrl = imageUrl;
    this.price = price;
    this.code = code;
    this.duration = duration;
    this.rating = rating;
    this.releaseDate = releaseDate;
  }

  id: number;
  name: string;
  imageUrl: string;
  price: number;
  code: string;
  duration: number;
  rating: number;
  releaseDate: string;
}
