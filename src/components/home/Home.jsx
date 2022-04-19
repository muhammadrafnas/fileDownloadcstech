import React, { useState } from 'react';
import { Box, Container, TextField } from '@mui/material';
import * as XLSX from "xlsx"
import DownloadIcon from '@mui/icons-material/Download';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { saveAs } from "file-saver";
import Button from '@mui/material/Button';


export default function Home() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };


  const [item, setItem] = useState([])
  const [exFile, setExfile] = useState(null)
  const importExcel = () => {
    readExcel(exFile)
  }
  const readExcel = (file) => {
    const promise = new Promise((resolve, reject) => {
      const filReader = new FileReader()
      filReader.readAsArrayBuffer(file)
      filReader.onload = (e) => {
        const bufferArray = e.target.result;

        const wb = XLSX.read(bufferArray, { type: "buffer" })
        const wsname = wb.SheetNames[0]
        const ws = wb.Sheets[wsname]
        const data = XLSX.utils.sheet_to_json(ws)
        resolve(data)
      }
      filReader.onerror = (error) => {
        reject(error)
      }
    })
    promise.then((d) => {
      console.log(d);
      setItem(d)
    })
  }

  const download = (file, filename) => {
    let extension = file.split('.').pop()
    saveAs(
      file,
      `${filename}.${extension}`
    );
  }
  const zipDownload = () => {
    const zip = require('jszip')();
    let count1 = 0;
    let count2 = 0;
    let count3 = 0;
    let count4 = 0;
    let count5 = 0;
    let count6 = 0;
    let count7 = 0;
    var JSZipUtils = require("jszip-utils");
    item.map(function (doc) {
      var zipFilename = "Documnets.zip";
      if (doc['Resume/Cv']) {
        let url = doc['Resume/Cv']
        let extension = url.split('.').pop()
        // loading a file and add it in a zip file
        JSZipUtils.getBinaryContent(url, function (err, data) {
          var filename = `Resume${count1}.${extension}`;
          if (err) {
            throw err;
            // or handle the error
          }
          let folder0 = zip.folder("Resume")
          folder0.file(filename, data);
          count1++;
          if (count1 == item.length || count2 == item.length || count3 == item.length || count4 == item.length || count5 == item.length || count6 == item.length || count7 == item.length) {
            zip.generateAsync({ type: 'blob' }).then(function (content) {
              console.log(content);
              saveAs(content, zipFilename);
            });
          }
        });
      }
      if (doc['Pan Card']) {
        let url = doc['Pan Card']
        let extension = url.split('.').pop()
        // loading a file and add it in a zip file
        JSZipUtils.getBinaryContent(url, function (err, data) {
          var filename = `Pancard${count2}.${extension}`;
          if (err) {
            throw err;
            // or handle the error
          }
          let folder = zip.folder("Pancard")
          folder.file(filename, data);
          count2++;
        });
      }
      if (doc['Aadhar Card front copy']) {
        let url = doc['Aadhar Card front copy']
        let extension = url.split('.').pop()
        // loading a file and add it in a zip file
        JSZipUtils.getBinaryContent(url, function (err, data) {
          var filename = `Aadhar Card front copy${count3}.${extension}`;
          if (err) {
            throw err;
            // or handle the error
          }
          let folder = zip.folder("Aadhar Card front copy")
          folder.file(filename, data);
          count3++;
        });
      }
      if (doc['Aadhar Card back copy']) {
        let url = doc['Aadhar Card back copy']
        let extension = url.split('.').pop()
        // loading a file and add it in a zip file
        JSZipUtils.getBinaryContent(url, function (err, data) {
          var filename = `Aadhar Card back copy${count4}.${extension}`;
          if (err) {
            throw err;
            // or handle the error
          }
          let folder = zip.folder("Aadhar Card back copy")
          folder.file(filename, data);
          count4++;
        });
      }
      if (doc['Scanned Agreement Copy With Signature']) {
        let url = doc['Scanned Agreement Copy With Signature']
        let extension = url.split('.').pop()
        // loading a file and add it in a zip file
        JSZipUtils.getBinaryContent(url, function (err, data) {
          var filename = `Scanned Agreement Copy With Signature${count5}.${extension}`;
          if (err) {
            throw err;
            // or handle the error
          }
          let folder = zip.folder("Scanned Agreement Copy With Signature")
          folder.file(filename, data);
          count5++;
        });
      }
      if (doc['Passport Size Color Photo (Latest) For Id Card']) {
        let url = doc['Passport Size Color Photo (Latest) For Id Card']
        let extension = url.split('.').pop()
        // loading a file and add it in a zip file
        JSZipUtils.getBinaryContent(url, function (err, data) {
          var filename = `Passport Size Color Photo (Latest) For Id Card${count6}.${extension}`;
          if (err) {
            throw err;
            // or handle the error
          }
          let folder = zip.folder("Passport Size Color Photo (Latest) For Id Card")
          folder.file(filename, data);
          count6++;
        });
      }
      if (doc['Bank Account Details (Cancel Cheque)']) {
        let url = doc['Bank Account Details (Cancel Cheque)']
        let extension = url.split('.').pop()
        // loading a file and add it in a zip file
        JSZipUtils.getBinaryContent(url, function (err, data) {
          var filename = `Bank Account Details (Cancel Cheque)${count7}.${extension}`;
          if (err) {
            throw err;
            // or handle the error
          }
          let folder = zip.folder("Bank Account Details (Cancel Cheque)")
          folder.file(filename, data);
          count7++;
        });
      }
    });

  }

  return (
    <>
      <Container maxWidth="xs">

        <Box
          sx={{
            m: 5,
            boxShadow: 5,
            display: "flex",
            alignItems: "center",
            flexDirection: "column"
          }}
          noValidate
          autoComplete="off"
        >
          <Box sx={{ m: 4 }}>
            <TextField
              id="filled-select-currency"
              type="file"
              sx={{ mt: 3, mb: 1 }}
              helperText="Please upload excel sheet"
              variant="filled"
              onChange={(e) => {
                setExfile(e.target.files[0])
              }}
            />
            <Button variant="contained"
              fullWidth
              sx={{ mt: 3, mb: 1 }}
              style={{ backgroundColor: "#206CE2" }}
              onClick={(e) => { importExcel() }} >Import</Button>
            {item.length != 0 ? <Button variant="contained"
              fullWidth
              sx={{ mt: 3, mb: 2 }}
              style={{ backgroundColor: "#206CE2" }}
              onClick={(e) => { zipDownload() }} >Zip Download</Button> : ""}
          </Box>
        </Box>
      </Container>
      {item.length !== 0 ?
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 510 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell>Resume/Cv</TableCell>
                  <TableCell>Pan Card</TableCell>
                  <TableCell>Aadhar Card front copy</TableCell>
                  <TableCell>Aadhar Card back copy</TableCell>
                  <TableCell>Scanned Agreement Copy With Signature</TableCell>
                  <TableCell>Passport Size Color Photo (Latest) For Id Card</TableCell>
                  <TableCell>Bank Account Details (Cancel Cheque)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {item.map((data) => (
                  <TableRow hover role="checkbox" tabIndex={-1}>
                    <TableCell>{data['Resume/Cv']} { data['Resume/Cv'] ? <DownloadIcon style={{color:"green"}} onClick={() => { download(data['Resume/Cv'], "Resume/Cv") }} /> : ""  }  </TableCell>
                    <TableCell>{data['Pan Card']} {data['Pan Card'] ? <DownloadIcon style={{color:"green"}}   onClick={() => { download(data['Pan Card'], "Pan Card") }} /> : "" }   </TableCell>
                    <TableCell>{data['Aadhar Card front copy']} {data['Aadhar Card front copy'] ? <DownloadIcon style={{color:"green"}}   onClick={() => { download(data['Aadhar Card front copy'], "Aadhar Card front copy") }} /> : " " }  </TableCell>
                    <TableCell>{data['Aadhar Card back copy']} {data['Aadhar Card back copy'] ? <DownloadIcon style={{color:"green"}}   onClick={() => { download(data['Aadhar Card back copy'], "Aadhar Card back copy") }} /> : " " } </TableCell>
                    <TableCell>{data['Scanned Agreement Copy With Signature']} {data['Scanned Agreement Copy With Signature'] ? <DownloadIcon  style={{color:"green"}}  onClick={() => { download(data['Scanned Agreement Copy With Signature'], "Scanned Agreement Copy With Signature") }} /> : ""  } </TableCell>
                    <TableCell>
                      {data['Passport Size Color Photo (Latest) For Id Card']}
                      {data['Passport Size Color Photo (Latest) For Id Card'] ? <DownloadIcon  style={{color:"green"}}  onClick={() => { download(data['Passport Size Color Photo (Latest) For Id Card'], "Passport Size Color Photo (Latest) For Id Card") }} /> : ""  }
                      
                    </TableCell>
                    <TableCell>
                      {data['Bank Account Details (Cancel Cheque)']}
                      { data['Bank Account Details (Cancel Cheque)'] ? <DownloadIcon   style={{color:"green"}} onClick={() => { download(data['Bank Account Details (Cancel Cheque)'], "Bank Account Details (Cancel Cheque)") }} /> : "" }
                      
                    </TableCell>


                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[2, 25, 100]}
            component="div"
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
        : ""}

    </>
  );
}






