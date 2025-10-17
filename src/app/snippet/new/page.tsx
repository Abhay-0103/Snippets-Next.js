import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import React from "react";

const CreateSnippetPage = () => {
  async function createSnippet(formData: FormData) {
    "use server"; // SSR
    const title = formData.get("title") as string;
    const code = formData.get("code") as string;

    const snippet = await prisma.snippet.create({
      data: {
        title,
        code,
      },
    });

    console.log("Created snippet", snippet);

    redirect("/");
  }

  return (
    <form action={createSnippet}>
      <div className="p-3">
        <Label className="font-bold p-2.5">Title</Label>
        <Input
          className="p-2.5"
          type="text"
          name="title"
          id="title"
          placeholder="Enter Your Snippets"
        />
      </div>
      <div className="p-3">
        <Label className="font-bold p-2.5">Code</Label>
        <Textarea name="code" id="code" placeholder="Enter Your Code" />
      </div>
      <Button
        type="submit"
        className="p-3 font-bold cursor-pointer my-4 bg-amber-700 mx-4"
      >
        Create
      </Button>
    </form>
  );
};

export default CreateSnippetPage;
