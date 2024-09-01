import Image from "next/image";
import { Header } from "./components/header";
import { ScrollingText } from "./components/scrollingText";

export default function Home() {
  return (
    <div>
      <Header />
      <ScrollingText />
      <div className="flex justify-center pt-16 space-x-20">
        <div className="mr-8 rounded-lg overflow-hidden">
          <Image
            src="/4.png"
            alt="Tapa cloth"
            width={300}
            height={200}
            unoptimized
          />
        </div>
        <div className="bg-brown-300 p-4 w-96 space-y-8">
          <p className="text-xl italic">
            Matou te fa&apos;atalofa atu i le soifua maua ma le soifua laulelei ona o le alofa o le Atua.
          </p>
          <p className="text-2xl font-bold">
            <b>Talofa lava from all the staff and children of the A&apos;oga Fa&apos;a Samoa Early Childhood Centre in Ponsonby, Auckland.</b>
          </p>
          <p>
            Enjoy your time browsing our pages. For feedback on our website, send an email to: <a href="mailto:italia@aogafaasamoa.school.nz" className="text-blue-600 hover:text-blue-800">italia@aogafaasamoa.school.nz</a>
          </p>
        </div>
      </div>
    </div>
  );
}
