export interface Exercicio {
    id: number;
    nome: string;
    descricao: string;
    nivelDificuldade: 'iniciante' | 'intermediario' | 'avancado';
    duracaoMinutos: number;
}

