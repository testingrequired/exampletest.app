export default function Post({ username, body, likes }) {
  return (
    <p>
      {username}: {body} ({likes} likes)
    </p>
  );
}
