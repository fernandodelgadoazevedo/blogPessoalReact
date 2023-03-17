import Tema from "./Tema";

interface Postagem {
  data: string | number | Date;
  id: number;
  titulo: string;
  texto: string;
  tema?: Tema | null;
}

export default Postagem;
