export default function CastList({ casts }) {
  return (
    <ul>
      {casts.map(cast => {
        const { name, character, id, img } = cast;
        return (
          <li key={id}>
            <img src={`https://image.tmdb.org/t/p/w500${img}`} alt={name} />
            <p>{name}</p>
            <p>Character: {character}</p>
          </li>
        );
      })}
    </ul>
  );
}
