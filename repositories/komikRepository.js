const { Komik } = require('../models');

class KomikRepository {
  async findAll() {
    return await Komik.findAll();
  }

  async findById(id) {
    return await Komik.findByPk(id);
  }

  async create(data) {
    return await Komik.create(data);
  }

  async update(id, data) {
    const komik = await Komik.findByPk(id);
    if (!komik) return null;
    return await komik.update(data);
  }

  async delete(id) {
    const komik = await Komik.findByPk(id);
    if (!komik) return null;
    await komik.destroy();
    return true;
  }
}

module.exports = new KomikRepository();