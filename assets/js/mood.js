`use strict`;

const filterByMood = function(mood) {
	return movies.filter( movie => {
		for (value of movie.completions[0].result) {
			if (mood == value.value.labels) {
				return true;
			}
		}
	})
}

const hope = filterByMood('Angry');

console.log(hope);


