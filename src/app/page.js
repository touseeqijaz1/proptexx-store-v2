import Main from "@/components/main";
import SideBar from "@/components/sideBar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid lg:grid-cols-[450px_1fr] min-h-[100vh]">
      <aside className="bg-[#efecff] lg:rounded-[0px_50px_0px_0px] relative overflow-hidden min-h-[300px]">
        <SideBar />
      </aside>
      <main>
        <Main />
      </main>
    </div>
  );
}
