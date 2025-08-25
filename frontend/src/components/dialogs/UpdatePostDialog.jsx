import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";
import { useState } from "react";
import postServices from "@/services/postServices";
import { useToast } from "@/context/ToastContext";

const initialFormState = {
  title: "",
  content: "",
  file: "",
};

export default function UpdatePostDialog({ postId }) {
  const { showError, showSuccess } = useToast();
  const [form, setForm] = useState(initialFormState);

  const handleChange = (e) => {
    if (e.target.name === "cover") {
      setForm({
        ...form,
        file: e.target.files[0],
      });
    } else {
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData();
      formData.append("title", form.title);
      formData.append("content", form.content);
      formData.append("cover", form.file);

      const res = await postServices.updateAPost(postId, formData);

      if (res) {
        showSuccess("Updated Successfully");
        setForm(initialFormState); // reset form
      }
    } catch (error) {
      showError(error.message);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button>Update</button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Update the Post</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="grid gap-4">
          <div className="grid gap-3">
            Title
            <input
              onChange={handleChange}
              value={form.title}
              type="text"
              name="title"
              placeholder="example: AI is too powerful"
            />
          </div>

          <div className="grid gap-3">
            Content
            <input
              onChange={handleChange}
              value={form.content}
              type="text"
              name="content"
              placeholder="Something about the post..."
            />
          </div>

          <div className="grid gap-3">
            Cover Photo
            <input
              onChange={handleChange}
              type="file"
              name="cover"
              accept="image/*"
            />
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <button
                type="button"
                className="bg-red-600 text-white px-2 py-1 rounded-lg"
              >
                Cancel
              </button>
            </DialogClose>
            <button
              type="submit"
              className="bg-blue-800 text-white px-3 py-1 rounded-lg"
            >
              Upate
            </button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
