import Button from '@/components/ui/Buttons/Button';
import Comment from '@/components/ui/Others/Comment';
import Image from 'next/image';

type Props = {};

function LINE({}: Props) {
  return (
    <div className="bg-Green100 flex flex-col justify-center items-center gap-8 py-16 px-8">
      <Comment text="LINE公式アカウント、始めました" />
      <div className="bg-[#DFEFD0]  w-full text-center pt-6 rounded-xl">
        <Image
          src="/images/iphone.webp"
          alt="line-account"
          width={154}
          height={146}
          className="mx-auto"
        />
      </div>
      <div className="flex flex-col gap-5">
        <p className="font-bold">
          友達追加していただくことで、 1万円のキャッシュバックを実施中！
        </p>
        <p className="font-bold">
          無料でのご相談も可能ですので、 この機会にぜひご登録ください。
        </p>
      </div>
      <Button href="/line" text="詳しく見る" />
    </div>
  );
}

export default LINE;
