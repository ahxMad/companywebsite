import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-white rounded-xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-slate-800">Contact Us</DialogTitle>
          <DialogDescription className="text-slate-600">
            Get in touch with our team for any inquiries or support.
          </DialogDescription>
        </DialogHeader>
        <div className="mt-6 space-y-4">
          <p className="text-slate-700">
            Email us at:{" "}
            <a href="mailto:contact@mindaide.co" className="font-semibold text-slate-900 hover:underline">
              contact@mindaide.co
            </a>
          </p>
          <p className="text-slate-700">We'll get back to you as soon as possible.</p>
        </div>
        <div className="mt-6 flex justify-end">
          <Button
            onClick={onClose}
            className="bg-gradient-to-r from-slate-700 to-zinc-700 text-white hover:opacity-90 transition-opacity"
          >
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

