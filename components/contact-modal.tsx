import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-white rounded-xl flex flex-col items-center text-center">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold items-center text-center text-slate-800">Contact Us</DialogTitle>
          <DialogDescription className="text-slate-500">
            Get in touch with our team for any inquiries or support.
          </DialogDescription>
        </DialogHeader>
        <div className="mt-2 space-y-4">
          <p className="text-slate-600">
            Email us at:{" "}
            <a href="mailto:contact@mindaide.co" className="font-bold text-slate-900 hover:underline">
              contact@mindaide.co
            </a>
          </p>
          <p className="text-slate-700">We&apos;ll get back to you as soon as possible.</p>
        </div>
        <div className="mt-3 flex justify-center">
          <Button
            onClick={onClose}
            className="bg-gradient-to-r from-slate-800 to-zinc-800 text-white hover:opacity-90 transition-opacity px-4 py-5 text-2xl"
          >
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

