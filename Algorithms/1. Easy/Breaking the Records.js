// https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem
// https://www.linkedin.com/feed/update/urn:li:activity:6852529146950635520/

function breakingRecords(scores) {
  let highScoreBreaks,
    lowScoreBreaks = 0;
  // assuming first value as lowest and highest value
  let tempHighScore = scores[0];
  let tempLowScore = scores[0];
  scores.forEach((score) => {
    if (score > tempHighScore) {
      tempHighScore = score;
      highScoreBreaks++;
    } else if (score < tempLowScore) {
      tempLowScore = score;
      lowScoreBreaks++;
    }
  });
  return [highScoreBreaks, lowScoreBreaks];
}
