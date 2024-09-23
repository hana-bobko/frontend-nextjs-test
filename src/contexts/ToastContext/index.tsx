// src/contexts/ToastContext.tsx
import React, { createContext, useContext, useState } from "react";
import { IToastMessage } from "@/types/toast-message";
import { ToastMessage } from "@/components/ToastMessage";
interface ToastContextType {
    addToast: (message: IToastMessage) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [toasts, setToasts] = useState<IToastMessage[]>([]);

    const addToast = (message: IToastMessage) => {
        setToasts((prev) => [...prev, message]);
        setTimeout(() => {
            setToasts((prev) => prev.filter((toast) => toast.id !== message.id));
        }, 3000); // Remove a mensagem após 3 segundos
    };

    return (
        <ToastContext.Provider value={{ addToast }}>
            {toasts.map((toast) => (
                <ToastMessage key={toast.id} content={toast} />
            ))}

            {children}
        </ToastContext.Provider>
    );
};

export const useToast = (): ToastContextType => {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error("useToast must be used within a ToastProvider");
    }
    return context;
};
