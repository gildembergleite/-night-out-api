import axios from 'axios';

describe('Micro Usuarios API', () => {
  it('should create a new administrator', async () => {
    const response = await axios.post('http://localhost:3000/adm/cadastrar', {
      cargo: "Gerente de Sistema",
      permissao_nivel: "ADMIN_MASTER",
      usuario: [
        {
          nome: "Integration Test User",
          email: `integration-${Date.now()}@test.com`,
          senha_hash: "password123",
          telefone: "1234567890"
        }
      ]
    });

    expect(response.status).toBe(201);
    expect(response.data.message).toBe('Administrador cadastrado com sucesso!');
  });

  it('should return an error when creating an administrator with missing data', async () => {
    try {
      await axios.post('http://localhost:3000/adm/cadastrar', {
        permissao_nivel: "ADMIN_MASTER",
        usuario: [
          {
            nome: "Integration Test User",
            email: `integration-${Date.now()}@test.com`,
            senha_hash: "password123",
            telefone: "1234567890"
          }
        ]
      });
    } catch (error: any) {
      expect(error.response.status).toBe(500);
    }
  });

  it('should list all administrators', async () => {
    const response = await axios.get('http://localhost:3000/adm');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
  });

  describe('Administrator Lifecycle', () => {
    let adminId: string;

    it('should create a new administrator for lifecycle tests', async () => {
      const response = await axios.post('http://localhost:3000/adm/cadastrar', {
        cargo: "Cargo Teste Ciclo de Vida",
        permissao_nivel: "ADMIN_LIFECYCLE",
        usuario: [
          {
            nome: "Teste Ciclo de Vida",
            email: `lifecycle-${Date.now()}@test.com`,
            senha_hash: "password123",
            telefone: "1234567890"
          }
        ]
      });
      expect(response.status).toBe(201);
      adminId = response.data.administrador.id_usuario;
    });

    it('should get the created administrator by id', async () => {
      const response = await axios.get(`http://localhost:3000/adm/${adminId}`);
      expect(response.status).toBe(200);
      expect(response.data.id_usuario).toBe(adminId);
    });

    it('should update the administrator', async () => {
      const response = await axios.put(`http://localhost:3000/adm/${adminId}`, {
        cargo: "Cargo Atualizado",
      });
      expect(response.status).toBe(200);
      expect(response.data.administrador.cargo).toBe("Cargo Atualizado");
    });

    it('should delete the administrator', async () => {
      const response = await axios.delete(`http://localhost:3000/adm/${adminId}`);
      expect(response.status).toBe(200);
    });

    it('should not find the deleted administrator', async () => {
      try {
        await axios.get(`http://localhost:3000/adm/${adminId}`);
      } catch (error: any) {
        expect(error.response.status).toBe(404);
      }
    });
  });
});
