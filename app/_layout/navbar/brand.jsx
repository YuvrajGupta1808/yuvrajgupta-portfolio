'use client';


export function NavbarBrand() {
  return (
    <div className='group inline-block cursor-pointer pb-5'>

      <div className='relative flex overflow-hidden whitespace-nowrap transition-all duration-500 ease-in-expo group-hover:pe-16'>
        <h5 className='transition-transform duration-500 ease-in-expo group-hover:-translate-x-full'>
          Yuvraj Gupta &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </h5>
        <h5 className='absolute left-full ps-1 translate-x-0 transition-transform duration-500 ease-in-expo group-hover:-translate-x-full'>
          yuvrajgupta1808@gmail.com
        </h5>
      </div>
    </div>
  );
}
