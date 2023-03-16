function pageRank(links, dampingFactor, maxIterations) {
  const pages = Object.keys(links)
  let scores = {};
  for (let page of pages) {
    scores[page] = 1 / pages.length;
  }

  for (let i = 0; i < maxIterations; i++) {
    let newScores = {};

    for (let page of pages) {
      let score = 0;
      for (let link of links[page]) {
        score += scores[link] / links[link].length;
      }
      score = (1 - dampingFactor) / pages.length + dampingFactor * score;
      newScores[page] = score;
    }
    scores = newScores;
  }

  return scores;
}

let links = {
  'A': ['B', 'C'],
  'B': ['D'],
  'C': ['A', 'B', 'D'],
  'D': ['C']
};

// run the algorithm with a damping factor of 0.85 and maximum iterations of 100
let dampingFactor = 0.85;
let maxIterations = 100;
let scores = pageRank(links, dampingFactor, maxIterations);

console.log(scores);