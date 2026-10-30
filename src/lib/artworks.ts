const fs = require("fs");

const file = "data/artworks.json";

const map = {
  "work-01": "music-inspired-pieces",
  "work-02": "surreal-figurative-works",
  "work-03": "surreal-figurative-works",
  "work-04": "portraits",
  "work-05": "mountain-landscapes",
  "work-06": "music-inspired-pieces",
  "work-07": "surreal-figurative-works",
  "work-08": "music-inspired-pieces",
  "work-09": "music-inspired-pieces",
  "work-10": "surreal-figurative-works",
  "work-11": "mountain-landscapes",
  "work-12": "mountain-landscapes",
  "work-13": "music-inspired-pieces",
  "work-14": "mountain-landscapes",
  "work-15": "mountain-landscapes",
  "work-16": "mountain-landscapes",
  "work-17": "mountain-landscapes",
  "work-18": "surreal-figurative-works",
  "work-19": "music-inspired-pieces",
  "work-20": "mountain-landscapes",
  "work-21": "surreal-figurative-works",
  "work-22": "surreal-figurative-works",
  "work-23": "surreal-figurative-works",
  "work-24": "mountain-landscapes",
  "work-25": "surreal-figurative-works",
  "work-26": "portraits",
  "work-27": "surreal-figurative-works",
  "work-28": "mountain-landscapes",
  "work-29": "portraits",
  "work-30": "mountain-landscapes",
  "work-31": "surreal-figurative-works",
  "work-32": "surreal-figurative-works",
  "work-33": "mountain-landscapes",
  "work-34": "portraits",
  "work-35": "music-inspired-pieces",
  "work-36": "surreal-figurative-works",
  "work-37": "portraits",
  "work-38": "portraits",
  "work-39": "surreal-figurative-works",
  "work-40": "mountain-landscapes",
  "work-41": "surreal-figurative-works",
  "work-42": "surreal-figurative-works",
  "work-43": "mountain-landscapes",
  "work-44": "portraits",
  "work-45": "music-inspired-pieces",
};

const json = JSON.parse(fs.readFileSync(file, "utf8"));

for (const item of json) {
  if (!item.id) continue;
  item.category = map[item.id] || "surreal-figurative-works";
}

fs.writeFileSync(file, JSON.stringify(json, null, 2) + "\n");
console.log("Categories added to data/artworks.json");
