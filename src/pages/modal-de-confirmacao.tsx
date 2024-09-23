/**
 * Modal de confirmação
 *
 * - Crie um component para o modal de confirmação
 * - Utilize o código abaixo como base
 * - O modal deve ser aberto ao clicar no botão "Abrir modal de confirmação"
 * - O título deve ser "Confirmação"
 * - O conteudo deve ser dinâmico
 */

import { useState } from "react";

import styles from "@/styles/modal.module.css";
import { Modal } from "@/components/Modal";

export default function Home() {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    // Função para fechar o modal
    const handleClose = () => {
        setModalIsOpen(false);
    };

    // Função para confirmar a ação no modal
    const handleConfirm = () => {
        alert("Ação confirmada!");
        setModalIsOpen(false);
    };

    return (
        <>
            <main className={styles.container}>
                <button type="button" onClick={() => setModalIsOpen(true)}>
                    Abrir modal de confirmação
                </button>
            </main>

            {/*Modal de confirmação renderizado ✅*/}

            <Modal
                isOpen={modalIsOpen}
                onClose={() => setModalIsOpen(false)}
                onConfirm={handleConfirm}
                title="Confirmação"
                footer={{
                    confirmText: "Confirmar",
                    cancelText: "Cancelar",
                }}
            >
                <p style={{ color: "red", textAlign: "center" }}>Tem certeza que deseja confirmar esta ação?</p>
                <p style={{ fontSize: 14, textAlign: "center" }}>Esta ação é irreversível</p>
            </Modal>
        </>
    );
}
