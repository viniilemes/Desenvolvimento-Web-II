import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import db from './controllers/db'; // Importa a conexão com o banco de dados [cite: 29]

dotenv.config(); // Carrega as variáveis de ambiente
const app = express();
const PORT = process.env.PORT || 3001; // A porta 3001 é a definida nos requisitos [cite: 17, 28]

// Middlewares
app.use(cors()); // Habilita o CORS para permitir requisições do frontend [cite: 27]
app.use(express.json()); // Permite que o Express parseie requisições com corpo JSON

// Rota para retornar o concurso mais recente da Mega-Sena [cite: 7]
app.get('/', async (req: Request, res: Response) => {
  try {
    const result = await db.query('SELECT * FROM db_mega_sena ORDER BY concurso DESC LIMIT 1');
    if (result.rows.length > 0) {
      res.json(result.rows[0]);
    } else {
      res.status(404).json({ message: 'Nenhum concurso encontrado.' });
    }
  } catch (error) {
    console.error('Erro ao buscar o concurso mais recente:', error);
    res.status(500).json({ message: 'Erro interno do servidor.' });
  }
});

// Rota para retornar os dados de um concurso específico, identificado pelo número [cite: 9]
app.get('/:numeroConcurso', async (req: Request, res: Response) => {
  const numeroConcurso = parseInt(req.params.numeroConcurso);

  if (isNaN(numeroConcurso)) {
    return res.status(400).json({ message: 'O número do concurso deve ser um valor numérico.' });
  }

  try {
    const result = await db.query('SELECT * FROM megasena WHERE concurso = $1', [numeroConcurso]);
    if (result.rows.length > 0) {
      res.json(result.rows[0]);
    } else {
      // A rota deverá retornar uma mensagem se o concurso não existir. [cite: 11]
      res.status(404).json({ message: `Não existem dados do concurso ${numeroConcurso}` });
    }
  } catch (error) {
    console.error(`Erro ao buscar o concurso ${numeroConcurso}:`, error);
    res.status(500).json({ message: 'Erro interno do servidor.' });
  }
});

// Tratamento de rotas não encontradas (404)
app.use((req: Request, res: Response) => {
  res.status(404).json({ message: 'Rota não encontrada.' });
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor da Mega-Sena rodando na porta ${PORT}`);
});