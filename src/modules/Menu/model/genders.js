import gender from './gender';

export default function genders(model = []) {
  return model.map((item) => {
    return gender(item);
  });
}
