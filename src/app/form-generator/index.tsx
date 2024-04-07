"use client";

import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";

type Props = {};

const FormGenerator = (props: Props) => {
  const [open, setOpen] = useState(false);

  const onFormCreate = () => {
    setOpen(true);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Button onClick={onFormCreate}>Create Form</Button>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Form</DialogTitle>
        </DialogHeader>
        <form>
          <div>
            <Textarea id="description" name="description" required />
          </div>
        </form>
        <DialogFooter>Create Manually</DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default FormGenerator;
