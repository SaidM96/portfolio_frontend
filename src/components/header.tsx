const NavItems = [
  {
    name: 'Home'
  },
  {
    name: 'About Me'
  },
  {
    name: 'Experiences'
  },
  {
    name: 'Projects'
  },
  {
    name: 'Contact me'
  }
];
export default function Header() {
  return (
    <div
      style={{
        backdropFilter: 'blur(10px)'
      }}
      className='fixed z-10 flex items-center justify-between w-full px-4 sm:px-[7%] py-6 sm:py-12 bg-transparent'
    >
      <p className='font-bold text-4xl xl:text-6xl text-white'>
        {process.env.first_name}{' '}
        <span className='text-primary'>{process.env.last_name}</span>
      </p>

      <div className='lg:flex items-center space-x-8 text-white hidden'>
        {NavItems.map((item, index) => {
          return (
            <p
              className='font-bold text-lg xl:text-2xl hover:text-primary hover:underline hover:underline-offset-8 hover:decoration-4'
              key={index}
            >
              {item.name}
            </p>
          );
        })}
      </div>
    </div>
  );
}
