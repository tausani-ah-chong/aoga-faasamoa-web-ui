const BestPracticePage: React.FC = () => {
  return (
    <div className="container mx-auto py-16 px-8">
      <h1 className="text-5xl font-bold mb-8 text-center">Best Practice</h1>
      <p className="text-lg text-center mb-16">Welcome to the Best Practice page. Here we share our best practices and methodologies for effective teaching and learning.</p>
      <div className="space-y-16">
        <div>
          <h2 className="text-3xl font-bold mb-4">Teaching Strategies</h2>
          <p className="text-gray-700">We employ a variety of teaching strategies to cater to the diverse learning needs of our students.</p>
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4">Classroom Management</h2>
          <p className="text-gray-700">Our classroom management techniques ensure a positive and productive learning environment.</p>
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4">Assessment Methods</h2>
          <p className="text-gray-700">We use a range of assessment methods to evaluate student progress and inform instruction.</p>
        </div>
      </div>
    </div>
  );
};

export default BestPracticePage;