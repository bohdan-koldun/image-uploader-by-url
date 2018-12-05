class Repository {
  getAll(callback) {
    const { model } = this;
    const query = model.find();
    query.exec(callback);
  }

  getById(id, callback) {
    const { model } = this;
    const query = model.findOne({
      _id: id
    });
    query.exec(callback);
  }

  saveNew(newObj, callback) {
    const { model } = this;
    model.create(newObj, callback);
  }

  deleteById(id, callback) {
    const { model } = this;
    const query = model.remove({
      _id: id
    });
    query.exec(callback);
  }

  updateById(id, updateObj, callback) {
    const { model } = this;
    const query = model.findByIdAndUpdate({
      _id: id
    }, updateObj);
    query.exec(callback);
  }

  findInIds(IDs, callback) {
    const { model } = this;
    const query = model.find(
      { _id: { $in: IDs } }
    );
    query.exec(callback);
  }
}

module.exports = Repository;
