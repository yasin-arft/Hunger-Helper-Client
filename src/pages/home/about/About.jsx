import aboutImage from '../../../assets/image/hunger_helper_about.jpg';

const About = () => {
  return (
    <section className="hero my-5 md:my-8 lg:my-10">
      <div className="hero-content flex-col lg:flex-row gap-6 px-0">
        <figure className='flex-1'>
          <img src={aboutImage} className="w-full h-auto max-h-[80vh] rounded-lg object-cover" />
        </figure>
        <div className='flex-1'>
          <h2 className="text-3xl font-bold">About Us</h2>
          <p className="py-6">
          Hunger Helper is a platform dedicated to ending hunger and reducing food waste. We connect individuals and organizations with surplus food to those in need, fostering a supportive community. Through our user-friendly platform, donors can easily list their excess food, while recipients can browse and request what they need. By leveraging technology and community engagement, we strive to make a meaningful impact in the fight against hunger. Join us in our mission to create a world where everyone has access to nutritious food, one donation at a time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;