/**
 * Context Api
 *
 * - Criar um contexto para exibir mensagens de sucesso e erro
 * - Criar um componente para exibir as mensagens
 * - Criar um hook para disparar e consumir as mensagens
 * - Disparar as mensagens a partir dos botões abaixo
 */

import styles from "@/styles/context-api.module.css";
import { IToastMessage } from "@/types/toast-message";
import { ToastMessage } from "@/components/ToastMessage";
import { useToast } from "@/contexts/ToastContext";

export default function ContextApi() {
    const { addToast } = useToast();

    function handleSuccessButtonClick() {
        const message: IToastMessage = {
            id: Math.random().toString(),
            message: "Mensagem de sucesso",
            type: "success",
        };
        addToast(message);
    }

    function handleErrorButtonClick() {
        const message: IToastMessage = {
            id: Math.random().toString(),
            message: "Mensagem de erro",
            type: "error",
        };
        addToast(message);
    }

    return (
        <>
            <div className={styles.container}>
                <button type="button" onClick={handleSuccessButtonClick}>
                    Disparar mensagem de sucesso
                </button>
                <button type="button" onClick={handleErrorButtonClick}>
                    Disparar mensagem de erro
                </button>
            </div>
        </>
    );
}
