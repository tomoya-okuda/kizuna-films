import Header from '@/components/layout/Header';

type Props = {};

function page({}: Props) {
  return (
    <main>
      <Header blog={true} />
      <p>I am the Blog Page</p>
    </main>
  );
}

export default page;
