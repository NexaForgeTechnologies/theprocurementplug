export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center p-6">
      <h1 className="text-3xl md:text-5xl font-bold text-[#85009D] mb-4">
        404 - Page Not Found
      </h1>
      <p className="text-gray-600 text-lg">
        Sorry, we couldn’t find the page you were looking for.
      </p>
    </div>
  );
}
