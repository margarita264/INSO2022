import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../assets/logo.JPG";

import {
  Document,
  Page,
  Text,
  View,
  Image,
  StyleSheet,
} from "@react-pdf/renderer";

const ComprobantePdf = ({ cliente, codigo, fecha, monto }) => {
  return (
    <Document>
      <Page size="A5">
        <>
          <View>
            <View style={styles.tableRow}>
              <View>
                <Text>______________________________</Text>
              </View>
              <View>
                <Image src={logo} style={styles.image} />
              </View>
            </View>
            <View style={styles.tableRow}>
              <View>
                <Text>COMPROBANTE POR PAGO REALIZADO</Text>
              </View>
              <View>{"               "}</View>
            </View>
            <View style={styles.tableRow}>
              <View>
                <Text>Fecha de pago: </Text>
              </View>
              <View>
                <Text style={styles.String}>{fecha} </Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View>
                <Text>Código de Pago: </Text>
              </View>
              <View>
                <Text style={styles.String}>{codigo}</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View>
                <Text>Cliente: </Text>
              </View>
              <View>
                <Text style={styles.String}>{cliente}</Text>
              </View>
            </View>
            <View style={styles.table}>
              {" "}
              {/* TableHeader */}{" "}
              <View style={styles.tableRow}>
                {" "}
                <View style={styles.tableCol}>
                  {" "}
                  <Text style={styles.tableCell}>Descripción</Text>{" "}
                </View>{" "}
                <View style={styles.tableCol}>
                  {" "}
                  <Text style={styles.tableCell}>Monto</Text>{" "}
                </View>{" "}
              </View>{" "}
              {/* TableContent */}{" "}
              <View style={styles.tableRow}>
                {" "}
                <View style={styles.tableCol}>
                  {" "}
                  <Text style={styles.tableCell}>
                    Por inscripción a Actividad
                  </Text>{" "}
                </View>{" "}
                <View style={styles.tableCol}>
                  {" "}
                  <Text style={styles.tableCell}>{monto}</Text>{" "}
                </View>{" "}
              </View>{" "}
            </View>{" "}
            <View style={styles.tableRow}>
              <View>
                <Text>Total Abonado: </Text>
              </View>
              <View>
                <Text style={styles.String}>{monto}</Text>
              </View>
            </View>
          </View>
        </>
      </Page>
    </Document>
  );
};
export default ComprobantePdf;

const styles = StyleSheet.create({
  image: {
    width: 90,
    height: 40,
  },
  table: {
    display: "table",
    width: "auto",
    borderStyle: "solid",
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  tableRow: { margin: "auto", flexDirection: "row" },
  tableCol: {
    width: "50%",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  String: {
    color: "#05595b",
  },
  tableCell: { margin: "auto", marginTop: 5, fontSize: 10 },
});
