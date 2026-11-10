const komikRepository = require('../repositories/komikRepository');

class KomikService {
  async getAllKomik() {
    return await komikRepository.findAll();
  }

  async getKomikById(id) {
    return await komikRepository.findById(id);
  }

  async createKomik(data) {
    if (!data.title || !data.author) {
      throw new Error('Title dan Author wajib diisi');
    }
    return await komikRepository.create(data);
  }

  async updateKomik(id, data) {
    const updated = await komikRepository.update(id, data);
    if (!updated) {
      throw new Error('Komik tidak ditemukan');
    }
    return updated;
  }

  async deleteKomik(id) {
    const deleted = await komikRepository.delete(id);
    if (!deleted) {
      throw new Error('Komik tidak ditemukan');
    }
    return deleted;
  }
}

module.exports = new KomikService();