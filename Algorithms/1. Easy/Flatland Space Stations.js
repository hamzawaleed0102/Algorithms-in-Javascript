// https://www.hackerrank.com/challenges/flatland-space-stations/problem

function flatlandSpaceStations(nCities, cityStations) {
  console.log(nCities);
  console.log(cityStations);

  const distances = [];
  for (let city = 0; city < nCities; city++) {
    // if city has space station
    if (cityStations.indexOf(city) !== -1) {
      distances.push(0);
      continue;
    } else {
      // no space station in current city,
      const difs = [];
      for (let j = 0; j < cityStations.length; j++) {
        // calculate the distance from nearest space
        difs.push(
          city > cityStations[j]
            ? city - cityStations[j]
            : cityStations[j] - city
        );
      }
      distances.push(Math.min(...difs));
    }
  }
  return Math.max(...distances);
}

flatlandSpaceStations(6, [0, 1, 2, 4, 3, 5]); // 4
flatlandSpaceStations(5, [0, 4]); // 2
