'use client'
import { useState } from "react";
import style from './cep.module.css';
import { IoMdClose } from "react-icons/io";


//lembrar de implementar interface para os doados

export default function CepConsult({ close }) {
    const [cep, setCep] = useState('');
    const [endereco, setEndereco] = useState(null);

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
            const data = await response.json();
            setEndereco(data);
        } catch (error) {
            console.error("Erro na consulta:", error);
            setEndereco({ erro: "CEP não encontrado" });
        }
    }

    function formatarCep(event) {
        const valor = event.target.value.replace(/\D/g, '');
        setCep(valor);
    }

    return (
        <div className={style.cepContainer}>
            <form onSubmit={handleSubmit}>

                <input
                    id="cepInput"
                    type="text"
                    value={cep}
                    onChange={formatarCep}
                    placeholder="00000-000"
                    maxLength="9"
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
    )
}

//https://viacep.com.br/

//fetch(`https://viacep.com.br/ws/${cep}/json/`)