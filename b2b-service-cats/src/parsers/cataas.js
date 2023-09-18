module.exports.list = res =>
  res?.map(({ _id: id, owner, createdAt: _createdAt, updatedAt: _updatedAt, ...oth }) => ({
    id,
    owner: owner !== 'null' ? owner : 'unknown',
    ...oth,
  })) ?? [];
