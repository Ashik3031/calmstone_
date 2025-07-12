'use client';

import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

export default function Logo() {
  const pathname = usePathname();
  const router = useRouter();

  // Show `logo.png` for both /aboutus and /contact
  const useLightLogo = pathname === '/aboutus' || pathname === '/contact';
  const logoSrc = useLightLogo ? '/logo.png' : '/logow.png';

  const handleClick = () => {
    router.push('/');
  };

  return (
    <div
      onClick={handleClick}
      className="absolute top-4 left-4 z-50 cursor-pointer"
    >
      <Image src={logoSrc} alt="Logo" width={200} height={120} />
    </div>
  );
}
