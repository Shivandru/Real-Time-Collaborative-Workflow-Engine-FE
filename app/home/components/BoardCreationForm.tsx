import { Button } from "@/src/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/src/components/ui/dialog";

type BoardCreationFormProps = {
  isOpen: boolean;
  onClose: () => void;
};

const BoardCreationForm = ({ isOpen, onClose }: BoardCreationFormProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create a new board</DialogTitle>
        </DialogHeader>

        

        <DialogFooter>
          <Button size="sm" variant="default" className="text-xs tracking-wide">Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default BoardCreationForm;
