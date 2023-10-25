import React, {Component } from 'react';
import Pdf from '../../data/VarsharaniBharateResume.pdf';

class Resume extends Component {
  render() {
    return(
      <div>
        {/* <a href='https://docs.google.com/document/d/e/2PACX-1vSqs73NJx84sF7hiM-GiaxPX9NkVsFutnfRMvAdLrixMeUfNwLEAEmP-cBu2OGnPaEoF4jyrxM5vXxv/pub'>Resume</a> */}

        <a href = {Pdf} target = "_blank">Download Pdf</a>
      </div>
    )
  }
}

export default Resume;