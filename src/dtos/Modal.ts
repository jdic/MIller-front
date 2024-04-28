export interface ModalProps
{
  className?: string
  isOpen?: boolean
  onClose?: () => void
  onSubmit?: (input: string) => void 
}