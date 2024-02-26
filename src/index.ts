// main.ts
import {ApiService}  from './useCase/ApiService '
import CategoriaExercicio from './useCase/CategoriaExercicio'

async function main() {
    // URL da API de exercícios
    const urlApiExercicios = 'http://localhost:3000/exercicios';

    // Criação das instâncias
    const apiService = new ApiService(urlApiExercicios);
    const exerciciosManager = new CategoriaExercicio(apiService);

    try {
        // Obter exercícios da API
        await exerciciosManager.listarExercicios();
    } catch (error) {
        console.error('Erro ao obter exercícios:', );
    }
}

// Chamar a função main
main();
