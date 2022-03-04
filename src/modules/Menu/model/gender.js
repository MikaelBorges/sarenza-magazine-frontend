export default function gender(model = {}) {
  return {
    id: model.id,
    gender: model.attributes.Gender
  };
}
