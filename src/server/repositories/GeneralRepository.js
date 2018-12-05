function Repository() { }


function getAll(callback) {
  const { model } = this;
  const query = model.find();
  query.exec(callback);
}

function getById(id, callback) {
  const { model } = this;
  const query = model.findOne({
    _id: id
  });
  query.exec(callback);
}

function saveNew(newObj, callback) {
  const { model } = this;
  model.create(newObj, callback);
}

function deleteById(id, callback) {
  const { model } = this;
  const query = model.remove({
    _id: id
  });
  query.exec(callback);
}

function updateById(id, updateObj, callback) {
  const { model } = this;
  const query = model.findByIdAndUpdate({
    _id: id
  }, updateObj);
  query.exec(callback);
}

function findInIds(IDs, callback) {
  const { model } = this;
  const query = model.find(
    { _id: { $in: IDs } }
  );
  query.exec(callback);
}

Repository.prototype.getAll = getAll;
Repository.prototype.getById = getById;
Repository.prototype.saveNew = saveNew;
Repository.prototype.deleteById = deleteById;
Repository.prototype.updateById = updateById;
Repository.prototype.findInIds = findInIds;

module.exports = Repository;
