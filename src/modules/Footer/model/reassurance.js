export default function reassurance(model = {}) {
  return {
    id: model.id,
    text: model.text || '',
    icon: model.Icon || ''
  };
}
