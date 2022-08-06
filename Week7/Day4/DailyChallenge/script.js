class Video {
  constructor(title, uploader, time) {
    this.title = title;
    this.uploader = uploader;
    this.time = time;
  }
  watch() {
    console.log(`${this.uploader} watched all ${this.time} of ${this.title}`);
  }
}

const vid = new Video("Piano tutorial", "Jenkins", 180);
vid.watch();
let vidData = [
  { title: "How to grab a duck", uploader: "Fenrir", time: 27 },
  { title: "Unity physics tutorial", uploader: "Brackeys", time: 1006 },
  { title: "Vader survives", uploader: "Star Wars Theory", time: 8943 },
  { title: "New WB movie trailer", uploader: "WB Studios", time: 2075 },
  { title: "Piano tutorial", uploader: "Jenkins", time: 180 },
];

let videos = [];

vidData.forEach((vidElement) => {
  videos.push(
    new Video(vidElement.title, vidElement.uploader, vidElement.time)
  );
});
