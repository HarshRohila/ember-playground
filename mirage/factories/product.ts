import { Factory } from 'miragejs';
import { faker } from '@faker-js/faker';

export default Factory.extend({
  name() {
    return faker.name.firstName();
  },
  description() {
    return faker.commerce.productDescription();
  },
  price() {
    return {
      original: faker.datatype.number(),
      current: faker.datatype.number(),
    };
  },
  features() {
    return faker.datatype.array(7);
  },
  colors() {
    return [
      { color: faker.color.human(), image: faker.image.image() },
      { color: faker.color.human(), image: faker.image.image() },
    ];
  },
});
