import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="font-bold text-4xl">Home</h1>
      <div className="flex items-center justify-between">
        <h1 className="mt-4 text-2xl">Snippets</h1>
        <Link href="/snippet/new"><Button className="cursor-pointer bg-amber-800">New</Button></Link>
      </div>
    </div>
  );
}
