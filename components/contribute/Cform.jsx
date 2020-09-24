import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import handleForm from "../firebase/handleForm";

// TODO: Check imageUrl metadata , too small , invalid image

const resetOnChange = (e, field, form) => {
  console.log("Will reset form");
  form.handleReset(e);
  field.onChange(e);
};

const checkFormType = (needType, validationObject) => ({
  is: (type) => type == needType,
  then: validationObject,
});

const CustomTextComponent = ({ id, name, ...props }) => (
  <div className="block m-4">
    <label htmlFor={id} className="mr-4">
      {id}
    </label>
    <Field
      as="input"
      type="text"
      id={id}
      name={name}
      className="text-black rounded-lg font-mono"
      placeholder={id}
      {...props}
    />
    <ErrorMessage
      className="text-red-500 font-mono"
      name={name}
      component="div"
    />
  </div>
);

const gameSchema = Yup.object().shape({
  type: Yup.string().required("Required 🤷‍♀️"),
  terms: Yup.bool().oneOf([true], "We know you trust us, Make things right 😇"),
  game: Yup.string()
    .min(2, "Too Short ??🩳")
    .max(40, "You sure its just the name ??😵")
    .required("Required 🤷‍♀️"),
  character: Yup.string().when(
    "type",
    checkFormType(
      "quote",
      Yup.string()
        .min(2, "Too Short ??🩳")
        .max(40, "You sure its just the name ??😵")
        .required("Required 🤷‍♀️")
    )
  ),
  quote: Yup.string().when(
    "type",
    checkFormType(
      "quote",
      Yup.string()
        .min(3, "Too Short ??🩳")
        .max(60, "You sure its just the quote ??😵")
        .required("Required 🤷‍♀️")
    )
  ),
  // imageUrl: Yup.string().when(["type", "file"], {
  //   is: (type, file) => {
  //     // console.log(file);
  //     return type == "image" && file == null;
  //   },
  //   then: Yup.string().url("We need URL directions 🚦").required("Required 🤷‍♀️"),
  // }),

  file: Yup.mixed().when(["type"], {
    is: (type) => {
      return type == "image";
    },
    then: Yup.mixed()
      .required("Required 🤷‍♀️")
      .test(
        "fileSize",
        "File too large! 🤪",
        (value) => value && value.size <= 3000000
      )
      .test(
        "filetype",
        "Is it a image? 😵",
        (value) =>
          value && (value.type == "image/png" || value.type == "image/jpeg")
      ),
  }),
});

// const dummySubmit = (values, { setSubmitting, resetForm }) => {
//   setTimeout(() => {
//     alert(JSON.stringify(values, null, 2));
//     resetForm();
//     setSubmitting(false);
//   }, 1000);
// };

export default function Cform() {
  return (
    <Formik
      initialValues={{
        type: "",
        game: "",
        character: "",
        quote: "",
        imageUrl: "",
        file: undefined,
        terms: false,
      }}
      validateOnChange={true}
      validationSchema={gameSchema}
      onSubmit={handleForm}
    >
      {({ values, isSubmitting, isValid, setFieldValue }) => (
        <Form className="text-white text-xl">
          <div className="block m-4">
            <label htmlFor="type" className="mr-4">
              Type
            </label>
            <Field name="type">
              {({ field, form }) => {
                return (
                  <select
                    type="text"
                    id="type"
                    className="text-black rounded-lg font-mono"
                    {...field}
                    onChange={(e) => resetOnChange(e, field, form)}
                  >
                    <option value="">Select Type</option>
                    <option value="quote">Quote</option>
                    <option value="image">Image</option>
                  </select>
                );
              }}
            </Field>
            {/* <Field as="select" type="text" id="type" name="type">
              <option>Select Type</option>
              <option value="quote">Quote</option>
              <option value="image">Image</option>
            </Field> */}
            <ErrorMessage
              name="type"
              className="text-red-500 font-mono"
              component="div"
            />
          </div>

          {values.type != "" && <CustomTextComponent id="Game" name="game" />}

          {values.type == "quote" && (
            <>
              <CustomTextComponent id="Character" name="character" />
              <CustomTextComponent id="Quote/Dialouge" name="quote" />
            </>
          )}

          {values.type == "image" && (
            <>
              {/* <CustomTextComponent id="Image-Url" name="imageUrl" /> */}
              <div className="block m-4">
                <input
                  id="file"
                  name="file"
                  type="file"
                  onChange={(event) => {
                    setFieldValue("file", event.currentTarget.files[0]);
                  }}
                />

                {/* FIXME Disable button if file null */}
                {/* <button
                type="button"
                className="py-1 px-2 m-3 bg-material-red rounded-lg"
                onClick={() => {
                  console.log({
                    fileName: values.file.name,
                    type: values.file.type,
                    size: `${values.file.size} bytes`,
                  });
                }}
                disabled={values.file == undefined}
                >
                File Log
              </button> */}
                <ErrorMessage
                  name="file"
                  className="text-red-500 font-mono"
                  component="div"
                />
              </div>
            </>
          )}

          <div className="block m-4">
            <Field
              as="input"
              type="checkbox"
              id="terms"
              name="terms"
              className="mr-3"
            />
            <label htmlFor="terms" className="font-mono">
              I agree to terms and conditions
            </label>
            <ErrorMessage
              name="terms"
              className="text-red-500 font-mono"
              component="div"
            />
          </div>

          <button
            type="Submit"
            className="py-1 px-2 m-3 bg-material-red rounded-lg"
            disabled={isSubmitting}
          >
            {isValid ? (
              <span className="h-full">✔</span>
            ) : (
              <span className="h-full">❌</span>
            )}
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
}
