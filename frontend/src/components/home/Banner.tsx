export const Banner = () => {
  return (
    <section className="relative" style={{ height: 'calc(100vh - 64px)' }}>
      <div className='absolute inset-0 bg-cover bg-center ' style={{ backgroundImage: 'url(/wallpaper.jpg)' }}></div>
      <div className="absolute inset-0 bg-cover bg-center bg-black opacity-40"></div>
      <div className="relative h-full flex items-center">
        <div className="max-w-2xl px-4 mx-4">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Bienvenido a <span style={{ fontFamily: 'Dancing Script' }}>InkTrail</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-200">
            Descubre en que nueva aventura te vas aperder hoy
          </p>
        </div>
      </div>
    </section>
  )
}
