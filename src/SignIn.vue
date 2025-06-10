<div
    v-if="movie"
    class="movie-details">
    <div class="poster">
      <img
        :src="movie.Poster.replace('SX300', 'SX1000')"
        :alt="movie.Title" />
    </div>
    <div class="infos">
      <h1>{{ movie.Title }}</h1>
      <p>{{ movie.Plot }}</p>
      <div>
        <h3>Actors</h3>
        <p>{{ movie.Actors }}</p>
      </div>
      <div>
        <h3>Director</h3>
        <p>{{ movie.Director }}</p>
      </div>
      <div>
        <h3>Ratings</h3>
        <p
          v-for="rating in movie.Ratings"
          :key="rating.Source">
          {{ rating.Source }} - {{ rating.Value }}
        </p>
      </div>
    </div>
  </div>
  <TheLoader
    v-else
    color="royalblue" />