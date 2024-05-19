export default function Home() {
  return (
    <section>
      <h1>Главная</h1>
      {Array.from({ length: 50 }, (_, i) => i).map((i) => {
        return <p>etwet</p>;
      })}
    </section>
  );
}
