
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="flex flex-col items-center gap-8">
        <div className="text-2xl font-bold font-sans">Upload Video</div>
        <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
          Upload
        </button>
      </div>
    </div>
  );
}
