const person = {
  name: "John Doe",
  age: 25,
  location: {
    country: "Canada",
    city: "Vancouver",
    coordinates: [49.2827, -123.1207],
  },
};

const {
  name,
  location: {
    country,
    city,
    coordinates: [lat, lng],
  },
} = person;

console.log(
  `I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`
);

// Prediction: I am John Doe from undefined. Latitude(undefined), Longitude(undefined)
// result: I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)
