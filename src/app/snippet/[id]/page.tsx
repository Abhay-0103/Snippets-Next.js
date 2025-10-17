import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import React from "react";
import * as actions from "@/actions";
import { notFound } from "next/navigation";

const SnippetDetailPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const id = parseInt((await params).id);
  
  await new Promise((r) => setTimeout(r, 2000) );

  const snippet = await prisma.snippet.findUnique({
    where: {
      id,
    },
  });

  if (!snippet) notFound();

  const deleteSnippetAction = actions.deleteSnippet.bind(null, snippet.id);

  return (
    <div className="flex flex-col gap-2.5">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-xl">{snippet.title}</h1>
        <div className="flex items-center gap-3">
          <Link href={`/snippet/${snippet.id}/edit`}>
            <Button className="bg-amber-500">Edit</Button>
          </Link>
          <form action={deleteSnippetAction}>
            <Button variant={"destructive"} type="submit" className="bg-red-600">
              Delete
            </Button>
          </form>
        </div>
      </div>
      <pre className="p-4 mt-3 bg-indigo-600 rounded border-amber-600">
        <code>{snippet.code}</code>
      </pre>
    </div>
  );
};

export default SnippetDetailPage;


export const generateStaticParams = async () => {
  const snippets = await prisma.snippet.findMany();

  return snippets.map((snippets) => {
    return {id:snippet.id.toString()}
  })
}