import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import React from "react";

const SnippetDetailPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const id = parseInt((await params).id);

  const snippet = await prisma.snippet.findUnique({
    where: {
      id,
    },
  });

  if (!snippet) {
    return <h1>Snippet Not Found</h1>;
  }

  return (
    <div className="flex flex-col gap-2.5">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-xl">{snippet.title}</h1>
        <div className="flex items-center gap-3">
          <Link href={`/snippet/${snippet.id}/edit`}><Button className="bg-amber-500">Edit</Button></Link>
          <Button variant={"destructive"} className="bg-red-600">
            Delete
          </Button>
        </div>
      </div>
      <pre className="p-4 mt-3 bg-indigo-600 rounded border-amber-600">
        <code>{snippet.code}</code>
      </pre>
    </div>
  );
};

export default SnippetDetailPage;
