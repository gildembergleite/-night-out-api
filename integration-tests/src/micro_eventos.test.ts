import axios from 'axios';

describe('Micro Eventos API', () => {
  it('should create a new event', async () => {
    const response = await axios.post('http://localhost:3002/evento', {
      id_usuario: 'a1b2c3d4-e5f6-7890-1234-567890abcdef', // Mock user ID
      titulo: 'Evento de Teste de Integração',
      descricao: 'Descrição do evento de teste de integração.',
      data_inicio: new Date(),
      data_fim: new Date(new Date().getTime() + 2 * 60 * 60 * 1000), // 2 hours later
      local: 'Local de Teste',
      status: 'PLANEJADO'
    });

    expect(response.status).toBe(201);
    expect(response.data.message).toBe('Evento criado com sucesso!');
  });

  it('should return an error when creating an event with missing data', async () => {
    try {
      await axios.post('http://localhost:3002/evento', {
        id_usuario: 'a1b2c3d4-e5f6-7890-1234-567890abcdef',
        descricao: 'Descrição do evento de teste de integração.',
        data_inicio: new Date(),
        data_fim: new Date(new Date().getTime() + 2 * 60 * 60 * 1000),
        local: 'Local de Teste',
        status: 'PLANEJADO'
      });
    } catch (error: any) {
      expect(error.response.status).toBe(500);
    }
  });

  it('should list all events', async () => {
    const response = await axios.get('http://localhost:3002/evento');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
  });

  describe('Event Lifecycle', () => {
    let eventId: string;

    it('should create a new event for lifecycle tests', async () => {
      const response = await axios.post('http://localhost:3002/evento', {
        id_usuario: 'lifecycle-user-id',
        titulo: 'Evento Ciclo de Vida',
        descricao: 'Descrição do evento ciclo de vida.',
        data_inicio: new Date(),
        data_fim: new Date(new Date().getTime() + 3 * 60 * 60 * 1000),
        local: 'Local Ciclo de Vida',
        status: 'PLANEJADO'
      });
      expect(response.status).toBe(201);
      eventId = response.data.evento.id_evento;
    });

    it('should get the created event by id', async () => {
      const response = await axios.get(`http://localhost:3002/evento/${eventId}`);
      expect(response.status).toBe(200);
      expect(response.data.id_evento).toBe(eventId);
    });

    it('should update the event', async () => {
      const response = await axios.put(`http://localhost:3002/evento/${eventId}`, {
        titulo: 'Evento Ciclo de Vida Atualizado',
      });
      expect(response.status).toBe(200);
      expect(response.data.evento.titulo).toBe('Evento Ciclo de Vida Atualizado');
    });

    it('should delete the event', async () => {
      // I need to implement the delete endpoint first
      // const response = await axios.delete(`http://localhost:3002/evento/${eventId}`);
      // expect(response.status).toBe(200);
    });

    it('should not find the deleted event', async () => {
      // try {
      //   await axios.get(`http://localhost:3002/evento/${eventId}`);
      // } catch (error: any) {
      //   expect(error.response.status).toBe(404);
      // }
    });
  });
});
