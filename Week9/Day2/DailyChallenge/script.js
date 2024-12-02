// Instructions
// In this exercise, you will use object oriented programming concepts to define and use a custom object in JavaScript.

// Create a class named Video. The class should be constructed with the following parameters:
// title (a string)
// uploader (a string, the person who uploaded it)
// time (a number, the duration of the video - in seconds)
// Create a method called watch() which displays a string as follows:
// “uploader parameter watched all time parameter of title parameter!”
// Instantiate a new Video instance and call the watch() method.
// Instantiate a second Video instance with different values.
// Bonus: Use an array to store data for five Video instances (ie. title, uploader, time)
// Think of the best data structure to save this information within the array.
// Bonus: Loop through the array to instantiate those instances.

class Video {
  constructor(title, uploader, time) {
    this.title = title;
    this.uploader = uploader;
    this.time = time;
  }
  watch() {
    console.log(`${this.uploader} watched all ${this.time} of ${this.title}!`);
  }
}

const video1 = new Video("The Matrix", "Neo", 120);
video1.watch();

const video2 = new Video("The Lord of the Rings", "Frodo", 180);
video2.watch();

const videos = [
  new Video("The Matrix", "Neo", 120),
  new Video("The Lord of the Rings", "Frodo", 180),
  new Video("The Godfather", "Vito", 150),
  new Video("The Shawshank Redemption", "Andy", 140),
  new Video("The Dark Knight", "Bruce", 160),
];

videos.forEach((video) => video.watch());
