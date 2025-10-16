"use client";
import { Editor } from "@monaco-editor/react";

import React, { useState } from "react";
import type { Snippet } from "@prisma/client";
import { Button } from "./ui/button";
import { saveSnippet} from "@/actions"

const EditSnippetForm = ({ snippet }: { snippet: Snippet }) => {
  const [code, setCode] = useState(snippet.code);

  const changeEventHandler = (value:string = "") => {
    setCode(value);
  }

  // cannot use , use server actios as a inline client component or page
  // it should be in another folder or file 

  const saveSnippetActions = saveSnippet.bind(null, snippet.id, code);

  return (
    <div className="flex flex-col gap-4">
        <form action={saveSnippetActions} className="flex items-center justify-between p-4">
            <h1 className="font-bold text-xl">Edit Your Code Here : </h1>
            <Button type="submit" className=" bg-amber-500 ">Save</Button>
        </form>
        
      <Editor
        height="40vh"
        defaultLanguage="javascript"
        theme="vs-dark"
        defaultValue={code}
        onChange={changeEventHandler}
      />
    </div>
  );
};

export default EditSnippetForm;
