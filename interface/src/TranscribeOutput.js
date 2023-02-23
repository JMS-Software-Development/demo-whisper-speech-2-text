import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";


const useStyles = () => ({
  root: {
    maxWidth: '800px',
    display: 'flex'
  },
  outputText: {
    marginLeft: '8px',
    color: '#ef395a',
  }
});

const TranscribeOutput = ({ classes, transcribedText, interimTranscribedText }) => {
  if (transcribedText.length === 0 && interimTranscribedText.length === 0) {
    return <Typography variant="body1">...</Typography>;
  }
  // return text per line in column
  return (
    <div className={'column'}>
    {transcribedText.map((line, index) => {
      return (
        <div key={index}>
          <Typography variant="body1">{index+1}. {line}</Typography>
        </div>
      )
    })}
    </div>

  );
}

export default withStyles(useStyles)(TranscribeOutput);
