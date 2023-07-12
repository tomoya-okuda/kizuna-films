import Header from '@/components/layout/Common/Header/Header';
import Button from '@/components/ui/Buttons/Button';

type Props = {};

function page({}: Props) {
  return (
    <div>
      <Header />
      <p>I am the LINE Page</p>
      <Button
        href="https://lin.ee/NF3N6NH"
        text="LINEで友達追加する"
        external={true}
      />
    </div>
  );
}

export default page;
