module.exports.get = res =>
  res?.map(({ _id: id, owner, createdAt, updatedAt, ...oth }) => ({
    id,
    owner: owner !== 'null' ? owner : 'unknown',
    metadata: { createdAt, updatedAt },
    ...oth,
  })) ?? [];

module.exports.list = res => res?.filter(it => it !== '') ?? [];
