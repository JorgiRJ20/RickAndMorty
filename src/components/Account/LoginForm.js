import {
  View,
  Text,
  TextInput,
  StatusBar,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { userDBDetails, userDB } from "../../utils/userDB";
import useAuth from "../../hooks/useAuth";
import { Form, Formik } from "formik/dist";

const initialValues = () => ({
  username: "",
  password: "",
});

const validationSchema = Yup.object().shape({
  username: Yup.string().required('El campo "Usuario" es obligatorio'),
  password: Yup.string().required('El campo "Contraseña" es obligatorio'),
});

export default function LoginForm({ onLogin }) {
  const { login, message } = useAuth();

  const [error, setError] = React.useState("");

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#040F0F"></StatusBar>
      <Text style={styles.errorsAccess}>{error}</Text>
      <View style={styles.cardLogin}>
        <View style={styles.containerButton}>
          <Image
            source={require("../../assets/loginImg.jpg")}
            style={styles.image}
          ></Image>
        </View>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            login(values.username, values.password);
            setError(message);
            resetForm();
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
            <>
              <Text style={styles.title}>Iniciar Sesión</Text>
              <Text style={styles.label}>Usuario</Text>
              <TextInput
                style={styles.input}
                placeholder="Nombre de usuario"
                value={values.username}
                onChangeText={handleChange("username")}
                onBlur={handleBlur("username")}
              />

              <Text style={styles.errors}>{errors.username}</Text>
              <Text style={styles.label}>Contraseña</Text>
              <TextInput
                style={styles.input}
                placeholder="Contraseña"
                value={values.password}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
              />
              <Text style={styles.errors}>{errors.password}</Text>
              <View style={styles.containerButton}>
                <TouchableOpacity
                  title="Iniciar Sesión"
                  style={styles.buttonSession}
                  onPress={handleSubmit}
                >
                  <Text style={styles.textButton}>Iniciar sesión</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  title="Iniciar Sesión"
                  style={styles.buttonRegister}
                >
                  <Text style={styles.textButton}>Crear cuenta</Text>
                </TouchableOpacity>
              </View>
            </>
          )}
        </Formik>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "#040F0F",
  },
  label: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 10,
    color: "#faf3dd",
    marginTop: 15,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    width: 320,
    paddingHorizontal: 10,
    backgroundColor: "#e8f8c1",
  },
  cardLogin: {
    borderRadius: 10,
    padding: 10,
    shadowColor: "black",
    borderColor: "#248232",
    borderWidth: 1,
    backgroundColor: "#011936",
  },
  buttonSession: {
    backgroundColor: "#248232",
    borderRadius: 10,
    padding: 10,
    shadowColor: "black",
    borderColor: "#248232",
    borderWidth: 1,
    alignItems: "center",
    marginBottom: 10,
    marginTop: 30,
    width: 250,
  },
  buttonRegister: {
    backgroundColor: "#38a3a5",
    borderRadius: 10,
    padding: 10,
    shadowColor: "black",
    borderColor: "#248232",
    borderWidth: 1,
    alignItems: "center",
    width: 250,
    marginTop: 10,
    marginBottom: 20,
  },
  textButton: {
    color: "#faf3dd",
    fontSize: 15,
  },
  containerButton: {
    alignItems: "center",
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
    margin: -90,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#faf3dd",
    textAlign: "center",
  },
  errors: {
    color: "#bc4749",
    textAlign: "center",
    fontSize: 14,
    position: "relative",
  },
  errorsAccess: {
    color: "#bc4749",
    textAlign: "center",
    fontSize: 14,

    position: "relative",
    paddingBottom: 90,
    paddingTop: -10,
  },
});
