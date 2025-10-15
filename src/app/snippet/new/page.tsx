import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'

const CreateSnippetPage = () => {
  return (
    <div>
        <div>
            <Label>Title</Label>
            <Input type="text" name="title" id="title" placeholder="Enter Your Snippets" />
        </div>
        <div>
            <Label>Code</Label>
            <Textarea name="title" id="title" placeholder="Enter Your Text" />
        </div>
    </div>
  )
}

export default CreateSnippetPage