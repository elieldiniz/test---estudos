import {ApiService} from './ApiService ';

export default class ExerciciosManager {
    private readonly apiService: ApiService;

    constructor(apiService: ApiService) {
        this.apiService = apiService;
    }

    async listarExercicios(): Promise<void> {
        try {
            const exercicios = await this.apiService.obterExercicios();
            // Faça algo com os exercícios, por exemplo:
            console.log('Exemplo de uso:', exercicios);
        } catch (error) {
            // Trate o erro conforme necessário
            console.error('Erro no exemplo de uso:');
        }
    }
}