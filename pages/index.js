
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Redline Recovery</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="w-full min-h-screen bg-black text-white">
        <div
          className="relative w-full h-[90vh] bg-cover bg-center"
          style={{ backgroundImage: "url('/Redline_Recovery_Hero_Banner_3Lines_Centered.jpg')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center px-4">
            <h1 className="text-2xl md:text-4xl font-bold mb-4">
              BUILT ON BROKEN BONES AND HARD LESSONS.
            </h1>
            <p className="max-w-2xl text-sm md:text-lg mb-6">
              This isn’t theory. It’s the road I’ve walked. Redline Recovery is for the injured,
              the burnt out, the ones who feel like they’re losing everything. Let’s rebuild — together.
            </p>
            <button className="text-lg px-6 py-3 bg-red-600 rounded-lg">
              Start Your Comeback
            </button>
          </div>
        </div>

        <div className="bg-white text-black py-12 px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Where Are You Right Now?</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-gray-100 p-6 rounded-xl shadow">
              <h3 className="font-semibold text-lg mb-2">I’m Injured and Don’t Know What to Do Next</h3>
              <ul className="text-sm text-left list-disc list-inside">
                <li>Guide: “Your Rights After a Collision in BC”</li>
                <li>Medical & insurance steps</li>
                <li>What no one tells you</li>
                <li>Mentorship or peer support</li>
              </ul>
            </div>
            <div className="bg-gray-100 p-6 rounded-xl shadow">
              <h3 className="font-semibold text-lg mb-2">I’m Trying to Return to Work</h3>
              <ul className="text-sm text-left list-disc list-inside">
                <li>Coming Back After Trauma guide</li>
                <li>Return-to-work planner & tools</li>
                <li>How to talk to your crew and family</li>
              </ul>
            </div>
            <div className="bg-gray-100 p-6 rounded-xl shadow">
              <h3 className="font-semibold text-lg mb-2">I Don’t Know If I Can Go Back</h3>
              <ul className="text-sm text-left list-disc list-inside">
                <li>“What If You Can’t Return?” course</li>
                <li>Purpose outside the uniform</li>
                <li>Identity, finances, and mental health</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
