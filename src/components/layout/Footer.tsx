import Link from 'next/link';
import LinkFooter from '../ui/Buttons/LinkFooter';
import Breadcrumb from './Breadcrumb';
import Image from 'next/image';

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
        <Link
          href="/booking"
          className="flex-1 flex items-center justify-center p-5 bg-White100 cursor-pointer"
        >
          <div className="flex items-center gap-1">
            <span className="font-bold">撮影を予約</span>
            <Image
              src="/icons/mail.svg"
              alt="mail"
              width={24}
              height={24}
              className="mt-[-2px]"
            />
          </div>
        </Link>
        <Link
          href="https://lin.ee/NF3N6NH"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center p-5 bg-White100 border-l-black100 cursor-pointer"
        >
          <div className="flex items-center gap-1">
            <span className="font-bold">LINEで相談</span>
            <Image
              src="/icons/chat.svg"
              alt="chat"
              width={24}
              height={24}
              className="mt-[-2px]"
            />
          </div>
        </Link>
      </div>

      {/* SNS */}
      <div className="border-t-black100  flex justify-center gap-8 py-5">
        <Link
          href="https://www.instagram.com/kizuna_films/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 bg-White100 rounded-full border border-Black100"
        >
          <Image
            src="/images/logo/instagram.webp"
            alt="instagram"
            width={32}
            height={32}
          />
        </Link>
        <Link
          href="https://www.youtube.com/@Kizuna-Films"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 bg-White100 rounded-full border border-Black100"
        >
          <Image
            src="/images/logo/youtube.svg"
            alt="youtube"
            width={32}
            height={32}
          />
        </Link>
        <Link
          href="https://www.tiktok.com/@kizunafilms"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 bg-White100 rounded-full border border-Black100"
        >
          <Image
            src="/images/logo/tiktok.svg"
            alt="tiktok"
            width={32}
            height={32}
          />
        </Link>
      </div>

      {/* Logo */}
      <div className="border-t-black100 py-4 flex justify-center">
        <Image src="/images/logo/logo.svg" alt="logo" width={82} height={16} />
      </div>
    </footer>
  );
}

export default Footer;
