import Image from 'next/image';

export default function images() {
  return (
    <div>
      {/* 
        Next.js <Image> will fetch from process.env.BOX_SHARED_LINK. 
        Make sure you’ve also whitelisted box.com / sfstu.app.box.com under `images.domains`.
      */}
      <Image
        src={process.env.BOX_SHARED_LINK}
        alt="My Large Box Asset"
        width={800}
        height={450}
        unoptimized={true} // or remove if you want Next’s built-in optimizer
      />
    </div>
  );
}