"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React, { useActionState } from "react";
import * as actions from "@/actions";

const CreateSnippetPage = () => {
  const [formStateData, xyz] = useActionState(actions.createSnippet, {
    message: "",
  });

  return (
    <form action={xyz}>
      <div className="p-3">
        <Label className="font-bold p-2.5 text-2xl">Title</Label>
        <Input
          className="p-2.5"
          type="text"
          name="title"
          id="title"
          placeholder="Enter Your Snippets"
        />
      </div>
      <div className="p-3">
        <Label className="font-bold p-2.5 text-2xl">Code</Label>
        <Textarea name="code" id="code" placeholder="Enter Your Code" />
      </div>
      {formStateData?.message && (
        <div className="p-2.5 mt-1 mr-1.5 mb-1.5 ml-2 font-bold rounded-md bg-red-400 border-2 border-red-600 ">
          {formStateData.message}
        </div>
      )}
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
