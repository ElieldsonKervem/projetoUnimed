'use client'
import { useState, FormEvent, ChangeEvent } from "react";
import style from './cep.module.css';
import { IoMdClose } from "react-icons/io";

// Interface para as propriedades do componente
interface CepConsultProps {
    className?: string;
    close: () => void;
}

// Interface para o tipo do endereço
interface Endereco {
    logradouro: string;
    bairro: string;
    localidade: string;
    uf: string;
    erro?: string;
}

export default function CepConsult({ className, close }: CepConsultProps) {
    const [cep, setCep] = useState<string>(''); // Define tipo de 'cep' como string
    const [endereco, setEndereco] = useState<Endereco | null>(null); // Define tipo de 'endereco' como 'Endereco' ou 'null'

    // Tipando o evento da submissão
    async function handleSubmit(event: FormEvent<HTMLFormElement>): Promise<void> {
        event.preventDefault();
        try {
            const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
            const data: Endereco = await response.json(); // Tipando a resposta
            setEndereco(data);
        } catch (error) {
            console.error("Erro na consulta:", error);
            setEndereco({ logradouro: '', bairro: '', localidade: '', uf: '', erro: "CEP não encontrado" });
        }
    }

    // Tipando o evento de mudança no input
    function formatarCep(event: ChangeEvent<HTMLInputElement>): void {
        const valor = event.target.value.replace(/\D/g, '');
        setCep(valor);
    }

    return (
        <div className={`${style.cepContainer} ${className}`}>
            <form onSubmit={handleSubmit}>
                <input
                    id="cepInput"
                    type="text"
                    value={cep}
                    onChange={formatarCep}
                    placeholder="00000-000"
                    maxLength={9}
                />
                <IoMdClose className={style.closeBtn} id="closeBtn" onClick={close} />
            </form>

            {endereco && (
                <div className={style.resultado}>
                    {endereco.erro ? (
                        <p className={style.erro}>{endereco.erro}</p>
                    ) : (
                        <>
                            <p>Logradouro: {endereco.logradouro}</p>
                            <p>Bairro: {endereco.bairro}</p>
                            <p>Cidade: {endereco.localidade}</p>
                            <p>UF: {endereco.uf}</p>
                        </>
                    )}
                </div>
            )}
        </div>
    );
};