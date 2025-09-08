import React, { createContext, useState, ReactNode } from "react";
import { getCepInfo } from "../services/viaCep";

interface CepData {
  cep?: string;
  logradouro?: string;
  bairro?: string;
  localidade?: string;
  uf?: string;
  erro?: boolean;
}

interface CepContextType {
  cepData: CepData | null;
  consultarCep: (cep: string) => Promise<void>;
  consultas: CepData[];
  mensagemErro: string | null;
}

export const CepContext = createContext<CepContextType>({} as CepContextType);

export function CepProvider({ children }: { children: ReactNode }) {
  const [cepData, setCepData] = useState<CepData | null>(null);
  const [consultas, setConsultas] = useState<CepData[]>([]);
  const [mensagemErro, setMensagemErro] = useState<string | null>(null);

  async function consultarCep(cep: string) {
    try {
      const data = await getCepInfo(cep);

      if (data.erro) {
        setMensagemErro("CEP inválido");
        setCepData(null);
        return;
      }

      setMensagemErro(null);
      setCepData(data);

      setConsultas((prev) => {
        const jaExiste = prev.some((c) => c.cep === data.cep);
        if (!jaExiste) return [...prev, data];
        return prev;
      });
    } catch (err) {
      setMensagemErro("Erro ao consultar serviço");
      setCepData(null);
    }
  }

  return (
    <CepContext.Provider value={{ cepData, consultarCep, consultas, mensagemErro }}>
      {children}
    </CepContext.Provider>
  );
}
