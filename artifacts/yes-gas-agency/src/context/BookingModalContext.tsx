import { createContext, useContext, useState } from "react";

type BookingModalContextType = {
  isOpen: boolean;
  selectedService: string | null;
  openModal: (service?: string) => void;
  closeModal: () => void;
};

const BookingModalContext = createContext<BookingModalContextType>({
  isOpen: false,
  selectedService: null,
  openModal: () => {},
  closeModal: () => {},
});

export function BookingModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  return (
    <BookingModalContext.Provider
      value={{
        isOpen,
        selectedService,
        openModal: (service?: string) => {
          if (service) setSelectedService(service);
          setIsOpen(true);
        },
        closeModal: () => {
          setIsOpen(false);
          setSelectedService(null);
        },
      }}
    >
      {children}
    </BookingModalContext.Provider>
  );
}

export function useBookingModal() {
  return useContext(BookingModalContext);
}
