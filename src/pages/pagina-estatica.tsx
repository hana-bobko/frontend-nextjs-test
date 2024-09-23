/**
 * Página estática
 *
 * - Atualmente o conteúdo é gerado no momento em que a requisição é feita
 * - Você deve transformar essa página em uma página estática
 * - A página deve ser gerada no momento da build
 * - A página deve ser atualizada a cada 1 minuto
 */

import { useEffect, useState } from "react";

import styles from "@/styles/lista.module.css";
import { ICity } from "@/types/city.d";

interface ListaProps {
    initialList: Array<ICity>;
}

export default function Lista({ initialList }: ListaProps) {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h2>Lista de cidades</h2>

                <div data-list-container>
                    {initialList?.map((city) => (
                        <div data-list-item key={city.id}>
                            {city.name}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export async function getStaticProps() {
    try {
        const response = await fetch("http://localhost:8080/api/cities/10");
        const data = await response.json();
        console.log("passei aqui");
        if (!response.ok) throw new Error("Erro ao obter os dados");

        return {
            props: {
                initialList: data,
            },
            revalidate: 60,
        };
    } catch (error) {
        console.error(error);
        return {
            props: {
                initialList: [],
            },
        };
    }
}
