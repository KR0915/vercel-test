import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold text-gray-800 -mt-31">
        TodoApp
      </h1>
      <div className="w-full max-w-xl mt-5 px-8 py-5 bg-white shadow-md rounded-lg">
        
      </div>
      <div className="w-full max-w-xl mt-5 px-8 py-5 rounded-lg">
      <div className="w-full flex flex-col justify-center items-center">
        <div
          className="w-3/4 p-4 rounded-md mx-3 my-2 bg-slate-500 flex flex-col justify-center">
          <div className="flex items-center my-3">
            <div className="mr-auto">
              <h2 className="mr-auto font-semibold text-slate-50">
                data
                {/*postで定義されたデータのtitleをここで表示する*/}
              </h2>
            </div>
            <div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </main>
  );
}
