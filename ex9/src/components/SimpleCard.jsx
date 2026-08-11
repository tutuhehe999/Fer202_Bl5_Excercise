import Title from './Title';
import Description from './Description';
import Image from './Image';

export default function SimpleCard({ item }) {
  return (
    <main className="simple-card-page">
      <article className="simple-card">
        <Image url={item.imageUrl} alt={item.title} />
        <div className="simple-card-copy">
          <Title text={item.title} />
          <Description text={item.description} />
        </div>
      </article>
    </main>
  );
}
