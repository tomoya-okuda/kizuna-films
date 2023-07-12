import LinkFooter from '@/components/layout/Common/Footer/LinkFooter';
import Link from 'next/link';
import Image from 'next/image';
import SNSLink from '@/components/layout/Common/Footer/SNSLink';
import CTAFooter from '@/components/layout/Common/Footer/CTAFooter';

type Props = {};

function Footer({}: Props) {
  return (
    <footer className="border-tb-black100">
      {/* Links */}
      <div className="py-14 px-8">
        <div className="flex flex-col gap-3 mb-10">
          <h4>◼︎ サービス関連</h4>
          <LinkFooter href="/" name="トップ" />
          <LinkFooter href="/about" name="キズナ フィルムズについて" />
          <LinkFooter href="/blog" name="スタッフの気まぐれブログ" />
        </div>
        <div className="flex flex-col gap-3 ">
          <h4>◼︎ 撮影関連</h4>
          <LinkFooter href="/menu" name="撮影メニュー" />
          <LinkFooter href="/location" name="撮影スポットを探す" />
          <LinkFooter href="/flow" name="納品までの流れ" />
          <LinkFooter href="/faq" name="よくある質問" />
        </div>
      </div>

      {/* CTA */}
      <div className="border-t-black100 flex justify-between w-full">
        <CTAFooter
          href="/booking"
          text="撮影を予約"
          src="/icons/mail.svg"
          line={true}
        />
        <CTAFooter href="/line" text="LINEで相談" src="/icons/chat.svg" />
      </div>

      {/* SNS */}
      <div className="border-t-black100  flex justify-center gap-8 py-5">
        <SNSLink
          href="https://www.instagram.com/kizuna_films/"
          src="/images/logo/instagram.webp"
        />
        <SNSLink
          href="https://www.tiktok.com/@kizunafilms"
          src="/images/logo/tiktok.svg"
        />
      </div>

      {/* Logo */}
      <div className="border-t-black100 py-4 flex justify-center">
        <Link href="/" className="cursor-pointer">
          <Image
            src="/images/logo/logo.svg"
            alt="logo"
            width={82}
            height={16}
          />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
