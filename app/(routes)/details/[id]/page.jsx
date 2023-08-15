export default function Page({ params }) {
  const { id } = params;
  return <div>My Post: {id}</div>;
}
