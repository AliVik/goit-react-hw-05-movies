export default function MoviesList({ movies }) {
  return (
    <ul>
      {movies.map(movie => {
        const { id, title } = movie;
        return <li key={id}>{title}</li>;
      })}
    </ul>
  );
}
