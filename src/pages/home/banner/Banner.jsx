
const Banner = () => {
  return (
    <section className="mb-5 mt-2 md:mb-8 lg:mb-10 rounded-md overflow-hidden">
      <div className="hero min-h-52 md:h-[80vh]" style={{ backgroundImage: 'url(https://i.ibb.co/DYDJx3c/food-donation.jpg)' }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hunger Helper</h1>
            <p className="mb-5">A non-profit food donation website. Working to bring ease in food donation related activities.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;