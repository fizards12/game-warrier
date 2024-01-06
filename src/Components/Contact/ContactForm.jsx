import {
  Alert,
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Grid,
  Input,
  Stack,
  Textarea,
} from "@mui/joy";
import * as formik from "formik";
import { useState } from "react";
import * as yup from "yup";
const ContactForm = ({ mode }) => {
  const { Formik } = formik;
  const schema = yup.object().shape({
    name: yup
      .string()
      .min(5, "Enter your full name")
      .required("This field is required"),
    email: yup
      .string()
      .email("Enter Valid Email")
      .required("This field is required"),
    subject: yup.string().notRequired(),
    message: yup
      .string("Enter your Message")
      .required("This field is required"),
  });
  const [isSubmitted, setSubmit] = useState(false);
  const submitHandler = () => {
    setSubmit(true);
    setTimeout(() => {
      setSubmit((state) => !state);
    }, 2000);
  };
  return (
    <Formik
      validationSchema={schema}
      onSubmit={submitHandler}
      initialValues={{
        name: "",
        email: "",
        subject: "",
        message: "",
      }}
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => {
        return (
          <form noValidate onSubmit={handleSubmit}>
            <Stack direction={"column"} rowGap={1}>
              <Grid container columns={12} spacing={1}>
                <FormControl size="md" component={Grid} xs={12} sm={6}>
                  <FormLabel
                    sx={(theme) => ({
                      color:
                        mode === "light"
                          ? theme.palette.primary[600]
                          : theme.palette.warning[400],
                    })}
                  >
                    Name
                  </FormLabel>
                  <Input
                    variant="outlined"
                    type={"text"}
                    name="name"
                    placeholder="Full Name"
                    value={values.name}
                    onChange={handleChange}
                    error={touched.name && Boolean(errors.name)}
                  />
                  {touched.name && errors.name && (
                    <FormHelperText>{errors.name}</FormHelperText>
                  )}
                </FormControl>
                <FormControl size="md" component={Grid} xs={12} sm={6}>
                  <FormLabel
                    sx={(theme) => ({
                      color:
                        mode === "light"
                          ? theme.palette.primary[600]
                          : theme.palette.warning[400],
                    })}
                  >
                    Email
                  </FormLabel>
                  <Input
                    variant="outlined"
                    type={"email"}
                    name="email"
                    placeholder="email@example.com"
                    value={values.email}
                    onChange={handleChange}
                    error={touched.email && Boolean(errors.email)}
                  />
                  {touched.email && errors.email && (
                    <FormHelperText>{errors.email}</FormHelperText>
                  )}
                </FormControl>
              </Grid>
              <FormControl size="md">
                <FormLabel
                  sx={(theme) => ({
                    color:
                      mode === "light"
                        ? theme.palette.primary[600]
                        : theme.palette.warning[400],
                  })}
                >
                  Subject
                </FormLabel>
                <Input
                  variant="outlined"
                  type={"text"}
                  name="subject"
                  placeholder="Subject"
                  value={values.subject}
                  onChange={handleChange}
                  error={touched.subject && Boolean(errors.subject)}
                />
                {touched.subject && errors.subject && (
                  <FormHelperText>{errors.subject}</FormHelperText>
                )}
              </FormControl>
              <FormControl size="md">
                <FormLabel
                  sx={(theme) => ({
                    color:
                      mode === "light"
                        ? theme.palette.primary[600]
                        : theme.palette.warning[400],
                  })}
                >
                  Message
                </FormLabel>
                <Textarea
                  onChange={handleChange}
                  value={values.message}
                  variant="outlined"
                  minRows={10}
                  name="message"
                  placeholder="Message"
                  error={touched.message && Boolean(errors.message)}
                />
                {touched.message && errors.message && (
                  <FormHelperText>{errors.message}</FormHelperText>
                )}
              </FormControl>
              <Box mt={2} display={"flex"} justifyContent={"center"}>
                <Button color={mode==="light"?"primary":"warning"} size="md" type={"submit"}>
                  Send
                </Button>
              </Box>
            </Stack>
            {isSubmitted && (
              <Alert
                variant="solid"
                invertedColors
                color="success"
                sx={{
                  mt: 5,
                  position: "fixed",
                  top: "100px",
                  right:"50%",
                  transform:"translateX(50%)",
                  width: {xs:"80%",sm:"300px"},
                  maxWidth:"100%",
                  justifyContent:"center"
                }}
              >
                Mail has been sent to me.
              </Alert>
            )}
          </form>
        );
      }}
    </Formik>
  );
};

export default ContactForm;
