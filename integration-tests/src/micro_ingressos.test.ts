import axios from 'axios';

describe('Micro Ingressos API', () => {
  it('should create a new ticket batch', async () => {
    const response = await axios.post('http://localhost:3001/loteIngresso', {
      id_evento: 'e1f2g3h4-i5j6-7890-1234-567890abcdef',
      nome: 'Lote de Teste de Integração',
      preco: '100.00',
      quantidade: '50',
      data_inicio: new Date(),
      data_fim: new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000),
    });

    expect(response.status).toBe(201);
    expect(response.data.message).toBe('Lote de ingressos criado com sucesso!');
  });

  it('should return an error when creating a ticket batch with missing data', async () => {
    try {
      await axios.post('http://localhost:3001/loteIngresso', {
        id_evento: 'e1f2g3h4-i5j6-7890-1234-567890abcdef',
        preco: '100.00',
        quantidade: '50',
        data_inicio: new Date(),
        data_fim: new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000),
      });
    } catch (error: any) {
      expect(error.response.status).toBe(500);
    }
  });

  it('should list all ticket batches', async () => {
    const response = await axios.get('http://localhost:3001/loteIngresso');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
  });

  describe('Ticket Batch Lifecycle', () => {
    let batchId: string;

    it('should create a new ticket batch for lifecycle tests', async () => {
      const response = await axios.post('http://localhost:3001/loteIngresso', {
        id_evento: 'lifecycle-event-id',
        nome: 'Lote Ciclo de Vida',
        preco: '150.00',
        quantidade: '100',
        data_inicio: new Date(),
        data_fim: new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000),
      });
      expect(response.status).toBe(201);
      batchId = response.data.lote.id_lote;
    });

    it('should get the created ticket batch by id', async () => {
      const response = await axios.get(`http://localhost:3001/loteIngresso/${batchId}`);
      expect(response.status).toBe(200);
      expect(response.data.id_lote).toBe(batchId);
    });

    it('should update the ticket batch', async () => {
      const response = await axios.put(`http://localhost:3001/loteIngresso/${batchId}`, {
        nome: 'Lote Ciclo de Vida Atualizado',
      });
      expect(response.status).toBe(200);
      expect(response.data.lote.nome).toBe('Lote Ciclo de Vida Atualizado');
    });

    it('should delete the ticket batch', async () => {
      const response = await axios.delete(`http://localhost:3001/loteIngresso/${batchId}`);
      expect(response.status).toBe(200);
    });

    it('should not find the deleted ticket batch', async () => {
      try {
        await axios.get(`http://localhost:3001/loteIngresso/${batchId}`);
      } catch (error: any) {
        expect(error.response.status).toBe(404);
      }
    });
  });
});
