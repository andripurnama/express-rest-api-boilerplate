class BaseRepository {
    constructor(model) {
      this.model = model;
    }
  
    async create(data) {
      return this.model.create(data);
    }
  
    async findAll(options = {}) {
      return this.model.findAll(options);
    }
  
    async findById(id) {
      return this.model.findByPk(id);
    }
  
    async update(id, data) {
      const record = await this.model.findByPk(id);
      if (record) {
        return record.update(data);
      }
      return null;
    }
  
    async delete(id) {
      const record = await this.model.findByPk(id);
      if (record) {
        return record.destroy();
      }
      return null;
    }
  }
  
  export default BaseRepository;
  