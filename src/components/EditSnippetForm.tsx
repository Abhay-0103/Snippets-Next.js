"use client";
import { Editor } from "@monaco-editor/react";

import React, { useState } from "react";
import type { Snippet } from "@prisma/client";
import { Button } from "./ui/button";

const EditSnippetForm = ({ snippet }: { snippet: Snippet }) => {
  const [code, setCode] = useState(snippet.code);

  return (
    <div className="flex flex-col gap-4">
        <form className="flex items-center justify-between p-4">
            <h1 className="font-bold text-xl">Edit Your Code Here : </h1>
            <Button type="submit" className=" bg-amber-500 ">Save</Button>
        </form>
        
      <Editor
        height="40vh"
        defaultLanguage="javascript"
        theme="vs-dark"
        defaultValue={code}
      />
    </div>
  );
};

export default EditSnippetForm;
