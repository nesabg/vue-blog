import { validationMixin } from "vuelidate";
import { required, minLength, maxLength, url } from "vuelidate/lib/validators";

const createEditValidationsMixin= {
  mixins: [validationMixin],
  validations: {
    title: {
      required,
      minLength: minLength(3),
      maxLength: maxLength(64)
    },
    content: {
      required,
      minLength: minLength(64),
      maxLength: maxLength(2000)
    },
    imgUrl: {
      required,
      url
    },
    category: {
      required
    }
  }
};

export default createEditValidationsMixin;
