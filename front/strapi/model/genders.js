import { gender } from './gender';

export function genders(model = []) {
    return model.map((item) => {
        return gender(item);
    });
}
