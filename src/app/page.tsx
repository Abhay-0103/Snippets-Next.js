import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function Home() {
  const snippets = await prisma.snippet.findMany();

  return (
    <div>
      <h1 className="font-bold text-4xl">Home</h1>
      <div className="flex items-center justify-between">
        <h1 className="mt-4 text-2xl">Snippets</h1>
        <Link href="/snippet/new">
          <Button className="cursor-pointer bg-amber-800">New</Button>
        </Link>
      </div >
      {snippets.map((snippet) => (
        <div key={snippet.id} className="flex items-center justify-between p-2 mt-2 rounded-md my-2 bg-gray-700">
          <h1 className="p-3">{snippet.title}</h1>
          <Link href={`/snippet/${snippet.id}`} className="p-4">
            <Button className="bg-amber-600 mt-2" variant={'link'}>View</Button>
          </Link>
        </div>
      ))}
    </div>
  );
}
