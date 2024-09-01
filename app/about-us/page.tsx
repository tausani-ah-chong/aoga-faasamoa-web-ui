const AboutUsPage: React.FC = () => {
  return (
    <div className="container mx-auto py-16 px-8">
      <h1 className="text-5xl font-bold mb-8 text-center">About Us</h1>
      <p className="text-lg text-center mb-16">Welcome to the About Us page. Learn more about our mission, vision, and values.</p>
      <div className="space-y-16">
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-700">Our mission is to provide a nurturing and inclusive environment where students can thrive academically, socially, and emotionally.</p>
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
          <p className="text-gray-700">We envision a community where every student is empowered to reach their full potential and make a positive impact on the world.</p>
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Values</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Respect</li>
            <li>Integrity</li>
            <li>Excellence</li>
            <li>Collaboration</li>
            <li>Innovation</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;