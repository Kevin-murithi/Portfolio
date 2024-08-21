const Services = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <h2 className="my-20 text-center text-4xl">My <span className="text-neutral-500">Services</span></h2>
        <p className="my-2 py-6 text-center">Excited to work with you</p>
    <div className="flex flex-wrap justify-evenly items-stretch">
        <div className="w-full sm:w-1/3 lg:w-1/4 rounded-2xl border-4 border-neutral-800 m-4 p-6 transition-transform duration-300 hover:scale-105 hover:shadow-lg flex flex-col">
            <h3 className="text-xl font-semibold text-center lg:text-left">Frontend Optimization</h3>
            <p className="w-full lg:w-3/4 mt-4 mb-8 text-center lg:text-left flex-grow">Enhancing website speed, SEO, and user experience with modern frontend techniques.</p>
        </div>
        <div className="w-full sm:w-1/3 lg:w-1/4 rounded-2xl border-4 border-neutral-800 m-4 p-6 transition-transform duration-300 hover:scale-105 hover:shadow-lg flex flex-col">
            <h3 className="text-xl font-semibold text-center lg:text-left">Database Management</h3>
            <p className="w-full lg:w-3/4 mt-4 mb-8 text-center lg:text-left flex-grow">Designing and managing databases for optimized performance and data integrity.</p>
        </div>
        <div className="w-full sm:w-1/3 lg:w-1/4 rounded-2xl border-4 border-neutral-800 m-4 p-6 transition-transform duration-300 hover:scale-105 hover:shadow-lg flex flex-col">
            <h3 className="text-xl font-semibold text-center lg:text-left">Code Review and Debugging</h3>
            <p className="w-full lg:w-3/4 mt-4 mb-8 text-center lg:text-left flex-grow">Analyzing and debugging code to improve performance, security, and maintainability.</p>
        </div>
    </div>
</div>



  )
}

export default Services