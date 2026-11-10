const komikService = require('../services/komikService');

class KomikController {
  async getAll(req, res) {
    try {
      const data = await komikService.getAllKomik();
      res.status(200).json({ status: 'success', data });
    } catch (err) {
      res.status(500).json({ status: 'error', message: err.message });
    }
  }

  async getById(req, res) {
    try {
      const data = await komikService.getKomikById(req.params.id);
      if (!data) return res.status(404).json({ status: 'fail', message: 'Komik tidak ditemukan' });
      res.status(200).json({ status: 'success', data });
    } catch (err) {
      res.status(500).json({ status: 'error', message: err.message });
    }
  }

  async create(req, res) {
    try {
      const data = await komikService.createKomik(req.body);
      res.status(201).json({ status: 'success', data });
    } catch (err) {
      res.status(400).json({ status: 'fail', message: err.message });
    }
  }

  async update(req, res) {
    try {
      const data = await komikService.updateKomik(req.params.id, req.body);
      res.status(200).json({ status: 'success', data });
    } catch (err) {
      res.status(404).json({ status: 'fail', message: err.message });
    }
  }

  async delete(req, res) {
    try {
      await komikService.deleteKomik(req.params.id);
      res.status(200).json({ status: 'success', message: 'Komik berhasil dihapus' });
    } catch (err) {
      res.status(404).json({ status: 'fail', message: err.message });
    }
  }
}

module.exports = new KomikController();