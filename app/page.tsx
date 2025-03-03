import { Background } from '@/components/background';
import { Stations } from '@/components/stations';
import { Logo } from '@/lib/logo';
import Image from 'next/image';
import XLogo from './x.svg';

const Home = () => (
  <>
    <div className="fixed top-0 left-0 z-0 h-screen w-screen bg-black">
      <Background />
    </div>
    <div className="-translate-x-1/2 -translate-y-1/2 fixed top-1/2 left-1/2 z-10 h-[12vw] w-[12vw]">
      <Logo />
    </div>
    <div className="fixed z-10 flex h-screen w-screen items-center justify-center">
      <div className="relative flex h-[30vw] w-[30vw] items-center justify-center rounded-full">
        <Stations />
        <a
          target="_blank"
          href="https://x.com/haydenbleasel"
          className="-translate-x-1/2 group absolute bottom-0 left-1/2 flex h-[6vw] w-[6vw] translate-y-1/2 items-center justify-center rounded-full bg-white/10 backdrop-blur-xs transition-all hover:bg-white/20 hover:opacity-100"
          rel="noreferrer"
        >
          <Image
            src={XLogo}
            alt="Follow me on Twitter"
            width={32}
            height={32}
            className="opacity-20 brightness-0 invert transition-all group-hover:opacity-100"
          />
        </a>
      </div>
    </div>
  </>
);

export default Home;
