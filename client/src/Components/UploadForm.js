import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import axios from 'axios'

function UploadForm() {
  const [file, setFile] = useState(null)
  const [filename, setFileName] = useState('choose file')
  const [uploadedFile, setUploadedFile] = useState({ filename: null, filepath: null })

  const onChange = e => {
    setFile(e.target.files[0])
    setFileName(e.target.files[0].name)
  }

  const onSubmit = async e => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('file', file)

    try {
      const res = await axios.post(`/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
      })
      const { fileName, filePath } = res.data
      setUploadedFile({ filename: fileName, filepath: filePath })
    }
    
    catch(error) {
      if(error) {
        console.log('there was a problem with the server')
      } else {
        console.log(error)
      }
    }
  }

  return (
    <>
      <Container>
        <Row>
          <Col sm={3}> 
            <form onSubmit={onSubmit}>
              <input type="file" onChange={onChange} id="fileUpload" name="file" variant="outline-primary" accept=".csv"/>
              <input type="submit" value="Upload!" />
            </form>
          </Col>
        </Row>
      </Container>
      { uploadedFile ? filename : 'no files uploaded..' }
    </>
  )
}

export default UploadForm;